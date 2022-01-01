import './App.css';
import Nav from './components/base/Nav';
import Footer from './components/base/Footer';
import {Routes, Route} from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        {
          routes.map((item, index) => <Route key={index} path={item.path} element={<item.element/>}/> )
        }
      </Routes>
      <Footer/>   
    </div>  
);
}

export default App;
