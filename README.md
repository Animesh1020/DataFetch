User Data Fetcher - JSONPlaceholder API
A responsive web application that fetches and displays user data from the JSONPlaceholder API using JavaScript's Fetch API.
🚀 Features

Fetch API Integration: Retrieves user data from JSONPlaceholder API
Responsive Design: Works on desktop, tablet, and mobile devices
Error Handling: Comprehensive error handling for network issues and API errors
Loading States: Visual feedback during data fetching
Retry Functionality: Reload button to refetch data
Modern UI: Clean, modern design with hover effects and animations

📁 Project Structure
user-data-fetcher/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
🛠️ Technologies Used

HTML5: Structure and semantic markup
CSS3: Styling, animations, and responsive design
JavaScript (ES6+): Async/await, Fetch API, DOM manipulation
JSONPlaceholder API: Public API for testing

🌟 Key Concepts Demonstrated
1. Fetch API

Making HTTP requests to external APIs
Handling responses and status codes
Converting response to JSON

2. Promises & Async/Await

Asynchronous JavaScript execution
Promise-based API calls
Error handling with try/catch

3. JSON Parsing

Parsing JSON responses
Accessing nested object properties
Displaying structured data

4. Error Handling

Network error detection
HTTP status code handling
User-friendly error messages

5. DOM Manipulation

Creating dynamic HTML elements
Event listeners and user interactions
Updating UI states

📋 API Data Structure
The application displays the following user information:

Name and username
Email address
Phone number
Website
Complete address details
Company information

🚦 How to Run

Clone or download the project files
Open index.html in a web browser
The application will automatically fetch and display user data
Use the "Reload Data" button to refresh the information

🧪 Testing Network Errors
To test error handling:

Disable your internet connection
Click the "Reload Data" button
Observe the error message and retry functionality

🔧 Code Highlights
Fetch Implementation
javascriptasync function fetchUsers() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        handleError(error);
    }
}
Dynamic User Card Creation
javascriptfunction createUserCard(user) {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    // Dynamic content generation
    userCard.innerHTML = `...`;
    return userCard;
}
Error Handling
javascriptfunction handleError(error) {
    let message = 'An unexpected error occurred.';
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
        message = 'Network error: Please check your connection.';
    }
    // Display user-friendly error message
}
📱 Responsive Design
The application is fully responsive with:

Grid layout that adapts to screen size
Mobile-first approach
Touch-friendly buttons and interactions
Optimized typography for different devices

🎨 Design Features

Modern gradient backgrounds
Card-based layout with hover effects
Loading spinner animations
Color-coded information sections
Professional typography

🔍 Browser Compatibility

Chrome (recommended)
Firefox
Safari
Edge
Modern mobile browsers

📚 Learning Outcomes
After completing this project, you will understand:

How to make API calls with Fetch
Asynchronous JavaScript programming
JSON data parsing and manipulation
Error handling in web applications
Responsive web design principles
DOM manipulation techniques
