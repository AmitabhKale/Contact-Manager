import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header  branding="Contact-Manager" />
    <div className="container">
    <Contacts />
{/* 
      <Contact 
              name="John Doe"
              email="john@gmail.com"
              phone="9992222111"
      /> */}
    </div>
         
     
  
    </div>
  );
}

export default App;
