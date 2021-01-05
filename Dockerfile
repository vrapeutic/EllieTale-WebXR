FROM node:latest

WORKDIR /webxr-code

RUN npm install
ENV PORT=3000

COPY . /webxr-code

EXPOSE 3000

CMD npm start