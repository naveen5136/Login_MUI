import './App.css';
import Cards from './components/Cards';
import Navbar from './Navbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'
import Login from './components/Login';
import Sidebar from './Sidebar';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Inbox from './components/Pages/Inbox';

function App() {
  return (
    <ThemeProvider theme={theme}>
    
     <Routes>
       <Route path="/cards" element={<Cards/>}/> 
       <Route path="/starred" element={<Login/>}/>
       <Route path="/inbox" element={<Inbox/>}/>
     </Routes>
  
      
      
      <Sidebar/>
      </ThemeProvider> 

  )
}

export default App;
