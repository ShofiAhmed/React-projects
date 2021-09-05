import { useState } from "react";
import './style.css';

function Form() {
  const [user, setUser] = useState({
    name : '',
    email : '',
    password : ''
})

const {name, email,mobile, password} = user

 const handleNameChange = (e) =>{
     setUser({name : e.target.value, email, mobile, password});
 }

 const handleEmailChange = (e) =>{
     setUser({name, email : e.target.value, mobile, password});
 }
 const handleNumberChange = (e) =>{
  setUser({name, email, mobile : e.target.value, password});
}
 const handlePasswordChange = (e) =>{
     setUser({name, email, mobile, password: e.target.value});
 }

 const handleSubmit = (e) =>{
     console.log(user)
     e.preventDefault();
 }

 return (
     <div>
         <h1>Register</h1>
         <form onSubmit={handleSubmit}>
             <div>
                 <label>Name : </label> <br></br>
                 <input
                     onChange={handleNameChange}
                     value={name}
                     type="text"
                     name="name"
                     id="name"
                     required />
             </div>
             <div>
                 <label>Email : </label> <br></br>
                 <input
                     onChange={handleEmailChange}
                     value={email}
                     type="email"
                     name="email"
                     id="email"
                     required />
             </div>
             <div>
                 <label>Mobile : </label> <br></br>
                 <input
                     onChange={handleNumberChange}
                     value={mobile}
                     type="number"
                     name="mobile"
                     id="mobile"
                     required />
             </div>
             <div>
                 <label>Password : </label> <br></br>
                 <input
                     onChange={handlePasswordChange}
                     value={password}
                     type="password"
                     name="password"
                     id="password"
                     required />
             </div>
             <button type="submit">Register</button>
         </form>

        
     </div>
    );
  }
export default Form;