### Local Development

```
npm install
npm run docs:dev
```

### Build

```
npm ru docs:build
```

### Deployment

```
npm run docs:deploy

NODE_DEBUG=gh-pages npx gh-pages -d .vitepress/dist -b gh-pages
```
