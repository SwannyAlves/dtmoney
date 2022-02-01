import React from 'react'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { Transation } from './components/Transations'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Header />
        <Dashboard/>
        <Transation/>
      </>
    </div>
  )
}
