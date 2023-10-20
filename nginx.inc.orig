index index.html;

error_page 403
           /200.html;
error_page 404
           /200.html;
error_page 500 502 503 504
           /200.html;

rewrite ^(.+)\/$
         $1
         permanent;

location ~ ^\/(.+)$ {
    try_files $uri
              $uri.html
              = 404;
}

location ~ /(assets|favicon)/ {
    gzip_static on;
    brotli_static on;
    access_log off;
    add_header "Cache-Control" public;
    add_header Vary "Accept-Encoding";
}
