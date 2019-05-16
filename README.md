# Project guide based on webpack 4 (OLD VERSION OF DOCS)
## General information
Для работы со сборкой необходимо установить [Node.js](https://nodejs.org/en/download/) версии 6 и выше.

Чистую сборку требуется клонировать из репозитория [ИМЯ РЕПОЗИТОРИЯ]

Сборка создана на основе сборщика [webpack 4](https://webpack.js.org/). Зависимости управляются пакетным менеджером [npm](https://www.npmjs.com/).


## Install
1. Через консоль зайти в каталог клонированного проекта
1. Выполнить команду `npm install`, которая автоматически установит все зависимости указанные в `package.json`
1. После окончания установки зависимостей, в корне проекта появится каталог `node_modules`



## Start
1. `npm run dev` - запуск сборки в режиме разработки. После запуска сборки заработает локальный сервер по адресу http://localhost:9000
Если порт 9000 будет занят, то сервер запустится на следующем свободном порту.
1. `npm run build` - создаст build вёрстки в папке /dist.
1. `npm run production` - создаст итоговую версию вёрстки с минифицированными файлами и пр. в папке /dist


## Project structure
* `src` - source files
    * `blocks` - markup blocks
        * `components` - detached components
        * `elements` - simple elements such as buttons or links
        * `layouts` - header and footer to create a basic page structure
        * `pages` - pages
    * `common` - general styles and scripts of the project
        * `js` - js-scripts
        * `scss` - styles in .scss format
    * `resources` - any static resources that are copied to the root folder 'dist'
        * `fonts` - fonts
        * `json` - JSON files
        * `img` - *.png, *.jpg images, favicon
        * `icons` - icons in .svg format
* `dist` - final build of the project for production
    * `assets` - static data
        * `fonts` - fonts
        * `img` - images
        * `js` - scripts
        * `css` - styles
        * `json` - JSON files
    * `*.html` - all pages
    * `index.html` - start page


## Other
1. This build does not support the nesting of the html template inside another html template!
1. Partially taken from here [https://github.com/Harrix/static-site-webpack-habrahabr](https://github.com/Harrix/static-site-webpack-habrahabr)  ([Article on habr.com](https://habr.com/post/350886/))



Author: Alexander Shiryakov (alcryalcry@gmail.com)
