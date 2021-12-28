Как настроить плагин

  1. Подключаем нужные библиотеки из репозиториев <b>"jsrepo.greetgo"</b>
  2. Подготавливаем нужные компоненты плагина
  3. Добавляем компоненты, модули в <b>webpack.config.js</b> и <b>docker/lib/plugins-config.json</b>
     1. Структура <b>"plugins-config.json"</b>
     2. <b>"pluginProjectName"</b> название проекта плагина, uniqueName из webpack.config.js
     3. <b>"path"</b> путь до plugin.js
     4. <b>"plugins"</b> массив плагинов находящихся в этом проекте
     5. <b>"plugins.key"</b> уникальный айди плагина (что угодно)
     6. <b>"plugins.type"</b> тип плагина
     7. <b>"plugins.exposedModule"</b> название модуля которое ранее указали в <b>webpack.config.js</b>
     8. <b>"plugins.ngModuleName"</b> имя компонента или модуля в плагине
     9. <b>"plugins.route"</b> используется при type === 'PAGE', роутинг плагина
  5. Общие зависимости нужно прописать в <b>webpack.config.js</b>
  6. Запускаем скрипт <b>"plugin-config-copy-to-debug.bash"</b> после чего запускаем <b>mybpm-web</b>
  7. Проверяем подключился ли плагин
  8. Коммит, пуш
