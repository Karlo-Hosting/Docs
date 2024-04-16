FROM node:latest
LABEL description="Karlo-Hosting Internal Documentation."
WORKDIR /usr/src/app
COPY . .
RUN npm install -g docsify-cli@latest
# generates the sidebar
RUN docsify generate docs
EXPOSE 3000/tcp
ENTRYPOINT docsify serve .