FROM dialonce/nodejs:latest

RUN apk add --no-cache make && \
  mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm i --production

COPY . .

ENV LOGS_TOKEN=
ENV BUGS_TOKEN=
ENV AMQP_URL=
ENV LOCAL_QUEUE=
ENV NODE_ENV staging

CMD ["make", "run"]
