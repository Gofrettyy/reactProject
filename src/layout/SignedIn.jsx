import React from 'react'
import {Dropdown, Menu ,Image} from 'semantic-ui-react'
export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced ="right" src ="file:///Users/naznehiralicavus/Desktop/edd4c2e0-21e8-4134-9a77-7df834f40608.jpg"/>
       <Dropdown pointing = "top left" text = "Nazife">
      <Dropdown.Menu>
        <Dropdown.Item text ="Bilgilerim" icon ="info"/>
        <Dropdown.Item onClick={signOut} text ="Çıkış Yap " icon ="info"/>
      </Dropdown.Menu>
      </Dropdown>
      </Menu.Item>
    </div>
  )
}
