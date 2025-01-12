FROM node:latest

# Set the working directory to root
WORKDIR /root
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]