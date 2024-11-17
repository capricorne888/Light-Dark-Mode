<p align="center">
  <img src="http://checkthese.com/img/IMG_0160.PNG?3" alt="Capricorne888" width="200" height="200">
</p>

## Light/Dark Mode Toggle Script

This script enables a light/dark mode toggle on your website, allowing users to switch between themes seamlessly. The user's preference is saved in `localStorage` to persist across sessions.

### Features
- **Toggle Theme**: Switch between light and dark modes using a single button.
- **Persistent Theme**: Saves the user's theme preference in `localStorage`.
- **Accessible Icons**: Displays sun/moon icons to indicate the current theme.

### Installation

1. **HTML Setup**: Add a button with the class `toggle-button` to your HTML.
   ```html
   <button class="toggle-button">🌙</button>
   ```

2. **CSS**: Define styles for `.dark-mode` in your CSS.
   ```css
   .dark-mode {
       background-color: black;
       color: white;
   }
   ```

3. **JavaScript**: Include the script below in your HTML file.
   ```javascript
   // Light/Dark mode toggle
   function toggleMode() {
       const body = document.body;
       const toggleButton = document.querySelector('.toggle-button');
       const isDarkMode = body.classList.toggle('dark-mode');
   
       toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
   
       // Save the mode to localStorage
       localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
   }

   // Load the saved theme from localStorage
   document.addEventListener('DOMContentLoaded', () => {
       const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
       const body = document.body;
       const toggleButton = document.querySelector('.toggle-button');

       if (savedTheme === 'dark') {
           body.classList.add('dark-mode');
           toggleButton.textContent = '☀️';
       } else {
           toggleButton.textContent = '🌙';
       }
   });
   ```

### Usage

- **Toggle Theme**: Click the button to switch themes.
- **Automatic Load**: The script automatically loads the saved theme when the page is refreshed.

### Contribution

Feel free to fork this project and make improvements. Contributions are welcome!

