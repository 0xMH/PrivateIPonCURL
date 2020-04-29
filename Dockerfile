FROM node:latest

ARG PORT
ENV PORT ${PORT:-80}

RUN apt-get -y update && apt -y install dnsutils netcat

ADD entrypoint.* ./
EXPOSE ${PORT}
CMD ["bash", "entrypoint.sh"]
