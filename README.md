This is a nodejs project for flight-search-service module for airline booking system.


###  SETUP
-Download this template from github and open it in your favourite text editor.
-Go inside the project folder and run the following command
```
npn install
```
-In the root directory create a `.env` file and add the following env:
```
PORT=<port number of your choice>
ex:
PORT=3000
``` 

-Go inside src folder and execcute the following command:
```
npx sequelize install
```
it will create a config.json file in config folder, migration folder and seeder folder

-Inside the `src/config` folder create a file config.json and add the following code:

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
-Write the username and password for your development environment, and in dialect mention whatever db you are using mysql,mariadb etc.
-If you are setting up test or prod environment make sure you replace the host with the hosted db url.

-To run the server execute
```
npm run dev
```
