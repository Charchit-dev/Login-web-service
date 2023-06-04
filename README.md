**Login System Documentation**

A React application called The Login System offers basic login capabilities. Users can log in by entering their email address and password. The user is shown a dashboard with their first and last names and a logout button upon successful authentication. For demo purposes, the system offers preconfigured accounts.

**Usage Example**
To use the Login System in your React project, follow these steps:

Install the required dependencies by running the following command:
bash

**npm install react react-dom @testing-library/react**
Create a new React component, such as App.js, and copy the following code into it:


**import React from 'react';
import { render, fireEvent } from '@testing-library/react';
const Login = ({ handleLogin }) => {

**};
const Dashboard = ({ user, handleLogout }) => {
**
};
const App = () => {
 
};**
****
**export default App;**


**I have used two examples of following id and passwords**

>>krishu@example.com
>>password1

>>aashu@example.com
>>password2

which will deny others if any invalid emails and passwords are given

**Test Cases**
To guarantee that the login flow is accurate and functional, the Login System provides test cases. Here are a few test-case examples:
makes the login form appear: Checks to see that the login form is presented appropriately, including the login button, email, and password fields.
logs a user in using the proper password and email: checks to see if the user is successfully signed in after inputting a valid email address and password.
displays an error message when an incorrect email is entered: Verifies that an error message is displayed when an invalid email is entered.
displays an error with an incorrect password: Verifies that an error message is displayed when a valid email is submitted with an invalid password.
logs a user off

**Installation**
To install and use the Login System, follow these steps:

Clone the repository or download the source code files.

Navigate to the project directory in the terminal.

Install the required dependencies by running the following command:

bash

**npm install**
Start the development server with the following command:
bash

**npm start**
Access the application in your web browser at** http://localhost:3000.**

That's it! You can now integrate the Login System into your React project and customize it to suit your needs.






