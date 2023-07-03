# IGAN App


A System that connects users in channels and chat's where user's can do chat, Voice Chat, Video Chat, PTT, etc.

## Installation

If you want to do the installation , follow these steps:

Clone the repo:
```bash
git clone URL
```
Install the dependencies:

```bash
npm install
```
Set the environment variables:

```bash
# open .env and modify the environment variables (if needed)
# Sample is given in .env.example
```

```bash
npm run sync:db
npm run seed:db
npm start
```


## Features

- **Authentication and authorization**
- **Error handling**: centralized error handling mechanism
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv)
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)

## Commands

Running locally:

```bash
npm start
```

Running in production:

```bash
npm run prod
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=8000

# URL of the Postgres DB
DB_HOST=localhost

# JWT
# JWT secret key
JWT_SECRET=smart-key
# SMTP configuration options for the email service
# For testing, you can use a fake SMTP service like Ethereal: https://ethereal.email/create
SMTP_HOST=email-server
SMTP_PORT=587
SMTP_USERNAME=email-server-username
SMTP_PASSWORD=email-server-password
EMAIL_FROM=support@yourapp.com
```

## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--middlewares\    # Custom express middlewares
 |--models\         # {Postgres} models (data layer)
 |--routes\         # Routes
 |--utils\          # Utility classes and functions
 |--app.js          # Express app
 |--bin
    |--www        # App entry point
```

### Postman API Collection Link Containing Endpoints

````
todo: Add Link
````
