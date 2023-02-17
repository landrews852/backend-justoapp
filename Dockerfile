FROM node:16.15.1-alpine3.15

WORKDIR /

COPY . .

ENV PORT=3000

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "run", "start"]