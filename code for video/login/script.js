document.getElementById('login-form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('ACCESS DENIED');
        event.preventDefault();
    } else {
        console.log('USER:', username, 'PASS:', password);
        window.location.href = 'https://www.youtube.com/channel/UCUS3aEsTgx2KL8OWOYkjRVw';
        event.preventDefault(); 
    }
});