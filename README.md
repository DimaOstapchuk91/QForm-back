# Backend for the Questionnaire App

## Description

This repository contains the backend for the Questionnaire app, implemented using **Node.js** and **Express.js**. The backend handles requests for creating, retrieving questionnaires, and storing user responses.

## Implemented Features

- **Create a questionnaire**: Create a new questionnaire with a set of questions.
- **Get all questionnaires**: Retrieve a list of questionnaires with pagination.
- **Get a single questionnaire**: Retrieve detailed information about a specific questionnaire.
- **Sorting questionnaires**: Sort questionnaires by title, number of questions, and number of completions.
- **Get responses to a questionnaire**: Retrieve user responses for a specific questionnaire.

## API Endpoints

### Questionnaire Management

- **GET `/questionnaires`**: Get a list of all questionnaires with pagination.
- **GET `/questionnaires/:id`**: Get a specific questionnaire by ID.
- **POST `/questionnaires`**: Create a new questionnaire.
- **GET `/questionnaires/sortBy={}&sortOrder`**: Get questionnaires sorted by parameters (title, number of questions, number of completions).
- **PATCH `/questionnaires/:id`**: change of questionnaire.
- **DELETE `/questionnaires/"id`**: deleting the questionnaire.

### Getting Responses

- **GET `/answers/:questionnaireId`**: Get responses for a specific questionnaire.
