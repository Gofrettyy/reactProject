import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
  return (
    <div>
      <Button onClick={signIn} primary>Giriş Yap</Button>
      <Button primary style = {{marginLetf :'0.5em'}}>Kayıt Ol</Button>
    </div>
  )
}
