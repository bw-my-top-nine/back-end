<h1 align="center">Welcome to My Top Nine 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/bw-my-top-nine/back-end#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/bw-my-top-nine/back-end/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/bw-my-top-nine/back-end/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

### 🏠 [Homepage](https://my-top-nine-app.netlify.com/)

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Zachary Daniel Lasky**

* Github: [@bw-my-top-nine](https://github.com/bw-my-top-nine)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/bw-my-top-nine/back-end/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License


Copyright © 2019 [Zachary Daniel Lasky](https://github.com/bw-my-top-nine).<br />
This project is [ISC](https://github.com/bw-my-top-nine/back-end/blob/master/LICENSE) licensed.

***
# Server
Not Deployed Yet

# Dependencies
"axios": "^0.19.0",
"bcryptjs": "^2.4.3",
"cors": "^2.8.5",
"dotenv": "^8.1.0",
"express": "^4.17.1",
"helmet": "^3.20.0",
"jsonwebtoken": "^8.5.1",
"knex": "^0.19.2",
"sqlite3": "^4.1.0"

# devDependencies
"jest": "^24.8.0",
"nodemon": "^1.19.1",
"supertest": "^4.0.2"

# DUMMY USER ACCOUNTS
email: user1@gmail.com
password: password1

email: user2@gmail.com
password: password2

email: user3@gmail.com
password: password3

email: user4@gmail.com
password: password4

email: user5@gmail.com
password: password5

# SUMMARY OF API ENDPOINTS
| Table | Method | Endpoint | Description |
|-------|--------|----------|-------------|
| Users | POST   | api/authentication/register | Creates a new user profile using the information sent inside the body of the request and returns a message along with the new user in the body of the response. | 
| Users | POST | api/authentication/login | Uses the credentials sent inside the body to authenticate the user. On successful login, returns a message with the user info and a JSON Web Token token in the body of the response.
| Users | GET | api/authentication/users | Returns all daily posts created by all users if user has valid token
| Users | DELETE | api/authentication/users/:id | Deletes the user with the provided ID. Cannot be undone
| Categories| POST | api/categories/:id/categories | Creates a new category. Requires "user_id" to be set to the user's ID and "name" which includes the categories text.
| Categories | DELETE | /api/categories/:id | Deletes the category with the provided ID. Cannot be undone.
| Categories | UPDATE | /api/categories/:id | Updates the category with the provided ID.
| Categories | GET | /api/categories | Gets all categories.
| Categories | GET/:id | api/categories/:id/categories |Gets all categories associated with a specific user.
| Items | GET | /api/items | Gets all items.
| Items | GET/:id | /api/items/:id/items | Gets all items associated with a specific category.
| Items | UPDATE| /api/items/:id | Updates the category with the provided ID.
| Items | DELETE | /api/items/:id | Deletes the category with the provided ID. Cannot be undone.
| Items | POST | /api/items/:id/items | Creates a new item. Requires "category_id" to be set to the category's ID and "name" which includes the item text.

# Register / Login Shape

| name | type | required | description
|------|------|----------|-------------|
| email | string | Yes | Must be unique |
| password | string | Yes |

EXAMPLE: { email: "example@gmail.com", password: "password" }


# Categories Shape

| name | type | required | description
|------|------|----------|-------------|
| name | string | Yes | Must be unique |
| description | string | No |
| thumbnail | string | No |

EXAMPLE: { name: "Cars", description: "Top 9 Cars", thumbnail: "https://picture456picture.com" }

# Items Shape

| name | type | required | description
|------|------|----------|-------------|
| name | string | Yes | Must be unique |
| thumbnail | string | No |


EXAMPLE: { name: "Corvet", thumbnail: "https://picture456picture.com" }

