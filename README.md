# Modern SvelteKit monorepo starter

This is my starter for a sveltekit monorepo with 2022 tech.

## Concepts

This project demonstrates the following concepts for Sveltekit:

* [pnpm](https://pnpm.io/) monorepo to breakup a large application into sub projects (yarn & npm are configured to be rejected)

* Super fast build system based on [TurboRepo](https://turbo.build/)

* String typing using [Typescript](https://www.typescriptlang.org/)

* Visual testing using [Histoire](https://histoire.dev/)

* Unit Testing usin [Playwright](https://playwright.dev/)

* Centralized management of [eslint](https://eslint.org/), [prettier](https://prettier.io/) configurations

* Final bundling using [Docker](https://www.docker.com/)

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
$ pnpm --filter ui story:dev
```

### Run unit tests

```shell
$ pnpm test
```

