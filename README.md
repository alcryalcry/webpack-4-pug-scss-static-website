# Project guide of webpack-4-pug-scss-static-website

Frontend scaffolding tool using pug, SCSS, JSON-server based on Webpack 4


## Installation
1. [Node.js](https://nodejs.org/en/download/) 
1. `npm i`


## Start
1. `npm run dev` - dev server
1. `npm run build` - build to dist folder
1. `npm run production` - build minified version to dist folder


## Project structure
* `src` - source files
    * `components` - detached components
    * `layouts` - header and footer to create a basic page structure
    * `pages` - pages
    * `common` - general styles and scripts of the project
        * `js` - js scripts
        * `scss` - styles in .scss format
    * `static` - any static resources that are copied to the root folder 'dist'
        * `fonts` - fonts
        * `img` - *.png, *.jpg images, favicon
        * `svg` - icons in .svg format
* `dist` - final build of the project for production
    * `assets` - static data
        * `fonts` - fonts
        * `img` - images
        * `js` - scripts
        * `css` - styles
        * `json` - JSON files
    * `*.html` - all pages
    * `index.html` - start page


## Update packages versions
1. `npm i -g npm-check-updates`
1. `ncu -u`
1. `npm install`


**Author**: Alexander Shiryakov (*alcryalcry@gmail.com*)
