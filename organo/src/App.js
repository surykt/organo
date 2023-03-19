import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Form from "./Components/Form/Form";


function App() {
  const [employees, setEmployees] = useState([])

  const addNewEmployee = (employee) => {
    console.log(employee)
    setEmployees([...employees, employee])
  }
  return (
    <div className="App">
      <header className="banner">
        <Banner />
      </header>
      <Form registerEmployee={employee => addNewEmployee(employee)}/>
    </div>
  );
}

export default App;
