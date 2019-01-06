#!/bin/bash

docker run -d --name gitlab.server.home --hostname gitlab.server.home --publish 8443:443 --publish 8880:80 --publish 8022:22 -l traefik.frontend.rule=Host:gitlab.server.home -l traefik.port=80 --name gitlab --restart always --volume /media/docker/gitlab/config:/etc/gitlab --volume /media/docker/gitlab/logs:/var/log/gitlab --volume /media/docker/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce:latest
