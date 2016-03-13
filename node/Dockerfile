# Set the base image to Ubuntu
FROM        mhart/alpine-node:latest

# File Author / Maintainer
MAINTAINER 	Sandy Place

# Provides cached layer for node_modules
ADD package.json /tmp/package.json
 cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src
ADD . /src

# Expose port
EXPOSE  8080

# Run app using nodemon
CMD ["node", "/src/server.js"]
