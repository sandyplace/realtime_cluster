# Set nginx base image
FROM janeczku/alpine-haproxy:latest

# File Author / Maintainer
MAINTAINER Sandy Place

# Copy custom configuration file from the current directory
COPY haproxy.cfg /etc/haproxy/haproxy.cfg

# Expose Redis port 6379
EXPOSE      80
