import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownItem,Label } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.title}
              <Label>{cartItem.quantity}</Label>
            </DropdownItem>
          ))}
          <Dropdown.Divider />
          <DropdownItem as={NavLink} to={"/cart"}>
            Sepete Git
          </DropdownItem>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
