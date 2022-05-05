import React from "react";
import { useNavigate } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Header =()=>{
    const navigate = useNavigate();

return(

<header>
<article>
<img src="P11-Vinted2/vinted2/src/img/logo.svg" alt="" />
</article>
<article>
<button
onClick={() => navigate("/user/signup")}
>S'inscrire</button>
</article>
<article>
<button>Se connecter</button>    
</article>
<article>
<button>Vends tes articles</button>    
</article>
</header>
)
}

export default Header
