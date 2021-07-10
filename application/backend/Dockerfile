FROM 476364780248.dkr.ecr.ap-northeast-2.amazonaws.com/node:12

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY ./ /app/

CMD [ "node", "./bin/www"]
