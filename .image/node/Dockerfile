FROM node:8
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# COPY package*.json ./
COPY package*.json ./
RUN npm install --save-dev webpack webpack-cli
RUN npm install