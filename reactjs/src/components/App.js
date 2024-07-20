
import Logins from './Logins'
import SignUp from './SignUp';
import Home from './Home';
import AddMedicine from './AddMedicine';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
       <div>
        <Routes>
          <Route path='/' element={<Logins />}/>
          <Route path='signup' element={<SignUp/>}/>
        </Routes>

    </div>
    </BrowserRouter>
 

  );
}

export default App;