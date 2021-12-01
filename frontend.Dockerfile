FROM node:16.13.0

WORKDIR /frontend

COPY /frontend package.json

COPY /frontend yarn.lock

COPY /frontend tsconfig.json

COPY /frontend ./

RUN yarn install

CMD [ "yarn" , "start" ]

EXPOSE 3000

