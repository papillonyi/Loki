FROM nginx
ADD ./build /usr/share/nginx/html
ADD default.conf /etc/nginx/conf.d/default.conf
