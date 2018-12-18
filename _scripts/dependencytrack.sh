#!/bin/bash

docker run -d -p 8082:8080 --restart=always -l traefik.frontend.rule=Host:dependencytrack.server.home --name dependencytrack.server.home -v dependency-track:/data owasp/dependency-track
