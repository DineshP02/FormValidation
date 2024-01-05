import "./App.css";

import { UserValidation } from "./Validation";

function App() {
  const createUser = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    console.log(formData);
    const isValid = await UserValidation.isValid(formData);
    console.log(isValid);
  };

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Validation</h1>

      <form className="Form" onSubmit={createUser}>
        <label>Name:</label>
        <br />
        <input type="text" placeholder="Enter the name" />
        <br />
        <label>Email:</label>
        <br />
        <input type="text" placeholder="Enter the Email" />
        <br />
        <label>Password:</label>
        <br />
        <input type="password" placeholder="Enter the password" />
        <br />
        <input className="submit" type="submit" style={{ marginTop: "10px" }} />
      </form>
    </div>
  );
}

export default App;
