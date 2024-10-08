# iCompliance Landing Page

This project is a React-based landing page for iCompliance, an AI-powered regulatory compliance solution.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of [Node.js and npm](https://nodejs.org/)
* You have a Windows/Linux/Mac machine.

## Setting up iCompliance Landing Page

1. Install the dependencies:
   ```
   npm install
   ```

2. Initialize Tailwind CSS:
   ```
   npx tailwindcss init -p
   ```

3. Update the `tailwind.config.js` file with the following content:
   ```javascript
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

## Running iCompliance Landing Page

To run iCompliance Landing Page, follow these steps:

1. Start the development server:
   ```
   npm start
   ```

2. Open your web browser and visit `http://localhost:3000`

## Building for Production

To create a production build, run:

```
npm run build
```

This will create a `build` directory with your compiled application, ready for deployment.
