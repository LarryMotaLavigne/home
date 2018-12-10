#!/bin/bash

cd web
docker build . -t squalex/home
docker run -p 80:80 -e VIRTUAL_HOST=server.home squalex/home
