#!/bin/bash

docker inspect -f $(docker ps -aq) -f '{{index .Config.Labels}}' |  awk -F "traefik.frontend.rule:Host:" '{print $2}' | cut -d ']' -f 1 | awk -F ' ' '{print $1}' | sort -u
