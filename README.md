# развертывание

## установка клона репозитария

в рабочей области сервера:

`sudo git clone https://github.com/daks-dev/.su363.svelte`

будет создана дирректория `gkcck.site` которая может быть переименована по необходимости/желанию.\
все дальнейшие действия производятся **внутри этой дирректории** (!).

## копирование файлов

- `.npmrc.orig` в `.npmrc`\
  можно пренебречь;

- `.sh.orig` в `.sh`\
  можно пренебречь, командный файл для упрощения работы с сайтом.\
  после копирования этот файл нужно сделать исполняемым;

## сборка сайта

- `pnpm install`\
  <small>"1" в `.sh`</small>

- `pnpm check`\
  <small>"4" в `.sh`</small>\
  признаком успешной проверки будет строка <span style=color:green>svelte-check found 0 errors and 0 warnings in 0 files</span>

- `pnpm build`\
  <small>"5" в `.sh`</small>\
  признаком успешной сборки будет строка\
  <span style=color:green>✔ done</span>

  в результате сборки будет создана поддиректория `build` которая станет
  **корневой папкой** сайта.

## конфигурация сервера

- необходимо убрать слеш в конце адреса страницы. не критично - сайт выполнит
  это програмно, но лучше опустить на нижний уровень обработки запроса

  ```apach
  RewriteCond %{HTTP_HOST} (.*)
  RewriteCond %{REQUEST_URI} /$ [NC]
  RewriteRule ^(.*)(/)$ $1 [L,R=301]
  ```

  nginx:

  ```nginx
  rewrite ^(.+)\/$
          $1
          permanent;
  ```

- необходимо перенаправить все запросы к несуществующим в статике адресам
  и все ошибки на страницу `/200.html`:

  ```apach
  RewriteRule ^200\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /200.html [L]
  ```

  nginx:

  ```nginx
  error_page 403
             /200.html;
  error_page 404
             /200.html;
  error_page 500 502 503 504
             /200.html;
  location ~ ^\/(.+)$ {
           try_files $uri
           $uri.html
           = 404;
  }
  ```

\
шаблоны файлов `.htaccess` и `nginx.inc` присутствуют в репозитарии.
необходимо проконтролировать работу перенаправлений в конкретной конфигурации.

## обновление сборки

- `git:pull`\
  <small>"+" в `.sh`</small>

- `pnpm:install`\
  <small>"1" в `.sh`</small>

- `svelte:check`\
  <small>"4" в `.sh`</small>

- `vite:build`\
  <small>"5" в `.sh`</small>\
  поддиректория `build` будет пересобрана, перезагрузка сервера не требуется.

## проверка клона

- `git:status`\
  <small>"7" в `.sh`</small>

- `git:restore .`\
   <small>"8" в `.sh`</small>\
  (при необходимости восстановить соответствие с репозитарием)
