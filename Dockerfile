FROM node:18.17.1 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install
# Copie à partir de la racine vers le dossier de travail
COPY . .
# co
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;"]

# docker build -t ecomimage .
# docker container run --name ecommerce_app -p 80:80 ecomimage  