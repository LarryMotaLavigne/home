#!/bin/bash

docker run -d -v /var/run/docker.sock:/var/run/docker.sock -p 8080:8080 -p 80:80 -l traefik.frontend.rule=Host:server.home -l traefik.port=80 --name traefik traefik --docker --api

