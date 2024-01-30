import React, { useState } from "react";
import "./App.css";
import TableDisplay from "./components/TableDisplay";
import SpecialButton from "./components/SpecialButton";
import ButtonExample from "./components/ButtonExample";

function App() {
  // let number = 5
  const [number, setNumber] = useState(1);
  const [userArray, setUserArray] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("Male");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const userObject = { firstName, lastname, password, gender };
    console.log(userObject)
    setUserArray([...userArray, userObject]);
    setFirstName("")
    // console.log(userArray);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='col-7 mx-auto border bg-dark p-4 rounded-3 mb-3'>
          <h1 className='text-white'>{firstName}</h1>
          <input
            type='text'
            placeholder='First Name'
            className='form-control mb-3'
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            type='text'
            placeholder='Last Name'
            className='form-control mb-3'
            value={lastname}
            onChange={(event) => setLastName(event.target.value)}
          />
          <select
            onChange={(event) => setGender(event.target.value)}
            placeholder='Gender'
            value={gender}
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
            value={password}
            className='form-control mb-3'
          />
          <SpecialButton name='Submit' color='btn-warning  form-control' functionToRun={handleSubmit} />
        </div>

        <div>
          <TableDisplay userArray={userArray} name='lillian' />
        </div>

        <SpecialButton
          name='Send Mail'
          functionToRun={() => console.log("special button running")}
          color='btn-danger'
        />
        <SpecialButton
          name='Delete User'
          functionToRun={() => console.log("special button running")}
          color='btn-warning'
        />

        <ButtonExample > Hello World </ButtonExample>
        <ButtonExample> Click for free! </ButtonExample>
      </header>
    </div>
  );
}

export default App;
