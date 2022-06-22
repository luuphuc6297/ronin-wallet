export const getToken = () => {
    const token = window.localStorage.getItem('access_token');
    return token || null;
};

export const setToken = () => {
    localStorage.setItem(
        'access_token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZhZDNhOWFjLTNkMGItNDhjZC04YmJiLWE1ODU5MTExMTEyYyIsIm5hbWUiOiJMdXUgUGh1YyIsInVzZXJuYW1lIjoibHV1cGh1YzYyOTciLCJyb25pbkFkZHJlc3MiOiI0NzMwNTgwNzY2OTE3Mjc3IiwiYXZhdGFyIjoiaHR0cHM6Ly9jbG91ZGZsYXJlLWlwZnMuY29tL2lwZnMvUW1kM1c1RHVoZ0hpckxIR1ZpeGk2Vjc2TGhDa1pVejZwbkZ0NUFKQml5dkh5ZS9hdmF0YXIvMTAwMi5qcGciLCJjcmVhdGVkQXQiOjE2NTUxOTg5NjI5NTYsInVwZGF0ZWRBdCI6MTY1NTE5ODk2Mjk1Nn0.bTD0DzGb4efZMMUPlG1tqf6I5wcapxUyz80I0wdmApo'
    );
};

export const useAuth = () => {
    return Boolean(localStorage.getItem('access_token'));
};

export const removeToken = () => {
    window.localStorage.removeItem('access_token');
};
