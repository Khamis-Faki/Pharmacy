
import AddMedicine from './components/AddMedicine';
import Home from './Home';
import Logins from './Logins'
import SignUp from './SignUp';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ViewMedicine from './ViewMedicine';
function App() {
  return (
    
      <BrowserRouter>
       <div>
        <Routes>
          <Route path='/' element={<Logins />}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='home' element={<Home />}/>
          <Route path='addmedicine' element={<AddMedicine/>}/>
          <Route path='viewmedicine' element={<ViewMedicine/>}/>
        </Routes>

    </div>
    </BrowserRouter>

  );
}

export default App;
