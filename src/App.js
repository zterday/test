import React, { useState } from 'react'
import Login from './containers/login'
import FormInput from './containers/form'
import 'semantic-ui-css/semantic.min.css'

const App = () => {

  const [currentPage, setCurrentPage] = useState('login')

  const handleChangePage = (value) => {
    setCurrentPage(value)
  }

  return (
    <div className="App">
      {currentPage === 'login' && <Login handleChangePage={handleChangePage} />
      }
      {
        currentPage === 'form' && <FormInput />
      }
    </div>
  )
}

export default App
