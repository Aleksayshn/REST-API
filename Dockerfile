FROM node 

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

CMD ["cross-env", "NODE_ENV=production", "node", "./src/server.js"]