import React, { useState } from 'react'
import CartSummary from './CartSummary'
import {
 MenuMenu,
  MenuItem,
 Menu, Container
} from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navi() {
const [isAuthenticated , setIsAuthenticated] = useState(true)
const navigate = useNavigate()
const { cartItems } = useSelector((state) => state.cart);

function handleSignOut(params) {
  setIsAuthenticated(false)
  navigate("/")
}

function handleSignIn(params) {
  setIsAuthenticated(true)
}

  return (
    <div>
      <Container>
        <Menu inverted fixed="top">
          <MenuItem
            name='home' />
          <MenuItem
            name='messages'/>
    <MenuMenu position='right'>
            {cartItems.length>0&&<CartSummary />}
            {isAuthenticated?<SignedIn signOut = {handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn}/>}
          </MenuMenu>
        </Menu>
      </Container>

    </div>
  )
}
