# backend
# FAQ Management API

## Overview
A backend application to manage FAQs in multiple languages, translated using the Google Translate API.

## Features
- REST APIs for CRUD operations on FAQs.
- Translation to multiple languages using Google Translate API.
- Full testing and linting coverage.

## Tech Stack

### Server Side:
- [**Node.js**](https://nodejs.org/en): Backend runtime environment.
- [**Express.js**](https://expressjs.com/): Web framework for Node.js.
- [**Mongoose**](https://mongoosejs.com/): MongoDB ORM for handling database operations.
- [**jsdom**](https://www.npmjs.com/package/jsdom): Parses strings into a DOM and allows traversal.
- [**Google Translate API**](): API for translation.
- [**Mocha**](https://mochajs.org/): Simple testing framework for Node.js.
- [**Chai**](https://www.chaijs.com/): Assertion library that pairs well with Mocha.
- [**ESLint**](https://eslint.org/): Standard linting library for JavaScript and JSX.

## Prerequisites
Make sure you have the following installed or set up:
- **Git**: To clone the repository.
- **Node.js** and **NPM**: To install and run the application.
- **MongoDB**: A setup cluster and a MongoDB connection URI.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/u0m5e0s9h/backend
   ```
2. Navigate to the project directory:
   ```sh
   cd backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add necessary environment variables.
5. Start the server:
   ```sh
   npm start
   ```

If everything is set up properly, you should see a confirmation log in the terminal.

## API Endpoints

### 1. Fetch all FAQs
```sh
GET http://localhost:3000/api/v1/faqs
```
- Response: Array of FAQ objects.

### 2. Fetch one FAQ by ID
```sh
GET http://localhost:3000/api/v1/faqs/:id
```
- Parameters: `id` (FAQ ID).
- Response: Single FAQ object.

### 3. Create an FAQ
```sh
POST http://localhost:3000/api/v1/faqs/create
```
- Body: JSON object containing `question` and `answer`.
- Response: Newly created FAQ object.

### 4. Update an FAQ
```sh
PUT http://localhost:3000/api/v1/faqs/update
```
- Body: JSON object containing `id` and updated data.
- Response: Updated FAQ object.

### 5. Delete an FAQ
```sh
DELETE http://localhost:3000/api/v1/faqs/delete
```
- Body: JSON object containing `id`.
- Response: Confirmation message.

### 6. Fetch FAQs in another language
```sh
GET http://localhost:3000/api/v1/faqs?lang={languageCode}
GET http://localhost:3000/api/v1/faqs/:id?lang={languageCode}
```
- Parameters: `languageCode` (e.g., `hi` for Hindi, `bn` for Bengali).
- Response: Translated FAQ object(s).

