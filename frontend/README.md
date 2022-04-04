This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Tech Stack
- [SWR](https://github.com/vercel/swr)
- [NextJS](https://github.com/vercel/next.js/)
- [Typescript](https://www.typescriptlang.org/)
- [Material-UI](https://github.com/mui-org/material-ui)
- [Emotion](https://github.com/emotion-js/emotion)
- [Axios](https://github.com/axios/axios)
- 

# Dev Notes

Shutdown Docker

`docker-compose down`

Reset Database

`docker volume rm studiomanager_db`
and
`docker volume create studiomanager_db`

Restart Database Server

`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d postgres graphql-engine`

Confirm it's running

`docker container ls`

To see Hasura running do

`yarn hasura-console`

Treeview ideas
- https://github.com/azizali/react-super-treeview