import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import BdAddress from './components/BdAddress/BdAddress';
import CoinInfo from './components/CoinInfo/CoinInfo';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UsAddress from './components/UsAddress/UsAddress';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/coins' element={<Coins></Coins>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}>
              <Route path='bdaddress' element={<BdAddress></BdAddress>}></Route>
              <Route path='usaddress' element={<UsAddress></UsAddress>}></Route>
          </Route>
          <Route path='/coininfo/:coinId' element={<CoinInfo></CoinInfo>}></Route>        </Routes>
    </div>
  );
}

export default App;
