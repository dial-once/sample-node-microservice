FROM dialonce/nodejs:latest

WORKDIR /app
COPY . ./
RUN npm install --production

CMD ["node", "src/index.js"]
