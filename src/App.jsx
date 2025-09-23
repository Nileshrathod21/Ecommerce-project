import './App.css';
import Cartdatacontainer from './Container/Cartdatacontainer';
import { Headercontainer } from './Container/Headercontainer';
import { HomeContainer } from './Container/Homecontainer';
import { Routes } from 'react-router';
import { Route } from 'react-router';

function App() {
  return (
    <>
      <Headercontainer />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/Cart" element={<Cartdatacontainer />} />
      </Routes>
    </>
  );
}

export default App;
