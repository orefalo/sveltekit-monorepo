# Modern SvelteKit monorepo starter

This is my starter for a sveltekit monorepo with 2022 tech.

## Concepts

This project demonstrates the following concepts for Sveltekit:

-   [pnpm](https://pnpm.io/) monorepo to breakup a large application into sub projects (yarn & npm are configured to be rejected)

-   Super fast build system based on [TurboRepo](https://turbo.build/)

-   String typing using [Typescript](https://www.typescriptlang.org/)

-   Visual testing using [Histoire](https://histoire.dev/)

-   [TODO] Unit Testing usin [Playwright](https://playwright.dev/)

-   Centralized management of SvelteKit specific [eslint](https://eslint.org/), [prettier](https://prettier.io/) configurations

-   Automatic changelog and versioning using [Changesets](https://github.com/changesets/changesets)

-   [TODO] Final bundling using [Docker](https://www.docker.com/)

## Demo

![image](https://user-images.githubusercontent.com/6764957/187062740-f908ebd6-66d2-43c0-a84c-0ea5b330e153.png)

## Setup

```shell
# to install all dependencies and configure workspaces
$ pnpm i
```

### Dev start

To build all apps and packages, run the following command:

```shell
$ cd my-turborepo
$ pnpm build
$ pnpm dev
```

### Run histoire (storybook better clone)

```shell
$ pnpm --filter comp1 story:dev
```

### Run unit tests

```shell
$ pnpm test
```

## Remarks

-   yarn & npm will break, you MUST use **pnpm** - the best package manager
-   There are two workspaces defined in **pnpm-workspace.yaml**

**tooling** for common utils and configs

**packages** for the application sub-projects.

-   When you creating a new sub-project, you would typically copy/paste comp1
-   Each project's package.json name must match the folder name (don't forget to rerun `pnpm i`)
-   Pay close attention to the scripts at each package.json level and turbo.json
-   Also check the .\* files, which are the fondation for reuse and proper configuration
-   I could not figure how to generalize the tsconfig.json file
-   I am **not** done with the final packaging and playwright requires some tuning
-   this repo was forked from https://github.com/sw-yx/sveltekit-monorepo, thank you
-   todo: add commitlint, husky, emojies
