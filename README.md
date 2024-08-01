# Frontend-PAT

This repo contains the code for the frontend of the Personalized AI Tutor app.

# Setup

This app has been setup with Vite, Typescript and React. To run this app, follow the following steps:

1. Make sure that `node` is installed on your device and `npm` is working.
2. Install the `pnpm` package manager with the command: `npm install -g pnpm`.
3. Run the command `pnpm install` in this directory. (NOTE: Please do not use any other package manager apart from pnpm for this)
4. Run the command `pnpm dev` to kick up the application in a development server on `http://localhost:5173`

# Tech Stack

The app uses following dependencies to run

1. React with Typescript - For rendering pages and managing the Frontend logic
2. TailwindCSS - For styling the app
3. ESLint - For linting the code for standard coding practices (You can install the ESLint VSCode extension for convenience).
4. Prettier - Prettify the code in a consistent manner.

TO BE ADDED

# App Structure

- `public` folder - Your public assets will be kept here.
- `dist` folder - This folder will be generated when you build the app. This is where your deployable code will be kept
- `src` folder - This is where most of the development will take place. Contains the source code of the app.
  - `assets` - Keep your static asssets like images in this folder
  - `components` - Will contain reusable components.
  - `pages` - Contains the code for different pages of the application
