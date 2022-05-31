import { Routes , Route} from 'react-router-dom';

import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentification from './routes/authentification/authentification.components.jsx';
import Shop from './routes/shop/shop.component.jsx';
import Checkout from './routes/checkout/checkout.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentification/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        
      </Route>
    </Routes>
  )
}

export default App;
