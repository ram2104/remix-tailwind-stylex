# Welcome to Remix with Tailwind & StyleX!

- [Remix Docs](https://remix.run/docs)
- [Remix Vite Docs](https://remix.run/docs/en/main/future/vite)
- [Tailwind Docs](https://tailwindcss.com)
- [StyleX](https://stylexjs.com)
- [CSS Layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)

## Installtion

From your terminal:

```sh
yarn install
```

## Development

From your terminal:

```sh
yarn dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
