# Practice

An Angular 22.2.1 application migrated from Angular 5. The existing welcome page is preserved, with standalone, zoneless bootstrap and the current Angular application builder.

## Requirements

- Node.js 24.19.0 (pinned in `.nvmrc`). Angular also supports Node `^22.22.3`, `^24.15.0`, or `>=26.0.0`.
- npm 11 (the lockfile was generated with npm 11.9.0).

```sh
nvm use
npm ci
```

## Development

```sh
npm start
```

The development server uses port 4200 and reloads when source files change.

```sh
npm run build
```

Builds an optimized production application to `dist/practice/browser`. For a development build, use `npm run build -- --configuration development`.

## Validation

```sh
npm test
npm run lint
```

Unit tests use Angular's Vitest runner. `npm test` runs once; `npm run test:watch` watches for changes. ESLint checks TypeScript and Angular templates.

For the browser end-to-end test, install Chromium once:

```sh
npx playwright install chromium
npm run e2e
```

The test starts its own development server on port 4201, verifies the welcome heading, and checks for browser errors. Keep port 4201 free. To use an existing Chromium installation in the cloud environment:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run e2e
```

## Migration notes

- Angular framework, CLI, and build packages are pinned to 22.2.1, the npm `latest` stable release checked during migration.
- `angular.json` replaces `.angular-cli.json`; the application builder replaces the old webpack setup.
- `bootstrapApplication` replaces `AppModule` and uses Angular's default zoneless change detection.
- TypeScript 6.0 and RxJS 7 replace the original toolchain. Unused deprecated packages, including `@angular/http`, `core-js`, `zone.js`, and native `node-sass`, were removed.
- Vitest, ESLint, and Playwright replace Karma/Jasmine, TSLint, and Protractor. The original three unit-test assertions and browser welcome check are retained.
- Unused environment files and obsolete polyfill/test bootstrap files were removed. Add environment-specific configuration through the current Angular builder when needed.

See the [Angular documentation](https://angular.dev/overview) and [version compatibility table](https://angular.dev/reference/versions).
