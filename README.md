# unsplashWithExpress
## service for uploading photos
Версия 1.0.0 https://github.com/AleksandrHexlet/unsplashWithExpress 

RUS

Вы можете просматривать фотографии загруженные на сервер другими пользователями, редактировать информацию о владельце, добавлять собственные фото, добавлять описание загружаемых фотографий. Пользователь может добавить фотографию, нажав на кнопку «+». Каждая фотография имеет следующие функции: лайк, удаление и увеличение. Технологии, используемые в проекте: JS, CSS, HTML, WebPack, GIT.

Настроены три ветки для разных задач:

Ветка Master в которой хранится итоговый код
Ветка Development в которой осуществляется разработка и тестирование
Ветка gh-pages которая необходима для публикации проекта на Github
Вы можете осуществить следующие виды сборки:

Командой npm run build В режиме build. Запуск кода осуществляется в браузере.
Командой npm run dev В режиме development.Запуск кода осуществляется в localhost 8080.
Командой npm run deploy В режиме gh-pages.Запуск кода осуществляется в браузере.
Общие настройки:

Для каждого вида сборки настроено окружение.

Код разделен на модули.

Модули импортирваны в файл index.js, который является входной точкой для webpack.

В packaje.json настроены две зависимости для разработки --- devDependencies и для работы на стороне клиента --- dependencies.

С помощью плагина webpack-md5-hash настроено хеширование и hot reload.

При работе в режиме разработки при внесении изменений в код благодаря флагу --watch в сборке "dev": "webpack-dev-server --mode development --open --watch" вкладка браузера с сайтом будет обновляться каждый раз после сохранения.

После сборки код хранится в папке dist. В финальной сборке перед каждой новой сборкой благодаря команде rimraf dist в сборке "build": "rimraf dist && webpack --mode production" папка dist очищается автоматически.

Для окружение dev настроен локальный серевер с помощью команды webpack-dev-server

Для работы с сервером в классе Api настроены fetch запросы.

ENG

You can view photos downloaded to the server by other users, edit information about the owner, add your own photos, add a description of the photos downloaded. You can add a photo by clicking the button. " Each photo has the following functions: click, delete, and zoom. Technologies used in the project: JS, CSS, HTML, WebPack, GIT.

Three branches are configured for different tasks:

Master branch in which the final code is stored
Development Branch for Development and Testing
Gh-pages branch that is required to publish the project to Github
You can perform the following types of assembly:

Npm run build command In build mode. The code is run in the browser.
Npm run dev In development mode. The code is run in localhost 8080.
Use npm run deploy In gh-pages.Run code in the browser.
General settings:

An environment is configured for each assembly view.

The code is divided into modules.

The modules are imported into the index.js file, which is the input point for webpack.

In packaje.json two dependences for development---devDependencies and for work on the party of the client---dependencies are adjusted.

Using the webpack-md5-hash plugin, hashing and hot reload are configured.

If you are working in development mode when you make code changes with the --watch flag in the "dev": "webpack-dev-server --mode development --open --watch" assembly, the browser tab with the site will be updated each time it is saved.

After assembly, the code is stored in the dist folder. In the final assembly before each new assembly, with the rimraf dist command in the build: rimraf dist & & webpack --mode production assembly, the dist folder is automatically cleared.

The dev environment is configured with a local server using the webpack-dev-server command

The Api class has set up fetch requests to work with the server.
