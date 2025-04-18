# Password Manager App

[Live Demo](https://pakupodisathish.github.io/PasswordManagerAPP/)

---

## Design Files

- **Extra Small (Size < 576px) and Small (Size >= 576px)**
  - No Passwords View
  - Masked Passwords View
  - Show Passwords View

- **Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)**
  - No Passwords View
  - Masked Passwords View
  - Show Passwords View

Click to view design files.

---

## Set Up Instructions

1. **Download Dependencies**  
   Run the following command:
   ```bash
   npm install
   ```

2. **Start the App**  
   Launch the development server using:
   ```bash
   npm start
   ```

Click to view detailed set up instructions.

---

## Functionality Added

- **Initial State:**  
  - The website, username, and password inputs should be empty.
  - The "No Passwords View" should be displayed initially.

- **Adding a Password:**  
  - When non-empty values are provided for the website, username, and password, and the **Add** button is clicked:
    - A new password item is added to the list.
    - The passwords count is incremented by one.
    - A stars image is displayed in the password item instead of the actual password.
    - The input fields for website, username, and password are reset to empty.

- **Password Visibility:**  
  - When the **Show Password** checkbox is checked, the actual password should be displayed instead of the stars image.

- **Searching Passwords:**  
  - When a non-empty value is provided in the search input field:
    - Only password items whose website matches the search input (case insensitive) are displayed.
    - If no matching items are found, the "No Passwords View" is displayed.

- **Deleting a Password:**  
  - When the delete button of a password item is clicked:
    - The respective password item is deleted from the list.
    - The passwords count is decremented by one.
    - If all password items are deleted, the "No Passwords View" is displayed.
```

Future Enhancements
- Backend Integration:- Implement a backend using Node.js and Express.js.
- Integrate MongoDB for persistent data storage.
- Add RESTful APIs for managing passwords.
- Implement user authentication and security features.

- Additional Features:- Enhance search and filtering capabilities.
- Add data encryption for stored passwords.
- Introduce user profiles and multi-user support.






