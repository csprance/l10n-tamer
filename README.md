# L10N-Tamer
> Tame your Localizations

Browser based localization management software. Lion Tamer is free and open source and aims to be as simple as possible 
to deploy and host yourself. Allowing projects of any size to bring community driven or professional translation to your site or application. 

# Dev

#### Local Development

- Cd in to frontend folder
- run `yarn dev` to start the development server and hot reloading.
- go to http://localhost:3000/
- Default user to log in is:
  - Username: `admin`
  - tPassword: `password`

#### Other Helpful Commands to know about

- run `yarn build` to build the application as if it were ready for deployment. (This is run in production).
- run `yarn start` to start the built application as if it were ready for deployment. (This is run in production).
- run `yarn lint` to lint the application and check for errors.
- run `yarn type-check` to type check the application using Typescript.
- run `yarn prettier` to format all the code in the application to a specific standard. (This should probably run on pre-commit).


# Ideas
### Variable Substitution
This feature allows the user to substitute an already existing translation into a new translation 
by wrapping the variable in `{}` it will then use the substitute the variable with the translation.

### Database Structure
```
locale
  - id
  - locale
  - name
project
   - id
   - name
   - description
   - created_at
   - updated_at
translation
  - id
  - locale_id
  - project_id
  - key
  - value
  - created_at
  - updated_at
translation_comment
  - id
  - translation_id
  - comment
  - user_id
  - created_at
  - updated_at
user
  - id
  - username
  - password
  - email
  - created_at
  - updated_at
  - password
  
```

# Deployment

- start docker desktop
- cd into root folder where docker-compose.yml exists
- run `docker volume create studiomanager`
- run `docker volume create studiomanager_db`
- run `docker-compose up -d`
- go to http://localhost:3000 for the front end
- go to http://localhost:8080 for the hasura console (if started from hasura cli)
- go to http://localhost:5050 for pgadmin

# Overview

- Users login/signup

# GitEmojiLog

Only use the following Git Commit Messages. A simple and small footprint is critical here.

1. `📦 NEW: IMPERATIVE_MESSAGE_GOES_HERE`

   > Use when you add something entirely new.
   > E.g. `📦 NEW: Add Git ignore file`

1. `👌 IMPROVE: IMPERATIVE_MESSAGE_GOES_HERE`

   > Use when you improve/enhance piece of code like refactoring etc.
   > E.g. `👌 IMPROVE: Remote IP API Function`

1. `🐛 FIX: IMPERATIVE_MESSAGE_GOES_HERE`

   > Use when you fix a bug — need I say more?
   > E.g. `🐛 FIX: Case conversion`

1. `📖 DOC: IMPERATIVE_MESSAGE_GOES_HERE`

   > Use when you add documentation like `README.md`, or even inline docs.
   > E.g. `📖 DOC: API Interface Tutorial`

1. `🚀 RELEASE: IMPERATIVE_MESSAGE_GOES_HERE`

   > Use when you release a new version.
   > E.g. `🚀 RELEASE: Version 2.0.0`

1. `🤖 TEST: IMPERATIVE_MESSAGE_GOES_HERE`

   > Use when it's related to testing.
   > E.g. `🤖 TEST: Mock User Login/Logout`

1. `‼️ BREAKING: IMPERATIVE_MESSAGE_GOES_HERE`
   > Use when releasing a change that breaks previous versions.
   > E.g. `‼️ BREAKING: Change authentication protocol`

_— That's it for now. Nothing more nothing less._
