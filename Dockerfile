# use official node 22-alpine version
FROM node:22-alpine

# set the working directory
WORKDIR /harsha_portfolio/

# copy the package.json and the package-lock.json to the working directory
COPY package*.json ./

# run npm install to 7install the dependencies
RUN npm install

# copy the rest ofapplication code to the working directory
COPY ..

# build the react application
RUN npm run build

# use the nginx:alpine to serve the built application
FROM nginx:alpine

#copy the built react application to the nginx html
COPY --from=0 /harsha_portfolio/build /usr/share/nginx/html

# expose the port 3000 to the outside world
EXPOSE 300

# run the nginx when server launches
CMD ["nginx", "-g", "daemon off;"]

