## MNA Dictionary

#### This is MNA-Dictionary (Dictionary) web app repository.

A responsive and dynamic dictionary web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to search for words, view detailed word information, manage their profile, and enjoy additional features like bookmarking, dark mode, and pronunciation playback.

---

## Features

### 1. **User Authentication & Authorization**

- **Sign Up & Login**: Users can securely register and log in using their email and password.
- **Password Recovery**: Allows users to reset their passwords via email.
- **Role-Based Access Control**:
  - **Admin**: Add, edit, or delete dictionary entries.
  - **Regular Users**: View dictionary entries.
- **Session Management**: Ensures secure and persistent user sessions.

### 2. **Dictionary Features**

- **Search Functionality**:
  - Supports exact or partial word matches.
  - Real-time autocomplete suggestions.
  - Displays word definitions, pronunciation, and example sentences.
- **Word Details Page**:
  - Includes detailed information such as part of speech, synonyms, antonyms, and example usage.
  - Text-to-speech integration for pronunciation playback.
  - User restrictions: Free users can view details of up to 100 words per day. To view more, they can purchase a premium package.
- **Word Submission**: Admins can manage dictionary entries with a user-friendly form.

### 3. **User Interface (UI)**

- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **User Profile Page**:
  - View and manage profile details.
  - Track search history.
- **Interactive Word List**:
  - Displays recently searched words.
  - Option to bookmark or save favorite words for quick access.

### 4. **Additional Features**

- **Favorites/Bookmark**: Save frequently searched words for future reference.
- **Dark Mode**: Toggle between light and dark themes for a personalized experience.

---

## Technical Stack

### **Frontend**

- **React.js**: For building a dynamic, responsive user interface.
- **React Router**: For seamless client-side routing.
- **Tailwind CSS**: For responsive design and styling.

### **Backend**

- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Framework for API routing and middleware.

### **Database**

- **MongoDB**: NoSQL database for storing dictionary entries, user profiles, and search history.

### **Tools & Libraries**

- **Mongoose**: MongoDB Object Data Modeling (ODM).
- **JWT (JSON Web Tokens)**: For secure authentication.
- **bcrypt.js**: For secure password hashing.
- **Axios**: For handling HTTP requests from the frontend.
- **Text-to-Speech API**: For word pronunciation playback.

---

- Run the frontend in dev mood:

```bash
yarn run dev
```

- Run the backend in dev mood:

```bash
yarn start
```

#### Use Library & Framework in Client/Frontend

`React`, `Tailwind CSS`, `react-router-dom`, `react-icons`, `react-spinners`, `react-toastify`, `swiper`, `Google fonts`,`React firebase hooks`, `React hook form`,`react query`, `Google firebase`,

#### Use Library & Framework in Server/Backend

`express`, `mongodb`, `mongoose`, `cors`, `jsonwebtoken`, `cookie-parser`, `dotenv`, `bcryptjs`, `stripe`,
