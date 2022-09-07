import { useState } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import MainContainer from './components/MainContainer'


export default function MainPage() {
  const [ showState, setShowState ] = useState(false);

  return (
    <>
        <Header />
        <MainContainer />
        <Footer setShowState={setShowState} showState={showState} />
    </>
  );
}
