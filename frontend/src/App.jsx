import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import { AuthProvide } from './context/AuthContext'


function App() {
  return (
    <>
      <div className='m-auto'>
        <AuthProvide>
          <Navbar />
          <main className='min-h-screen w-9/10 m-auto mx-auto px-4 py-6 font-sans' >
            <Outlet />
          </main>
          <Footer />
        </AuthProvide>
      </div>
    </>
  )
}

export default App
