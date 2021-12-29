import React from "react";
import './header.css';
const Header =()=>{
   


        return(
            <>
           <header class="py-3 mb-3 border-bottom bg-dark">
    <div class="container-fluid d-grid gap-3 align-items-center" style={{gridTemplateColumns:' 1fr 2fr'}}>
    <img src="https://img.icons8.com/color/48/000000/heart-health.png"/>
    <h1 className="d-flex justify-content-center "style={{color:'rgb(247, 63, 63)'}}>Messager Z</h1>

      <div class="d-flex align-items-center">
        

        <div class="flex-shrink-0 dropdown">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          {localStorage.getItem('username')}
          </a>
          
        </div>
      </div>
    </div>
  </header>
            </>
        )
    
}
export default Header;