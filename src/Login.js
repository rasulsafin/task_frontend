// Login.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Login = () => {
    const { username, password } = useSelector((state) => state);

  const handleLogin = () => {
    const localStorageUsername = localStorage.getItem('username');
    const localStoragePassword = localStorage.getItem('password');

    if (username === localStorageUsername && password === localStoragePassword) {
        console.log('Вход выполнен');
      } else {
        console.log('Ошибка аутентификации');
      }
  };

  return (
    <div>
      <h2>Вход</h2>
      <input
        type="text"
        placeholder="Логин"
      />
      <input
        type="password"
        placeholder="Пароль"
      />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default Login;
