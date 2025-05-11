// Theme toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggle.checked = true;
}

toggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Search functionality
async function searchUser() {
    const username = document.getElementById('username-input').value.trim();
    const resultDiv = document.getElementById('result');

    if (!username) {
        resultDiv.innerHTML = '<p>Please enter a TikTok username.</p>';
        resultDiv.classList.add('show');
        return;
    }

    // Placeholder for TikTok API call
    // TikTok's API requires authentication; consider using a third-party service (e.g., RapidAPI).
    const mockResponse = {
        username: username,
        followers: '1.2M',
        following: '350',
        liked: '15.6M',
        reposts: '2.1K',
        favorites: '500',
        lastActive: '2025-05-09'
    };

    // Display results
    resultDiv.innerHTML = `
        <h2>${mockResponse.username}</h2>
        <p>Followers: ${mockResponse.followers}</p>
        <p>Following: ${mockResponse.following}</p>
        <p>Liked: ${mockResponse.liked}</p>
        <p>Reposts: ${mockResponse.reposts}</p>
        <p>Favorites: ${mockResponse.favorites}</p>
        <p>Last Active: ${mockResponse.lastActive}</p>
    `;
    resultDiv.classList.add('show');

    // Example API integration (uncomment and configure with a real API):
    /*
    try {
        const response = await fetch(`https://api.example.com/tiktok/user/${username}`, {
            headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
        });
        const data = await response.json();
        resultDiv.innerHTML = `
            <h2>${data.username}</h2>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
            <p>Liked: ${data.liked}</p>
            <p>Reposts: ${data.reposts}</p>
            <p>Favorites: ${data.favorites}</p>
            <p>Last Active: ${data.lastActive}</p>
        `;
        resultDiv.classList.add('show');
    } catch (error) {
        resultDiv.innerHTML = '<p>Error fetching user data. Please try again.</p>';
        resultDiv.classList.add('show');
    }
    */
}
