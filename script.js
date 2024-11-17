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
