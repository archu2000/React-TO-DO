# Created a new directory for Server
mkdir server
cd server

### Install package
```npm i express pg cors```

express => allows to quickly create a server in node.js.
           Which allows different domain applications to interact with each other.
           EG: server running in localhost:5000, Application in localhost:3000

pg => Present to connect our server with DB.
      In-order to run some DB Queries.

```cd server```
```node index```
=> Server listening to port 5000


## nodemon index
First install the package globally,
`npm install -g nodemon`

To avoid restarting server whenever we make changes, use
```nodemon index```

which will instantly restart after applying the changes in file.



