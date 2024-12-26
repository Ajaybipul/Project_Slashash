

# Jokes Search Page

## Overview
The **Jokes App** is a web application that allows users to search for jokes, view them, and save their favorite jokes for later viewing. It uses the [icanhazdadjoke API](https://icanhazdadjoke.com/) to fetch jokes and stores favorite jokes in a MySQL database.

---

## Features
- **Search Jokes**:  You can search for jokes by entering a keyword.
- **View Favorites**: You can view their saved favorite jokes.
- **Save Favorites**: You can save jokes to their favorites list.

---

## Technologies Used

### Frontend
- **HTML**: Structure of the web application.
- **CSS**: Styling using custom styles and Bootstrap 5.
- **JavaScript**: Client-side functionality for fetching and displaying jokes.

### Backend
- **Node.js**: Server-side runtime.
- **Express.js**: Framework for building RESTful APIs.
- **MySQL**: Database for storing favorite jokes.

### Other Libraries/Tools
- **Bootstrap 5**: Responsive design.
- **Cors**: Middleware for enabling cross-origin requests.
- **Body-Parser**: Middleware for parsing JSON request bodies.

---

## Installation and Setup

### Prerequisites
- Node.js installed on your system.
- MySQL installed and running.

### Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd jokes-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up the Database**
   - Create a database named `jokes_db` in MySQL.
   - Run the following SQL command to create the `favourites` table:
     ```sql
     CREATE TABLE favourites (
       id VARCHAR(255) PRIMARY KEY,
       joke TEXT NOT NULL
     );
     ```

4. **Configure Database Credentials**
   - Update the `db` configuration in the `app.js` file with your MySQL credentials:
     ```javascript
     const db = mysql.createConnection({
       host: 'localhost',
       user: 'your-username',
       password: 'your-password',
       database: 'jokes_db'
     });

     //for mor Credentials You can use .env file also
     ```

5. **Run the Server**
   ```bash
   Npm Start
   ```

6. **Open the Application**
   - Open `index.html` in a browser or use a local server to serve the file.

---

## API Endpoints

### 1. Save a Favorite Joke
**POST** `/favourites`
- **Request Body**:
  ```json
  {
    "id": "joke-id",
    "joke": "The joke text."
  }
  ```
- **Response**:
  - Success: `Joke saved!`
  - Error: `Error saving joke.`

### 2. Get Favorite Jokes
**GET** `/favourites`
- **Response**:
  ```json
  [
    {
      "id": "joke-id",
      "joke": "The joke text."
    }
  ]
  ```

---

## Usage

1. Enter a keyword in the search bar and click **Search** to find jokes.
2. Click **Favourite** on any joke to save it.
3. Click **View Favorites** to see all saved jokes in a modal.

---

## Challages
1. The time limit is callanges for this app.
2. First time using the Mysql with the Nodejs that create little bit difficulty .

---

## Extra Features Can be added
- **Styling**: Modify `styles/styles.css` for custom styles.
- **API**: Replace the joke API endpoint in `scripts/app.js` if needed.
- **Database**: Update database schema as required for additional features.

---

