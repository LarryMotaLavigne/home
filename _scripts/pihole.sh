#!/bin/bash


curl -sSL https://install.pi-hole.net | bash

# server.home configuration
echo "address=/server.home/192.168.1.5" | sudo tee /etc/dnsmasq.d/02-lan.conf -a

# nas.home configuration
echo "address=/nas.home/192.168.1.2" | sudo tee /etc/dnsmasq.d/02-lan.conf -a

sudo pihole restartdns
