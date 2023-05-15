
import { Fragment, useContext } from 'react'

import { Outlet, Link } from "react-router-dom"

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles'

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)

   
  return (
      <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'><CrwnLogo className="logo"/></LogoContainer>
      <NavLinks>
      <NavLink to='/shop'>Shop</NavLink>
      {currentUser ? (<NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>) : (<NavLink to='/auth'>Sign In</NavLink>)}
      <CartIcon />
      </NavLinks>
      {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
      </Fragment>
      
    )
  }

export default Navigation 