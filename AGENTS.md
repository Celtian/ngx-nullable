# Repository Guidelines

## Project Overview

This is an Angular 22 workspace managed with Yarn 1. It contains:

- `projects/ngx-nullable`: the publishable `ngx-nullable` library.
- `projects/demo`: the demo application used to exercise and document the library.
- `scripts`: release and package synchronization utilities.

Use Node.js 24 for development and CI. Use `yarn`, not `npm`, to manage dependencies.

## Common Commands

- `yarn start`: run the demo application locally.
- `yarn build`: build the library in production mode.
- `yarn build:demo`: build the demo application in production mode.
- `yarn lint`: lint both workspace projects.
- `yarn test ngx-nullable`: run the library tests.
- `yarn test demo`: run the demo tests.
- `yarn check-circular-dependencies`: check the library entry points for circular dependencies.

Prefer targeted tests while developing. Before completing a source change, run the relevant tests and lint checks. For changes that affect packaging or the public API, also run `yarn build`.

## Source and API Conventions

- Library implementation belongs in `projects/ngx-nullable/src/lib`.
- Export every intended public symbol from `projects/ngx-nullable/src/public-api.ts`.
- Keep demo-only code in `projects/demo`; do not make the library depend on the demo.
- Treat `projects/demo/src/environments/version.ts` as generated output. It is created by `yarn postinstall`; do not edit or commit it.
- `scripts/sync-projects.ts` synchronizes package metadata and the README during releases. Do not run release or publish scripts unless explicitly requested.
- Update the root `README.md` when changing installation, configuration, behavior, or the public API.
- Preserve compatibility with the peer dependency range declared in `projects/ngx-nullable/package.json`.

## TypeScript and Angular

- Keep strict TypeScript checks passing.
- Prefer inferred types when they are obvious. Do not use `any`; use `unknown` and narrow it when a value is uncertain.
- Use standalone Angular APIs. In Angular 22, do not add `standalone: true` to new decorators because standalone is the default.
- Use `inject()` instead of constructor injection.
- Use signals for local state and `computed()` for derived state.
- Set `ChangeDetectionStrategy.OnPush` on components.
- Prefer `input()` and `output()` over the decorator APIs.
- Use native template control flow (`@if`, `@for`, and `@switch`) instead of structural directives.
- Use class and style bindings instead of `ngClass` and `ngStyle`.
- Put host bindings in the decorator's `host` object instead of using `@HostBinding` or `@HostListener`.
- Keep components and services focused on one responsibility.
- Keep templates accessible and satisfy WCAG AA and automated accessibility checks.

Follow the selectors enforced by ESLint:

- Library selectors use the `ngx` prefix.
- Demo selectors use the `app` prefix.

## Formatting and Tests

- Use 2-space indentation, single quotes, semicolons, and a 120-character print width.
- Let the repository Prettier and ESLint configurations decide formatting and rule details.
- Place unit tests beside their source files using the `*.spec.ts` suffix.
- Tests use Vitest APIs and Angular `TestBed`.
- Add or update tests for behavior changes, including null, undefined, empty-string, whitespace, zero, and configuration edge cases where relevant.
- Avoid tests that only mirror implementation details; assert observable behavior and public contracts.

## Commits and Scope

- Keep changes focused and do not modify generated output or unrelated files.
- Follow the Angular commit convention configured in `.commitlintrc.json`, using an allowed type such as `feat`, `fix`, `docs`, `refactor`, `style`, or `chore`.
- Do not change versions, generate changelog entries, publish packages, push commits, or create releases unless explicitly requested.
