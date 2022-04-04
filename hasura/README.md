# Hasura

> Hasura is a GraphQL engine. It is used as the wrapper around the DB for GraphQL to interface with Postgres
> It provides some basic authentication functionality and a lot of handy graphql tools for creating queries

## Hasura Cli Installation

[Hasura CLI Install Docs](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli)

- TLDR: `npm install -g hasura-cli`

## Development

- If you're working on setting up initial migrations for the db you should be working with the hasura cli and have
  the docker-compose file changed to not be using the console
  - `HASURA_GRAPHQL_ENABLE_CONSOLE: "false"`
- Start the `postgres`,`graphql-engine` services using
  - `docker-compose up -d`
- Navigate to the hasura folder within the project
  - `cd hasura`
- Using the cli start the hasura console and
  - `hasura console`
- Migrations will now be added to the `hasura/metadata` and `hasura/migrations` folders which are mapped to the correct
  directories on `docker-compose up`. This happens because of the volumes we have mounted and the image we use

```yaml
image: hasura/graphql-engine:v2.1.1.cli-migrations-v3
volumes:
  - ./hasura/migrations:/hasura-migrations
  - ./hasura/metadata:/hasura-metadata
```

- Develop away on the database using the hasura console to manage any tables/columns/rows/relationships.
- It will automatically create the migrations for you as you build.
- They can then all be squashed down to one file using the hasura cli
  - `hasura migrate squash --name "<name>" --from <version>`
  - The versions are available by running the command `hasura migrate status`
  - The first one in the list being the very first version to squash from
