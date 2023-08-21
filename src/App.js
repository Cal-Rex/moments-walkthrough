import styles from './App.module.css'
// css is now imported as a component called styles, 
// and the css classes and id's can be accessed using dot notation
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <h1>Home page</h1>
        <h1>Sign in</h1>
      </Container>
    </div>
  );
}

export default App;