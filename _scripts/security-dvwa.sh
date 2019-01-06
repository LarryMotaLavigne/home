#!/bin/bash

docker run -d -l traefik.frontend.rule=Host:dvwa.server.home -p 8084:80 vulnerables/web-dvwa


