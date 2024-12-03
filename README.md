This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# TimeMetrics

## Overview

TimeMetrics is a web application that visualizes server time differences and Prometheus metrics in a React application, with a Node.js backend serving the data.

## Setup Instructions

### Backend (Node.js)

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the backend server**:
   ```bash
   node app.js
   ```

### React Frontend

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the React application**:
   ```bash
   npm start
   ```

3. **Access the application**:
   Open your web browser and go to [localhost:3000](http://localhost:3000) to view the app.

## Development Tools

### Linting

To ensure code quality and consistency, run the linter:

```bash
npm run lint
```

### Testing

To execute the project's tests and verify functionality:

```bash
npm test
```

## Potential Improvements

- **Accessibility Options**: Enhance accessibility to support diverse user needs.
- **Responsive Design**: Ensure the app is fully responsive and check mobile views.
- **Text Readability**: Improve the readability of large texts for better user experience.
- **Internationalization (I18n)**: Use locales to support multiple languages.
- **Bootstrap Integration**: Implement Bootstrap for consistent UI styling and layout.
- **CSS Cleanup**: Refactor and organize CSS for maintainability and reduction of redundancy.
- **Backend Testing**: Add proper testing to the backend code and APIs, settling with tests at the frontend level for now.
