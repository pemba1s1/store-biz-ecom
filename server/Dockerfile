FROM node:20.10.0 as build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

FROM node:20.10.0-alpine

WORKDIR /app

RUN apk --no-cache add --virtual builds-deps build-base python3

COPY --from=build /app /app

RUN npm rebuild bcrypt --build-from-source

EXPOSE 8080

CMD ["node", "index.js"]
