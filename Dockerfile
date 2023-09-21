FROM node:19.3.0-alpine3.17 as builder
WORKDIR '/app'
COPY package.json .
RUN apk update && apk upgrade && npm install && npm install -g npm-check-updates && npm install -g svgo && npm i -g lint && ncu --upgrade && rm -vrf /var/cache/apk/*
COPY . .
RUN npm run build

FROM nginx:1.25.2
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
