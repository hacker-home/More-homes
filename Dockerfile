# use ubuntu in container
FROM ubuntu

# update and upgrade package manager and install mysql, nodejs, npm
RUN apt-get update && apt-get upgrade -y && apt-get install -y mysql-server nodejs npm

# create working directory
WORKDIR /app

ADD package.json .
RUN npm install
RUN npm install async-each

ADD public ./public
ADD server ./server
ADD schema.sql .
ADD db ./db
ADD dockerDbConfig.js ./db/config.js
ADD start.sh .

ENTRYPOINT ["bash", "start.sh"]