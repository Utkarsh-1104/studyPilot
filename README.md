# StudyPilot - Study Goals Tracker App

StudyPilot is a web application designed to help users track their study goals effectively. With intuitive features, users can set goals, add time limits, and monitor their progress. The app employs HTML, CSS, Node.js, Express.js, EJS, MongoDB, and Mongoose to provide a seamless experience.

## Features

- **Goal Setting:** Use the input boxes to set study goals and add time limits for better planning.

- **Pending Goals:** View your pending goals in a list format. Mark goals as completed by checking the radio button.

- **Completed Goals:** Track your achievements in the completed goals list. Goals are automatically moved here when marked as completed.

- **Clear Completed Goals:** Keep your completed goals organized by using the "Clear Completed Goals" button to remove them from the list.

## Tech Stack

- **HTML:** Structure the web pages.
  
- **CSS:** Style the user interface for a visually appealing experience.

- **Node.js:** Back-end JavaScript runtime environment.

- **Express.js:** Web application framework for Node.js, simplifying server-side development.

- **EJS (Embedded JavaScript):** Templating engine for generating HTML with JavaScript.

- **MongoDB:** NoSQL database for storing user and goal data.

- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js, simplifying interactions with the database.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/utkarsh-1104/studyPilot.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up MongoDB:
   - Create a MongoDB database and obtain the connection URI.
   - Replace the `MONGODB_URI` variable in the `.env` file with your MongoDB connection URI.

4. Run the application:

   ```bash
   npm start
   ```

5. Access the app at `http://localhost:1111` in your web browser.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your enhancements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
