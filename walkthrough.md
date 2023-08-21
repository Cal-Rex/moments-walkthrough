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
    - 
    

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

4.