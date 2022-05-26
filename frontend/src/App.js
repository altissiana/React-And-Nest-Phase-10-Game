import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';

import DashboardPage from './pages/DashboardPage';
import StartALobbyPage from './pages/StartALobbyPage';
import FindALobbyPage from './pages/FindALobbyPage';
import LobbyPage from './pages/LobbyPage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <>
    <GlobalStyle/>
      <Router>
          <Routes>
            <Route exact path='/' element={
              //signup and login goes here then it redirects the user to dashboard page
              <>
                <SignUp />
              </>
            }>
            </Route>
            <Route path='/dashboard' element={<DashboardPage/>}/>
            <Route path='/start-lobby' element={<StartALobbyPage/>}/>
            <Route path='/find-lobby' element={<FindALobbyPage/>}/>
            <Route path='/lobby' element={<LobbyPage/>}/>
            <Route path='/game' element={<GamePage/>}/>
          </Routes>  
      </Router>
    </>
  );
}

export default App;
