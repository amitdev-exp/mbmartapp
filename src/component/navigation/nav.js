import React from 'react'; 

  
const Navmain=()=>
{
  return (
    <nav style={{ backgroundColor:"rgb(195 33 33)"}}>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo Left">Classiz Book mart</a>
        
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Order</a></li>
        <li><a href="badges.html">Category</a></li>
        <li><a href="collapsible.html">Login</a></li>
      </ul>
    </div>
  </nav>
        
  );
}
  
export default Navmain;