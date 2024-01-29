import React, { useState } from "react";
import "./App.css";

function App() {
  // let number = 5
  const [number, setNumber] = useState(1);
  const [userArray, setUserArray] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("Lillian and Red");
  let names = "Adebisi";
  function changeNumber(event) {
    console.log(event.target.value)
    console.log(names, message);
    names = "Rex";
    setMessage("Lillian and Her Laptop")
    console.log(names, message);
  }

  const handleInputChange=()=>{

  }


  const handleSubmit = () => {
    const userObject = { firstName, lastname, password, gender };

    setUserArray( [...userArray, userObject]);
    // console.log(userArray);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='mb-3 min-vh-100'>
          <h1 className=''>Hello Lillian</h1>
          <h2>
            {message}|||||||| {names} Good
          </h2>
          <button
            className='btn btn-danger'
            onClick={(event) => changeNumber(event)}
          >
            {" "}
            Count
          </button>
        </div>
        <div className='col-7 mx-auto border bg-dark p-4 rounded-3 mb-3'>
          <h1 className="text-white">{firstName}</h1>
          <input
            type='text'
            placeholder='First Name'
            className='form-control mb-3'
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            type='text'
            placeholder='Last Name'
            className='form-control mb-3'
            onChange={(event) => setLastName(event.target.value)}
          />
          <select
            onChange={(event) => setGender(event.target.value)}
            placeholder='Gender'
            className='form-select mb-3'
          >
            <option value='0'>--</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Undecided'>Undecided</option>
          </select>

          <input
            onChange={(event) => setPassword(event.target.value)}
            type='password'
            className='form-control mb-3'
          />
          <button
            onClick={handleSubmit}
            className='btn btn-danger form-control'
          >
            Submit
          </button>
        </div>

        <div>
          <table className='table table-warning'>
            <thead>
              <tr>
                <th>S/N</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {userArray.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastname}</td>
                  <td>{item.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
