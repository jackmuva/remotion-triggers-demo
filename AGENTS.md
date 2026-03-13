# AGENTS.md - Coding Agent Instructions

This document provides guidelines for AI coding agents working in this Remotion video project.

## Project Overview

This is a Remotion video project for creating programmatic videos using React and TypeScript.

- **Framework**: Remotion 4.0.435
- **Runtime/Package Manager**: Bun (use `bun` commands, not `npm` or `yarn`)
- **Language**: TypeScript 5.9.3 with strict mode
- **Styling**: Tailwind CSS v4
- **Video Specs**: 1920x1080 resolution, 30 FPS

## Build/Lint/Test Commands

### Development

```bash
bun run dev          # Start Remotion Studio (interactive preview)
```

### Linting & Type Checking

```bash
bun run lint         # Run ESLint + TypeScript compiler (eslint src && tsc)
bunx eslint src      # Run ESLint only
bunx tsc             # Run TypeScript type checking only
bunx eslint src/path/to/file.tsx  # Lint a single file
```

### Building

```bash
bun run build        # Bundle the video for production
```

### Rendering Videos

```bash
bunx remotion render src/index.ts <composition-id> out/video.mp4
# Example:
bunx remotion render src/index.ts actionkit-triggers out/video.mp4
```

### Upgrading Remotion

```bash
bun run upgrade      # Upgrade all Remotion packages
```

### Testing

**Note**: This project does not currently have a test framework set up. If tests are added:

- Prefer Vitest for React/TypeScript projects
- Place test files alongside source files as `*.test.tsx` or in `__tests__/` directories

## Code Style Guidelines

### Formatting (Prettier)

- **Indentation**: 2 spaces (no tabs)
- **Bracket Spacing**: Enabled (`{ foo }` not `{foo}`)
- **Semicolons**: Use semicolons
- Run `bunx prettier --write <file>` to format

### TypeScript

- **Strict mode** is enabled - no implicit any, strict null checks
- **noUnusedLocals** enforced - remove unused variables
- Use explicit types for function parameters and return values when not obvious
- Prefer `const` over `let` when values don't change

### File Naming Conventions

- **Files**: `kebab-case.tsx` (e.g., `intro-scene.tsx`, `full-scene.tsx`)
- **Components**: `PascalCase` (e.g., `IntroScene`, `FullScene`)
- **Scene directories**: Numbered prefix with kebab-case (e.g., `1-intro-scene/`, `2-main-scene/`)

### Imports

```typescript
// External packages first
import { Sequence, AbsoluteFill, useCurrentFrame } from "remotion";

// Internal imports second
import { IntroScene } from "./scenes/1-intro-scene/intro-scene";

// CSS imports in Root.tsx only
import "./index.css";
```

### Component Patterns

```typescript
// Use arrow function syntax with named exports
export const MyScene = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // Animation values using interpolate
  const opacity = interpolate(
    frame,
    [0, 20, durationInFrames - 20, durationInFrames],
    [0, 1, 1, 0],
  );

  return (
    <AbsoluteFill className="bg-white">
      {/* Content */}
    </AbsoluteFill>
  );
};
```

### Styling

- Use **Tailwind CSS v4** classes for styling
- Use `className` for Tailwind utilities
- Use inline `style` prop for dynamic values (e.g., `style={{ opacity }}`)
- Common layout: `AbsoluteFill` for full-frame positioning

### Remotion-Specific Patterns

**Entry Point** (`src/index.ts`):

```typescript
import { registerRoot } from "remotion";
import { RemotionRoot } from "./Root";
registerRoot(RemotionRoot);
```

**Compositions** (`src/Root.tsx`):

```typescript
<Composition
  id="composition-id"
  durationInFrames={150}  // Total frames (150 frames = 5 seconds at 30fps)
  fps={30}
  width={1920}
  height={1080}
  component={FullScene}
/>
```

**Sequences** (timeline organization):

```typescript
<Sequence from={0} durationInFrames={100}>
  <IntroScene />
</Sequence>
<Sequence from={100} durationInFrames={200}>
  <NextScene />
</Sequence>
```

**Animations**:

```typescript
const opacity = interpolate(
  frame,
  [inputStart, inputEnd],
  [outputStart, outputEnd],
);
```

**Static Assets**:

```typescript
import { Img, staticFile } from "remotion";
<Img src={staticFile('image.svg')} />
```

## Project Structure

```
src/
├── index.ts           # Entry point - registers RemotionRoot
├── index.css          # Global CSS - Tailwind import
├── Root.tsx           # Defines Composition(s)
├── full-scene.tsx     # Main scene orchestrator with Sequences
└── scenes/
    └── 1-intro-scene/
        ├── intro-scene.tsx  # Scene component
        └── layers/          # Layer components for complex scenes

public/                # Static assets (images, fonts, etc.)
remotion.config.ts     # Remotion CLI configuration
```

## ESLint Configuration

Uses `@remotion/eslint-config-flat` which includes React and Remotion-specific rules.
The config is minimal - see `eslint.config.mjs`.

## Common Gotchas

1. **Frame-based timing**: Remember that `durationInFrames` at 30fps means `frames / 30 = seconds`
2. **Static files**: Place in `public/` directory and reference with `staticFile('filename.ext')`
3. **CSS**: Only import CSS in `Root.tsx`, not in individual scene files
4. **Tailwind v4**: Uses the new `@import "tailwindcss"` syntax, not `@tailwind` directives
5. **No SSR**: Remotion components render client-side only

## Adding a New Scene

1. Create directory: `src/scenes/<n>-scene-name/`
2. Create component: `src/scenes/<n>-scene-name/scene-name.tsx`
3. Export with named export: `export const SceneName = () => { ... }`
4. Add to `full-scene.tsx` with a `<Sequence>` wrapper
5. Run `bun run lint` to check for errors
