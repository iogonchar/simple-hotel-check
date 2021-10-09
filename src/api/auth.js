export const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ token: 'token123' }), 2000)
  });
}

export const saveToken = (token) => {
  localStorage.setItem('token', token);
}

export const removeToken = () => {
  localStorage.removeItem('token');
}