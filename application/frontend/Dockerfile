FROM 476364780248.dkr.ecr.ap-northeast-2.amazonaws.com/node:12

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install

COPY ./ /app/

CMD ["npm", "start"]
