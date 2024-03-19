FROM node:latest

WORKDIR /app/

COPY /expenses_front/public /app/public/

COPY /expenses_front/src /app/src

COPY expenses_front/package.json /app

RUN npm install

CMD [ "npm", "start"]