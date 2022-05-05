import React from 'react';
import { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked,setChecked] = useState(false);
    const handleNameChange = event => {
      const value = event.target.value;
      setName(value);
    };
  
  
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

     console.log(Cookies.get("token")); // Renverra "fSFBIbI3XtZyF79i"
     console.log(Cookies.get("email"));
}

      // display === true ? <Profile/>:

return (
      <div className="Sign">
        <h1>Se connecter</h1>
        <form onSubmit={handleSubmit}
         className="Sign">
  
          {/* <h5>Name</h5> */}

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
 
          <button type="submit"  value="S'inscrire"
          onClick={handleSubmit}
          
          >Se connecter</button>
        </form>
      </div>
)
}
    



  export default Login;
    
// export default Login


