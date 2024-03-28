import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Navbar/Navigation';
import Home from './componet/Home';
import Card from './componet/Card';
import Pagebutton from './componet/Pagebutton';
import Dataincerment from './componet/Dataincerment';
import UseEffect from './componet/UseEffect';
import AddDelete from './componet/Add&Delete';
import Ref from './componet/UseRef';
import { UseState } from './componet/UseState';
import SignalineUsestate from './componet/Signalineusestate';
import Api from './componet/Api';
import Apicrud from './componet/Apicrud';
import Asyncawaitdata from './componet/Apiasync&await';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/pagebutton" element={<Pagebutton />} />
        <Route path="/pagebutton" element={<Pagebutton />} />
        <Route path="/Dataincerment" element={<Dataincerment />} />
        <Route path="/UseEffect" element={<UseEffect />} />
        <Route path="/Add&Delete" element={<AddDelete/>} />
        <Route path="/UseRef" element={<Ref/>} />
        <Route path="/UseState" element={<UseState/>} />
        <Route path="/SignalineUsestate" element={<SignalineUsestate/>} />
        <Route path="/Api" element={<Api/>} />
        <Route path="/Apicrud" element={<Apicrud/>} />
        <Route path="/Apiasync&await" element={<Asyncawaitdata/>} />
      </Routes>
    </>
  );
}

export default App;
