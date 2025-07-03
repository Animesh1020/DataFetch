// DOM Elements
const usersContainer = document.getElementById('users-container');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const errorMessage = document.getElementById('error-message');
const reloadBtn = document.getElementById('reload-btn');
const retryBtn = document.getElementById('retry-btn');

// API URL
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    fetchUsers();
    
    // Event listeners
    reloadBtn.addEventListener('click', fetchUsers);
    retryBtn.addEventListener('click', fetchUsers);
});

/**
 * Fetch users from the API
 */
async function fetchUsers() {
    try {
        // Show loading state
        showLoading();
        
        // Fetch data from API
        const response = await fetch(API_URL);
        
        // Check if response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse JSON data
        const users = await response.json();
        
        // Display users
        displayUsers(users);
        
    } catch (error) {
        // Handle errors
        handleError(error);
    }
}

/**
 * Display users on the page
 * @param {Array} users - Array of user objects
 */
function displayUsers(users) {
    // Hide loading and error states
    hideLoading();
    hideError();
    
    // Clear existing content
    usersContainer.innerHTML = '';
    
    // Check if users array is empty
    if (!users || users.length === 0) {
        usersContainer.innerHTML = '<p>No users found.</p>';
        return;
    }
    
    // Create user cards
    users.forEach(user => {
        const userCard = createUserCard(user);
        usersContainer.appendChild(userCard);
    });
}

/**
 * Create a user card element
 * @param {Object} user - User object
 * @returns {HTMLElement} - User card element
 */
function createUserCard(user) {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    
    // Get user initials for avatar
    const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
    
    userCard.innerHTML = `
        <div class="user-header">
            <div class="user-avatar">${initials}</div>
            <div class="user-info">
                <h3>${user.name}</h3>
                <div class="username">@${user.username}</div>
            </div>
        </div>
        
        <div class="user-details">
            <div class="detail-item">
                <span class="detail-label">Email:</span>
                <span class="detail-value">${user.email}</span>
            </div>
            
            <div class="detail-item">
                <span class="detail-label">Phone:</span>
                <span class="detail-value">${user.phone}</span>
            </div>
            
            <div class="detail-item">
                <span class="detail-label">Website:</span>
                <a href="http://${user.website}" class="website-link detail-value" target="_blank">${user.website}</a>
            </div>
            
            <div class="detail-item">
                <span class="detail-label">Address:</span>
                <div class="address-details">
                    <strong>Street:</strong> ${user.address.street}, ${user.address.suite}<br>
                    <strong>City:</strong> ${user.address.city}<br>
                    <strong>Zipcode:</strong> ${user.address.zipcode}<br>
                    <strong>Geo:</strong> ${user.address.geo.lat}, ${user.address.geo.lng}
                </div>
            </div>
            
            <div class="detail-item">
                <span class="detail-label">Company:</span>
                <div class="company-details">
                    <strong>Name:</strong> ${user.company.name}<br>
                    <strong>Catchphrase:</strong> ${user.company.catchPhrase}<br>
                    <strong>Business:</strong> ${user.company.bs}
                </div>
            </div>
        </div>
    `;
    
    return userCard;
}

/**
 * Show loading state
 */
function showLoading() {
    loadingDiv.classList.remove('hidden');
    errorDiv.classList.add('hidden');
    usersContainer.innerHTML = '';
}

/**
 * Hide loading state
 */
function hideLoading() {
    loadingDiv.classList.add('hidden');
}

/**
 * Show error state
 * @param {Error} error - Error object
 */
function handleError(error) {
    hideLoading();
    
    let message = 'An unexpected error occurred. Please try again.';
    
    // Handle different types of errors
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
        message = 'Network error: Please check your internet connection and try again.';
    } else if (error.message.includes('HTTP error')) {
        message = `Server error: ${error.message}`;
    } else if (error.message) {
        message = error.message;
    }
    
    errorMessage.textContent = message;
    errorDiv.classList.remove('hidden');
    usersContainer.innerHTML = '';
    
    // Log error for debugging
    console.error('Error fetching users:', error);
}

/**
 * Hide error state
 */
function hideError() {
    errorDiv.classList.add('hidden');
}

// Alternative implementation using Promises (instead of async/await)
// Uncomment this section if you want to see the Promise-based approach

/*
function fetchUsersWithPromises() {
    showLoading();
    
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(users => {
            displayUsers(users);
        })
        .catch(error => {
            handleError(error);
        });
}
*/

// Utility function to simulate network error for testing
function simulateNetworkError() {
    throw new Error('Simulated network error for testing');
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fetchUsers,
        displayUsers,
        createUserCard,
        handleError
    };
}