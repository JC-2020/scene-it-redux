import { useContext } from 'react';
import { Container, Fab } from '@material-ui/core';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import Favorites from './pages/Favorites';
import ThemeContext from './context/ThemeContext';

function App() {
  const themeContext = useContext(ThemeContext);
// handleToggle
  const handleToggle = () => {
    themeContext.toggle()
  }
  return (
    <Container>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
      <Fab 
        color='primary'
        style={{ position: 'fixed', bottom: '20px', right: '20px', fontSize: '30px', }}
        onClick={handleToggle}
        >{ themeContext.darkMode ? '🌘' : '🌞' }</Fab>
    </Container>

  );
}

export default App;