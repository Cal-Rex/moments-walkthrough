import styles from './App.module.css'
// css is now imported as a component called styles, 
// and the css classes and id's can be accessed using dot notation
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom'
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import PostsPage from './pages/posts/PostsPage';
import PostEditForm from './pages/posts/PostEditForm';
import { useCurrentUser } from './contexts/CurrentUserContext';
import ProfilePage from './pages/profiles/ProfilePage';
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from './components/NotFound';


function App() {
  const currentUser = useCurrentUser()
  const profile_id = currentUser?.profile_id || "";

  return (

    <div className={styles.App}>
      
      <NavBar />

      <Container className={styles.Main}>

        <Switch>
          <Route exact path="/" render={() => <PostsPage message="No results found. Adjust your search keyword" />} />
          <Route exact path="/feed" render={
            () => <PostsPage 
            message="No results found. Adjust your search keyword or follow a user" 
            filter={`owner__followed__owner__profile=${profile_id}&`}
            />
          } 
          />
          <Route exact path="/liked" render={
            () => <PostsPage 
            message="No results found. Adjust your search keyword or like a post" 
            filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
            />
          } 
          />
          <Route exact path="/signin" render={() => <h1><SignInForm /></h1>} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />}/>
          <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />}/>
          <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />}/>
          <Route render={() => <NotFound />} />
        </Switch>
        
      </Container>
    </div>
    
  );
}

export default App;