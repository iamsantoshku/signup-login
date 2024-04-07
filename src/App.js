
// import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Welcome from './components/Welcome';
import AppRoutes from './route/AppRout';
import Header from './components/Header';
// import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Welcome/> */}
      {/* <Signup/> */}
     <AppRoutes/>
     
    </div>
  );
}

export default App;
