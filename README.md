## [MNA Dictionary](https://mna-dictionary.netlify.app/)

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

---

## Usage

- **User**: Sign up, log in, and search for words. View definitions and bookmark frequently searched words.
- **Admin**: Log in to manage dictionary entries (add/edit/delete).

---

### Contributions:

Contributions are welcome! Feel free to open issues or submit pull requests.

### License:

This project is licensed under the [MIT License](LICENSE).

### Contact

For questions or feedback, please contact [Mohammad Nurul Azam](mailto:nurulazam.dev@gmail.com).

---

- Run the frontend in dev mood:

```bash
yarn run dev
```

- Run the backend in dev mood:

```bash
yarn start
```

#### Used Library & Framework in Client/Frontend

`React`, `Tailwind CSS`, `react-router-dom`, `react-icons`, `react-spinners`, `react-toastify`, `swiper`, `Google fonts`,`React firebase hooks`, `React hook form`,`react/TanStack query`, `Google firebase`,

#### Use Library & Framework in Server/Backend

`express`, `mongodb`, `mongoose`, `cors`, `jsonwebtoken`, `cookie-parser`, `dotenv`, `bcryptjs`, `stripe`,`express-rate-limit`
