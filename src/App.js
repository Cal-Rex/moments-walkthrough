import styles from './App.module.css'
// css is now imported as a component called styles, 
// and the css classes and id's can be accessed using dot notation
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom'
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';


function App() {
  

  return (

    <div className={styles.App}>
      
      <NavBar />

      <Container className={styles.Main}>

        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <h1><SignInForm /></h1>} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route render={() => <p>Page not found!</p>}></Route>
        </Switch>
        
      </Container>
    </div>
    
  );
}

export default App;