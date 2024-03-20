FROM node:latest

EXPOSE 3000

WORKDIR /app/

COPY /public /app/public/

COPY /src /app/src

COPY /package.json /app

RUN npm install

CMD [ "npm", "start"]