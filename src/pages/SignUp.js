import React from 'react';
import { useState } from "react";






const App = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
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
      event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    // password === passwordConfirm ? alert ("hello") : alert ("Vos deux mots de passe ne sont pas identiques")
    }
    
      
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
    
          /> S'incrire à notre newsletter
          <button type="submit"  value="S'inscrire" >S'inscrire</button>
        </form>
      </div>

)


    }
    
  


  export default App;
    
// export default Login