# Webpack Static Pages Template

Optimizing static website with webpack 5 and ejs structure!

## Template feature

Run development server in localhost with Hot reload.

Build code for production:

- Bundle code (multiple pages with ejs).
- Minify HTML + CSS(LESS), Minify + Obfuscate Javascript.
- Rename CSS + JS file by hash content to Cache Busting.
- Support JQuery.
- Support parsing JSON files.

## Install

NPM: `npm install`

Yarn: `yarn install`

## Run development server

NPM: `npm start`

Yarn: `yarn start`

## Build production

NPM: `npm run build`

Yarn: `yarn build`

## IMPORTANT

In order to load fonts and images with the new webpack 5 syntax, publicPath has been added, don't remove it as it adds a dot and assets files can be loaded.

```
publicPath: ".",
```
