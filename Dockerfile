FROM dialonce/nodejs:latest as builder

WORKDIR /app
COPY . ./
RUN apk add --no-cache make && npm install --production

FROM dialonce/nodejs:latest
WORKDIR /app
COPY --from=builder /app /app

CMD ["node", "src/index.js"]
