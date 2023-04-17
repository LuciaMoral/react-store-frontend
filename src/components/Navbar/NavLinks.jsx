import { React, useState } from 'react';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from 'react-redux';

const NavLinks = (props) => {
  const [open, setOpen] = useState(false);
  const products = useSelector(state => state.cart.products);
  return (
    <div className='navbar'>
    <div className='wrapper'>
        <div className='logo'>
            <Link className="link home" to="/"
             onClick={()=> props.isMobile && props.closeMobileMenu()}>
             THE STORE
              </Link>
        </div>
        <div className='center'>
          <Link className="link link-women" to="/products/1"
            onClick={() => props.isMobile && props.closeMobileMenu()}>
            Women</Link>
          <Link className="link link-men" to="/products/2"
            onClick={() => props.isMobile && props.closeMobileMenu()}>
            Men</Link>
        </div>
        <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
        </div>
     </div>
      { open && <Cart /> }
    </div>
  )
}
export default NavLinks;
