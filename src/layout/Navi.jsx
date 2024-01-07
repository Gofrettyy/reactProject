import React from 'react'
import CartSummary from './CartSummary'
import {
 MenuMenu,
  MenuItem,
  Button,
 Menu, Container
} from 'semantic-ui-react'
export default function Navi() {
  return (
    <div>
      <Container>
        <Menu inverted fixed='large'>
          <MenuItem
            name='home' />
          <MenuItem
            name='messages'/>
    <MenuMenu position='right'>
            <CartSummary />
            <MenuItem>
              <Button primary>Sign Up</Button>
            </MenuItem>
          </MenuMenu>
        </Menu>
      </Container>

    </div>
  )
}
