#!/bin/bash

docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data --restart always -l traefik.frontend.rule=Host:portainer.server.home portainer/portainer
