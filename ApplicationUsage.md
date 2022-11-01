# Created a new directory for Server
mkdir server
cd server

### Install package
```npm i express pg cors```

express => allows to quickly create a server in node.js.
           Which allows different domain applications to interact with each other.
           EG: server running in localhost:5000, Application in localhost:3000

pg => This the main library we will use to communicate with our psql database. Without this library communication with the database will not be possible.


cors => this library will use to help communication between the React App and the Express server. We will do this through a proxy in the React app. Without this we would receive a Cross Origin Resource error in the browser.

```cd server```
```node index```
=> Server listening to port 5000


## nodemon index
First install the package globally,
`npm install -g nodemon`

To avoid restarting server whenever we make changes, use
```nodemon index```

which will instantly restart after applying the changes in file.


## Create DB:
Create a server in pgAdmin \
And inside create a DB called "todo"

```psql -U postgres```

```postgres=# \l```
return the list of DB. and find yours.

```postgres=# \c todo```
=> you are now connected to database "todo" as "postgres"

```todo=# \dt```
=>Did not find any relations.

Created a file inside server folder: database.sql

`todo=# paste the create table cmd`

```todo=# \dt```
=> list the table and its relations.



