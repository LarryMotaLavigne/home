#!/bin/bash


curl -sSL https://install.pi-hole.net | bash

echo "addn-hosts=/etc/pihole/lan.list" | sudo tee /etc/dnsmasq.d/02-lan.conf

echo "192.168.1.5   server.home  server" | sudo tee /etc/pihole/lan.list

sudo pihole restartdns
