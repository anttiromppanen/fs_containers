# Build-stage
FROM node:16 AS build-stage

WORKDIR /usr/src/app

ENV REACT_APP_BACKEND_URL http://localhost:3000

COPY . .

RUN npm ci --legacy-peer-deps

RUN CI=true npm test

RUN npm run build

# New stage
FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html