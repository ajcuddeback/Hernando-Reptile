async function login(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.replace('/admin')
    } else {
        const errorP = document.querySelector('.errorP')
        response.json().then(text => {
            errorP.innerHTML = ''
            errorP.append(text.message)
        })
    }
}

document.getElementById('signin-form').addEventListener('submit', login);