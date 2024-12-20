# 77design site with gatsby

Project to generate static site with [Gatsby](https://www.gatsbyjs.com) using content stored in MySQL database

## Initial setup 
We need to have working MySQL server with content to generate site base on it
In main foder of proejct create files `.env.development` and `.env.production` with database connection details 
Here is sample structure of this file 
```
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=user
DB_PASSWORD=password
DB_NAME=database-name
DB_SOCKET=path-to-mysql-socket-file
```

`DB_SOCKET` is optional and helpful option to connect with local database if you face any issues with opening ports


## 🔧 Develop
To run develpoment enviroment run 
```
npm run develop
```


## 🚧 Generate

To generate production site 
```
npm run build
```

This project is using [`gatsby-plugin-no-javascript-utils`](https://www.gatsbyjs.com/plugins/gatsby-plugin-no-javascript-utils/) to stip generated html completly from Gatsby Javascript 

## 🚀 Deploy

Copy `.html` and `.css` files from `./public` folder to web server


