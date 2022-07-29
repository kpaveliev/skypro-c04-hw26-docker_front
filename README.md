# "Kinopoisk" front stand

Configured to send requests to api-address: kpaveliev-skypro.cf:5000
DockerHub image: kpaveliev/skypro-kinopoisk_front

## To change default api-address:

Change baseURL in src/api/api.js

## To update image:

    docker build -t <адрес репо/имя образа> .
    docker push <адрес репо/имя образа>