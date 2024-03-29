
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';


import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); // Wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1200);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }

  }
  return (
<>
<Router>
<Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} aboutText="About" />
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Charecter counter, Remove Extra spaces" mode={mode}/>
          </Route>
</Switch>


</div>
</Router>

</>
  );
}
export default App;
