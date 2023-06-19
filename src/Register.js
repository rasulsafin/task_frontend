// Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserCredentials } from './actions';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const dispatch = useDispatch();

  const handleRegister = () => {
    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
      }
  
      // Проверка на существование пользователя
      if (localStorage.getItem(username)) {
        alert('Пользователь уже зарегистрирован');
        return;
      }
  
      // Регистрация пользователя
      localStorage.setItem(username, password);
      dispatch(setUserCredentials(username, password));
      alert('Регистрация выполнена');

      setUsername('');
      setPassword('');
      setConfirmPassword('');
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <input
        type="text"
        placeholder="Логин"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Подтвердите пароль"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Зарегистрироваться</button>
    </div>
  );
};

export default Register;
