# index

## 1. Getting set up

1. [getting set up](#getting-set-up)
    video: https://youtu.be/qANVPIWHfQg
    [page: (section 3)](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/953cd4e5015f483bb05263db3e740e19/)
    - [creating a React App in a workspace](#creating-a-react-app-in-a-workspace)
    - [managing a `'error:03000086:digital envelope routines::initialization error'`](#managing-a-error03000086digital-envelope-routinesinitialization-error)
    - [setting up and connecting to heroku](#setting-up-on-heroku)

2. [React Bootstrap](#react-bootstrap)
    - video: https://youtu.be/UxCnAp0gAc0
        - at time of tutorial, v5 in testing, so tutorial uses v4
        - why react bootstrap over boostrap and jquery
        - side-by-side comparison of React bs and bs
    - [react bootstrap libraries (v4)](https://react-bootstrap-v4.netlify.app/)
    - [installing bootstrap](#installing-bootstrap)
    - install snippets for faster coding

## 2. Navigation and Authentication

3. [Navigation: creating the NavBar](#navigation-creating-the-nav-bar)
    - video: https://youtu.be/NeJ-pY4nsEI
        - create navbar component
        - importing and using images
        - using bootstrap components: basics
        - using custom favicon
        - using fontawesome with react (add the script tag to index in the public folder)
    - setting up the components directory

4. [Using Custom CSS in React](#using-custom-css-in-react)
    - Video: https://youtu.be/ylLQmEouIsU
        - why you should have a css file for each component
    - using Google fonts (imported in the index html)
    - additional materials
        - [Using CSS Modules to style React Components](https://medium.com/@ralph1786/using-css-modules-in-react-app-c2079eadbb87)
        - [React Documentation: Adding a CSS Modules Stylesheet](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

5. [Routing in React](#routing-in-react)
    - Video: https://youtu.be/lORLzImNzis
    - using the React Router Library
    - how to handle routing in React so that different urls will render different pages
    - using pseudo elements/classes in jsx
    - Adding a Page not found page

6. [Authentication: Creating the SignUp form part 1](#authentication-creating-the-signup-form---part-1)
    - Video: https://youtu.be/t2wJpOYdh-s
    - create a workign signup form
    - hide elements depending on device size
    - have a form create a new accoutn on a database
    - provide feedback to user if there are errors on form
    - Link up database API with React Project

7. [Authentication: Creating the SignUp form part 2](#authentication-creating-the-signup-form-part-2)
    - Video: https://youtu.be/2gJBVirR2gc
    - how to send data to the API
    - how to write event handlers
    - display feedback when form encounters an error
    - handling non-field errors
    - [CHECK THAT ALL YOUR URLS IN YOUR API MATCH](#check-the-api)
    - [challenge for creating sign in form/making forms (has good hints)](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/b398c39fcbef44ca8b23dbac5e7f6067/) - spans 3 sections (book icons)

8. The useContext Hook
    - Video: https://youtu.be/TNZNKkVFCWw
    - display different links/render different content depending on the user's authentication/logged in status
    - sending request to API to check what user is logged in
    - Check what icons do display based on the current user
    - how to use the useContext hook
    - [using JSX fragments](#jsx-fragments)

9. [Refactoring to a custom context hook](#refactoring-to-a-custom-context-hook)
    - CurrentUserContext code into a custom hook and put it into its own folder.

10. [Authentication: access and refresh tokens](#authentication-access-and-refresh-tokens)
    - Video: https://youtu.be/B84S7MplrMY
    - refreshing our access tokens.
        - using interceptors to refresh access tokens
        - and handle errors before they occur
    - Create axios interceptors for response and request interceptors
    - configure response interceptor to listen for 401 errors in the responses from the API, 
        - make it attempt to refresh the access token when needed and respond accordingly.
    - wire up axiosRes instance in handleMount function to use response interceptor.
    - configured the request interceptor to always refresh the access token before proceeding with the actual request.

11. 

    

_________________________

## Getting set up

for the walkthrough a template was provided, but here is a set up in general terms for reference/future:

#### creating a react app in a workspace

**walkthrough specific tutorial steps 1-2**
1. create a new repo with the following [template](https://github.com/Code-Institute-Org/react-ci-template/generate)
2. enter the following command in the CLI:
    - `npm install`

**modern steps 1-2**
1. create a new blank repo with no template
2. enter the following command in the CLI to create a react app
    - `npx create-react-app . --use-npm`

3. start the app:

    > I think the create-react-app command sometimes adds an older version of react-scripts which is what causes the issue. We just needed to update the version of react-scripts to the latest one for it to work.
        - jason @ CI
    - run `npm install react-scripts@latest`
    - then run `npm install` so it updates **package-lock.json**
    - with `npm start`
    - > This should make the preview work as well as the deployment run without issue on heroku


4. remove the react custom header, in `src > App.js` remove the `<header>` element from the return statement
5. inside the return div, add an `<h1>` with `hello world`
6. make the initial commit

#### setting up on heroku

- create a new app
- go to the deploy section of the new app, connect up github to the app
- once connected, make a deployment to check its all connecting ok

_______________________________________________________

## React Bootstrap

### Installing bootstrap

1. you can find this command by going to **getting started** on the  [react bootstrap page](https://react-bootstrap-v4.netlify.app/) but heres the command as a shortcut:
    - `npm install react-bootstrap bootstrap@4.6.0`

2. go to `public > index.html` in the project directory. add the css link for bootstrap provided by the documentation:
    ```html
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
    crossorigin="anonymous"
    />
    ```

3. in `index.html` for the `<link>` for `manifest`, add a `crossorigin` attrbute of `"use-credentials"`
    > This doesn’t have anything to do with React-Bootstrap, but it will get rid of a pesky console error.
    - `<link rel="manifest" href="%PUBLIC_URL%/manifest.json" crossorigin="use-credentials"/>`

4. test its all working by creating a bootstrap button, get the code for a button from [here](https://react-bootstrap-v4.netlify.app/components/buttons/)
    > We don’t need this code at the end of the line, that is just inserting a single white space between the buttons in the preview here.
    - be sure to `import` the button component as well:
    > You should import individual components like: react-bootstrap/Button rather than the entire library. Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.
        - react documentation
    ```jsx
    import Button from 'react-bootstrap/Button';

    // or less ideally
    import { Button } from 'react-bootstrap';
    ```

5. install ES7 snippets into gitpod:
    1. in gitpod, in the extension side panel, search for: `ES7+ React/Redux/React-Native snippets` by dsznajder


_____________________________________________________________________

## Navigation: creating the nav bar

create the navbar component with the following steps:

1. Create a 'components' directory inside `src`
2. add a `NavBar`.js file inside the components directory
3. in the `NavBar`.js file, use the `rafce` snippet to create a functional component
4. add some placeholder text to the navbar component
5. export/import the nav bar into `App`.js
6. remove the button component and import

**adding a navbar into the component**

go to the bootstrap docs and just lift a navbar component and paste it in

> All our main site content will be wrapped in Bootstrap Containers to keep it from pushing out too far to the edges on larger screens, so to keep our navbar elements to the same sizes, we’ll wrap the contents inside it in a container as well.
- example:
```jsx
import { Container, Navbar, Nav } from 'react-bootstrap';
import React from 'react'
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <Navbar expand="md" fixed="top">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="45"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link>
                        <i className="fas fa-home"></i>Home
                    </Nav.Link>
                    <Nav.Link>
                        <i className='fas fa-sign-in-alt'></i>Sign In
                    </Nav.Link>
                    <Nav.Link>
                        <i className='fas fa-user-plus'></i>Sign up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default NavBar
```

- running the app from here will compile errors, make sure to iport al the top level elements for the component, in this case, `Container`, `Navbar` and `Nav` need to be imported

_____________________________________________________________

## Using custom CSS in React

1. import fonts from google via the index
    - `<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&display=swap" rel="stylesheet" /> `

> Now we have imported our font, we want to apply  it to our entire application, so inside the src...  

2. **delete** `App.css`

3. create a new file: `App.module.css`

> Note the naming convention here, module.css. The  module in the file name allows React to do some  
clever things behind the scenes, which we will  talk about a bit later

4. inside the new file, add:
    ```css
    .App {
        font-family: "DM Sans", sans-serif;
        background-color: #f8f8f8;
        min-height: 100vh;
    }
    ```
    - this creates global variables for the App

5. import these new style rules into App.js
    - `import styles from './App.module.css'`
    - > This will import all the styles from the  App.module.css file and save it as an object named styles.

6. apply the `.App` class style rule to the main div of the `App`.js
    ```jsx
    import styles from './App.module.css'
    // css is now imported as a component called styles, 
    // and the css classes and id's can be accessed using dot notation
    import NavBar from './components/NavBar';

    function App() {
    return (
        <div className={styles.App}>
        <NavBar />
        </div>
    );
    }

    export default App;
    ```

7. create a new folder called `styles` in the `src` folder
    - all oher CSS files will be stored here
    - only the Css for the main app is stored on `src` level
    - each app will have it's own style sheet

8. create the css file for NavBar :  `NavBar.module.css`

9. in that file create a class rule for `.NavBar`:
    ```css
    .NavBar {
    background-color: #ffffff;
    border: 1px solid #dadadf;
    }
    ```

10. import the stylesheet into the NavBar app:
    ```jsx
    import styles from '../styles/NavBar.module.css'
    ```

11. apply the style to the `NavBar` element:
    ```jsx
    const NavBar = () => {
        // see the className attribute
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <Navbar.Brand>
        ...
    ```
    > Let’s inspect our code here and take a look  at what has been rendered in the browser. Have a look at the class names on the nav  element, this first one, NavBar_Navbar, then two more underscores and some random numbers  and letters called a hash. This hash is generated when our components are rendered because we used  the module.css file type, and is used to uniquely identify our component class names. So, we could  use the same class name in another component, but because of this unique hash, the css from that one  component can’t override another components css.

12. paste in the source code provided for the walkthrough now that you kno how to do this manually

__________________________________________________

## Routing in React

- how to handle routing in React so that different urls will render different pages
- using pseudo elements/classes in jsx
- Adding a Page not found page

1. Wrap all your main content in a `Container`
```jsx
import styles from './App.module.css'
import NavBar from './components/NavBar';
// import the container
import { Container } from 'react-bootstrap';

function App() {
    // add the Container in the outer div, house the headings inside it
  return (
    <div className={styles.App}>
      <NavBar />
      <Container>
        <h1>Home page</h1>
        <h1>Sign in</h1>
      </Container>
    </div>
  );
}

export default App;
```

2. Currently, the navbar is in a fixed position and is going to be overlapping the Container with the H1's so modify the css:
```css
/* create this style rule in App.module.css */
.Main {
    padding-top: 81px;
}
```

3. apply the new rule to the container:
```jsx
...
function App() {
    // see, className for the container is the same as above.
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
...
```

### Routing in React using React Router library

install it with: 
modern ver: `npm install react-router-dom`
ver used in walkthrough: `npm install react-router-dom@5.3.0`

components of the library:

##### Router
> The BrowserRouter component uses the browser history API to keep our UI in sync with the URL. It holds all the state required, so it has to wrap around all the other react-router library components.

##### Switch
> Switch holds all the routes and renders the first one that matches the current url.

##### Route
> A Route renders a given component when its path matches the current URL.

##### Link
> A Link component is just like our  good old friend the anchor tag, but it’s used with react router to link to a different Route instead.
```jsx
// The Router handles all the navigation
<Router>
    
    <div>
        <nav>
            <ul>
                <li>
                    // component renders a link to the /example-component Route 
                    <Link to="/example-component">Example Component</Link>
                </li>
            </ul>
        </nav>
    </div>

    // The Switch handles all the Routes
    <Switch>
        // The Route contains the Component
        <Route path="/example-component">
            <ExampleComponent />
        </Route>
    </Switch>

</Router>
```

how it works.

- components are nested in `Route`s which establish what the `path` in the browser url has to be for the component to load
- the `NavLink` components use a `to` prop to change the browser url to a given value
- this then makes the desired `Route` load whatever is inside its tags


how to use:
1. import the following into `index`.js
    `import { BrowserRouter as Router } from 'react-router-dom'`

> As you can see, React references the root div from index.html in the public folder. All of these components will be rendered inside it. In order for our Router to work, we need to wrap the App component inside it.

2. in index.js wrap the `App` component in the `Router` component tags
```jsx
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
```
> Now, in App.js, we’ll import the Switch and Route components so we can set up routing for our React project.

3.  in App.js, make the following import:
    - `import { Route, Switch } from 'react-router-dom'`

4. add in the code:
```jsx
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        // the switch holds all of the routes
        <Switch>
            // when the `path` prop matches the browser url, 
            // the `render` runs the content in the arrow function
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          // The `exact` prop tells the route to only render its component
          // when the url entered is exactly the same.
          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
        </Switch>
        
      </Container>
    </div>
  );
}

export default App;
```

5. check the routes are working by manually typing in the path onto the browser url

> Our routes are working, so now we need  to wire up our links in the navbar.  

6. in `NavBar`.js, import the following:
    - `import { NavLink } from 'react-router-dom';`

7. wrap the logo in the `NavBar` app with a `NavLink` that goes `to` an empty path (`"/"`)
```jsx
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                // nav link added here
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="45"/>
                    </Navbar.Brand>
                </NavLink>
            ...
        ...
    ...
```

8. repeat this process for the `Home`, `Sign in` and `Sign up` elements

9. check it all works and then amend css styling as appropriate

#### Using Peudo classes in JSX

10. add Css style rules to links, regular classes are given to elements with the `className` prop, but pseudo classes like `active` can be applied like so: `activeClassName`. see code below for example:
 - note how the `home` link has the `exact` prop. This is because "`/`" is also in all of the other links, so css style rules were getting applied to the button as if it was also active. using `exact` stops this from happening because the url must be `exact` to trigger this.

```jsx
import { Container, Navbar, Nav } from 'react-bootstrap';
import React from 'react'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="45"/>
                </Navbar.Brand></NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
                        <i className="fas fa-home"></i>Home
                    </NavLink>
                    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
                        <i className='fas fa-sign-in-alt'></i>Sign In
                    </NavLink>
                    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
                        <i className='fas fa-user-plus'></i>Sign up
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default NavBar
```

#### adding a "page not found" page

add the following code to as the **last** `Route` App.js
```jsx
<Route render={() => <p>Page not found!</p>}>
```
> We  don’t want to pass in the ‘path’ prop as we need to match any url not defined earlier in any of the previous routes. Now this page not found message will appear for any random url we enter into the browser.
___________________________________________________

## Authentication: Creating the SignUp form - part 1

- create a workign signup form
- hide elements depending on device size
- have a form create a new accoutn on a database
- provide feedback to user if there are errors on form
- Link up database API with React Project

### Link up previously created DRF API with React Project
1. go to heroku
2. go to the API app
3. go to its Config vars and add the following:
    - `CLIENT_ORIGIN` : `https://the-link-to-the-deployed-react-app`
    - `CLIENT_ORIGIN_DEV` : `https://the-link-to-the-workspace-environment`

> So, we just told our API to accept requests from our React project, now we also need to tell our React project to send requests to the API To achieve this we can use the Axios library that we used in React Essentials.

4. in the terminal, install `npm install axios`

5. create a new folder in `src` called `api`
    inside that new folder create a file called `axiosDefault.js`

6. in the new file add:
```jsx
import axios from "axios";

axios.defaults.baseURL = 'https://django-rest-walkthrough-8fb26a5960d5.herokuapp.com/'
    // this is  the unique url of your deployed API project.
    // tells react where to send data to

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
    // establish the type of data being sent. 
    // multipart/form-data is the data format the API will be expecting. 
    // We need the multipart because our application will be dealing with images
    // as well as text in its requests.

axios.defaults.withCredentials = true
    // To avoid any CORS errors when sending cookies,
    // we also need to set withCredentials to true.
```

7. import the new axios commands into `App.js`
    ```jsx
    import './api/axiosDefaults'
    ```

### create a new form

8. add these following css files to the project:
    - [App.module.css](https://github.com/mr-fibonacci/moments/blob/cf955d2f2e6f70f61c92d1f9de85558d8e49f3a8/src/App.module.css)
    - [Button.module.css](https://github.com/mr-fibonacci/moments/blob/cf955d2f2e6f70f61c92d1f9de85558d8e49f3a8/src/styles/Button.module.css)
    - [SignInUpForm.module.css](https://github.com/mr-fibonacci/moments/blob/cf955d2f2e6f70f61c92d1f9de85558d8e49f3a8/src/styles/SignInUpForm.module.css)

9. create a new folder in `src` called `pages`

10. inside the `pages` folder create a folder called `auth`

11. in the `auth` folder create a `SignUpForm.js` file

12. paste in the boilerplate code provided:
    - [SignUpForm.js](https://github.com/Code-Institute-Solutions/moments-starter-code/blob/master/06-starter-code/SignUpForm.js)

13. add the newly created `SignUpForm` component into the specified `Route` in `App`.js
```jsx
<Route exact path="/signup" render={() => <SignUpForm />} />
``` 

14. grab a form component from React bootstrap and implement it into the `SignUpForm`

15. cut out the bits you dont need, copy the password field and make a second passowrd field. add styling from the imported CSS
```jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

            <Form>
                <Form.Group controlId="username">
                        {/* In React Bootstrap this control Id prop defines
                        the related id and for attributes on the input and 
                        label elements */}
                    <Form.Label className="d-none">Username</Form.Label>
                        {/* to make form accessible to screen readers but
                        not harm site aesthetics, set the class to "d-none"
                        so that it doesn't display */}
                    <Form.Control className={styles.Input} type="text" placeholder="Username" name="username" />
                </Form.Group>

                <Form.Group controlId="password1">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control className={styles.Input} type="password" placeholder="Password" name="password1"/>
                </Form.Group>

                <Form.Group controlId="password2">
                    <Form.Label className="d-none">Confirm Password</Form.Label>
                    <Form.Control className={styles.Input} type="password" placeholder="Confirm Password" name="password2"/>
                </Form.Group>

                <Button
                    // using template Literals here 
                    // to apply multiple class values to the className prop
                    className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                    type="submit"
                >
                Sign Up
                </Button>
            </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;
```

_______________________________________________________________________________

## Authentication: Creating the SignUp form part 2

- how to send data to the API
- how to write event handlers
- display feedback when form encounters an error (catching form errors)
- storing form values with a useState hook


### storing form values with a useState hook

1. in SignUpForm import the `useState` hook
    -   ```jsx
        import React, {useState} from "react";
        ```
2. set a hook up for `signUpData`:
    ```jsx
    ...

    const SignUpForm = () => {
        // heres the hook created using the useState Hook
        // its taking all the values of the form as props
        // within the signUpData state
        const [signUpData, setSignUpData] = useState({
            username: '',
            password1: '',
            password2: '',
        })

    const { username, password1, password2 } = signUpData
        // bit of packing the separate form values into the prop

    return (
        ...

        <Form>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control 
                        className={styles.Input} 
                        type="text"
                        placeholder="Username"
                        name="username" 
                        value={username}
                            // see the value above here,
                            //thats the value being sent to the 
                            // signUpData const
                        />
                </Form.Group>

                ...
    ```

### how to write event handlers

> We can't type anything in these fields until we write the onChange Handler. So Now, we need to write the universal onChange handler for when we try to type something into an input field so that it works.

3. above the return write a handleChange function:
```jsx
...
const handleChange = (event) => {
setSignUpData({
    ...signUpData,
    // use the ...spread operator to spread the form data into the state
    [event.target.name]: event.target.value,
    // this code targets the named item in the event that matches a prop, and updates it with its value
    // think of it as targeting the value in a list with the name of the element's name
})
}

return (
...
```

4. add the `onChange` attribute to the form items:
```jsx
  const handleChange = (event) => {
    setSignUpData({
        ...signUpData,
        [event.target.name]: event.target.value,
    })
  }

  return (
    ...
            <Form>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control 
                        className={styles.Input} 
                        type="text"
                        placeholder="Username"
                        name="username" 
                        value={username} // this is the attribute the event targets
                        onChange={handleChange} // this is the event handler that triggers
                        />
                </Form.Group>
```

### how to send data to the api

5. create an `async` `handleSubmit` function that 
    - prevents the default process of submitting a form
    - has a `try` statement that `await`s `axios` `post`ing the `signUpData` state values to `"/dj-rest-auth/registration/"`
    - that uses the react `history` function to `push` users to the `"/signin"` path 
    - that is set up to catch errors(that's coming up after this)
    ```jsx
    // It's an async function, so it works in the background, hense the use of the 
    // "await keyword"
    const handleSubmit = async (event) => {
        event.preventDefault();
            // Prevents the default form submission
        try {
            await axios.post('dj-rest-auth/registration/', signupData)
                // runs an asyncfunction waiting for the data to successfully post to the API
            history.push('/signin')
                // redirects the user to signin upon success
        } catch(err){

        }
    }
    ```

### catching form errors

6. set up a hook to catch the errors:
    ```jsx
    ...
    const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password1: '',
        password2: '',
    })
    const { username, password1, password2 } = signUpData

    // here
    const [errors, setErrors] = useState({});
    ...
    ```

7. inside the `catch` block of the `try` statement in `handleSubmit`:
    - use `setErrors` to catch `err.response` using optional chaining (`?`)
    ```jsx
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('dj-rest-auth/registration/', signupData)
            history.push('/signin')
        } catch(err){
            // "?" optional chaining used on the response:
            // What it does is check if response is defined before
            // looking for the data.  So if response isn’t defined,
            // it won’t throw an error.
            setErrors(err.response?.data)
        }
    }
    ```

> now that the errors are being stored in the state they can be displayed to the user when something goes wrong

8. under each `FormGroup` component, call the `errors` object on using the value name of the form element above it using optional chaining (`?`), and run a `map` method on it
    - pass it the arguments of `message` and `idx`
    - inside the `map` method, create an `Alert` component (needs to be imported, but will probably be auto imported when called from dropdown/autocomplete)
    - inside the `Alert` component, pass the props `variant`=`warning` and `key`=`{idx}`
    - inside the `Alert` tags, add the `{message}` component
```jsx
<Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control 
                        className={styles.Input} 
                        type="text"
                        placeholder="Username"
                        name="username" 
                        value={username}
                        onChange={handleChange}
                        />
                </Form.Group>
                {/* see the error code below here*/}
                {errors.username?.map((message, idx) => 
                    <Alert variant="warning" key={idx}>{message}</Alert>
                )}

```

### handling non field errors

> The last piece of feedback we have to add is  for the so-called non-field-errors, such as when the passwords don’t match. 

9. under the `submit``button` add an Alert, but this time instead of handling a field dot notated by errors, it should handle `non_field_errors`
```jsx
    ...
    <Button
        className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
        type="submit"
        >
        Sign Up
        </Button>
        // error handling here, right below the button
        {errors.non_field_errors?.map((message, idx) => (
        <Alert key={idx} variant="warning" className="mt-3">
            {message}
        </Alert>
        ))}
</Form>
...
```

10. check it doesnt work, then check it does all work by creating a new account

### Check the API

when i did this in the tutorial i couldnt get the form to submit or throw errors because i had incorrectly set up the urls in the API

make sure to have Auth registration. refer to the drf_api urls in the Dajango rest walkthrough repo


_______________________________________________________________________________________

### The useContext Hook

- Video: https://youtu.be/TNZNKkVFCWw
- display different links/render different content depending on the user's authentication/logged in status
- sending request to API to check what user is logged in
- Check what icons do display based on the current user
- how to use the useContext hook

### sending request to API to check what user is logged in

1. go to the App.js file and create a useState Hook and set its default value to `null`:
```jsx
function App() {
    // this is the hook
    const [currentUser, setCurrentUser] = useState(null)

  return (...
```

> Now, we should make a network request to check  who the user is, based on their credentials in the cookie. To do that, we have to make a GET request to the `dj-rest-auth/user/` endpoint of our API. As is usually the case with network requests,  we’ll have to make it when the component mounts.

2. create a `handleMount` `async` function
    - inside create a `try/catch` block
    - inside the `try` statement set a `const` of `{data}` that `await`s the restult of a `get` request made by `axios` to the endpoint `('dj-rest-auth/user/')`
    - still inside the `try`, update the state of the `currentUser` with the requested data from the API
    - inside the `catch` statement, make a `console.log` that prints the `err`
    ```jsx
    ...
    function App() {
        const [currentUser, setCurrentUser] = useState(null)

        const handleMount = async () => {
            try {
            const {data} = await axios.get('dj-rest-auth/user/')
            setCurrentUser(data)
            } catch (err) {
            console.log(err)
            }
        }
        ...
    ```

3. now create a hook that handles on the component mounting. make a `useEffect` hook with an empty dependency array:
    - inside it, call the `handleMount()` function just created
    ```jsx
    ...
    const handleMount = async () => {
        try {
        const {data} = await axios.get('dj-rest-auth/user/')
        setCurrentUser(data)
        } catch (err) {
        console.log(err)
        }
    }

    useEffect(() => {
        handleMount()
    }, [])
    // see the empty array above, thats the empty dependency
    // that make the component only run once (on initial mount
    // of the component)
    ...
    ```

### how to use the useContext hook

> As you can probably imagine, different pieces of UI will be displayed based on whether the user browsing our site is logged in or not.  This means that user state and data will be used all over the application. 

> It would  be a real pain to have to pass both the currentUser variable and its setter function manually as props down the component tree. So, in order to make it more accessible, we’ll use the useContext hook. 

The React documentation states that: 
> context provides a convenient way to pass data required by many components in an application. 

> Essentially, Context is designed to share data that can be considered “global” to any child components that need access to it. 

4. in `App`.js, import `createContext` from `"react"` (same import line as `useEffect`/`useState`)

5. underneath that, `export` a const of `CurrentUserContext` that has the value of `createContext()`

6. underneath that, make another `export`, a const of `setCurrentUserContext` with the value of `createContext()`
```jsx
...
import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

// kind of like setting a big huge useState hook
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  ...
```

7. wrap the value of the `return` statement in `App`.js with `<CurrentUserContext.Provider><SetCurrentUserContext.Provider> </SetCurrentUserContext.Provider></CurrentUserContext.Provider>`

8. add `value` props to both new tags
    - the value of `CurrentUserContext.Provider` should be: `{CurrentUser}`
    - the value of `SetCurrentUserContext.Provider` should be: `{setCurrentUser}`
    ```jsx
    ...
    return (
        // see the outer 2 components
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
            <div className={styles.App}>
            
            <NavBar />

            <Container className={styles.Main}>

                <Switch>
                <Route exact path="/" render={() => <h1>Home page</h1>} />
                <Route exact path="/signin" render={() => <h1><SignInForm /></h1>} />
                <Route exact path="/signup" render={() => <SignUpForm />} />
                </Switch>
                
            </Container>
            </div>
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    );
    ...
    ```

> these two Context Object Providers will allow both the currentUser value and the function to update it, to be available to every child component in our application.

these 2 components are now considered `exposed` to any children elements wrapped inside, the child elements can now `consume` the context of the data of these components

### how to condume context from child components

explanation of how it works:
- create a Context Object:
    - `export const CurrentUserContext = createContext();`
- wrap any children you want to be effected/using the context inside context object Provider tags
    - `<CurrentUserContext.Provider value={currentUser}> <Component /> </...`
- pass in data you want child components to access via the value prop in the wrapping provider tag (see above)
- access that data in the child component by using the `useContext` method
    - `const currentUser = useContext(CurrentUserContext);`

> In SignInForm.js, we’ll access the setCurrentUser function to update user data upon successful sign in, so that we can show different icons in the  NavBar depending on the users logged in state.

9. go to `SignInForm`.js

10. inside the function establish a const of `setCurrentUser` that has a value of the `useContext` function, where the value of that is `SetCurrentUserContext` from `App`.js
```jsx
...
// dont forget to make sure you import it!
import { SetCurrentUserContext } from "../../App";

function SignInForm() {
    //this const here buddy.
    const setCurrentUser = useContext(SetCurrentUserContext)
    
        const [signInData, setSignInData] = useState({
          username: '',
          password1: '',
        })
    ...
```
> Now that we have access to the setter function, let’s save the data returned from the sign in 

11. in the `SignInForm()`, go to the `try` statement in the `handleSubmit` function.
    - turn the `await axios.post()` method into a const called `{data}`
    - beneath it, call the `setCurrentUser` method and pass it `data.user` which will be the userdata returned from the API by axios.
```jsx
...
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        // method turned into a variable
        const {data} = await axios.post('dj-rest-auth/login/', signInData);
        // then the variable used as the value for the setCurrentUser useContext hook
        // which is passed back to the App.js
        setCurrentUser(data.user)
        history.push('/')
    } catch(err){
        console.log(err)
        setErrors(err.response?.data)
    }
}
...
```

12. go to `NavBar`.js

13. inside its functional statement create a const called `currentUser` and set its value to the `useContext` method, (being sure to import `useContext` in with `React`). the value of `useContext` should be `CurrentUserContext` from `App.js`, making sure thats imported in too
```jsx
...
import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../App';

const NavBar = () => {
    const currentUser = useContext(CurrentUserContext)
    ...
```

#### jsx fragments

14. underneath that, create a `loggedOutIcons` variable that contains all the JSX for the sign in and sign up buttons
    > because JSX can return only a single element. the elements need to be ocntained in something, but we don’t want to wrap these NavLinks  in a div, as that will mess with our CSS. 
    
    > Instead we can use a JSX fragment, which is an empty element. When this renders in the browser, we’ll just get our navigation links, and no wrapper element will appear in the HTML.

    ```jsx
        const loggedOutIcons = (
        <> // This is JSX Fragment syntax
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
            <i className='fas fa-sign-in-alt'></i>Sign In
        </NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
            <i className='fas fa-user-plus'></i>Sign up
        </NavLink>
        </> // this cheats the JSX to return a single element, 
            // but will not appear as a single element in the 
            // rendered HTML
    )
    ```
15. create a `loggedInIcons` const with a fragment value also, execpt for now it will just contain an object of `{currentUser?.username}`
    ```jsx
    ...
    const currentUser = useContext(CurrentUserContext)
    const loggedInIcons = <>{currentUser?.username}</>
    const loggedOutIcons = (...
    ```

16. below the `home` `NavLink` add a ternary statement that checks if the CurrentUser has a value, if it does, `loggedInIcons`, else `loggedOutIcons`
    ```jsx
    ... 
    <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
        <i className="fas fa-home"></i>Home
    </NavLink>
    // statement below
    {currentUser ? loggedInIcons : loggedOutIcons}
    ...
    ```
17. run the code and see if you can log in, if you do, you can see that the accoutn name appears in the top right, insted of sign in and sign out

_____________________________________________________________________

## Refactoring to a custom context hook

CurrentUserContext code into a custom hook and put it into its own folder:

> When working on larger projects, creating all the context states, providers and logic can get lengthy. So it’s a good practice to separate these  into their own files in a contexts folder.

1. start by creating a `contexts` folder in `src`
2. create a file called `CurrentUserContext.js`
3. inside it, export a variable called `CurrentUserProvider` with the value of an arrow function that takes a `{children}` object as an argument
4. inside the arrow function, cut and paste the `useState` variables, the `handleMount` function and the `useEffect` method from `App.js`
    - and also the context objects too
    - also cut and paste the imports for `createContext`, `useEffect`, `useState` and `axios`
```jsx
// imports for useEffect, useState, createContext
import { useEffect, useState, createContext } from 'react';
// import for axios
import axios from 'axios';

// context objects
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const CurrentUserProvider = ({children}) => {
    // useState variables
    const [currentUser, setCurrentUser] = useState(null)

    // handleMount function
    const handleMount = async () => {
        try {
        const {data} = await axios.get('dj-rest-auth/user/')
        setCurrentUser(data)
        } catch (err) {
        console.log(err)
        }
    }

    // useEffect method
    useEffect(() => {
        handleMount()
    }, [])
}
```

5. add a return statement, inside it, cut and paste the `<SetCurrentUserContext.Provider>` and `<CurrentUserContext.Provider>` component tags, inside them, put the `{children}` object being exported by `CurrentUserProvider`
    - make sure that the `CurrentUserProvider` component gets imported from contexts
```jsx
return (
    <CurrentUserContext.Provider value={currentUser}>
    <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
    </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
)
```

6. go to `index.js` and wrap the `App` component in the `CurrentUserProvider` component
    - make sure that it imports!
```jsx
// imported
import { CurrentUserProvider } from './contexts/CurrentUserContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    {/* wraps the App!*/} 
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
```

> As you probably remember, we’re consuming the context in two places: SignInForm and Navbar. In order to make accessing currentUser and setCurrentUser less cumbersome, by not having to import the useContext alongside Context Objects, we’ll create two custom hooks. 

7. in `CurrentUserContext`.js, create a new set of `useContext` hooks below the `CurrentUserContext` exports and export them too. set their values to the `CurrentUserContext`  variables respectively:
```jsx
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

// new set! they take the consts above as their arguments!
export const useCurrentUser = () => useContext(CurrentUserContext)
export const useSetCurrentUser = () => useContext(SetCurrentUserContext)
```

8. in the `SignInForm`.js file, amend the `setCurrentUser` const's value to `useSetCurrentUser()`, this should auto import.
    - also, remove obsolete imports
```jsx
...
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

function SignInForm() {
    // updated value
    const setCurrentUser = useSetCurrentUser();
    ...
```

9. got to `NavBar`.js repeat the process
```jsx
...
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {
    const currentUser = useCurrentUser();
    const loggedInIcons = <>{currentUser?.username}</>
    const loggedOutIcons = (
        ...
```

_________________________________________________________________

## Authentication: access and refresh tokens

- refreshing our access tokens.
    - using interceptors to handle errors before they occur
- Create axios interceptors for response and request interceptors
- configure response interceptor to listen for 401 errors in the responses from the API, 
    - make it attempt to refresh the access token when needed and respond accordingly.
- wire up axiosRes instance in handleMount function to use response interceptor.
- configured the request interceptor to always refresh the access token before proceeding with the actual request.

> At this point in our project, if you were to sign in, wait a few minutes and then refresh the page, you would notice the sign in and sign up icons appear back in our NavBar, reflecting that you are no longer logged in. The  reason for this is that the API uses access tokens to determine if a user is logged in or not. These go stale after 5 minutes and need to be refreshed. Our users would find it super annoying to  have to log in every 5 minutes to our app, so we’ll need to write the code to  keep our users logged in for longer.

basically when these tokens expire, when a user tries to acces content on the page, they will get a 401 error. to stop this from happening and keep the users logged in, `interceptors` need to be used

interceptors handle requests and responses to the site before they can throw an error like a 401 forbidden.

1. go to `axiosDefaults.js` in the `api` folder
2. export 2 new `axios` instances that will have the interceptors attached to them:
```jsx
// this one intercepts requests
export const axiosReq = axios.create();
// this one intercepts responses
export const axiosRes = axios.create();
```

3. go to `CurrentUserContext`.js

> We’re going to use and import the `useMemo` hook, which is part of the React library. `useMemo` is usually used to cache complex values that take time to compute. The reason we’re using it here is that `useMemo` runs before the children components are mounted. And we want to attach the interceptors before the children mount, as that’s where we’ll be using  them and making the requests from.

4. below/after the useEffect method, declare a `useMemo` method housing an arrow function

> The reason we’re using it here is that useMemo  runs before the children components are mounted.  
And we want to attach the interceptors  before the children mount,  

5.  inside the arrow function, create the axios response interceptor. do this by calling `axiosRes.interceptors.response` (which should auto import) that is appended with the `.use()`
```jsx
...
    useEffect(() => {
        handleMount()
    }, [])

    // useMemo function
    useMemo(() => {
        axiosRes.interceptors.response.use(
            
        )
    })

    return (
        ...
```

6. inside `.use()` write another arrow function that uses response as an argumnt and houses 2 functions:
    - the 1st is the `response` being returned on its own
    ```jsx
        useMemo(() => {
        axiosRes.interceptors.response.use(
            (response) => response, 

        )
    })
    ```
    - the second function is an `async` function takes any `err`s and runs a conditional statement on them:
        - for this to work, `useHistory` needs to be imported too
        ```jsx
        ...
        const history = useHistory()
        ...

        useMemo(() => {
            axiosRes.interceptors.response.use(
                // if theres no error, the response is returned unimpeded
                (response) => response, 
                // if there is an error, this async function runs
                async (err) => {
                    // checks if the response from the API is a 401
                    if (err.response?.status === 401){
                        try{
                            // if it is, it will try to refresh the token
                            // from the database
                            await axios.post('/dj-rest-auth/token/refresh/')
                        } catch(err){
                            // if it cant, it will push users that were 
                            // previously logged in back to
                            // the sign in page
                            prevCurrentUser(prevCurrentUser => {
                                if (prevCurrentUser){
                                    history.push('/signin')
                                }
                                // then it will set the login status to null
                                return null
                            })
                        }
                        // If there’s no error refreshing the token,  
                        // return an axios instance with the error config
                        // to exit the interceptor.
                        return axios(err.config)
                    }
                    // if the error isnt a 401, the promise sent from the React App
                    // to the database is rejected
                    return Promise.reject(err)
                }
            )
        })
        ...
        ```

7. once this function is set up, update the `await axios.get` function in `handleMount` in the file to `await axiosRes.get` to make use of the new function. if this isn't made already, youll need to create it:
```jsx
const handleMount = async () => {
        try {
        const {data} = await axiosRes.get('dj-rest-auth/user/')
        setCurrentUser(data)
        } catch (err) {
        console.log(err)
        }
    }
```


8. now back in the `useMemo` function, the same needs to be done for `axiosReq`...
    ```jsx
    ...
    useMemo(() => {
        // tries to refresh tokens before requests are sent out
        axiosReq.interceptors.request.use(
            async (config) => {
                // initially tries to refesh the token via the API
                try {
                    await axios.post('/dj-rest-auth/token/refresh/')
                } catch(err){
                    // in case that feels and the user was previously
                    // logged in, pushes them back to the sign in page
                    setCurrentUser((prevCurrentUser) => {
                        if (prevCurrentUser) {
                            history.push('/signin')
                        }
                        // set the current user value to null
                        // as the user is now unauthenticated
                        return null
                    })
                    // return config inside and outside the catch block
                    // so it returns no matter the outcome
                    return config
                }
                return config
            },
            // in the event of an err, reject the promise
            (err) => {
                return Promise.reject(err);
            }
        );

        axiosRes.interceptors.response.use(
            ...
    ```

> Now that we have both interceptors in  place, we shouldn’t forget to add a dependency array for our useMemo hook with history  inside. We want useMemo to only run once, but the linter will throw a warning if we provided an empty dependency array.

9. add the `[history]` dependency as a second parameter to the useMemo function:

```jsx
... // all the way to the bottom buddy .
useMemo(() => {
        axiosReq.interceptors.request.use(
            async (config) => {
                try {
                    await axios.post('/dj-rest-auth/token/refresh/')
                } catch(err){
                    setCurrentUser((prevCurrentUser) => {
                        if (prevCurrentUser) {
                            history.push('/signin')
                        }
                        return null
                    })
                    return config
                }
                return config
            },
            (err) => {
                return Promise.reject(err);
            }
        );

        axiosRes.interceptors.response.use(
            (response) => response, 
            async (err) => {
                if (err.response?.status === 401){
                    try{
                        await axios.post('/dj-rest-auth/token/refresh/')
                    } catch(err){
                        setCurrentUser(prevCurrentUser => {
                            if (prevCurrentUser){
                                history.push('/signin')
                            }
                            return null
                        })
                    }
                    return axios(err.config)
                }
                return Promise.reject(err)
            }
        )
    }, [history]);
    // added ^ here 
```
______________________________________________________

## Navigation: Adjusting NavBar for loggedIn/loggedOut
    - adding more icons for logged in users
    - add log out functionality 
    - making the add post icon
    - Creating an avatar component


### Making the Add post icon

go to `NavBar.js`:
1. create new variable and call it `addPostIcon`
2. copy paste the code for the sign in nav link into it
3. change its `to` prop from `/signin` to `/posts/create`
4. update the fontawesome icon to `far fa-plus-square`
5. change the text from `sign in` to `add post`
    ```jsx
    ...
    const NavBar = () => {
    const currentUser = useCurrentUser();

    const addPostIcon = (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create">
                <i className='far fa-plus-square'></i>Add post
        </NavLink>
    )

    const loggedInIcons = <>{currentUser?.username}</>
    ...
    ```

6. inside the return statement, after the Navbar logo, add a jsx object of `{currentUser && addPostIcon}`
    > This way, it will only show the addPostIcon if the currentUser exists.
    ```jsx
    ...
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                // Navbar logo
                <NavLink to="/">
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="45"/>
                </Navbar.Brand></NavLink>
                
                // add post object conditional using 
                // double ampersand
                {currentUser && addPostIcon}
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                ...
    ```

> Ok, great! Now, let’s replace our placeholder text in the loggedInIcons variable and add some icons.

### adding more icons for logged in users

7. inside the `loggedInIcons`' JSX fragment, remove the code that displays the name of the logged in user.
8. copy/paste the sign in nav link again, change its `to` to `/feed`, change its text to "Feed" and update it's icon to `fas fa-stream`
9. repeat this process for
    - liked:
        - `to`: /liked
        - text: Liked
        - icon: `fas fa-heart`
    - sign out
        - remove the activeClassName prop
        - `to`: /
        - text: Sign Out
        - icon: `fas fa-sign-out-alt`
        - [steps to take to create logout functionality](#creating-the-logout-function)
    - profile image
        - remove the icon
        - remove text
        - remove activeClassName prop
        - `to`: {`/profiles/${currentUser?.profile_id}`}
            - (this is a template literal, copy exactly as is)
        - inside the NavLink tags, add an `img` tag with `src`:
            - `{currentUser?.profile_image}`           

    ```jsx
        const loggedInIcons = (
            <>
            // liked
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/liked">
                <i className='fas fa-heart'></i>Liked
            </NavLink>

            // sign out
            <NavLink className={styles.NavLink} to="/" > 
                <i className='fas fa-sign-out-alt'></i>Sign Out
            </NavLink>

            // profile image
            <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`}>
                <img src={currentUser?.profile_image} alt="User Profile"/>
            </NavLink>

            </>
        )
    ```

> As we can see, all is well apart from the image that messes up the layout. To remedy this, we’ll quickly create  a utility component called Avatar

### Creating an avatar component

10. in the `styles` folder, create a new css file called `Avatar.module.css`
    - copy/past in the provided css:
        ```css
        .Avatar {
            border-radius: 50%;
            margin: 0px 8px 0px 8px;
            object-fit: cover;
        }
        ```
        > The object-fit: cover line is especially important, as it will always make sure the profile image fits its container. What that means is that we’ll always see a nice, round picture no matter what the image dimensions are.

11. create a new component called `Avatar.js` in the `components` folder
    - inside it, use the `rafce` snippet
    - import the styles from the Avatar.module.css
    - pass it `props`
    - create a const that establishes the objects inside the `props`
        > it will always receive a src prop and may  also receive props for height and text. So let's descructure that inside.
        - src
        - height = 45
            - setting a default value here will set the standard size of the avatar
        - text
    - then, replace the div in the return statement with a `<span>`
    - inside that, insert an `img` tag with the className `{styles.Avatar}` and add the following attributes:
        - `src` of `{src}`, pulling the value from the prop
        - `height` = `{height}`
        - `width` = also `{height}` as combining the forced dimensions and `object-fit` in the css, this will proportion the image perfectly
        - `alt` = "avatar"
    - underneath the `img`, still inside the span tags, pass in the `{text}` prop
    ```jsx
    import React from 'react'
    import styles from "../styles/Avatar.module.css";

    const Avatar = (props) => {
        const {src, height = 45, text} = props;

    return (
        <span>
            <img
                className={styles.Avatar}
                src={src}
                height={height}
                width={height}
                alt="Avatar"
            />
            {text}
        </span>
    )
    }

    export default Avatar;
    ```

12. back in `NavBar.js`, remove the `img` inside the profile image nav link beneath the `Sign out` nav link
13. replace it with the new `Avatar` component
    - pass in `{currentUser?.profile_image}` as the `src` prop
    - pass in `"Profile"` as the `text` prop
    - pass in `{40}` as the `height` prop to override the default value
```jsx
...
<NavLink className={styles.NavLink} to="/">
    <i className='fas fa-sign-out-alt'></i>Sign Out
</NavLink>

<NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`}>
    <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
</NavLink>
</>
...
```

### creating the logout function

in `NavBar`.js:
14. make sure `currentUser` and `setCurrentUser` are defined at the top of the NavBar function
```jsx
//make sure they are imported too:
import { 
    useCurrentUser,
    useSetCurrentUser, 
} from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
// make sure you import axios too
import axios from "axios";

const NavBar = () => {
    // defined here
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
...
```

15. create a `handleSignOut` event handler that runs an async function, inside the function, run a `try/catch` block that: 
    - sends an `await` `post` request via `axios` to `"dj-rest-auth/logout/"`
    - calls the `setCurrentUser` hook and sets its value to `null`
16. in the catch statement, catch any `err`s and log them to the console.

```jsx
...
const currentUser = useCurrentUser();
const setCurrentUser = useSetCurrentUser();

// handleSignOut running an async function
const handleSignOut = async () => {
    try {
        // axios making the request to log the user out
        await axios.post("dj-rest-auth/logout/");
        // setting the value of the viewing user to no value
        setCurrentUser(null);
        // catching any potential errors and printing them for debug
    } catch (err) {
        console.log(err);
    }
};
...
```
________________________________________________________________________