FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install react-router-dom
COPY . .
RUN npm run build


FROM nginx:1.19.0
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g" , "daemon off;"]

