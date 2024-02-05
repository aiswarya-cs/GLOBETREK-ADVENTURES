import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Nabvar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Main />
      <Footer />
     </div>
  );
}

export default App;
