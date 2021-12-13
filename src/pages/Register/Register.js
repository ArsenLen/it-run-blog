import React, { useEffect, useState } from "react";
import axios from "axios";

// отправить данные о пользователе на сервер
// заполняем форму и заполненные данные должны быть внутри db.json

// 1. построим запрос с помощью axios
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  const handleRegister = (e) => {
    e.preventDefault()
    if(password.length > 8) {
    axios.post("http://localhost:3004/users", {
      email: email,
      login: login,
      password: password,
    });
    setEmail("")
    setPassword("")
    setLogin("")
    } else {
        alert("Пароль должен состоять из 8+ символов")
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div className="formElem">
          <label htmlFor="email">Введите email</label>
          <input
            type="email"
            name="email-reg"
            id="email-reg"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formElem">
          <label htmlFor="login">Введите имя пользователя</label>
          <input
            type="text"
            name="login-reg"
            id="login-reg"
            value={login}
            onChange={e => setLogin(e.target.value)}
            required
          />
        </div>
        <div className="formElem">
          <label htmlFor="password">Введите пароль</label>
          <input
            type="password"
            name="pass-reg"
            id="pass-reg"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Зарегистрироваться" />
      </form>
    </div>
  );
};

export default Register;
