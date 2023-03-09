# Book Search Engine 👩🏻‍🏫 📖



![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)





 
  ## Description
  
Welcome to the Book Search Engine Github repository! This project is a powerful search engine for books that has been designed to offer a seamless user experience, thanks to the use of cutting-edge technologies such as Apollo Server and GraphQL.

With this project, we have set up an Apollo Server that uses GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API. This provides greater flexibility and allows for more efficient data retrieval and manipulation.We have also modified the existing authentication middleware so that it works seamlessly in the context of a GraphQL API. Additionally, we have created an Apollo Provider that enables requests to communicate with the Apollo Server, resulting in a faster and more streamlined user experience.


 
 This app was deployed using Heroku:



## Table of Contents
- [Description](#description)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Credits](#credits)
- [Technology Used](#technology-used)
- [License](#license)




## Installation

To be able to run this application you'll need

### Step 1:



```sh
git clone https://github.com/enanesh/book-search-engine.git

git status 
```



### Step 2:

In the terminal run the command `npm i` from the global file,

Into the `Client` file

`npm i @testing-library/jest-dom`\
`npm i @testing-library/react`\
`npm i @testing-library/user-event`\
`npm i react`\
`npm i react-dom`\
`npm i react-scripts`\
`npm i web-vitals`\
`npm i react-router-dom`\
`npm i jwt-decode`\
`npm i react-bootstrap`\
`npm i bootstrap`\

In the `Server` file.

 `npm i @apollo/server`\
 `npm i bcrypt`\
 `npm i express`\
 `npm i graphql`\
 `npm i jsonwebtoken`\
 `npm i mongoose`\
 `npm i -D nodemon`\
 
 
Note: Is important to check that the version for Apollo server v.4. Since v.3 is lready deprecated and it would break some parts of the code if is not 
the right one. 


### Step 3

To be able to run the app you'll need to do an `npm run build` and then to run it to developent run the command `npm i run develop`.

Note: You can check this on the "scripts' of the  package.json from the global file .

## Credits

- Node.js  https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
- Express: https://expressjs.com/
- nodemon: https://www.npmjs.com/package/nodemon

## Technology Used
- JavaScript
- Express node library
- nodemon
- express
- GraphQl
- jsonwebtoken
- mongoose
- nodemon




## Contributing
I am not currently accepting contributions to this project, but I welcome feedback and suggestions for improvement.


## License

MIT License
