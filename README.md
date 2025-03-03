This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles 
and project management recommendations. Feel free to change anything



`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include 
any kind of tests. (you might want to make separate tests folder)

Lets take a look inside the `src` folder

- `config` -> In this folder anything and everything regarding any configuration o: setup of a library or module will be done.
For example: setting up `dotenv` so that the `server-config.js`. One more example can be to setup you logging library that can help you 
to prepare meaningful logs, so configuration for this library should also be done here.

- `routes` -> In the routes folder, we register a route and the corressponding middleware and controllers to it.

- `middleware` -> They are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. 
In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, 
we structure the API response in controllers and send the output.


- `repositories` -> Thid folder contains all the logic using which we intrect the DB by writing queries, all the raw queries will go here.

- `services` -> contains the busines logic and interect with repositories for data from the database

-  `utils` -> contains helper methods, error classes etc.

### Setup the project

- Download this template from github and open it in your favourite text editor. 
- Go inside the folder path and execute the following command.
  ```
    npm install
  ```
- In the root directory create a env file and add the following env variables

```
      PORT <port number of your choice>
```
ex: 
```
    PORT = 3000
```
- Inside the `src/config` folder create a file a name as `config.json` and write the following code:
```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production", 
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Go inside the `src` folder and execute the following command
  ```
  npx sequelize init
  ```
- By executing the above command you will get migrations and seeders folder along with a config.json 
  inside the config folder
- If you are setting up your development environment, then write the name of your username of your db, 
  password of your db and dialect mention whatever db you are using the for example : mysql, mariadb etc
  - If you're setting up test or prod enviroment, make sure you also replace the host with the hosted db url.

  - to run the server execute 
  ```
  npm run dev
  ```