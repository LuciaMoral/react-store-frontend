import NavLinks from './NavLinks';
import "./Navbar.scss";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {useState} from 'react';

const MobileNavigation = () => {
  const [open, setOpen ] = useState(false);

  const hamburgerIcon = <MenuOutlinedIcon className='hamburger'
                        onClick={() => setOpen(!open)}/>

  const closeIcon = <CloseOutlinedIcon className='closeIcon'
                    onClick={() => setOpen(!open)} />

  const closeMobileMenu = () => setOpen(false);

  return (
    <div className='mobileNavigation'>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    </div>
  )
}

export default MobileNavigation;
