FROM node:alpine

ADD package.json /app/

WORKDIR /app
ADD . /app/

RUN npm install

COPY . /app

EXPOSE 8080

CMD node app.js