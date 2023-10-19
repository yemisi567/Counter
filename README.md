***React Counter App with Error Handling***
  
  This is a simple React application that demonstrates a counter with error handling.
  The app allows you to increment, decrement, reset the counter, set a custom value, and trigger an error page when an error occurs.
  
**To see a live demo of the application, you can visit (add netlify link)**

**Features**
 1. Increment and decrement the counter.
 2. Reset the counter to its initial value.
 3. Set a custom value for the counter.
 4. Error handling with a friendly error page.
 5. Navigate between different views using React Router.
    
**Run app locally**
 #Before you begin, ensure you have the following prerequisites:
  1. Node.js: Make sure you have Node.js installed on your system. You can download it from nodejs.org.
  2. npm or Yarn - Package managers for installing dependencies.
**After which you:**
  1. Clone the repository:
  2.Install the project dependencies.

**Usage**
 **To start the application locally, run the following command:**
   - run `npm start`, `yarn start`
     
**Folder Structure**
The project structure is organised as follows:
  `src/`: Contains the source code of the application.
  `components/`: React components used in the app.
  `App.js`: The main application component.
  `public/`: Contains the public assets and HTML template.
  `package.json`: Lists the project dependencies and scripts.
  `README.md/`: The documentation file.
  
**Counter**
The primary feature of this application is the counter. You can perform the following actions:
1. Click "+" to increase the counter by 1.
2.Click "-" to decrease the counter by 1.
3.Click "Reset" to reset the counter to its initial value.
4.Use the input field to set a custom value and click "Set Custom Value" to update the counter.

**Error Handling**
The application includes error handling. When an error occurs, i.e if you click on the `Trigger an error button` it navigates to an error page (`/error`) with an apologetic cat image and a message. You can customise the error page in the ErrorBoundary.js component.

**404 Handling**
The application includes handling scenarios where the user can use an invalid url. When this occurs, it navigates to a not found page with a message. You can customise this page in the NotFound.js component.

**Technologies Used**
`React`: A JavaScript library for building user interfaces.
`React router`: A library for handling routing in React applications.
