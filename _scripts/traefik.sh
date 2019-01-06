#!/bin/bash

docker run -d -v /var/run/docker.sock:/var/run/docker.sock -p 8080:8080 -p 80:80 -l traefik.main.frontend.rule=Host:server.home -l traefik.main.port=80 -l traefik.web.frontend.rule=Host:traefik.server.home -l traefik.web.port=8080 --name traefik traefik --docker --api