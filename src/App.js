import './App.css';
import Cards from './components/Cards';
import Navbar from './Navbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'
import Login from './components/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Cards/>
      <Navbar />
      <Login />
      </ThemeProvider>
  )
}

export default App;
