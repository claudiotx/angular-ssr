# AngularSSR
<div align="center">
  <a href="https://www.coderecipes.org" title="CodeRecipes" target="_blank"><img src="https://pli.io/2wRo0q.png" align="center" width="100%"></a>
</div>

## 📦 Installation & Usage
* Clone this repo:
`git clone https://github.com/claudiotx/angular-ssr.git`

* Install dependencies
`npm install`

* Production Build and Express Server Dynamic SSR
`npm run start:ssr`

* Local Development
`npm run serve:client`
`npm run serve:server`

## 🚀 Extra Features
* Work in progress
Script: "aio:pre-rendering-ssr": "npm run build:prerender && npm run serve:prerender"

## 📖 Documentation
SSR main purpose is the SEO gain.
It's possible to control which app components are rendered through Pre-rendering and Dynamic SSR.

a) Dynamic SSR: (slower) Node server dynamically generates and serializes the application on any route returning that String to the browser.
UCs: Very dynamic and interactive pages 🃏, there is dynamic data to be loaded from a database, application structure is rendred from a JSON config file 

b) Static Pre-rendering (faster): create static files, (ie: index.html, about-us.html and serve those
UCs: Static pages with simple forms, only a portion of your site is dynamic (render with CSR), The (rather) static oages of the app application don’t update very often.


### Official Docs
https://github.com/angular/angular-cli/wiki/stories-universal-rendering
https://github.com/angular/universal-starter/blob/master/package.json

### Social
https://medium.com/@MarkPieszak/angular-universal-server-side-rendering-deep-dive-dc442a6be7b7

## ✅ Contributing
Part of this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.
This project was prepared by [Claudio Teixeira] (https://www.claudioteixeira.com) 
Please feel free to open issues on github
