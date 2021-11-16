import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const NavBar = () => {
  return(
    <nav>
      <li>
        <Link className='link' to='/'>Biblioteca</Link>
      </li>
      <li>
        <Link className='link' to='/stores'>Tienda</Link>
      </li>
      <li className='liText'>
        <input className = 'searchInput'
          type="text"
          placeholder='Buscar juego' 
          //value={this.state.value}
          //onChange={this.handleChange}
        />
      </li>
    </nav> 
  );
}

export default NavBar;
