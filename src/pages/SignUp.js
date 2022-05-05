import React from 'react';
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios"
import { useNavigate } from "react-router-dom";
//import des packages
// const SHA256 = require("crypto-js/sha256");
// const encBase64 = require("crypto-js/enc-base64");
// const uid2 = require("uid2");


const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked,setChecked] = useState(false);
    const handleNameChange = event => {
      const value = event.target.value;
      setName(value);
    };
    
    // const navigate = useNavigate();
  
    const handleEmailChange = event => {
      const value = event.target.value;
      setEmail(value);
    };
  
    const handlePasswordChange = event => {
      const value = event.target.value;
      setPassword(value);
    }

   const handleSubmit = event => {
       event.preventDefault() // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
console.log("hello")
// // const salt = uid2(32);
// // Générer le hash
// // const hash = SHA256({password} + salt).toString(encBase64);
// // Générer le token
// // const token = uid2(16);

// const token = "zadzfeavzdv"
// Cookies.set("token", token, { expires: 7 });
// Cookies.set("email", {email}, { expires: 7 });

  axios.post(" https://lereacteur-vinted-api.herokuapp.com/user/signup", async (req,res)=>{
   try { 
const{email,password}=req.fields
const token = "fSFBIbI3XtZyF79i";
Cookies.set("token", token);
Cookies.set("token", email);
<Navigate to="/login" /> 

   } 
   catch (error) {alert({message:"df"})}
  }
    
  )} 
      // display === true ? <Profile/>:

return (
      <div className="Sign">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit}
         className="Sign">
  
          {/* <h5>Name</h5> */}
          <input
            placeholder="Nom d'utilisateur"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
              {/* <h5>Email</h5> */}
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
      {/* <h5>Password</h5> */}
  <input
            placeholder="Mot de passe"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
  
  {/* <h5>Password Confirm</h5> */}
  <input
            placeholder="dsvdvdvbd"
            type="checkbox"
            onClick={()=>setChecked(!checked)} 
          /> S'incrire à notre newsletter
          <button type="submit"  value="S'inscrire"
          onSubmit={handleSubmit}
          >S'inscrire</button>
        </form>
      </div>
)
}
    
  export default SignUp;
    


