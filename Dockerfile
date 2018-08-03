FROM node:8
LABEL maintainer="Mohammad Samiul Islam <forthright48@gmail.com>"

WORKDIR /home/src

RUN npm install -g nodemon

COPY . .

EXPOSE 8002
