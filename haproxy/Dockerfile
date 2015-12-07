# Set nginx base image
FROM haproxy

# File Author / Maintainer
MAINTAINER Sandy Place

# Copy custom configuration file from the current directory
COPY haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg

# Expose Redis port 6379
EXPOSE      3000
