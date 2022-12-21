

# NestJS API Scaffolding (prodify-s)

This is a supurior package for production level Nestjs application generator, which is can be used as a starting point for any Backend application with NestJS.

## Installation 🏭

```bash
$ npm install -g prodify-s
```

## Why another nestJS generator ❓

1.  This generates the API scaffolding with the **error handler** ⚠️, which is always a good idea.

2.  Only installs the bare bones 💀 and "mostly" required dependencies whenever you try to start a new nestjs application.

## Quick Start 🏃‍♂️

The quickest way to get started with nestjs is to utilize the executable `prodify-s` (OR `@prodify-s`) to generate an application as shown below:

Create (and start) the app in current folder:

```bash
$ exp .
$ npm run start:dev
```

OR, create (and start) the app (in `myNestApp` folder):

```bash
$ sj-plz myNestApp
$ cd myNestApp
$ npm run start:dev
```

This will basically create this structure in your folder

```bash
.
├── dev.env
└── local.env
└── common
├── node_modules
├── nest-cli.json
├── package.json
└── tsconfig.json
└── tsconfig.build.js
└── .prettierrc
└── .eslintrc.js
└── .gitignore
└── test
    └── app.e2e-spec.ts
    └── jest-e2e.json
└── src
    └── common
        └── database
            └── database.config.ts
            └── database.module.ts
            └── database.providers.ts
            └── dbConfig.interface.ts
    └── constants
        └── index.ts
    └── users
        └── dto
        └── entities
        └── users.controller.spec.ts
        └── users.controller.ts
        └── users.service.ts
        └── users.module.ts
        └── users.service.spec.ts
    └── util
        └── db-queries.ts
        └── response.handler.ts
    └── app.controller.ts
    └── app.module.ts
    └── app.service.ts
    └── main.ts
```

This is how easy it is to get going.

<!-- ## A picture is worth a thousand words. -->

<!-- <p align='center'>
<img src='https://raw.githubusercontent.com/sj3777/master/SCREENCAST.svg' width='600' alt='express-draft'>
</p> -->

## What dependencies it installs ?

- **rxjs** - nest reactive programming using observable 
- **dotenv** - for env variables
- **mysql2** - to create mysql db connection
- **nest** (dev) - contains all neccessary import files of nest

## Command Line Options

Actually NONE is required 😊 as of now, incase I continue this project OR I'll get requests then certainly this is not the end.

## Author ✍️

[**Sudhakar Jha 🇮🇳**](https://github.com/Sj3777/)


## License 🎫

[MIT](LICENSE)

## Contribute 🤝

You can fork this repo and send me a PR.