#!/bin/bash


curl -sSL https://install.pi-hole.net | bash

echo "address=/server.home/192.168.1.5" | sudo tee /etc/dnsmasq.d/02-lan.conf

sudo pihole restartdns
