import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enable","Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enable","Success");
    }
  }
  return (
    <>
      <Navbar title='Simple Text Editor'  mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        <TextForm showAlert={showAlert} heading='Enter Text To Analyze' mode={mode} />
      </div>
    </>
  );
}

export default App;