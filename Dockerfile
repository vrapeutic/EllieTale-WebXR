FROM node:latest

WORKDIR /webxr-code

RUN npm install -g live-server

COPY . /webxr-code

EXPOSE 3000

CMD ["live-server", "--port=3000", "--host=0.0.0.0", "--no-browser"]