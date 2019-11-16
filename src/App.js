import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Dog" breed="Irish Setter" />
      <Pet name="Pretty Boy" animal="Bird" breed="Parakeet" />
    </div>
  )
}

render(<App />, document.getElementById('root'))
