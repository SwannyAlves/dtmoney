import React, { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { Transation } from './components/Transations'
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal'

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
        <Dashboard/>
        <Transation/>
      </>
    </div>
  )
}
