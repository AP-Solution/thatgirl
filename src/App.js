import React, { useState } from 'react';
import './App.scss';
import { Main } from './components/Main/Main';
import { Modal } from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <Main
        setIsModalOpen={setIsModalOpen}
      />
      {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default App;
