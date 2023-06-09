import { useState } from 'react';

function Register() {
  const [user, setUser] = useState({
    email: "",
    userName: "",
    password: ""
  });


  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3333/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={(e) => {
        setUser({
          email: "",
          userName: "",
          password: ""
        })
        e.preventDefault()
      }}>
        <label>
          Email:
          <input
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </label>
        <br />
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}

export default Register;
