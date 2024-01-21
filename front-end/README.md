This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies from package.json using 'npm install'

For this nextJS app to run you'll need at least nodeJS version 18.17.0. If you aren't sure what version you have, you can check by running 'node -v'. if you have an older version, please visit the nodeJS website to download the correct version. 

Then, run the development server (IMPORTANT : run the server on port 3001):

```bash
npm run dev -- -p 3001
# or
yarn dev...
# or
pnpm dev...
# or
bun dev...
```
It is essential that the front-end nextJS app be launched on port 3001 as port 3000 is the back-end. 


Open [http://localhost:3001/login](http://localhost:3001/login) with your browser to see the result. 

The `app/page.js`. will show up as default, please visit 'http://localhost:3001/login'

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
