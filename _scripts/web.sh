#!/bin/bash

cd web
docker build . -t squalex/home
docker push squalex/home
docker run -d -p 8081:80 -l traefik.frontend.rule=Host:server.home --name server.home squalex/home
