This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Third party scripts

    - when using a script inside the component we need to wrap them with back ticks, doing this will read it as/ or will be passed as children just like how we use Props with react. this will be also parsed or bundled by next js automatically

    - beforeInteractive will inject or load the scripts before running any client codes
        - use this strategy when it is critically needed or need to render early on

    - afterInteractive, this is the opposite of the beforeInteractive which will be rendered after the page is loaded or the page became interactive. this function is the default value

    -lazyOnLoad scripts will be loaded after all the data is fetched, useful background, low priority scripts that doesnt need to be rendered early on

    - when using third party scripts and the scripts are bloated we can use another component and defined in the root folder
    - can be named any
