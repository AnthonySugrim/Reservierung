import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';
import { user as userAPI } from '../utils/API';
import style from "../containers/Navbar/style.module.css";


const Nav = props => {
	const signout = () => {
		userAPI
			.signout()
			.then(() => props.setUser({}))
			.catch(e => {
				throw e;
      }); 
	};
	let location = useLocation();
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand
          className="nav-brand"
          onClick={_ => {
            window.location= "/home";
          }}
        >
          Boom Reservation
        </NavbarBrand>
        <NavbarBrand>
        <div>
			<Link to='/'>
				<div className={`${style.logo} btn`} >
				</div>
			</Link>
			{ props.user._id 
				?  <Button theme='dark' onClick={signout}><i className='fa fa-sign-out fa-1x' aria-hidden='true'></i></Button>
			   	:  location.pathname === '/signup' 
					? 	<Link to='/login'><Button class="float-right" theme='light'>Login</Button></Link>
          :  <Link to='/signup'><Button class="float-right" theme='light'>Sign In</Button></Link>
			}
		</div>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};
export default Nav;