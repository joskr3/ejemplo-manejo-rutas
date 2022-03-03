import React from 'react'
import Footer from '../../Componentes/Footer/Footer'
import Header from '../../Componentes/Header/Header'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleRedirection = () => {
    navigate( 'login' );
  }

  return (
    <>
      <Header titulo="Home" />
      <main>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          doloremque.
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          doloremque.
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          doloremque.
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          doloremque.
        </p>

        <button onClick={handleRedirection}>
          IR AL LOGIN!!
        </button>
      </main>

    </>
  )
}

export default Home