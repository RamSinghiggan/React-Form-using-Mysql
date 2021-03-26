
import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {
 const [Name, setName] = useState("");
 const [Email, setEmail] = useState("");
 const [Phone, setPhone] = useState("");
 const [Address, setAddress] = useState("");
const[farmlist,setFarmList]=useState([]);



const addForm= () =>
{
Axios.post("http://localhost:3001/create",{
name:Name,
email: Email,
phone: Phone,
address: Address,
});
};

const getEmployees = () => {
  Axios.get("http://localhost:3001/farmtable").then((response) => {
    setFarmList(response.data);
    console.log(farmlist.data);
  });
};


  return (
    <div className="App">
      <header className="information">
        <label>Name</label>
        <input type="text" onChange={(event)=> {setName(event.target.value);}}/>

        <label>Email</label>
        <input type="text" onChange={(event)=> {setEmail(event.target.value);}}/>

        <label>Phone</label>
        <input type="text" onChange={(event)=> {setPhone(event.target.value);}}/>

        <label>Address</label>
        <input type="text" onChange={(event)=> {setAddress(event.target.value);}}/>

        <button onClick={addForm}>Submit</button>

        <div className="emp">
        <button onClick={getEmployees}>Show Employees</button>

        {farmlist.map((val,key)=>{
          return<div>
            <h3>Name: {val.Name}</h3>
                <h3>Email: {val.Email}</h3>
                <h3>Phone: {val.Phone}</h3>
                <h3>Address: {val.Address}</h3>
           
            </div>
        })}
      </div>
      </header>
    </div>
    

          
  );

}

export default App;
