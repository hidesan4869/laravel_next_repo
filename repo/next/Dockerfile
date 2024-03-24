FROM node:18.17.1-alpine

ENV TZ Asia/Tokyo

WORKDIR /usr/src/app

COPY ./ ./
RUN apk update && apk add --no-cache bash git
RUN echo "alias ll='ls -la'" >> ~/.bashrc
RUN npm install

CMD ["npm", "run", "dev"]