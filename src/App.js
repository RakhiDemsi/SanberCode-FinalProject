import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header'
import Services from './components/Services'
import StudioList from './components/StudioList'
import Footer from './components/Footer'
import './App.css';

function App() {
  const header = []
  const services = []
  const studiolist = []
  const footer = []

  return (
    <div className="App">

    <Header header={header}></Header>
    <Services services={services}></Services>
    <StudioList studiolist={studiolist}></StudioList>
    <Footer footer={footer}></Footer>

    </div>
  );
}

export default App;
