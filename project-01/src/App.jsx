import React from 'react'
import Navigation from './components/Navigation'
import ContactHeader from './components/ContactHeader'
import ContactForm from './components/ContactForm'

const App = () => {
  return (
    <div>
      <Navigation/>
      <ContactHeader/>
      <ContactForm/>
    </div>
  )
}

export default App