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

11. NavBar burger toggle with a custom hook
    - Video: https://youtu.be/mezW9yuzzPk
    - toggle nav bar menu
    - functionality to automatically close our burger menu
    - write code for this in NavBar file
    - then refactor into own component
    - create toggle component
    - keep track of whether the user has clicked on the burger menu to expand it.
    - [NavBar.js reviewed](#reviewing-navbarjs-as-a-whole)

## 3. The Post component

12. [Creating Posts - Part 1](#creating-posts---part-1)
    - Video: https://youtu.be/FaUSSftBkBo
    - build a form to create a post
    - build an Asset component
        -  [Asset.js Explained](#assetjs-explained)
        -  display different versions of the component depending on the props passed to it.
    - [more on Web API urls](https://developer.mozilla.org/en-US/docs/Web/API/URL)
    - [More on Create Object URLs](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)
    - [More on Revoke Object URLs](https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL)
    - how to build an image upload form

13. [Creating a Post - Part 2](#creating-a-post---part-2)
    - Video: https://youtu.be/oP-PqSc7QbM
    - how to send form data to an API
    - create a cancel button 
    - handling form errors
    - using the axiosReq interceptor again

14. [Setting up the Post Page](#setting-up-the-post-page)
    - Video: https://youtu.be/Hya3y7zjlVw
    - [PostPage starter code](https://github.com/Code-Institute-Solutions/moments-starter-code/tree/master/14a-starter-code)
    - request a post from the API
    - logging requested API data to the console
    - displaying post data on a page
    - getting an id of a db record from the url
    - fetching a post from the database

15. [Creating the Post Component frontend](#creating-the-post-component-frontend)
    - Video: https://youtu.be/SQdcuFRbUtU
    - take the data fetched from the last section and display it on a page

16. [Liking and Unliking Posts](#liking-and-unliking-posts)
    - Video: https://youtu.be/lr3wph-rI20
    - use the code from the previous section to like and unlike posts
    - using the spread operator witht he map function to update the state of props with an updated record

## 4. The PostsPage Component

17. [Displaying the Posts List - Part 1](#displaying-the-posts-list---part-1)
    - Video: https://youtu.be/a6__dkf0_ys
    - create the PostsPage component, attach it to the Home, Feed and Liked routes, and add filters.
    - these filters will allow code in later sections to:
        - display an array of posts depending on:
            - if the user wants to see all posts 
            - posts by profiles they follow
            - posts they have already liked.

18. [Displaying te Posts list - part 2](#displaying-te-posts-list---part-2)
    - Video: https://youtu.be/RoW3YfjbKis
    - add the logic to make requests to the API based on filters
    - display a loading spinner while loading API data
    - display message if theres no results from filters
    - `useLocation` hook explained

19. [making a working search bar](#making-a-working-search-bar)
    - adding a search bar
    - have the search criteria update every time the value in the search bar changes

20. [Infinite Scroll](#infinite-scroll)
    - Video: https://youtu.be/fNZ0hlutv-U
    - how to implement infinite scroll

## 5. The Post Page 

21. [Post Owner Dropdown Menu](#post-owner-dropdown-menu)
    - Video: https://youtu.be/zedFjNOxaIA
    - Dropdown Bootstrap component
    - display the edit and delete options for post owners.
    - make the delete function work
    - make the edit button link to the edit page
        - (but not build it)
    - Bugfix with the popper library

22. [Create the edit post form](#creating-the-edit-post-form)
    - Video: https://youtu.be/7JaUL39mot0

24. [creating the comment form](#creating-the-comment-form)
    - step by step walkthrough with templates to create comment form.

25. [creating the comment components](#creating-the-comment-component)
    - Video: https://youtu.be/lq_2J28BYfg

26. [Comments: The Comment Component Dropdown Menu](#comments-the-comment-component-dropdown-menu)
    - Video: https://youtu.be/kXyry7d46s4
    - add dropdown menu for comments and the ability to delete a comment

27. [Comments: The Edit Comment Form](#comments-the-edit-comment-form)
    - Challenge

28. [Challenge: The Infinite Scroll for Comment Components](#challenge-the-infinite-scroll-for-comment-components)
    - challenge

## 6. Displaying the Popular Profiles

29. [The PopularProfiles Component - Part 1](#the-popularprofiles-component---part-1)
    - Video: https://youtu.be/AzYI1Nfw2rU
    - add basic popular profiles component
    - refresher on using spinner asset (hasLoaded)

30. [The PopularProfiles Component - Part 2](#the-popularprofiles-component---part-2)
    - Video: https://youtu.be/Kr6sWXhzF1Q
    - making the mobile view

31. [The Profile Component](#the-profile-component)
    - Video: https://youtu.be/7qzRUbPU0Rg
    - add a Profile component to display our users profile avatars,  
        - link back to their profile page,
    - a button to follow or unfollow each user.

32. [Challenge: Profile Data Context](#challenge-profile-data-context)

## 7. The Profile Page

33. [Building the Profile Header](#building-the-profile-header)
    - Video: https://youtu.be/qwGgQoVb5IM

34. [Challenge: Displaying the Posts for a Profile](#challenge-displaying-the-posts-for-a-profile)
    - [solution code](#displaying-the-posts-for-a-profile-solution-code)

35. [Following Profiles](#following-profiles)
    - Video: https://youtu.be/VjshVKG3Otg

36. [Challenge: Unfollowing Profiles](#challenge-unfollowing-profiles)
    - Challenge

37. [Text Instructions: Editing the profile](#text-instructions-editing-the-profile)
    - instructions

38. [Redirecting the User](#redirecting-the-user)
    - Video: https://youtu.be/JK2Ysdizxt8

## 8. Finishing up and Testing

39. [Testing in React - part 1](#testing-in-react---part-1)
    - Video: https://youtu.be/OesI3N5VAaU
    - so in this video we’ll focus on what you’ll need to know to work with testing React components and mocking API responses.
    - In this video we’ll get ourselves set up
    - [source code](https://github.com/mr-fibonacci/moments/tree/5ea7b13a4131a39f519c24e8421516df3ffb5018)
    - [mocking with jest](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JT101+2021_T1/courseware/3ff1b42de7174d29baa8e28deba1b717/658d56e6555044f6b4b5a97e629333c6/5?activate_block_id=block-v1%3ACodeInstitute%2BJT101%2B2021_T1%2Btype%40vertical%2Bblock%401e742c8d10004c77a9013e93db16eac1)
    - [React testing library](https://testing-library.com/docs/react-testing-library/intro) 
    - [React Query testing methods](https://testing-library.com/docs/queries/about)

40. 
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

## NavBar burger toggle with a custom hook

- toggle nav bar menu
- functionality to automatically close our burger menu
- write code for this in NavBar file
- then refactor into own component
- create toggle component
- keep track of whether the user has clicked on the burger menu to expand it.
- text area form fields


###  keep track of whether the user has clicked on the burger menu to expand it.

in `NavBar.js`:
1. in the function, make a useState hook for `expanded`
    - set the default value to `false`
    - mmake sure `useState` gets imported
```jsx
const [expanded, setExpanded] = useState(false)
```

2. with the state created, add it as a prop with the value of `{expanded}` to the `Navbar` component inside the return statement (don't get `NavBar` and `Navbar` confused here, `Navbar` is in the return statement of `NavBar.js`)
```jsx
...
    return (
        <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
        ...
```

3. then, in the `Navbar.toggle` element, add an `onClick` attribute that calls an arrow function to run the `setExpanded` hook tp update the value of `expanded` to the oppositie of what it previously was
```jsx
...
<Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
...
```
> the status of the navbar menu is now being tracked, which allows us to start creating custom functionality based on the state of the menu

4. up next to the `expanded` useState hook, import the `useRef` hook from react, create a variable called `ref`, set it's value to the `useRef` method, which is being passed a value of `null`
```jsx
...
    const [expanded, setExpanded] = useState(false)
    const ref = useRef(null)
    ...
```

5. now, attach this new variable as a prop to `Navbar.toggle`, passing the value of itself, just like the expanded prop
```jsx
...
{currentUser && addPostIcon}
<Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
//              ^    ^
...
```

6. import the `useEffect` hook, then write out a `useEffect` hook that runs an arrow function:
    - inside it, create a variable called `handleClickOutside` when passes an arrow function as its value, taking an event as an argument
    - inside this function, write an `if` statement that checks the `current` value of `ref`
        - a double amersand is then used to `setExpanded` to `false` if the `ref` is not the target of the click event:
    ```jsx
    const ref = useRef(null)
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)){
                    setExpanded(false)
                }
            }
        })
    ```
    - inside the `useEffect` method, inside the arrow function, add an oldschool `addEventListener` that listens out for `mouseup` events and runs the `handleClickOutside` function when there is a `mouseup` event.
    - then, straight after it, add a `return` statement that `remove`s the `EventListener` so that it wont stack every time the useEffect hook is run, which could cause errors in the future
    - finally, add the dependency array of `[ref]` to the `useEffect` hook
    ```jsx
    ...
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)){
                    setExpanded(false)
                }
            }

            document.addEventListener('mouseup', handleClickOutside)
            return () => {
                document.removeEventListener('mouseup', handleClickOutside)
            }
        }, [ref]);
    ...
    ```
> Now, we can toggle the burger menu  and hide it when we click away or choose one of the dropdown options.

> Let’s now refactor all this code to a custom hook.  


### refactor into own component
7. in the `src` folder, create a `hooks` folder 

8. in the new folder, create a the file `useClickOutsideToggle.js`

9. inside the new file, use the `rafce` snippet to create the component template

10. copy the states, ref and useEffect hook that all handles the clickOutside functionality and paste it into the new component:
    - change the `return` statement to return an object containing `expanded`, `setExpanded` and `ref`
```jsx
import {useState, useEffect, useRef} from 'react'

const useClickOutsideToggle = () => {
    // states
    const [expanded, setExpanded] = useState(false)
    // ref
    const ref = useRef(null)

    // useEffect
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)){
                setExpanded(false)
            }
        }

        document.addEventListener('mouseup', handleClickOutside)
        return () => {
            document.removeEventListener('mouseup', handleClickOutside)
        }
    }, [ref]);
  return {expanded, setExpanded, ref}
}

export default useClickOutsideToggle
```

11. now, back in `NavBar`.js, `spread` the values of `expanded`, `setExpanded` and `ref` into the new `useClickOutsideToggle()`;
    - don't forget to import the new function!
```jsx
...
const currentUser = useCurrentUser();
const setCurrentUser = useSetCurrentUser();

const {expanded, setExpanded, ref} = useClickOutsideToggle();

const handleSignOut = async () => {
...
```

### reviewing `NavBar`.js as a whole:
```jsx
import { Container, Navbar, Nav } from 'react-bootstrap';
import React from 'react'
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { 
    useCurrentUser,
    useSetCurrentUser, 
} from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from "axios";
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';

const NavBar = () => {
    // statehooks to hold the value 
    //of the current user accessing the page
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    // state of the navbar, if its been expanded or not
    // handles the opening and closing of it with
    // the useClickOutsideToggle custom hook
    // runs like a hook when setExpanded is procced in the render
    const {expanded, setExpanded, ref} = useClickOutsideToggle();

    // the function called by the sign out button that
    // sends a request to the server to log the user out.
    // called in the render
    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    // the function that adds an "add post" icon
    // if the user if logged in. 
    // called in the render
    const addPostIcon = (
        <NavLink
            // css styles
            className={styles.NavLink}
            activeClassName={styles.Active}
            //changes the url to this, proccing changes
            // from the Routes back in App.js
            to="/posts/create">
                <i className='far fa-plus-square'></i>Add post
        </NavLink>
    )

    // the function that adds icons
    // if the user if logged in. 
    // called in the render
    const loggedInIcons = (
        <>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/feed">
            <i className='fas fa-stream'></i>Feed
        </NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/liked">
            <i className='fas fa-heart'></i>Liked
        </NavLink>
        <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
                     {/* handleSignout method being called ^^^^^^^^^^^^^^^ */} 
            <i className='fas fa-sign-out-alt'></i>Sign Out
        </NavLink>
        <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`}>
{/* targets user profile_id from the database only if(?) currentUser has a value ^^^*/}
            <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
        </NavLink>
        </>
    )

    // the function that adds icon
    // if the user if logged out. 
    // called in the render
    const loggedOutIcons = (
        <>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
        {/* this is a class ^^^^^^^^^^^^ and this is a pseudoclass ^^^^^^^*/}
            <i className='fas fa-sign-in-alt'></i>Sign In
        </NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
            <i className='fas fa-user-plus'></i>Sign up
        </NavLink>
        </>
    )



    return (
        <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="45"/>
                </Navbar.Brand></NavLink>
                {currentUser && addPostIcon}  // Double Ampersand means "if Truthy"
                <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
// useClickOutsideToggle procced ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ here
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
                        <i className="fas fa-home"></i>Home
                    </NavLink>
                    {currentUser ? loggedInIcons : loggedOutIcons}
// condition statement to display which const of icons depending if currentUser has a value
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default NavBar
```
_____________________________________________________________________________________

## Creating Posts - Part 1
- build a form to create a post
- build an Asset component
    -  [Asset.js Explained](#assetjs-explained)
    -  display different versions of the component depending on the props passed to it.
- [more on Web API urls](https://developer.mozilla.org/en-US/docs/Web/API/URL)
- [More on Create Object URLs](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)
- [More on Revoke Object URLs](https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL)
- how to build an image upload form
- how to have an image preview
    
as a prerequisite to this lesson, complete the following steps:

1. Add this [upload.png](https://codeinstitute.s3.amazonaws.com/AdvancedReact/upload.png) graphic to to the `assets` folder
2. create the following 2 files in the styles folder:
    - [PostCreateEditForm.module.css](https://github.com/mr-fibonacci/moments/blob/e68f179b130a1554b8122990cf92ab931988eb79/src/styles/PostCreateEditForm.module.css)
    - [Asset.module.css](https://github.com/mr-fibonacci/moments/blob/e68f179b130a1554b8122990cf92ab931988eb79/src/styles/Asset.module.css)
3. create a new folder called `posts` inside the `src/pages` folder
4. inside the new `posts` folder, create a file called `PostCreateForm.js`
    - paste in this [boilerplate code](https://github.com/Code-Institute-Solutions/moments-starter-code/tree/master/13-starter-code)
5. create a new file called `Asset.js` in the `components` folder
    - paste in this [bolerplate code](https://github.com/Code-Institute-Solutions/moments/blob/e68f179b130a1554b8122990cf92ab931988eb79/src/components/Asset.js)


### Asset.js explained
```jsx
import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

// We’ve destructured the props our Asset  
// component may receive: spinner, src and message. 
// This makes it a multi-purpose component that can  
// render any combination of the  props that are passed to it. 
const Asset = ({ spinner, src, message }) => {
//            ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  return (
    <div className={`${styles.Asset} p-4`}>
    {/* Our logic here with the double ampersand (&&)
     first checks if the prop exists, */}
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    {/* and if it does, then renders the 
    element within the boolean expression.*/}
    {/*For example, if we don’t pass a spinner 
     prop, it’s value will be undefined, and so the 
     spinner component won’t be rendered.*/}
    </div>
  );
};

export default Asset;
```

steps:

1. create a new `Route` for adding a new post where it renders the `PostCreateForm` component, in `App.js`:
```jsx
...
    <Route exact path="/signup" render={() => <SignUpForm />} />
    <Route exact path="/posts/create" render={() => <PostCreateForm />} />
    // this one ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    <Route render={() => <p>Page not found!</p>}></Route>
</Switch>
...
```

2. Go to `PostCreateForm`.js and replace the `ASSET` placeholder text with the `Asset` component and pass it the following props:
    - src = `{upload}`
    - message = `"Click or tap to upload an image"`
```jsx
...
<Form.Label
    className="d-flex justify-content-center"
    htmlFor="image-upload"
>
    <Asset src={Upload} message={"Click or tap to upload an image"} />
</Form.Label>
...
```

3. underneath the `Form.Label` wrapping the `Asset` component, the `Form.File` element that will handle the image upload:
```jsx
...
<Form.Group className="text-center">
              
    <Form.Label
        className="d-flex justify-content-center"
        htmlFor="image-upload"
    >
        <Asset src={Upload} message={"Click or tap to upload an image"} />
    </Form.Label>
    <Form.File id="image-upload" accept="image/*" />
    {/* the Asterisk after the trailing slash ^^ means users can only upload images*/}
</Form.Group>
```

4. Next, create the code for the text-based form fields, the state variables to handle the form data, and also the hooks to track and update the state variables of the form fields (`handleChange` function)
```jsx
...
const [postData, setPostData] = useState({
    title: '',
    content: '',
    image: '',
  })
  const { title, content, image} = postData;

  const handleChange = (event) => {
    setPostData({
        ...postData,
        [event.target.name]: event.target.value,
    })
  }

  const textFields = (
    <div className="text-center">
        <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control 
                className={styles.Input} 
                type="text"
                name="title" 
                value={title}
                onChange={handleChange}
                />
        </Form.Group>

        <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control 
                className={styles.Input} 
                as="textarea"
                rows={6}
                name="content" 
                value={content}
                onChange={handleChange}
                />
        </Form.Group>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

...

// then added as objects in the return render:
<Container
    className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
    >
    <Form.Group className="text-center">
        
        <Form.Label
            className="d-flex justify-content-center"
            htmlFor="image-upload"
        >
            <Asset src={Upload} message={"Click or tap to upload an image"} />
        </Form.Label>
        <Form.File id="image-upload" accept="image/*" />
    </Form.Group>
    <div className="d-md-none">{textFields}</div>
                {/* called here ^^^^^^^^^^ */}
</Container>
          ...
```

5. create a function that handles the changes to the file input field:
```jsx
const handleChangeImage = (event) => {
    if (event.target.files.length){
        // removes any urls stored in the image state
        // as the function launches, before the state is set
        // this stops the upload of multiple filepaths
        URL.revokeObjectURL(image)
        setPostData({
            ...postData,
            // URL.createObjectURL creates a local link to the file passed into it.  
            image: URL.createObjectURL(event.target.files[0]),
            // event.target.files, stores files as an array in order to handle
            // multiple uploads, as this function only handles one image
            // at a time, target the first value in the variable
            // the revokeObjectURL prevents more than one value being 
            // added to this array in this function
        })
    }
}
```

6. add the new `handleChangeImage` function to an `onChange` attribute in the `image-upload` `Form.File` field.
```jsx 
    <Form.File id="image-upload" accept="image/*" onChange={handleChangeImage} />
```

7. at the top of the `Form.Group` for uploading the image, add a ternary statement that, depending on wether an image has been successfully uploaded, a preview is rendered, else the default instruction to upload an image renders instead:
```jsx
<Form.Group className="text-center">
...
{/* Ternary statement start, if image state has a value...*/}
    {image ? (
        <>
        <figure>
        {/* in the figure tags, display the image, where the state is the src */}
            <Image className={appStyles.Image} src={image} rounded />
            {/* the rounded prop is a bootstrap prop that rounds the edges of images*/}
        </figure>
        <div>
        {/* The htmlFor attribute here links this label to the Form.File attribute*/}
        
            <Form.Label
                className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                htmlFor="image-upload"
        {/* Which turns the label into a button that triggers the file upload field*/}
            >
                Change the image
            </Form.Label>
        </div>
        </>
    ) : (
        <Form.Label
        className="d-flex justify-content-center"
        htmlFor="image-upload"
        >
            <Asset src={Upload} message={"Click or tap to upload an image"} />
        </Form.Label>
    )}
    
    <Form.File id="image-upload" accept="image/*" onChange={handleChangeImage} />
</Form.Group>
...
```
_________________________________________________________________________

## Creating a Post - Part 2

- how to send form data to an API
- create a cancel button

### how to send form data to an API
in the `PostCreatForm` component:
1. declare a `useRef` hook called  `imageInput` and set its value to `null`
```jsx
...
  const { title, content, image} = postData;

  const imageInput = useRef(null)
  ...
```
2. in the `image-upload` `Form.File` add a `ref` prop that calls the `imageInput` `useRef` hook
```jsx
...
<Form.File id="image-upload" accept="image/*" ref={imageInput} onChange={handleChangeImage} />
```
3. import and create a `useHistory` hook called `history` to redirect users upon the form successfully submitting
```jsx
...
const imageInput = useRef(null)
const history = useHistory()
```
4. create an `async` `handleSubmit` function taking an `event` as a parameter. Inside its arrow function:
    - `prevent` the `Default` submission behaviour of the `event` with `.preventDefault()`
    - create a `formData` instance that consists of `new` `FormData()`
    - `.append` the `formData` with the form "title" field, in the database, with the value of `title`
    - repeat the last step, but for `content`
    - `append` the `formData` with an upload for the `"image"` db field, except this time the value needs to be the first entry in the `files` array of the `current` `imageInput` hook.
```jsx
const handleSubmit = async (event) => {
    event.preventDefault()
    const formFata = new FormData();

    formData.append('title', title)
    formData.append('content', content)
    formData.append('image', imageInput.current.files[0])
}
```
> Because we are sending an image file as well as text to our API we need to refresh the user's access token before we make a request to create a post.

5. next, inside `handleSubmit`, create a try catch block:
```jsx
const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();

    formData.append('title', title)
    formData.append('content', content)
    formData.append('image', imageInput.current.files[0])

    try {
        // use the previously created axiosReq interceptor to refresh
        // the login token when submitting the formData
        const {data} = await axiosReq.post('/posts/', formData);
        // data ^^^ will be created by the response from the API after awaiting
        // the request for succussfully uploading the data
        // as the API automatically assigns new records with ids, this can then be 
        // targeted in the data variable to redirect the user to the new post
        history.push(`/posts/${data.id}`)
        // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^   via the push from history
    } catch(err){
        // incase theres an error, the catch handles it 
        // and logs it to the console
        console.log(err)
        // then, if the error state isn't a 401
        if (err.response?.status !== 401){
        // the error state is updated, as the axiosReq 
        // interceptor has logic to handle the 401 errors
            setErrors(err.response?.data)
        }
    }
}
```
5. a. Also, make sure that `axiosReq` and `useHistory` import properly:
```jsx
import { axiosReq } from "../../api/axiosDefaults"
import { useHistory } from "react-router";
```

6. set an `onSubmit` prop on the `Form` component to run the `HandleSubmit` function
```jsx
...
return (
    <Form onSubmit={handleSubmit}>
      <Row>
    ...
```

7. test the new feature works by uploading something. if it works, you should see "/posts/1" in the url if it worked (1 was the post id, could be any number depending how many entries are in the db)

### create a cancel button

> Finally, let’s wire up our cancel button to take our user back to the previous page in their browser history.

8. go to the cancel button in the form in `PostCreateForm`.js
9. add an `onClick` prop that runs the `history` function, calling the `goBack()` method:
```jsx
<Button
    className={`${btnStyles.Button} ${btnStyles.Blue}`}
    onClick={() => history.goBack()}
    >
    cancel
</Button>
```

10. Bonus! implement error handling, this can be done by copy/pasting the error handlers from `SignInForm`, thought the `image` error handler needs some small tweaking
    - also, `Alert` needs to be imported from `"react-bootstrap/Alert"`
    - `import Alert from "react-bootstrap/Alert";`
```jsx
...
       name="title" 
                value={title}
                onChange={handleChange}
                />
        </Form.Group>
        {errors.title?.map((message, idx) => 
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}
    ...

     name="content" 
                value={content}
                onChange={handleChange}
                />
        </Form.Group>
        {errors.content?.map((message, idx) => 
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}
    ...

    <Form.File id="image-upload" accept="image/*" ref={imageInput} onChange={handleChangeImage} />
            </Form.Group>
            {errors?.image?.map((message, idx) => 
                <Alert variant="warning" key={idx}>{message}</Alert>
            )}
            ...
```

_________________________________________________________________________

## Setting up the Post page

- [PostPage starter code](https://github.com/Code-Institute-Solutions/moments-starter-code/tree/master/14a-starter-code)
- request a post from the API
- logging requested API data to the console
- displaying post data on a page
- getting an id of a db record from the url
- fetching a post from the database


1. in the `posts` folder, create a new file called `PostPage.js`
    - paste in the provided code above
2. create a `Route` for the new page in `App`.js
```jsx
<Route exact path="/posts/:id" render={() => <PostPage />} />
```
> The colon means that id is a parameter that can be passed through the url. In this case, it will be the id of our post. So any time we set a link to /post/ and then add a post id React will know to render the Post page for the specified post.

3. go back to `PostPage.js`

### getting an id of a db record from the url

4. import `{ useParams }` hook from `"react-router";`

5. inside the `PostPage` function, destructure the `useParams` hook into const object with the name of the parameter in the desired route, which in this case is `id`
```jsx
import { useParams } from "react-router";

function PostPage() {
    // id syntax taken from the /posts/ Route in App.js
    const { id } = useParams();
    ...
```

6. Create a `useState()` for `post`:
```jsx
...
function PostPage() {
    const { id } = useParams();
    // When we reach out to the API for a single post we’ll get a single object returned.  
    // However, if we ask for multiple posts, we’ll get an array of objects. 
    // So, to make all the future logic compatible with arrays of posts, we’ll set the initial value to an  
    // object that contains an empty array of results. That way, we can always operate on the results  
    // array, regardless of whether we get a single post object or an array of posts from the API.
    const [post, setPost] = useState({ results: [] });
    ...
```

7. import the `useEffect` hook and call it in the `PostPage` function. this will be used to create a component mounting function that will make a request to the API:
```jsx
const { id } = useParams();
    const [post, setPost] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                // What Promise.all does is it accepts an array of promises and gets resolved when all the promises  
                // get resolved, returning an array of data. If any of the promises in the array fail,  
                // Promise.all gets rejected with an error.
                const [{data: post}] = await Promise.all([
// Here we are  ^^^^^^^^^^^^^^^^^^^^ destructing the data property returned from the API and renaming it to post
                    axiosReq.get(`/posts/${id}`)
                ])
                // then, update the post state by giving the state object's results key a value of post
                setPost({results: [post]})
                // for now, check the api data is being retrieved by logging it to the console
                console.log(post)
            } catch(err) {
                console.log(err)
            }
        }
        // now that it's defined, run the handleMount function
        handleMount()
        // the useEffect hook will take a dependency of id, so every time the id updates, 
        // the useEffect hook will run the HandleMount function
        // thereby retrieving a new post associated with the updated id
    }, [id])
```

8. check it works.

_____________________________________________________________________________________________

## Creating the Post Component frontend

- take the data fetched from the last section and display it on a page
- [change behaviour/permissions on post depending on whether the owner is viewing it](#change-behaviourpermissions-on-post-depending-on-whether-the-owner-is-viewing-it)
- make a component that displays:
    - the post, its title and text content
    - the post owner's avatar and name
    - how many users have liked a post
    - how many comments a post has
    - the date it was posted
- it will also let a user:
    - like and unlike a post

1. create a `Post.module.css` file in the `styles` folder and import the following styles:
    - [template](https://github.com/Code-Institute-Solutions/moments/blob/1c9abf9c471a0dccdbd4115a5e4ae217742ab10b/src/styles/Post.module.css)

2. create a new file in `pages/posts` called `Post.js`
    - create the template using an `rafce` snippet
    - pass in a `props` value to the `Post` function
    - import the css style rules
```jsx
import React from 'react'
import styles from "../../styles/Post.module.css"

const Post = (props) => {
  return (
    <div>Post</div>
  )
}

export default Post
```

3. in the `PostPage` component, remove the "post component" placeholder text and pass in the new `Post` component
```jsx
return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <Post /> {/*  <--- there it is*/}
        <Container className={appStyles.Content}>
          Comments
          ...
```

4. inside the `Post` component in `PostPage`, use a `spread...` operator to pass in the all values in the array of the `results` KVP in `post` as props
    - also, pass in the `setPost` function as a `setPosts` prop to be used later to handle likes
```jsx
...
<Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        {/* spreading the post state's results kvp object, taking its first array value*/}
        <Post {...post.results[0]} setPosts={setPost} />
        {/* which has been given all the post data from the API*/}
...
```

5. now that the data is being passed into the `Post` component, go to `Post.js` to handle it.
    - first, deconstruct the passed in `props` into their individual objects:
    - you can get all the values of the returned API object from te console log printing from `PostPage`, list the objects in the deconstructing operator using that
```jsx
...
const Post = (props) => {
  const {
    id, owner, profile_id, profile_image, comments_count,
    likes_count, like_id, title, content, image, updated_at,
  } = props
  ...
```

6. next define a `currentUser` variable beneath that with the value of the `useCurrentUser` hook imported from the `currentUserContexts` file
7. then, with that new variable, write a const beneath it that uses it to check if the current user's username matches that of the post's `owner` prop.
```jsx
...
const currentUser = useCurrentUser();
const is_owner = currentUser?.username === owner
...
```

8. now, style the returning statement by deleting the placeholder div and replacing it with the new data and bootstrap:
```jsx
// auto import the Card component from "react-bootstrap"
// give it a class predefined in the imported css
return <Card className={styles.Post}>
        {/* inside the card, create a Card.Body component*/}
        <Card.Body>
        {/* use this to then contain a Media component, imported from "react-bootstrap" */}
            {/* manually assign it bootstrap utility classes to style the content*/}
                            {/* you can use the preview window for this */}
            <Media className="align-items-center justify-content-between">
            {/* create a Link that goes to the Post owner's Profile */}
            {/* Link is imported from "react-router-dom" */}
            {/* the page hasn't been created yet, but this link will work when it has been */}
                <Link to={`/profiles/${profile_id}`}>
                {/* import the Avatar component and pass it the profile image prop as the src*/}
                {/* make it a little larger by overriding the default height prop*/}
                <Avatar src={profile_image} height={55} />
                {/* place the post owner's username right beside it*/}
                {owner}
                </Link>
                {/* this div houses the updated_at date provided by the API*/}
                {/* mind, the date format has handled in the API*/}
                <div className='d-flex align-items-center'>
                    <span>{updated_at}</span>
                </div>
            </Media>
        </Card.Body>
    </Card>
```
### change behaviour/permissions on post depending on whether the owner is viewing it

9. go back to the `PostPage` component. where the `Post` component is being called in the `return` statement, pass it another prop called `postPage`
    - > Notice that we don’t need to give our postPage prop a value here, simply applying it means it will be returned as true inside our Post component.
```jsx
<Post {...post.results[0]} setPosts={setPost} postPage />
```

10. with that being passed in, go to `Post.js` and add it to the destructuring operator so that it can be used in the component
```jsx
const Post = (props) => {
  const {
    id, owner, profile_id, profile_image,
    comments_count, likes_count, like_id,
    title, content, image, updated_at,
    postPage, // <----- new Prop!
  } = props
```

11. with the new `postPage` prop and the previously established `is_owner` variable, write a conditional statement with double ampersands that `if is_owner is true and postPage is true` do something. In this case, just test it works by return a placeholder string:
```jsx
...
<Avatar src={profile_image} height={55} />
{owner}
</Link>
<div className='d-flex align-items-center'>
    <span>{updated_at}</span>
    {/* if is_owner is true and postPage is true */}
    {is_owner && postPage && "hello world"}
                        {/* render "hello world" */}
</div>
```

12. test it works

13. now, beneath the `Card.Body` add a new `Card.Img` component that takes the `image` prop as the `src` value, and the `title` prop as the `alt` value. then, wrap it in a link that points `to` the post by its `id`
```jsx
...
    </Media>
</Card.Body>
<Link to={`/posts/${id}`}>
    <Card.Img src={image} alt={title} />
</Link>
...
```

14. beneath that, create another `Card.Body` component and pass in the following conditional statements:
```jsx
<Link to={`/posts/${id}`}>
<Card.Img src={image} alt={title} />
</Link>
<Card.Body>
{/* if a title value exists, display it in a Card.Title Component*/}
    {title && <Card.Title className='text-center'>{title}</Card.Title>}
{/* if a content value exists, display it in a Card.Text Component*/}
    {content && <Card.Text>{content}</Card.Text>}
</Card.Body>
```

15. now, below that card body, create a div and assign it the class of `styles.PostBar`. this div will be used to handle likes and comments icons

16. inside the div, add a ternary conditional statement that check is the `is_ower` variable is true. if it is, a tooltip will display saying that they can't like their own posts
```jsx
</Card.Body>
    <div className='{styles.PostBar}'>
        {is_owner ? (
            {/* OverlayTrigger creates overlays, it's imported from "react-bootstrap" */}
                {/* the placement prop set to top makes it appear above the icon */}
    {/* inside the displaying overlay, the text is styled with the Tooltip component, imported from "react-bootstrap"*/}
            <OverlayTrigger placement='top' overlay={<Tooltip>You can't like your own post, Narcissus.</Tooltip>}>
                <i className='far fa-heart'/>
            </OverlayTrigger>
        ) : ()}
    </div>
```
> Just to let you know, our preview will have an error until we’ve finished our ternary, so don’t worry about it.

17. now, in the second part of the ternary, (should the first condition return false), the like_id will be checked to see if it has a value
    > If it does, that means our user has already liked the post.
    - add the following code as placeholde for now:
```jsx
{is_owner ? (
    <OverlayTrigger placement='top' overlay={<Tooltip>You can't like your own post, Narcissus.</Tooltip>}>
        <i className='far fa-heart'/>
    </OverlayTrigger>
) : like_id ? (
    <span onClick={() => {}}>
        <i className={`fas fa-heart ${styles.Heart}`}/> 
    </span>
)}
```

18. > In the next part of our ternary, we want to check if the user is logged in, and if they are we’ll give them the ability to like the post. So, if there’s no like_id, we’ll check if currentUser is defined. If yes, we’ll make it so that they can like it.
    - do this by checking if `currentUser` has a value
```jsx
{is_owner ? (
    <OverlayTrigger placement='top' overlay={<Tooltip>You can't like your own post, Narcissus.</Tooltip>}>
        <i className='far fa-heart'/>
    </OverlayTrigger>
) : like_id ? (
    <span onClick={() => {}}>
        <i className={`fas fa-heart ${styles.Heart}`}/> 
    </span>
) : currentUser ? (
    <span onClick={() => {}}>
        <i className={`far fa-heart ${styles.HeartOutline}`}/> 
    </span>
) : ()}
```

19. lastly, add the final statement that renders an `OverlayTrigger` component that displays a tooltip talling users to log in to like posts
```jsx
{is_owner ? (
    <OverlayTrigger placement='top' overlay={<Tooltip>You can't like your own post, Narcissus.</Tooltip>}>
        <i className='far fa-heart'/>
    </OverlayTrigger>
) : like_id ? (
    <span onClick={() => {}}>
        <i className={`fas fa-heart ${styles.Heart}`}/> 
    </span>
) : currentUser ? (
    <span onClick={() => {}}>
        <i className={`far fa-heart ${styles.HeartOutline}`}/> 
    </span>
) : (
    <OverlayTrigger placement='top' overlay={<Tooltip>Log in to like posts!</Tooltip>}>
        <i className='far fa-heart' />
    </OverlayTrigger>
)}
```

20. underneath this ternary, still inside the div, ass the `likes_count` prop to display the number of likes
```jsx
</div>
{likes_count}
```

21. next to this, the comments icon and count need to be displayed. beneath the `likes_count`, add a `Link` component that points to the posts `id`, inside it, add the comments icon from fontawesome.
    - beneath the `Link`, add the `comments_count`
```jsx
{likes_count}
<Link to={`/posts/${id}`}>
    <i className='far fa-comments' />
</Link>
{comments_count}
```

22. check it works.

_________________________________________________________________________

## Liking and Unliking Posts

- use the code from the previous section to like and unlike posts
- using the spread operator witht he map function to update the state of props with an updated record

in `Post.js`
1. Amend the props to include the `setPosts` function from `PostPage`, which has previously been passed in
2. create an `async` `handleLike` function
3. inside it, make a `try/catch` block that makes a `post` request to `/likes/` with the `post` `id` using the `axiosRes` interceptor from `APIDefaults`, and after `await`ing the response, stores the response in a `data` object
```jsx
const handleLike = async () => {
    try {
        const {data} = await axiosRes.post("/likes/", {post: id});
    } catch (err) {}
}
```
4. underneath the `data` const, call `setPosts()`, pass it an argument of `prevPosts` and run an arrow function
    > At the moment we’re just reaching out for a single post for our Post page, however, our Post component will also live in pages where we’ll display multiple posts one after another. So eventually this function will have to handle checking if it has the right post id before applying the like to it.
5. inside the arrow function, `spread` `prevPosts`, then update the array in `results` back in `PostPage`, do this by `map`ping the values of `prevPost` over the `post` prop
```jsx
const handleLike = async () => {
    try {
        const {data} = await axiosRes.post("/likes/", {post: id});
        setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map()
        }))
    } catch (err) {}
}
```
6. inside the `map` function, run another arrow function that takes `post` as its argument.
    - inside that function, use a ternary conditional statement that checks that the `post` prop's id matches the `id` attribute. 
    - if it matches, `return` a statement that `spread`s post, and updates the `likes_count` prop with whatever the value of `post.likes_count` is `+ 1`. it wil also set the like_id of the post to the id given by the `axiosRes` response `data`
```jsx
const handleLike = async () => {
    try {
        const {data} = await axiosRes.post("/likes/", {post: id});
        setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
                return post.id === id ? {
                    ...post, likes_count: post.likes_count + 1, like_id: data.id
                } : {}
            }),
        }));
    } catch (err) {}
}
```

7. if it doesnt match, just return `post` and nothing will happen.
    > so that our map can move on to the next post in the prevPosts results array.
```jsx
const handleLike = async () => {
    try {
        const {data} = await axiosRes.post("/likes/", {post: id});
        setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
                return post.id === id ? {
                    ...post, likes_count: post.likes_count + 1, like_id: data.id
                } : post;
            }),
        }));
    } catch (err) {}
}
```

8. write a console log in the `catch` statement to log errors to the console:
```jsx
const handleLike = async () => {
    try {
        const {data} = await axiosRes.post("/likes/", {post: id});
        setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
                return post.id === id ? {
                    ...post, likes_count: post.likes_count + 1, like_id: data.id
                } : post;
            }),
        }));
    } catch (err) {
        console.log(err);
    }
}
```

9. heres that full function written out but annotated with comments to explain:
```jsx
const handleLike = async () => {
    try {
        // post request being bade to the db, with the "post" passed into the component
        // on the PostPage level (parent component)
            // it's trying to post a new like to the post with the id in the prop
        // it then stores the response in a {data} object to be used
        const {data} = await axiosRes.post("/likes/", {post: id});
        // setPosts function imported from parent element taking a prevPost
        // takes the previous state of the Post (prevPost) and spreads the data
        // using the ... spread operator 
        setPosts((prevPosts) => ({
            ...prevPosts,
            // it then takes that spreaded data and maps it over a post 
            results: prevPosts.results.map((post) => {
                // where it will then check the id of the post 
                // to see if it matches the id of the prop
                return post.id === id ? {
                    // if it does, it spreads the post value, 
                    // updating the likes_count and then setting the like_id 
                    // to the id in the data from the response. which will then 
                    // show that the like belongs to the user and the display will update 
                    ...post, likes_count: post.likes_count + 1, like_id: data.id
                    //if it doesnt match, it just returns the post object and does nothing
                } : post;
            }),
        }));
        //in the event of an error. log it.
    } catch (err) {
        console.log(err);
    }
}
```

10. now. repeat the process for the `handleUnlike` function to unlike posts:

```jsx
const handleUnlike = async () => {
        try {
            // same as above, except this time a "delete" request is being used
            // nothing needs to be sent to the database this time, so we can
            // target the existing like record directly by using the like_id
            // prop as the value in the url
            await axiosRes.delete(`/likes/${like_id}/`);
            // again same as before, spread the data and map it over the posts
            // to update with a new value
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                    // only difference is, this time, set the likes_count prop to
                    // the value of the likes_count in the post - 1.
                        // also, set the like_id to null, 
                        // as that record now doesn't exist.
                    ? {...post, likes_count: post.likes_count - 1, like_id: null}
                    : post;
                }),
            }));
            // dont forget to catch and log your errors.
        } catch (err) {
            console.log(err)
        }
    }
  
```
__________________________________________________________________

## Displaying the Posts List - Part 1

- create the PostsPage component, attach it to the Home, Feed and Liked routes, and add filters.
- these filters will allow code in later sections to:
    - display an array of posts depending on:
        - if the user wants to see all posts 
        - posts by profiles they follow
        - posts they have already liked.

> As our PostsPage component will be reusable, we’ll be able to use it for all our list view pages, by simply adding a filter on the data we fetch from the API.

**set up:**
- create a new styles file called PostsPage.module.css
- [copy the style css for PostsPage.module.css from this link](https://github.com/Code-Institute-Solutions/moments-starter-code/blob/master/15-starter-code/PostsPage.module.css)
- [add this no-results.png to your assets folder](https://codeinstitute.s3.amazonaws.com/AdvancedReact/no-results.png)
- create a new file in the `posts` folder called `PostsPage.js` and paste in the [starter code from here](https://github.com/Code-Institute-Solutions/moments-starter-code/blob/master/15-starter-code/PostsPage.js)


**steps**
1. create a `Route` for the newly created `PostPage` in `App.js`
    - replace the empty path for the homepage with it
    - add a `message` prop to it that says `"No results found. Adjust your search keyword"`
```jsx
<Switch>
    <Route exact path="/" render={() => <PostsPage message="No results found. Adjust your search keyword" />} />
    <Route exact path="/signin" render={() => <h1><SignInForm /></h1>} />
    ...
```

2. next, at the top of the `App` function, import the `useCurrentUser` hook and call it in a `currentUser` variable at the top of the file, so that the current user credentials are logged for interrogation
3. then, establish a `profile_id` const that checks the `profile_id` of the user credentials passed into `currentUser`, checking that it has a value with `?`. if it doesn't have a value (`||`) make its value an empty string
```jsx
function App() {
  const currentUser = useCurrentUser()
  const profile_id = currentUser?.profile_id || "";
  ...
```

4. copy the path for the `/` route and change its path to `/feed`
    - amend its `message text to the value below`
    - add a `filter` prop and pass it the following filter for the api:
        - filter={`owner__followed__owner__profile=${profile_id}&`}
        - as you can see this follows the same method of querying the api in the django Rest tutorial. jump back there for more info
```jsx
<Switch>
    <Route exact path="/" render={() => <PostsPage message="No results found. Adjust your search keyword" />} />
    <Route exact path="/feed" render={
            () => <PostsPage 
            message="No results found. Adjust your search keyword or follow a user" 
            filter={`owner__followed__owner__profile=${profile_id}&`}
            />
        } 
    />
    <Route exact path="/signin" render={() => <h1><SignInForm /></h1>} />
```

5. repeat the these steps to create the `/liked` route. amending its `message` and its `filter` props with the following values:
```jsx
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
```
____________________________________________________________________

## Displaying te Posts list - part 2

- add the logic to make requests to the API based on filters
- display a loading spinner while loading API data
- display message if theres no results from filters
- `useLocation` hook explained


go to `PostsPage.js`
1. inside the `PostsPage` function argument (where you would normally put a `props` variable), put the following code:
    - `{ message, filter = "" }`
    - this immediately destructures the filter and message props
```jsx
function PostsPage({ message, filter = ""}) {
```
2. next, create a `useState` hook for `posts` that will contain an object with a KVP of `{ results: [] }`, just like before in `PostPage`
```jsx
function PostsPage({ message, filter = ""}) {
    const [posts, setPosts] = useState({ results: [] });
```

> As it will take a moment for the posts to load, it also makes sense to keep track of whether  or not all the data has been fetched.  
3. create a `useState` hook that tracks wether the page `hasLoaded`. set it's default value to false, which can be updated to true when everything loads
```jsx
function PostsPage({ message, filter = ""}) {
    const [posts, setPosts] = useState({ results: [] });
    // We can use this to show a loading spinner
    // to our users as they wait for posts to load.
    const [hasLoaded, setHasLoaded] = useState(false);
``` 

> We’ll also have to re-fetch posts again when  the user clicks between the home, feed and liked pages.To detect the url change, we’ll  auto-import the `useLocation` react router hook.
4. `{ bind }` `pathname` from the `useLocation` hook into a `pathname` object:
    - the `useLocation` hook contains a `pathname` object. when establishing a const of `{ pathname }`, the object in `useLocation` matching that name is targeted and stored directly as a variable.
        - heres a simple example of how it works that you can put in python tutor:
            -   ```js
                const obj = { a: 1, b: { c: 2 } };
                const { a } = obj; // a is constant
                console.log(a)
                ```
- example in actual project:
```jsx
function PostsPage({ message, filter = ""}) {
    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    // The useLocation hook comes from the react-router library,  
    // and returns an object with data about
    // the current URL that the user is on.   
    // We need to know this to detect if the user has 
    // flicked between home, feed and liked pages.
    ...
```

5. underneath the new variables, create a new `useEffect` hook that runs an async function into a `fetchPosts` object
    - inside it, use a `try/catch` block and make a `get` request with `axiosReq` for `posts` with the value of the `filter` prop
```jsx
useEffect(() => {
    const fetchPosts = async () => {
        try {
            // The request string will contain our filter 
            // parameter, which comes from the filter prop we set in our routes. 
            const {data} = await axiosReq.get(`/posts/?${filter}`)
                // It will tell our  API if we want to see all the posts,  
                // just posts by the profiles our user has  followed, or just the posts they have liked.
        } catch (err) {

        }
    }
})
```

6. so long as there are no errors, `set` the `posts` state to the `data` returned from the API
7. now that the data from the api has been successfully retreived, update the status of `hasLoaded`
```jsx
useEffect(() => {
    const fetchPosts = async () => {
        try {
            const {data} = await axiosReq.get(`/posts/?${filter}`)
            // update the posts state with the returned api data
            setPosts(data)
            // now that its logged, update the state of hasLoaded
            setHasLoaded(true)
        } catch (err) {
            console.log(err)
        }
    }
})
```

8. with the `fetchPosts` async function created, run it inside the `useEffect` hook, also `set`ting `hasLoaded` to false again as the `data` will be getting refreshed with a new request
9. lastly, add the dependencies for the `useEffect` hook, which will be whenever the `filter` or `pathname` props update
```jsx
useEffect(() => {
    const fetchPosts = async () => {
        try {
            const {data} = await axiosReq.get(`/posts/?${filter}`)
            setPosts(data)
            setHasLoaded(true)
        } catch (err) {
            console.log(err)
        }
    }

    setHasLoaded(false);
    fetchPosts();
}, [filter, pathname]);
```

10. go to the return statement of the component, remove the placeholder text and write a ternary statement.
11. the statement will first check if `hasLoaded` is `true`, which will display post content. the `else` condition will contain the loading spinner
```jsx
return (
    <Row className="h-100">
    <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        {hasLoaded ? (

        ) : (
            console.log("LOADING.........")
        )}
    </Col>
```

12. in the `true` condition, nest a JSX fragment containing second ternary conditional statement. This statement will check if there is any posts/objects in `posts.results` by checking its length.
    - inside the `true` condition of the nested ternary, add a console log that shows that its working for now
    - inside the `else` condition, add a console log saying theres no results
```jsx
return (
    <Row className="h-100">
    <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        {hasLoaded
            ? (
                <>
                {posts.results.length 
                    ? (console.log('Posts got length yo')) 
                    : (console.log("no posts for this criteria, buddy"))
                }
                </>
            )
            : (console.log("LOADING........."))
        }
    </Col>
    ...
```

13. check everything is logging correctly in the console.

14. inside the `posts.results.length` conditional, replace the console log in the `true` condition with a `map`ping of the `post.results`
    - inside the `map` method, set an iterative element of `post` (so basically you've created a `for post in posts` loop)
    - for each iteration, the method should return a `Post` component (imported) with a key prop of `{post.id}`
        - !REMEMBER! unique `key` props need to be added to objects rendered by a `map` function, This unique identifier is used by React to keep track of which elements need to be rerendered whenever the component is updated.
    - it should also spread the values of `post`
    - it should also be passed the `setPosts` hook as a prop too

```jsx
{hasLoaded 
    ? (
        <>
        {posts.results.length 
            ? posts.results.map(post => (
                <Post key={post.id} {...post} setPosts={setPosts} />
            ))
            : (console.log("no posts for this criteria, buddy"))
            }
        </>
    ) : (console.log("LOADING........."))}
```

15. next, import the no-results image into the the `PostsPage` component, and have it render in the `else` condition for `post.results.length`:
```jsx
import NoResults from "../../assets/no-results.png"
...
{hasLoaded ? (
    <>
    {posts.results.length 
    ? posts.results.map(post => (
        <Post key={post.id} {...post} setPosts={setPosts} />
    ))
    : <Container className={appStyles.Content}>
        <Asset src={NoResults} message={message} />
    </Container>
    }
    </>
) : (
    console.log("LOADING.........")
)}
```

16. finally, in the `else` of the `hasLoaded` ternary, add the `Asset` component with the spinner prop:
```jsx
{hasLoaded ? (
    <>
    {posts.results.length 
    ? posts.results.map(post => (
        <Post key={post.id} {...post} setPosts={setPosts} />
    ))
    : <Container className={appStyles.Content}>
        <Asset src={NoResults} message={message} />
    </Container>
    }
    </>
) : (
    <Container className={appStyles.Content}>
        <Asset spinner />
    </Container>
)}
```

______________________________________________________________

## making a working search bar

- create a search bar so users can do text searches. 
    - adding a search bar
    - have the search criteria update every time the value in the search bar changes

go to `PostsPage`
1. in the `return` statement, under the popular profiles mobile placeholder add athis font awesome icon:
```jsx
<i className={`fas fa-search ${styles.SearchIcon}`} />
```

2. under the new icon, add a `Form` component, give it the class `styles.SearchBar`and an onSubmit prop where an arrow function takes the `event` and prevents the `default` behaviour of the `Form` component.
 > if the user hits enter. Our API requests will be handled by an onChange event, not the onSubmit.
 ```jsx
return (
    <Row className="h-100">
    <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        <Form className={styles.SearchBar} onSubmit={(event) => event.preventDefault()}>
            
        </Form>
 ```

 3. inside the `Form`, create a `Form.Control` conponent with a type of `"text"` and a bootstrap utility class that gives it a small margin on the right on small screensizes and up. give it a placeholder value of `"Search posts"`
 ```jsx
<Form className={styles.SearchBar} onSubmit={(event) => event.preventDefault()}>
<Form.Control
    type="text"
    className="mr-sm-2"
    placeholder="Search posts"
/>

</Form>
 ```

4. check the search bar is now visible

### handling search queries

in `PostsPage.js`
5. create a `useState` hook for `query`, it should have an empty string as default.
```jsx
function PostsPage({ message, filter = ""}) {
    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const {pathname} = useLocation();
    const [query, setQuery] = useState(""); // <----------
```

6. back in the `Form.Control` element for the search bar, add an `onChange` handler that runs a function with the `event` as a parameter and runs the `setQuery` hook that takes the `event.target.value`
```jsx
<Form.Control
    type="text"
    onChange={(event) => setQuery(event.target.value)} // <----------
    className="mr-sm-2"
    placeholder="Search posts"
/>
```

7. now update the API request in `fetchPosts`. append the `get` path with `search=${query}` and update the dependencies of the `useEffect` hook so it runs every time the query state updates
```jsx
 useEffect(() => {
    const fetchPosts = async () => {
        try {                                           // added on the end here
            const {data} = await axiosReq.get(`/posts/?${filter}search=${query}`)
            setPosts(data)
            setHasLoaded(true)
        } catch (err) {
            console.log(err)
        }
    }
    setHasLoaded(false);
    fetchPosts();
}, [filter, query, pathname]);
```
> Now our basic search functionality is working, but we have a problem: a request is fired to our API for every keystroke our user makes in the input field, which means we are making unnecessary requests. It is also a poor user experience, because every time I press a key, the whole page flashes.

> It would be better to wait a moment after the user has stopped typing and then perform the API request. So let's add some simple functionality to do that.

8. inside the `useEffect` hook, create a `timer` variable that uses the `setTimeout` function. move the call to `fetchPost` inside it and set the timer to `500`
    - also, add a return statement after the `timer` variable that `clear`s the `Timeout` function. to keep things tidy and prevent potential errors
```jsx
useEffect(() => {
    const fetchPosts = async () => {
        try {
            const {data} = await axiosReq.get(`/posts/?${filter}search=${query}`)
            setPosts(data)
            setHasLoaded(true)
        } catch (err) {
            console.log(err)
        }
    }
    setHasLoaded(false);
    const timer = setTimeout(() => {
        fetchPosts();
    }, 500)
    return () => {
        clearTimeout(timer);
    };
}, [filter, query, pathname]);
```
_____________________________________________________________

## Infinite scroll

- react-infinite-scroll-component library
    - [React infinite scroll documentation](https://www.npmjs.com/package/react-infinite-scroll-component)
- [more infor about the Double NOT operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!)

To enable infinite scrolling in a component, use the `rect-infinite-scroll-component` library
- install it into the project vua the CLI before continuing: `npm install react-infinite-scroll-component`

now, go to `PostsPage.js`:
1. in the `posts.results.length ?` ternary statement, in the truth section, add an `InfiniteScroll` component
    - inside the new components tag, add a prop of `children`, it's value should be the `post.results.map()` function that was originally inside the `posts.results.length` tab
    - add a `dataLength` prop with the value of `posts.results.length`: tells the component how many posts are currently being displayed. 
    - set a `loader` prop with the value being the `Asset` component with the `spinner` prop inside that
    - set a `hasMore` prop with the value of `!!posts.next`: tells the `InfiniteScroll` component whether there is more data to load on  reaching the bottom of the current page of data.
        > Our posts object from the API contains a key called `‘next’` which is a link to the next page of results. If we’re on the last page, that value will be null. So we can use this to determine if another page of results exists.
    - add a final prop called `next`:
        > This prop accepts a function that will be called to load the next page of results if the hasMore prop is true. For now we’ll  set this prop to an empty arrow function.
```jsx
{hasLoaded ? (
    <>
        {posts.results.length
        ? (
            <InfiniteScroll 
                children={ // original function before infinite scroll implemented
                    posts.results.map(post => (
                        <Post key={post.id} {...post} setPosts={setPosts} />
                    ))
                }
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next} // <------ next referring to API `next` value
                    // The hasMore prop will only accept a boolean value of true or false,
                    // so we’ll use a clever JavaScript logical operator called 
                    // the double not operator, sometimes called the double bang 
                    // because of its double exclamation marks. 
                    // This operator returns true for truthy values, and false for falsy values.
                next={() => {}}
            />
        ) : <Container className={appStyles.Content}>
            <Asset src={NoResults} message={message} />
        </Container>
        }
    </>
```

> We’re going to write the function to pass our ‘next’ prop in a separate utils folder. Then we’ll be able to reuse it later on for fetching  other paginated data, like comments and profiles.

2. create a folde called `utils` in `src`
3. inside the utils folder, create a `Utils.js` file
4. inside the new file, export a const called `fetchMoreData` its value will be an `async` function with the parameters `resource` and `setResource`
```jsx
export const fetchMoreData = async (resource, setResource) => {
                // these paramaters ^^^^^^^^^^^^^^^^^^^^^
                // can be re-used with any paginated data
                // like comments or profiles.
}
```
> It will accept two arguments: resource  and setResource, so that we can render and update different types of data  for our InfiniteScroll component. For example, resource and setResource could be  posts and setPosts or comments and setComments.  

5. inside the function create a `try/catch` block where a `get` request is made using the `axiosReq` interceptor to get the value of `next` from the passed in prop to `resource` (this could be posts/comments etc.)
```jsx
import { axiosReq } from "../api/axiosDefaults"

export const fetchMoreData = async (resource, setResource) => {
    try {
        const {data} = await axiosReq.get(resource.next)
    } catch(err) {
        console.log(err)
    }
}
```

6. after the request is made, call `setResource` and pass it a callback function with `prevResource` as the argument. the function then `spread`s the passed in value of `prevResource` then updates the `next` attribute from the resource with the value of `next` retrieved from the `get` request.
```jsx
import { axiosReq } from "../api/axiosDefaults"

export const fetchMoreData = async (resource, setResource) => {
    try {
        const {data} = await axiosReq.get(resource.next)
        setResource(prevResource => ({
            ...prevResource,
            next:data.next, // <---- when this is passed back, 
            // the component will know where to retrieve the next batch
            // of API data from
        }))
    } catch(err) {

    }
}
```
> We also need to update the results array to include the newly fetched results, appending to the existing ones our state is rendering for the user. 

> We can use the reduce method to add our new posts to the prevResource.results array
- [reminder on how .reduce() works](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+AJS+2021_T1/courseware/7028f507c9354ee6b22e26cf15f99a6e/a63d3c4d5fae4cb3828c0840dfc03340/7?activate_block_id=block-v1%3ACodeInstitute%2BAJS%2B2021_T1%2Btype%40vertical%2Bblock%40509a83b3d5e14926a9cefefedaa6a583)

7. update the `results` property of the `prevResource` with the `results` of the returned `data` of the `get` request,
```jsx
import { axiosReq } from "../api/axiosDefaults"

export const fetchMoreData = async (resource, setResource) => {
    try {
        const {data} = await axiosReq.get(resource.next)
        setResource(prevResource => ({
            ...prevResource,
            next:data.next,
            results: data.results.reduce((acc, cur) => {}, prevResource.results)
            // the reduce method takes the results variable 
            // (which is initially a KVP of {results: []} )
            // and reduces the spreaded data.results
            // into the prevResource.results array,
            // the acc(accumulator) callback, holds the [] value of results
            // the cur(current) holds the current value in the iteration/cycle of the reduce loop
            // every iteration/cycle of the reduce function takes the cur and pushed it into the
            // acc array, createing a fresh results array 
        }))
    } catch(err) {

    }
}
```
> Now you might think that we could just display the next page of results our API has sent us. However, let’s imagine that our Moments application becomes really popular, and we have users adding new posts, and deleting ones all the time. 

> Since we load the newest posts first, this means that if our users have added 5 more posts since we loaded the first page of ten results, our second page will contain 5 posts we are already displaying. So, we need a way to filter out any duplicates. To do this, we’ll need to check the array of existing results against the array of new results, and only add new results to our accumulator.

> Fortunately, there’s a handy JavaScript method that we can use to do this, called some().

8. inside the `reduce` function, add a return statement for every iteration that runs the `.some` method on the `acc`umulator. Passing it a callback of `accResult`, check if the `id`s of `accResult` are identical to the `id` of the `cur`rent iteration in the `reduce` loop
```jsx
try {
    const {data} = await axiosReq.get(resource.next)
    setResource(prevResource => ({
        ...prevResource,
        next:data.next,
        results: data.results.reduce((acc, cur) => {
            return acc.some((accResult) => accResult.id === cur.id)
            // The some() method checks whether the callback passed to it returns true for  
            // at least one element in the array and it stops running as soon as it does.
        }, prevResource.results)
    }))
} catch(err) {console.log(err)}
``` 

> So we can use it to check if any of our post IDs in the newly fetched data matches an id that  
already exists in our previous results. 

9. add a conditional statement in the `return` in the `reduce` method, if the `some` method returns `true`, just return the `acc`umulator, else, `spread` the `acc`umulator and add the `cur`rent value.
```jsx
setResource(prevResource => ({
    ...prevResource,
    next:data.next,
    results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
            ? acc : [...acc, cur];
            // If the some() method finds a match,  
            // we’ll just return the existing accumulator to the reduce method. 
            // But if it doesn’t find a match, we know this is a new post, 
            // so we can return our spread accumulator with the new post at the end.
    }, prevResource.results)
}))
```

10. with the `Utils` component now defined, return to `PostsPage.js`

11. in the `next` prop of the `InfiniteScroll` component, import and add the new `fetchMoreData()` method from `Utils` and pass it `posts` and `setPosts` as its arguments.

________________________________________________________________________________________

## Post Owner Dropdown Menu

- Dropdown Bootstrap component
    - display the edit and delete options for post owners.
    - make the delete function work
    - make the edit button link to the edit page
        - (but not build it)

**Important! Check your code!**
**Once you complete the video, check the code below the video to fix a browser bug.**

Browser Bug Fix:
> To be sure that the position of the dropdown menu is consistent across browsers, we need to add a popperConfig prop to our Dropdown.Menu component.

> 'popper' is a 3rd party library used by React-Bootstrap. Here we are passing a config object to make sure the dropdown menus position is fixed on all browsers.

Instructions
> In `MoreDropdown.js,` add the `popperConfig={{ strategy: "fixed" }}` prop to your `Dropdown.Menu` component, like this:
```jsx
<Dropdown.Menu
   className="text-center"
   popperConfig={{ strategy: "fixed" }}
>
```

steps
1. create a new `MoreDropdown.module.css` file in the `styles` folder
    - [paste in the code](https://github.com/Code-Institute-Solutions/moments/blob/a63232e8064c2f639daf7b073b9ef22708b1c8c9/src/styles/MoreDropdown.module.css)
2. create a new `MoreDropdown.js` file in the `components` folder
    - import the `MoreDropdown.css` `styles` into the new `js` file
```jsx
import styles from "../styles/MoreDropdown.module.css"
```

3. refer to the [reacct bootstrap documentation for code and how to implement the dropwdown menu](https://react-bootstrap-v4.netlify.app/components/dropdowns/#custom-dropdown-components)
    - copy/paste the [snippet](https://react-bootstrap-v4.netlify.app/components/dropdowns/#custom-dropdown-components) for the dropdown into `MoreDropdown.js`

4. at the top of the file, import:
    - `React from "react"`
    - `Dropdown from "react-bootstrap/dropdown"` 

5. amend the first const in the template code from `CustomToggle` to `ThreeDots`
```jsx
import styles from "../styles/MoreDropdown.module.css"
import React from "react";
import  Dropdown  from "react-bootstrap/Dropdown";

// before
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (....

// after
const ThreeDots = React.forwardRef(({ children, onClick }, ref) => (....
```

6. inside the `forwardRef` function of `Threedots`, carry out the following
    - remove the `children` parameter from the function
    - remove the `href` attribute from the `a`nchor tag inside the function
```jsx
const ThreeDots = React.forwardRef(({ children, onClick }, ref) => (
    <a                 // remove this ^^^^^^^^ 
      href="" // <------- remove that
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));
```

7. Change the `a` tag to an `i` tag, as this will be changed to a fontawesome icon.
8. assign a class to the `i` element: `fas fa-ellipsis-v`
    - close the opening tage and remove everything after
```jsx
const ThreeDots = React.forwardRef(({ children, onClick }, ref) => (
    <i // <--- was "a", now "i"
      className="fas fa-ellipsis-v"  // <----- new class assigned to
      href=""                        //        turn this block into
      ref={ref}                      //        an icon 
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    /> // <---- closed this tag
      {children}  // < Delete
      &#x25bc;   // < These
    </i>        // < Lines
```

> Let’s now create the menu for our dropdown, for which the bootstrap default will be enough.  

9. beneath the `ThreeDots` const, create a variable that `exports` `MoreDropdown`, where the variable also contains a function that `return`s the `render` components of the bootstrap boilerplate code provided with the snippet
    - then, delete everything below the `export`ing function 
```jsx
import styles from "../styles/MoreDropdown.module.css"
import React from "react";
import  Dropdown  from "react-bootstrap/Dropdown";

const ThreeDots = React.forwardRef(({ children, onClick }, ref) => (
    <i
      className="fas fa-ellipsis-v"
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));
  
export const MoreDropdown = () => {
    return (
        // code taken from the render in the template code 
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            Custom toggle
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
            <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
                Orange
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
// everything after this function is deleted
```

10. change remaining references of `CustomToggle` in code to `ThreeDots` and remove the `as={CustomMenu}` prop from `Dropdown.Menu`
```jsx
import styles from "../styles/MoreDropdown.module.css"
import React from "react";
import  Dropdown  from "react-bootstrap/Dropdown";

const ThreeDots = React.forwardRef(({ children, onClick }, ref) => (
    <i
      className="fas fa-ellipsis-v"
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));
  
export const MoreDropdown = () => {
    return (
        // code taken from the render in the template code 
        <Dropdown>
            <Dropdown.Toggle as={ThreeDots} id="dropdown-custom-components">
            Custom toggle    {/* ^^^^^^^^^ here*/}
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
            <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
                Orange
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
// everything after this function is deleted
```

11. go to `Post.js` in `pages/posts`
12.  go to the line of code in the `return` statement that checks if a user `is_owner` of a post and if `PostPage` has a value. remove the placeholder text that was put there earlier and replace it with the `MoreDropdown` component
```jsx
return <Card className={styles.Post}>
        <Card.Body>
            <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={55} />
                {owner}
                </Link>
                <div className='d-flex align-items-center'>
                    <span>{updated_at}</span>
                    {is_owner && postPage && <MoreDropdown />} 
                </div>         {/* added here ^^^^^^^^^^^^ */}
            </Media>
```

13. check its working
    - originally didn't work, had to add a `postPage` prop to the `Post` component in the `PostsPage` render. as this is in `PostPage.`
    - for reaons why this was needed, jump back to [this subsection in creating the post component fron end](#change-behaviourpermissions-on-post-depending-on-whether-the-owner-is-viewing-it)
    ```jsx
    return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <Post {...post.results[0]} setPosts={setPost} postPage /> // <--- new prop added
        ...
    ```

14. go back to the `MoreDropdown` component and assign some styling:
    - add a bootstrap class ot the new icon that pushes it to the right
    - change its dropdown box orientation to `left` using the `drop` prop
    - change the `Dropdown.Menu`'s alignment to `text-center` by assigning it a class
    - remove the `id` from the `Dropdown.Toggle` element, as it is not needed
    - remove the `"custom toggle"` text inside the `Dropdown.Toggle element`
    - turn `Dropdown.Toggle` into a self closing element
    - remove `Dropdown.Item`s 3 and 4
    - remove the `eventKey` props from the remaining `Dropdown.Items`
    - assign the class `styles.DropdownItem` to the `DropdownItems`
    - add a placeholder `onClick={() => {}}` handler to the `Dropdown.Items`
```jsx
export const MoreDropdown = () => {
    return (
        <Dropdown className="ml-auto" drop="left">
            <Dropdown.Toggle as={ThreeDots} />

            <Dropdown.Menu className="text-center">
            <Dropdown.Item className={styles.DropdownItem} onClick={() => {}}></Dropdown.Item>
            <Dropdown.Item className={styles.DropdownItem} onClick={() => {}}></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
```

15. now, edit the first `Dropdown.Item` to be the edit post button:
    - assign it an `aria-label` of "edit"
    - inside the tags, add a fontawesome icon with the class names: `"fas fa-edit"`

16. edit the second `Dropdown.Item` to be the delete post button:
    - assign it an `aria-label` of "delete"
    - inside the tags, add fontawesome icon with the class names: `"fas fa-trash-alt"`

```jsx  
export const MoreDropdown = () => {
    return (
        <Dropdown className="ml-auto" drop="left">
            <Dropdown.Toggle as={ThreeDots} />

            <Dropdown.Menu className="text-center">
            <Dropdown.Item 
              className={styles.DropdownItem}
              onClick={() => {}}
              aria-label="edit"
              >
                <i className="fas fa-edit" />
              </Dropdown.Item>
            <Dropdown.Item
              className={styles.DropdownItem}
              onClick={() => {}}
              aria-label="delete"
              >
                <i className="fas fa-trash-alt"/>
              </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
```

> Now we are ready to write the logic for what happens when our users click on the edit or  
delete icons in our dropdown menu.

> When the user clicks the edit button, we want to redirect them to a new url, which will eventually contain a PostEditForm  component. We haven’t created that component  

### creating the link to edit posts page

in `Post`.js
17. create a `history` variable using a `useHistory` hook
```jsx
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner
    const history = useHistory(); // <---new hook
```

18. create a `handleEdit` function that calls the `history` hook and `push`es a new path of `'/posts/${id}/edit'`
```jsx
  const history = useHistory();

    const handleEdit = () => { // new function, cstored in a const so it can be used
        history.push(`/posts/${id}/edit`)  // as a prop in the MoreDropdown component
    }
```

19. scroll down to the `MoreDropdown` component and add the new `handleEdit` function as a prop
```jsx
return <Card className={styles.Post}>
        <Card.Body>
            <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={55} />
                {owner}
                </Link>
                <div className='d-flex align-items-center'>
                    <span>{updated_at}</span>  {/* added here below \/\/\/\/\/\/\/ */}
                    {is_owner && postPage && <MoreDropdown handleEdit={handleEdit}/>}
```
### creating the delete posts function/button

20. go into `MoreDropdown`.js and add the `handleEdit` function as the value of the `onClick` attribute for the edit icon not forgetting to pass `handleEdit` as a prop inside `MoreDropdown as well`:
```jsx
export const MoreDropdown = ({handleEdit}) => {
    return (// added as a prop^^^^^^^^^^
        <Dropdown className="ml-auto" drop="left">
            <Dropdown.Toggle as={ThreeDots} />

            <Dropdown.Menu className="text-center">
            <Dropdown.Item 
              className={styles.DropdownItem}
              onClick={handleEdit} // <--- passed to the onClick attribute
              aria-label="edit"
              >
```

21. now create a delete function, in `Post.js`:
    - create a `handleDelete` `async` function as a const.
    - inside it, make an `axiosRes` `delete` request to `/posts/{$id}/`
    - call the `history` hook to `goBack()`
    - make sure to nest it al in a try/catch block to catch and log errors
    - once created, pass it as a prop to the `MoreDropdown` component:
```jsx
// establish the function
const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${id}/`); // request deletion in db
            history.goBack() // send user back to previous path if successful
        } catch(err) { //catch errors and log them
            console.log(err)
        }
        
    }

... // then, down in the render method:

<Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={55} />
                {owner}
                </Link>
                <div className='d-flex align-items-center'>
                    <span>{updated_at}</span>
                    {is_owner && postPage && <MoreDropdown 
                    handleEdit={handleEdit} 
                    handleDelete={handleDelete} />}
                {/* add as a prop ^^^^^^^^^^^^ */}
```

22. go to `MoreDropdown.js` and pass the `handleDelete` prop into the component, then:
    - add the component to the `onClick` handler for the delete icon:
```jsx
export const MoreDropdown = ({handleEdit, handleDelete}) => {
    return ( {/* passed in as a prop here ^^^^^^^^^^^^ */}
        <Dropdown className="ml-auto" drop="left">
            <Dropdown.Toggle as={ThreeDots} />
            ...
                <i className="fas fa-edit" />
              </Dropdown.Item>
            <Dropdown.Item
              className={styles.DropdownItem}
              onClick={handleDelete} // <--- added as attribute here
              aria-label="delete"
              >
                <i className="fas fa-trash-alt"/>
              </Dropdown.Item>
```

23. check it works
_____________________________________________________

## creating the Edit Post form

- make pre-filled forms
- make form that updates existing record in database

in the `posts` folder create a new file called `PostEditForm.js`
1. copy all of the code from `PostCreateForm` component into the new `PostEditForm.js` file
2. change the component name in the file to `PostEditForm`
3. change the export name to `PostEditForm`
```jsx
import Alert from "react-bootstrap/Alert";
//update component name at top of file
function PostEditForm() {

  const [errors, setErrors] = useState({});
...
// update export name at bottom of file
export default PostEditForm;
```

4. create a `Route` for the new component in `App.js`
```jsx
<Route exact path="/posts/create" render={() => <PostCreateForm />} />
<Route exact path="/posts/:id" render={() => <PostPage />} />
<Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
// ^^^^^^^^^^^^^^^^^^^^^^^ new route ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```

back in `PostEditForm.js`:
5. to get the `id` of the post that is to be edited, use the `useParams` hook from the `react-router` library. import this at the top of the file.

6. destructure the `id` fromt he url witht he `useParams` hook
```jsx
const imageInput = useRef(null)
const history = useHistory()
const {id} = useParams(); // <--- destructured into a const
```

7. create a `useEffect` hook that houses an `async` `handleMount` function. inside that, house a `try/catch` block:
```jsx
// below the newly defined {id} const

useEffect(() => {
    const handleMount = async () => {
        try {

        } catch (err) {
            
        }
    }
})
```

8. destructure an `axiosReq.get` request to `/posts/${id}/` into a `data` variable.
9. then, further destructure the data in post to contain the following objects:
    - `title`, `content`, `image` and `is_owner`
```jsx
 useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(`/posts/${id}`)
            const {title, content, image, is_owner} = data;
        } catch (err) {
            
        }
    }
  })
```
> Now, if the logged in user is not the owner of the post, they won’t be able to edit it, and the code in our API application would simply  
refuse to update it when the user tries to submit the form. However, a better user experience, and a more  secure looking website, would only allow the post owner to access the edit post page in the first place, and would redirect any other users away. 

> So we can add this functionality with a quick ternary that checks if the user is the post owner. If so, the postData will be  updated with the data destructured above so that the input fields can be populated on mount. In the second part of our ternary, if the user isn’t the post owner, we’ll send them back to the home page of our website instead.

10. add a ternary condition to the `try` block that checks if `is_owner` is `True`, if it is, pusht the destructured `title`, `content` and `image` data into the `postData` state of the page using the `setPostData` useSate hook. otherwise, use the `history` hook to redirect them to the home page.
```jsx
useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(`/posts/${id}`)
            const {title, content, image, is_owner} = data;
{/* --> */} is_owner ? setPostData({title, content, image}) : history.push('/')
        } catch (err) {
            console.log(err)
        }
    }
})
```

11. call the `handleMount` function in the `useEffect` hook and also set a dependency array for the `useEffect hook`. the edit form should update whenever the post `id` in the url changes, or when the `history` changes.
```jsx
useEffect(() => {
    const handleMount = async () => // <--- function workings established
        try {
            const {data} = await axiosReq.get(`/posts/${id}`)
            const {title, content, image, is_owner} = data;
            is_owner ? setPostData({title, content, image}) : history.push('/')
        } catch (err) {console.log(err)}
    }
    handleMount(); // <--- call the function when the UseEffect hook it run
}, [hiistory, id]) // <---- define when it runs ()
```
> before we can update our post, we need to make some changes to the handleSubmit function.Firstly, we need to make an adjustment to where  we set a value for the image to send to the API. 

12. in the `handleSubmit` function, take the `formData.append` method that handles the uploading of an image and nest it in an `if` statement
    - allow the method to only run if the `ImageInput` has a value, and if the `current` version of the `ImageInput` state has a value
```jsx
const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();

    formData.append('title', title)
    formData.append('content', content)
    // new conditional statement here
    if (imageInput?.current?.files[0]) {
        formData.append('image', imageInput.current.files[0])
    }
    ...
```

13.  next, in the `try` block of the `handleSubmit` function, change the `axiosReq.post` request to an `axiosReq.put` request and pass the post `id` into the api request path string so the correct post is updated.
    - also, amend the `history.push` to redirect users to the newly updated post
    - data also doesnt need to be stored from the request thats made, so the const that destructures the `axiosReq` can be removed
```jsx
const handleSubmit = async (event) => {
    ...
    try {            // `put` not `post` \/
{/*no more const here */} await axiosReq.put(`/posts/${id}`, formData);
        history.push(`/posts/${id}`) // <--- amended to not need `data` const
    } catch(err){
        console.log(err)
        if (err.response?.status !== 401){
            setErrors(err.response?.data)
        }
    }
  }
```

14. check it works
    - my code kept throwing an error whenever a put requestw as made after the image loaded. got the error of:
        - cannot read properties of undefined
        - according to google:
        > The “cannot read property of undefined” error can occur when you are trying to access a variable or a property that has not been declared yet. This error can also happen if you try to access an implicit template that has not been loaded yet.
        - couldnt find what was wrong after comparing code in difechecker so updated code with [source code from walkthrough](https://github.com/Code-Institute-Solutions/moments/blob/e5d1038cd440aa0b8fd0fd9ff74af4a1e3fa5f39/src/pages/posts/PostEditForm.js)

15. cleaup the code.
    - didnt have to do this because of copy pasting source code, but remove the ternary statement that handles the `upload image` image if no image is currently in place in the form 
    - remove the imports for the `Upload` and `Asset` component as they are no longer needed.

_______________________________________________________________________________

## Creating the Comment Form

this was a challenge page, [view the challenge here](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/29cd81fee7474552942d4f53a23e6df7/?child=first)

Your completed form should contain:

- A Comments Text Field
- An interactive Comments Icon

**Steps**
Please follow the steps below to add this component to the project.

**Step 1: Adding your boilerplate:**
1. Inside the styles directory, create a CommentCreateEditForm.module.css file
2. [Paste in the code for CommentCreateEditForm.module.css from the source code](https://github.com/mr-fibonacci/moments/blob/09254af91d92105468266c3e7691158054284168/src/styles/CommentCreateEditForm.module.css)
3. Create a comments directory inside your src/pages directory
4. Inside the comments directory create a CommentCreateForm.js file
5. [Paste in the code for CommentCreateForm.js from the source code](https://github.com/mr-fibonacci/moments/blob/09254af91d92105468266c3e7691158054284168/src/pages/comments/CommentCreateForm.js)

**Step 2: Making adjustments to PostPage.js (NOT PostsPage.js):**
1. Add the following imports:
    - `import CommentCreateForm from "../comments/CommentCreateForm";`
    - `import { useCurrentUser } from "../../contexts/CurrentUserContext";`

2. Inside the PostPage.js (NOT PostsPage.js) component, above the useEffect function, declare the following variables:
```jsx
const currentUser = useCurrentUser();
const profile_image = currentUser?.profile_image;
const [comments, setComments] = useState({ results: [] });
```

3. inside the Container component, delete the placeholder “comments” text add the following code in its place:
```jsx
{currentUser ? (
  <CommentCreateForm
  profile_id={currentUser.profile_id}
  profileImage={profile_image}
  post={id}
  setPost={setPost}
  setComments={setComments}
/>
) : comments.results.length ? (
  "Comments"
) : null}
```

**Step 3: Checking your code is working**
1. Run your preview and log in
2. Click on any post to visit its individual PostPage
3. see if the comment form shows up
4. log out and see if it still shows up, (it shouldnt')
5. If you create a comment and click the post button you won’t be able to see your comment yet. But the comment count number will go up on the post's card

_______________________________________________________________________

## creating the comment component

> Before we can get working on the Comment component to display our comments, we’ll need to fetch them from our API first.

> When we created our PostPage.js file, we said that we would be making 2 API requests inside our `Promise.all` here. At the moment we have one request for the specific post we want to show, and now we are going to add a second request to get the comments our users have made about this post.

go to `PostPage.js`
1. inside the `handleMount` `try` block, add another `axiosReq.get` request, this time from the path `/comments/?post=${id}`
    - the path is (?) querying the db for comments that have a `post` value the same as the passed in `id`, as the database stores the related post's id as a ForeignKey rememebr.
```jsx
useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: post}] = await Promise.all([
                    axiosReq.get(`/posts/${id}`), // <-- dont forget to comma,
{/* new request>*/} axiosReq.get(`/comments/?post=${id}`),
                ])
                setPost({results: [post]})
                console.log(post)
            } catch(err) {
                console.log(err)
            }
        }
        handleMount()
    }, [id])
```
> Now, we can destructure the data from the 2nd API request up here next to the data we got about the post. This time we’ll rename the data to comments.

2. add a second destructured kvp to the `Promise` in the try blocl. it should be a key of `data` with a value of `comments`
```jsx
try { // New object added here \/\/\/\/\/
    const [{data: post}, {data: comments}] = await Promise.all([
        axiosReq.get(`/posts/${id}`),
        axiosReq.get(`/comments/?post=${id}`),
    ])
    setPost({results: [post]})
    console.log(post)
}
```

3. still inside the `try`, below the `setPost` function, update the `comments` state by using the `setComments` hook
```jsx
try {
    const [{data: post}, {data: comments}] = await Promise.all([
        axiosReq.get(`/posts/${id}`),
        axiosReq.get(`/comments/?post=${id}`),
    ])
    setPost({results: [post]})
    setComments(comments) // <-- new state
```

> let’s render our comments as paragraphs  for now to check if it’s working.

4. in the return statement, below the ternary that displays the create comment form to logged in users, create a new ternary that checks if the `comments.results.length` has value:
    - add an else/if condition to check if the user is logged in, if they are, pass a string that invites them to make a comment
    - add the final else statement that just says that theres no comments
```jsx
<Container className={appStyles.Content}>
          {currentUser ? (
            <CommentCreateForm
            profile_id={currentUser.profile_id}
            profileImage={profile_image}
            post={id}
            setPost={setPost}
            setComments={setComments}
          />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {/* new conditional statement below*/}
          {comments.results.length ? (
            'comments will go here'
          ) : currentUser ? (
            <span>No comments. be the first.</span>
          ) : (
            <span>No comments in here D: </span>
          )}
        </Container>
```

5. check it works

6. go back to the true statement for the `comments.results.length` ternary. inside it, `map` the `comments.results` where for each `comment`:
    - return a paragraph tag appended with the comment's `id` as a `key`
    - inside the `<p>` tags, display the `comment.owner`'s username and the `content` of the `comment` they made
```jsx
{comments.results.length ? (
    comments.results.map(comment => (
        <p key={comment.id}>
        {comment.owner}: {comment.content}
        </p>
    ))
) : currentUser ? (
<span>No Comments. be the first.</span>
) : (
<span>No comments in here D: </span>
)}
```

7. check it works

> Now that we know our API request is working, let’s give our comments some style and display our users' avatars.

8. create a `Comment.module.css` file in the `styles` folder
    - [copy in the template code](https://github.com/Code-Institute-Solutions/moments/blob/3ece719745e185c970e4e62fd678c7c4765bf801/src/styles/Comment.module.css)

9. in the `comments` folder, create a new file called `Comment.js`
    - use the `rafce` snippe tto set it up
    - import the newly created css file from above
```jsx
import React from 'react'
import styles from '../../styles/Comment.module.css'

const Comment = () => {
  return (
    <div>Comment</div>
  )
}

export default Comment
```

10. go back to `PostPage.js`, remove the placeholder paragraph for comments, and add the `Comment` component just created, making sure to add the `key` prop to it that used to be in the `<p>` tag.
    - additionally, `spread` the `comment` callback variable from the map function in as a prop too
```jsx
{comments.results.length ? (
    comments.results.map(comment => (
        // make sure to import Comment at the top of the file too
       <Comment key={comment.id} {...comment} />
       console.log(comment);
       // callback comment spread ^^^^^^^^^^ into the component
    ))
) : currentUser ? (
<span>No Comments. be the first.</span>
) : (
<span>No comments in here D: </span>
)}
```

11. back in `Comment.js`
    - because i didnt make a field in the api to log a comment owner's profile image, i made a manual get request
        - create a `useState` hook with an empty string as its value for `ownerAvatar` 
        - create an async `handleMount` `useEffect` hook
        - inside the `handleMount` function, make an `axiosRes.get` request to the API at the path `/profiles/${profile_id}` to get the profile of the comment owner and put it in a `data` variable
        -  interrogate the new `data` variable for the right field, in this case, it was `image` (can be done by logging the object to the console and seeing whats in it)
        - `set` the state of `ownerAvatar` to the retrieved string/url value of `data.image` 
        - make sure to give the `useEffect` hook an empty array as a dependency to avoid an infinite loop
    - import the `Avatar` component
    - take the destructured passed in props and the `ownerAvatar` prop and style a comment
```jsx
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Comment.module.css'
import { axiosRes } from '../../api/axiosDefaults'
import { Media } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import Avatar from '../../components/Avatar'

const Comment = ({content, updated_at, owner, profile_id}) => {
    const [ownerAvatar, setOwnerAvatar] = useState("")

useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosRes.get(`/profiles/${profile_id}`);
            console.log(data.image)
            setOwnerAvatar(data.image)
        } catch (err) {
            console.log(err)
        }
    }
    handleMount();
}, [])

  return (
    <div>
        <hr />
        <Media>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={ownerAvatar} />
            </Link>
            <Media.Body className='align-self-center ml-2'>
            <Link to={`/profiles/${profile_id}`}>
                <span className={styles.Owner}>{owner}</span>
            </Link>
                <span className={styles.Date}>{updated_at}</span>
                <p>{content}</p>
            </Media.Body>
        </Media>
    </div>
    
  )
}

export default Comment
```

___________________________________________________________

## Comments: The Comment Component Dropdown Menu#

> Our delete functionality will update the state to change our comments count in the post, and remove the selected comment from the comments array.

in `Comment.js`:
1. import `useCurrentUser` and apply it to a const of `currentUser`
2. create a const of `is_owner` that checks if the `username` of the `currentUser` matches the `owner` of the comment (if it has a value)
```jsx
import { useCurrentUser } from '../../contexts/CurrentUserContext'

const Comment = ({content, updated_at, owner, profile_id,}) => {
    const [ownerAvatar, setOwnerAvatar] = useState("")
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
```

3. in the return statement, inside the `Media` tags, but below the `Media.Body` tags, add a double ampersand conditional statement that runs if `is_owner` is true.
    - if true, the `MoreDropdown` component should appear, it should also be passed `handleEdit`and `handleDelete` props (give placeholder functions for now)
```jsx
<Media>
    <Link to={`/profiles/${profile_id}`}>
        <Avatar src={ownerAvatar} />
    </Link>
    <Media.Body className='align-self-center ml-2'>
    <Link to={`/profiles/${profile_id}`}>
        <span className={styles.Owner}>{owner}</span>
    </Link>
        <span className={styles.Date}>{updated_at}</span>
        <p>{content}</p>
    </Media.Body>
    {is_owner && ( // if is_owner has a truthy value, add the dropdown 
        <MoreDropdown handleEdit={() => {}} handleDelete={() => {}} />
    )}
</Media>
```
> To successfully delete a comment, we’ll have to  decrement the post’s comments_count and filter out the deleted comment from the comments  array from our state. 

> To do that, we’ll need  
to access both the setPost and setComments functions inside the Comment component.

4. go to `PostPage.js` where the `Comment` component is being rendered
5. pass it `setPost` and `setComments` as props
```jsx
{comments.results.length ? (
    comments.results.map(comment => (
        <Comment
        setPost={setPost} // <--- added
        setComments={setComments} //  <-- added
        key={comment.id}
        {...comment}
        />
    ))
) : currentUser ? (
<span>No Comments. be the first.</span>
) : (
<span>No comments in here D: </span>
)}
</Container>
```

6. back in `Comment.js` add the `setPost` and `setComments` props into the `props` list as well as the comment `id`
```jsx
const Comment = ({content, updated_at, owner, 
    profile_id, id, setPost, setComment}) => {
```

7. add a new `async` `handleDelete` function with a `try/catch` block that makes an `axiosRes.delete` request to the path of `/comments/${id}/`
```jsx
const handleDelete = async () => {
    try {
        await axiosRes.delete(`/comments/${id}/`)
    } catch(err) {
        console.log(err)
    }
}
```

8. beneath the `axiosRes.delete` request, call the `setPost` function from the passed in props, giving it a callback of `prevPost`
    - inside it, `spread` the `results` of `prevPost` into the `results` object of the `post` variable in the parent element, and amend the `comments_count` by taking the `prevPost.results[0].comments_count` and decrementing it by `1`
```jsx
const handleDelete = async () => {
    try {
        await axiosRes.delete(`/comments/${id}/`)
        setPost(prevPost => ({
            results: [{
                ...prevPost.results[0],
                comments_count: prevPost.results[0].comments_count - 1
        }]
        }))
    } catch(err) {
        console.log(err)
    }
}
```
> With the comments count on the post updated, we need to remove the deleted comment from our state.  

9. below the `setPost` function, add the `setComment` function, taking a callback of `prevComments`:
    - inside, `spread` the `prevComments` variable, and then update the `results` value is a filter of the comments for that post that do not have the id of the deleted post:
```jsx
 const handleDelete = async () => {
    try {
        await axiosRes.delete(`/comments/${id}/`)
        setPost(prevPost => ({
            results: [{
                ...prevPost.results[0],
                comments_count: prevPost.results[0].comments_count - 1
        }]
        }));
        setComment(prevComments => ({
            ...prevComments,
            results: prevComments.results.filter(
                (comment) => comment.id !== id
            )
        }))
    } catch(err) {
        console.log(err)
    }
}
```

10. add the `handleDelete` function to the `handleDelete` prop in `MoreDropdown` in the `return` statement for `Comment.js`
```jsx
<Media>
    <Link to={`/profiles/${profile_id}`}>
        <Avatar src={ownerAvatar} />
    </Link>
    <Media.Body className='align-self-center ml-2'>
    <Link to={`/profiles/${profile_id}`}>
        <span className={styles.Owner}>{owner}</span>
    </Link>
        <span className={styles.Date}>{updated_at}</span>
        <p>{content}</p>
    </Media.Body>
    {is_owner && (
        <MoreDropdown handleEdit={() => {}} handleDelete={handleDelete} /> // <-- added
    )}
</Media>
```

11. check it works

_________________________________________________________________________

## Comments: The Edit Comment Form

challenge: [challenge page](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/29cd81fee7474552942d4f53a23e6df7/?child=first)
[source code](https://github.com/mr-fibonacci/moments/tree/8a8de7e0dcb980ed05a4af95770b65744cf810b1)

Your completed form should contain:

- An interactive Comments Icon
- A Comments Edit Form

**Steps**
Please follow the steps below to add this component to the project.

**Step 1: Adding your boilerplate:**
1. Inside the pages/comments directory, create a CommentEditForm.js file.
2. [Paste in the code for CommentEditForm.js from the source code.](https://github.com/mr-fibonacci/moments/blob/8a8de7e0dcb980ed05a4af95770b65744cf810b1/src/pages/comments/CommentEditForm.js)


**Step 2: Adjust the Comment.js code:**
3. Update the import for react to include the useState hook:
```jsx
import React, { useState } from "react";
```

4. Add the following import:
```jsx
import CommentEditForm from "./CommentEditForm";
```

5. Underneath the destructured props, add the following state to toggle EditForm.
```jsx
const [showEditForm, setShowEditForm] = useState(false);
```

6. Replace the return statement, and its contents, with the following code:
```jsx
return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <CommentEditForm />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
```

Note: This code adds a ternary to display the comment edit form component if a user selects the edit option:
7. Pass the CommentEditForm the following props. The setShowEditForm is a function that will enable a comment owner to toggle the edit form.
```jsx
<CommentEditForm
      id={id}
      profile_id={profile_id}
      content={content}
      profileImage={profile_image}
      setComments={setComments}
      setShowEditForm={setShowEditForm}
    />
```
**Step 3: Checking your code is working**
8. Go to a comment that the currently logged in user owns and click on the Dropdown Menu.
9. Choose the edit option and the edit form will show up.
10. If you click cancel, you’ll see the comment again.
11. If you choose to make an edit and click save, the updated version of that comment will show up.
12. If you create a comment and click the post button you won’t be able to see your comment yet. But the comment count number will go up here:
13. Now that your CreateCommentForm is complete, in the next challenge, we’ll add the code to view existing comments under the post.

_______________________________________________________________________

## Challenge: The Infinite Scroll for Comment Components

Project Description
Once complete, your PostsPage Component should be able to:

- Infinitely Load Comments

**Steps**
Note: We recommend referring back to the InfiniteScroll code in the PostsPage.js file, when completing this challenge.

Comment Infinite Scroll

1. In PostPage.js (NOT PostsPage.js), inside the ternary that displays the Comments, add an InfiniteScroll component
2. Move the code you already have to render comments (including the map function) into the InfiniteScroll component’s children prop.
3. Adjust the following props:
    - Set the dataLength of the InfiniteScroll component to the length of the comments results array
    - Set the loader prop to the Asset component, passing the Asset component a spinner prop
    - Set the hasMore prop to the correct boolean value, based on if the comments object contains a next value or not.
    - Set the next prop to an arrow function that calls the fetchMoreData function we built in the utils file.
    - Pass the fetchMoreData function the required arguments to handle fetching more comments
4. Read the warnings in the terminal, as a reminder to make your imports.


**To test your code is working**
1. important: Before you adjust your code: In your preview, create at least 11 comments under a single post. Notice that while all will show as you create them, when you refresh the page only 10 will display.
2. Go back to the post you added your comments to. As you scroll down, all the comments you created will appear at the bottom of the page as you scroll.

________________________________________________________________________

## The PopularProfiles Component - Part 1

1. create a `profiles` folder in the `src/pages` folder
2. inside the new folder, create a `PopularProfiles.js` file
    - use the `rafce` snippet to set it up
3. import `appStyles` `from App.module.css`
```jsx
import appStyles from '../../App.module.css'
```
4. replace the `div` in the return statement with a `Container` component from the `react-bootstrap` library
    - give it a class of `appStyles.content`
    - inbetween the `Container` tags, add a placeholder `<p>` with the text `"most followed profiles"`
```jsx
import React from 'react'
import appStyles from '../../App.module.css'
import { Container } from 'react-bootstrap'

const PopularProfiles = () => {
  return (
    <Container className={appStyles.Content}>
        <p>Most followed profiles</p>
    </Container>
  )
}

export default PopularProfiles
```
5. go to `PostsPage.js`
6. replace the placeholder `<p>` of `"popular profiles for desktop"` with the new `PopularProfiles` component
```jsx
<Col md={4} className="d-none d-lg-block p-0 p-lg-2">
    <PopularProfiles />
</Col>
```
7. Check it works

back in `PopularProfiles.js`:
8. define a `useState` hook for `profileData`
    - inside the `useState` method, add the 2 following attributes:
```jsx
import React, { useState } from 'react'
import appStyles from '../../App.module.css'
import { Container } from 'react-bootstrap'

const PopularProfiles = () => {
    const [profileData, setProfileData] = useState({
        // empty results array to store the list of popular
        // profiles, established as an object inside a KVP 
        // because there is more than one attribute.
        popularProfiles: {results: []},
        // we will use thie pageProfile later!
        pageProfile: {results: []},
    });
  return (
    <Container className={appStyles.Content}>
        <p>Most followed profiles</p>
    </Container>
  )
}

export default PopularProfiles
```

> Now we have our profileData object defined, we’ll need to destructure the popularProfiles attribute from it.

9.  below the `useState` for `profileData`, destructure the state of `profileData` into the `popularProfiles` attribute
```jsx
const PopularProfiles = () => {
    const [profileData, setProfileData] = useState({
        // we will use thie pageProfile later!
        pageProfile: {results: []},
        PopularProfiles: {results: []},
    });
    const {PopularProfiles} = profileData;
```
> Next we need to fetch our popularProfiles data on mount.

10. beneath the destructured const, add a `useEffect` hook and pass in an `async` `handleMount` function with a `try/catch` block:
```jsx
useEffect(() => {
    const handleMount = async () => {
        try {

        } catch (err) {
            console.log(err) 
        }
    }
})
```

11. inside the `try` block, make a `get` request with the `axiosReq` interceptor, storing the requested data in a destructured `data` variable.
    - as seen in the path for the request, a django query is being made for profiles, ordered by `followers_count` in reverse order
    - as this is a mounting function, call the `handleMount` after its been defined, inside the `useEffect hook`
```jsx
useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(
                //profiles (what to query)
                //   ||  Query
                //   ||    || order
                //   ||    ||   ||  "-" to reverse the order
                //   ||    ||   ||   ||   What to order by
                //   \/    \/   \/   \/    \/
                '/profiles/?ordering=-followers_count'
            )
        } catch (err) {
            console.log(err) 
        }
    }
    handleMount();
})
```

12. after the `handleMount` function, call the `setProfileData` hook, passing it a callback of `prevState`. Inside it, spread `prevState`
    - then, update `popularProfiles` with the newly returned `data` from the request
```jsx
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(
                '/profiles/?ordering=-followers_count'
            )
            setProfileData((prevState) => ({
                ...prevState,
                PopularProfiles: data,
            }))
        } catch (err) {
            console.log(err) 
        }
    }
```
> Now the question is, when do we run this effect? Well, every user has to make different requests to follow and unfollow people, so we’ll need to re-fetch `popularProfiles` depending on the state of the current user.

13. above the `useEffect` hook, define a `currentUser` variable and pass it the `useCurrentUser` function. be sure to import it
```jsx
const {PopularProfiles} = profileData;
const currentUser = useCurrentUser();

useEffect(() => {
```

14. now, set it as the dependency for the `useEffect` hook
```jsx
useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(
                '/profiles/?ordering=-followers_count'
            )
            setProfileData((prevState) => ({
                ...prevState,
                PopularProfiles: data,
            }))
        } catch (err) {
            console.log(err) 
        }
    }
    handleMount();
}, [currentUser]);
```
> Now that we’re fetching the popular profiles, let’s render them in the browser to check our API request is working.

15. in the return statement, under the paragraph tag, `map` over the `results` in `popularProfiles`, returning a `<p>` tag with `profile`'s `id` as its `key` and the `profile.owner` as its content:
```jsx
return (
    <Container className={appStyles.Content}>
        <p>Most followed profiles</p>
        {popularProfiles.results.map((profile) => (
            <p key={profile.id}>{profile.owner}</p>
        ))}
    </Container>
)
```
> now to add a spinner for it loading up

16. set a `hasLoaded` `useState` hook with an initial value of `false`, call the `setHasLoaded` hook in the `handleMount` function right after the `profileData` has been `set` and `set` its value to `true`.
    - then, outside of the `handleMount` function but still inside `useEffect`, before the `handleMount` is called, `set` `hasLoaded`'s value to false, so that `hasLoaded` is `false` during the retreival of new `data`
```jsx
const [hasLoaded, setHasLoaded] = useState(false);

useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(
                '/profiles/?ordering=-followers_count'
            )
            setProfileData((prevState) => ({
                ...prevState,
                popularProfiles: data,
            }))
            setHasLoaded(true);
        } catch (err) {
            console.log(err) 
        }
    }
    setHasLoaded(false);
    handleMount();
}, [currentUser]);
```

17. in the return statement, inside the `Container` tags add a ternary statement that checks the value of `hasLoaded`:
    - if `hasLoaded` is true, create a jsx fragment, and inside run the `map` function to get the `popularProfiles` previously defined in this section
    - else, load the `spinner` `Asset`
```jsx
return (
    <Container className={appStyles.Content}>
        {hasLoaded ? (
            <>
            {popularProfiles.results.map((profile) => (
                <p key={profile.id}>{profile.owner}</p>
            ))}
            </>
        ) : (
            <Asset spinner />
        )}
    </Container>
)
```

18. alternatively, this can be done without a `hasLoaded` state, by just checking the `length` of `popularProfiles` in the ternary statement instead of `hasLoaded`:
```jsx
return (
    <Container className={appStyles.Content}>
        {popularProfiles.results.length ? (
            <> {/*^^^^^^^^^^^^^^^^^^^^^^^ no need for hasLoaded! */}
            {popularProfiles.results.map((profile) => (
                <p key={profile.id}>{profile.owner}</p>
            ))}
            </>
        ) : (
            <Asset spinner />
        )}
    </Container>
)
``` 
__________________________________________________________

## The PopularProfiles Component - Part 2

go to `PostsPage.js`:
1. replace the `<p>` tage for "popular profiles mobile" with the `PopularProfiles` component, except also pass it a prop of `mobile`
```jsx
 return (
        <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
            <PopularProfiles mobile />
            <Form className={styles.SearchBar} onSubmit={(event) => event.preventDefault()}>            
            <Form.Control
            ...
```

2. go to `PopularProfiles.js`. destructure the `mobile` prop in the opening function parameters of the component
```jsx
import Asset from '../../components/Asset';

const PopularProfiles = ({ mobile }) => {
    const [profileData, setProfileData] = useState({
        ...
```

> Next, let’s adjust the styling of our container by adding a check if the mobile prop exists,  

3. in the `Container` component inside the return statement, inside the `className` prop, modify the internal string to be a template literal and then add a double ampersand conditional to check id `mobile` is truthy. if it is, pass in additional bootstrap utility styling shown in the example:
```jsx
return (                                       // will only load styles if mobile is truthy!
    <Container className={`${appStyles.Content} ${mobile && 'd-lg-none text-center mb-3'}`}>
                                    {/* the  bootstrap classes d-lg-none text-center and mb-3
                            hide the component on large screens and up, and align our text.*/}
    ...
```
> Next, we want to display our popular profiles differently depending on if they are on mobile or desktop.

> On mobile, they’ll display next to each other, and we’ll only show the first 4.

> in desktop view, we’ll display up to 10 profiles, one on top of another.

4. inside the `popularProfiles.results.length` ternary in the return statement, add another ternary statement inside its `<>fragment`. it will check is `mobile` is truthy. 
    - in the true statement, add a `div` with the classes shown in the example, move the `map` function into the `div`
        - > as we only have room to display the 4 most popular profiles on the mobile view, so we’ll `slice` the `results` array to get the first 4.
    - in the else statement, run the `map` function as normal, removing the outer `{}` as they are no longer needed
```jsx
<Container className={`${appStyles.Content} ${mobile && 'd-lg-none text-center mb-3'}`}>
        {popularProfiles.results.length ? (
            <>
            {mobile ? (
                <div className='d-flex justify-content-around'>
                    {popularProfiles.results.slice(0, 4).map((profile) => (
                <p key={profile.id}>{profile.owner}</p>
                ))}
                </div>
            ) : (
                popularProfiles.results.map((profile) => (
                    <p key={profile.id}>{profile.owner}</p>
                ))
            )}
            </>
        ) : (
            <Asset spinner />
        )}
</Container>
```
____________________________________________________________________

## The Profile Component

- add a Profile component to display our users profile avatars,  
    - link back to their profile page,
- [a button to follow or unfollow each user.](#followunfollow-buttons)

start by creating the template css:
- in the `styles` folder, create the file `Profile.module.css`, [copy/paste the template css](https://github.com/Code-Institute-Solutions/moments/blob/b70c8f1e3b054e35138c26930b7947fe12a20186/src/styles/Profile.module.css)

go to `pages/profiles`. create a `Profile.js` file:
1. inside, create the structure for the component with the `rafce` snippet
2. import the Profile.module.css stylesheet that was just created
3. additionally, import the button styles also
```jsx
import React from 'react'
import styles from '../../styles/Post.module.css'
import btnStyles from '../../styles/Button.module.css'

const Profile = () => {
  return (
    <div>Profile</div>
  )
}

export default Profile
```

4. now, go to `PopularProfiles.js`
5. replace the placeholder paragraphs in the return statement with the newly created `Profile` component
    - pass the `Profile` components a key of each `profile`'s `id`
    - also pass in the `profile` to be used as a prop also
    - make sure the mobile-relative component has the `mobile` prop passed in too
```jsx
return (
    <Container className={`${appStyles.Content} ${mobile && 'd-lg-none text-center mb-3'}`}>
        {popularProfiles.results.length ? (
            <>
            {mobile ? (
                <div className='d-flex justify-content-around'>
                    {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile/>
                ))} {/* replaced ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^<p> tags*/}
                </div>
            ) : (
                popularProfiles.results.map((profile) => (
                    <Profile key={profile.id} profile={profile} />
                )) {/* replaced ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^<p> tags*/}
            )}
            </>
        ) : (
            <Asset spinner />
        )}
    </Container>
  )
```
6. go back to `Profile.js`
7. in the top function, pass a `props` argument
8. destructure the passed-in `props` into variables of `profile`, `mobile` and `imageSize=55`
9. further destructure the `profile` variable into variables of `id`, `following_id`, `image` and `owner`
> We’ll also need to know if the currently logged in user is the owner of a profile. So, as before,  we’ll auto import and use our useCurrentUser hook,  
10. create a `currentUser` variable and give it the value of the `useCurrentUser` hook
11. create an `is_owner` variable and use it to check if the `username` value of `currentUser` matches that of `owner`
```jsx
import React from 'react'
import styles from '../../styles/Post.module.css'
import btnStyles from '../../styles/Button.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const Profile = (props) => {
    const { profile, mobile, imageSize=55 } = props;
    const { id, following_id, image, owner } = profile;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
  return (
    <div>Profile</div>
  )
}

export default Profile
```
> Ok, We have all the needed data destructured, so let’s now work on the JSX.  

12. > We’ll give the outer div the bootstrap classes “my-3 d-flex" and "align-items-center” to keep everything nicely aligned and centered In case the user is on a mobile screen, we’ll display content in a column instead.
```jsx
return (
    <div className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}>Profile</div>
  )
```

13. > Next, inside the div we just created, we’ll create another one and inside we’ll auto-import a Link component. We’ll give the Link a bootstrap className of align-self-center. And we’ll set its “to” prop to link to the user’s profile page by including the profile id in the template string.
    - > Inside the Link, we’ll auto import and add our Avatar component. Its source will be image and height will be set to imageSize.
```jsx
return (
    <div className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}>
        <div>
            <Link className="align-self-center" to={`/profiles/${id}`}>
                <Avatar src={image} height={imageSize} />
            </Link>
        </div>
    </div>
)
```
> Then, finally below the Link div we’ll  create a div for the profile owner’s name. 

14. > We’ll give it a bit of margin and assign it the WordBreak class, so that the name doesn’t overflow when things get narrow on mobile screens. And we’ll also put our users name in a strong tag.
```jsx
return (
    <div className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}>
        <div>
            <Link className="align-self-center" to={`/profiles/${id}`}>
                <Avatar src={image} height={imageSize} />
            </Link>
        </div>
        <div className={`mx-2 ${styles.WordBreak}`}>
            <strong>{owner}</strong>
        </div>
    </div>
)
```

15. check it all works

### follow/unfollow buttons

> Ok, now let’s work on displaying the follow and unfollow buttons. Similar to the like and unlike buttons, we’ll have to check if the user is logged in and if they're following a profile already.

16. in the return statement in `Profile.js`, under the `div` displaying the `profile.owner`'s username, add another `div`
    - > We’ll give that div a className of text-right. In case we’re on desktop, we’ll push the div to the right with the ml-auto class.
```jsx
  return (
    <div className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}>
        <div>
            <Link className="align-self-center" to={`/profiles/${id}`}>
                <Avatar src={image} height={imageSize} />
            </Link>
        </div>
        <div className={`mx-2 ${styles.WordBreak}`}>
            <strong>{owner}</strong>
        </div>
        <div className={`text-right ${!mobile && 'ml-auto'}`}> 
        {/* this is the div */}
        </div>
    </div>
  )
```
> We also only want to show these buttons to users who are logged in. Finally, we don’t want to show a follow button to a user when the profile displayed is their own. So let’s add some logic for these conditions.

17. > Inside the div, we’ll add the not-mobile condition to check if we are on desktop, 
    - > then we’ll check if the currentUser exists so we know our user is logged in. 
    - > finally, we’ll also check if the user is not the owner of the profile because our users won’t be able to follow themselves.
```jsx
return (
    <div className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}>
        <div>
            <Link className="align-self-center" to={`/profiles/${id}`}>
                <Avatar src={image} height={imageSize} />
            </Link>
        </div>
        <div className={`mx-2 ${styles.WordBreak}`}>
            <strong>{owner}</strong>
        </div>
        <div className={`text-right ${!mobile && 'ml-auto'}`}>
            {!mobile && currentUser && !is_owner}
        </div>
    </div>
)
```

18. > if the logged in user has followed the profile, then a following_id prop from our API response won’t be null, so we can use this in a ternary:
    - dont forget to import `Button` from react-bootstrap
    - > The unfollow button will have classNames of btnStyles.Button and btnStyles.BlackOutline. 
    - The follow button will have classNames of btnStyles.Button and btnStyles.Black. 
    - give both `Buttons` a placeholder `onClick` attribute for now
```jsx
<div className={`text-right ${!mobile && 'ml-auto'}`}>
    {!mobile && currentUser && !is_owner && (
        following_id ? (
            <Button className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
            onClick={() => {}}>Unfollow</Button>
        ) : (
            <Button className={`${btnStyles.Button} ${btnStyles.Black}`} 
            onClick={() => {}}>Follow</Button>
    ))}
</div>
```

19. check it all works

_______________________________________________________________________

## Challenge: Profile Data ContextProfile Data Context
[challenge link](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/dae7204e9cb747f4b46c2e805d9d0acc/?child=last)

In this challenge, we’ll create the Context.Provider for our profileData so that it is more accessible throughout the app.

At the moment each of the `PopularProfiles` components makes its own API request, and contains its own version of the profiles state. Given that we need to access profile data in several places around our application, it would make sense for all our profile data to be in sync across all the components that need to access it. So in order to have one source of truth for our profile data state, we should move it into a context provider.

Project Description
Once complete, you should be able to:
- Access the Profile Data from anywhere in the application using a Context.Provider.

Note: Upon completion of this task, your website will look the same but you will now be able to access the Profile Data from any component.

Steps
Note: We recommend referring back to the ContextUserContext.js file, when completing this challenge.

**Part 1: ProfileDataContext.js**
1. Inside the context folder, create the ProfileDataContext.js.
2. Create 2 context objects:
    - One for profileData, e.g. ProfileDataContext
    - One for the functions to update it e.g. SetProfileDataContext
3. Create two custom hooks for each context object above:
    - e.g. useProfileData
    - e.g. useSetProfileData
4. Export and define a ProfileDataProvider function component. Pass it children as props.
5. Identify and copy all the stateful logic from PopularProfiles.js.
6. Paste this code into the empty ProfileDataProvider.
7. Remove the destructured popularProfiles line.
    - Note: We won’t use the destructured popularProfiles because, eventually, we’ll pass the entire profileData object as the value prop in the ProfileDataContext.Provider. But we’ll need the useState and useEffect hooks here, so that the data is fetched on mount.
8. In the return statement:
    - Add your ProfileDataContext.Provider and expose the profileData value.
    - Add your SetProfileDataContext.Provider and expose the setProfileData value.

**Part 2: Index.js**
Note: Your ProfileDataProvider will need to be placed within the CurrentUserProvider, as the ProfileDataProvider needs to access the setCurrentUser Context.

9. Add your newly created ProfileDataProvider around the App component (within the CurrentUserProvider).

**Part 3: PopularProfiles.js**
1. Replace the code you copied from Popular Profiles, and call your new useProfileData context to destructure your popularProfiles state.

**Important:** Don't forget to tidy up your imports e.g. adding new imports, removing unused imports, making sure file paths are accurate.

_______________________________________________________________________________

## Building the Profile Header

- populating the profile page
- Follow/unfollow button logic

setting up:
- create a new `ProfilePage.module.css` file in the styles directory
- [import the styles needed from the source code provided](https://github.com/Code-Institute-Solutions/moments/blob/e9b5a7ea53ba032c0eccc269bf55cdbe69c80c46/src/styles/ProfilePage.module.css)
- add a new `ProfilePage.js` file to the profiles directory
- [add the template code for the file provided for the tutorial](https://github.com/Code-Institute-Solutions/moments-starter-code/blob/master/23-starter-code/ProfilePage.js)
- add a `Route` for the new `ProfilePage` component in `App.js`
```jsx
    <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
```

> Ok, our first step will be to fetch the data about the chosen profile to display in the header.

in `ProfilePage.js`
1. create a const that destructures the the `useParams()` hook into a variable of `id`
    - > To know which profile to fetch, we’ll need to extract the id from the URL by auto-importing the useParams hook, just like we did for the PostPage and PostEditForm components.
    -`useParams` can pull id and data from urls/paths
```jsx
function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const {id} = useParams();
```

> We can now move onto the useEffect hook. Inside, we’ll define the fetchData async function.

2. create 2 variables:
    - a const that takes the `useProfileData` hook and destructures its result into a variable called `{pageProfile}`
    - a const that destructures the value of `pageProfile.results` into an array value of `[profile]`.The value for this variable is determined by the `useEffect` hook in the next step
```jsx
function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const {id} = useParams();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const setProfileData = useSetProfileData();
  ...
```

3. inside the `useEffect` hook, define an async function called `fetchData`. inside it, put a `try/catch` block whish will `await` a `Promise` and then pass it into a `data` variable, which will in turn destructure it into a `pageProfile` variable:
```jsx
 useEffect(() => {
    const fetchData = async () => {
        try {
            const [{data: pageProfile}] = await Promise.all()
        } catch (err) {
            console.log(err)
        }
    }
      setHasLoaded(true);
  }, [])
```
> Here, we’ll be fetching the user profile and their posts in a later unit. So, in the array we’ll make the request to the /profiles/:id/ endpoint with the auto-imported axiosReq instance.

4. inside the `all` method of the `Promise` make an `axiosReq.get` request to `/profiles/${id}/`, inside an array - as it will be returned to an array value in the destructure.
```jsx
try {
    const [{data: pageProfile}] = await Promise.all([
        axiosReq.get(`/profiles/${id}/`)
    ])
} catch (err) {
    console.log(err)
}
```
> If everything goes well, we’ll need to update the pageProfile data.

5. import the `useSetProfileData` hook and store it in a variable of `setProfileData` at the top of the file.
```jsx
function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const {id} = useParams();
  const setProfileData = useSetProfileData();
  ...
```

6. then, call it in the `try` block after the request to update the `pageProfile`'s value:
```jsx
try {
    const [{data: pageProfile}] = await Promise.all([
        axiosReq.get(`/profiles/${id}/`)
    ])
    setProfileData(prevState => ({
        ...prevState,
        pageProfile: {results: [pageProfile]}
    }))
} catch (err) {
    console.log(err)
}
``` 

7. after tthe `setProfileData` call, add a `setHasLoaded` function with a value of `true` to confirm the data has been updated:
```jsx
try {
    const [{data: pageProfile}] = await Promise.all([
        axiosReq.get(`/profiles/${id}/`)
    ])
    setProfileData(prevState => ({
        ...prevState,
        pageProfile: {results: [pageProfile]}
    }))
    setHasLoaded(true);
} catch (err) {
    console.log(err)
}
```

8. with everything in place, call the `fetchData` function at the end of the `useEffect hook` and set the depencies for the function to `id` and `setProfileData`
```jsx
useEffect(() => {
    const fetchData = async () => {
        try {
            const [{data: pageProfile}] = await Promise.all([
                axiosReq.get(`/profiles/${id}/`)
            ])
            setProfileData(prevState => ({
                ...prevState,
                pageProfile: {results: [pageProfile]}
            }))
            setHasLoaded(true);
        } catch (err) {
            console.log(err)
        }
    }
    fetchData();
}, [id, setProfileData])
```
> Next, we’ll replace the Image placeholder paragraph with an actual react-bootstrap Image component

9. in the `mainProfile` const, replace the `<p>Image</p>` placeholder with a react-bootstrap `Image` component:
    - give it a class of `styles.ProfileImage`
    - give it the `roundedCircle` prop to make the image circular
    - set its `src` to `profile.image`
```jsx
const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image 
            className={styles.ProfileImage} 
            roundedCircle 
            src={profile.image}
          />
        </Col>
```
> When we see that in the preview we’re getting an error. The reason for this is that the JSX is trying to render the image before the API request for the profile is complete.

10. prevent the error by using conditional chaining. add a `?` onto `profile` in the `src` of the rendering `Image` component. this will confirm if the source for the `src` has a value before rendering.
```jsx
const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image 
            className={styles.ProfileImage} 
            roundedCircle 
            src={profile?.image}//  <--- conditional chaining (?) added
          />
        </Col>
```

11. check it works

> Now we can move on to the profile stats.To start, we’ll display the profile owner’s username in the header, again we’ll use the conditional chaining to avoid the error we just talked about.

12. in the `mainProfile` const, go to the `Profile username` placeholder and replace it with `{profile?.owner}` to display the profile owner's username
13. remove and replace the `<p>Profile stats</p>` placehholder with a new `Row` component from react-bootstrap. it should have the bootstrap utility classes of `"justify-content-center no-gutters"`
14. inside the `Row` tags, add a `Col` component from react-bootstrap, assign it the following props/parameters:
    - `xs={3}`: assign it a columne width of 3
    - assign a class of `"my-2"`
15. inside the `Col` tags, insert a `div` wrapping the `{profile?.posts_count}`
16. below that `div`, add another, that just says "posts"
```jsx
<Row noGutters className="px-3 text-center">
    <Col lg={3} className="text-lg-left">
        <Image 
        className={styles.ProfileImage} 
        roundedCircle 
        src={profile?.image}
        />
    </Col>
    <Col lg={6}>
        <h3 className="m-2">{profile?.owner}</h3>
        <Row className="justify-content-center no-gutters">
        <Col xs={3} className="my-2">
            <div>{profile?.posts_count}</div>
            <div>Posts</div>
        </Col>
```
17. repeat this process for `followers_count` and `following_count`
```jsx
<Row className="justify-content-center no-gutters">
    <Col xs={3} className="my-2">
        <div>{profile?.posts_count}</div>
        <div>Posts</div>
    </Col>
    <Col xs={3} className="my-2">
        <div>{profile?.followers_count}</div>
        <div>Followers</div>
    </Col>
    <Col xs={3} className="my-2">
        <div>{profile?.following_count}</div>
        <div>Following</div>
    </Col>
</Row>
```
> Ok, next we’ll add the conditional logic to display the follow/unfollow button for this profile. 

### Follow/unfollow button

18. add an `is_owner` variable that checks if the returned `username` value from the `currentUser` hook matches that of the `profile?.owner`
19. copy the conditional statement that manages the follow/unfollow button in `Profile.js`, then, removeits `mobile` condition, and change its `following_id` condition to `profile?.following_id` as that variable has not been destructured in this file.
    - [check out how to manually write this conditional code here](#followunfollow-buttons)
```jsx
    <Col xs={3} className="my-2">
        <div>{profile?.following_count}</div>
        <div>Following</div>
    </Col>
    </Row>
</Col>
<Col lg={3} className="text-lg-right">
{currentUser && !is_owner && (
        profile?.following_id ? (
            <Button className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
            onClick={() => {}}>Unfollow</Button>
        ) : (
            <Button className={`${btnStyles.Button} ${btnStyles.Black}`} 
            onClick={() => {}}>Follow</Button>
    ))}
</Col>
```
> Finally, we’ll conditionally render a column to display the profile.content, checking that it is defined before trying to render it.

20. after the closing `col` tag for the follow button conditionals, add a conditional statement that will render an additional column:
    - the conditional statment will check if the profile has a `content` attribute with any value
    - change the content inside the `Col` from the placeholder text to the value of `{profile.content}`
```jsx
<Col lg={3} className="text-lg-right">
    {currentUser && !is_owner && (
            profile?.following_id ? (
                <Button className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                onClick={() => {}}>Unfollow</Button>
            ) : (
                <Button className={`${btnStyles.Button} ${btnStyles.Black}`} 
                onClick={() => {}}>Follow</Button>
        ))}
    </Col>
    {profile?.content && (<Col className="p-3">{profile.content}</Col>)}
    </Row>
```
_______________________________________________________________________________

## Challenge: Displaying the Posts for a Profile


**Project Description**
In this challenge, you’ll add the posts by a profile owner in the profile page, underneath the profile header.

Before you adjust your code: In your preview, make sure you have a user who has created at least 11 posts, you can see how many posts a user has in the header here.

Note: We recommend referring back to the InfiniteScroll code in the PostsPage.js file, when completing this challenge.

**Steps**
In ProfilePage.js:

**Part 1: ProfilePage.js**
1. Define profilePosts and setProfilePosts with the useState hook. Set the initial state to be an object with an empty results array.
2. Inside the Promise.all add a second API request to fetch the profilePosts, don’t forget to use the axiosReq instance and the following api endpoint: `/posts/?owner__profile=${id}`
3. Destructure the returned data property from the API, and rename it to profilePosts.
4. Call the setProfilePosts function, and pass it the updated profilePosts state. (Add this just before setHasLoaded(true)!)

**Part 2: ProfilePage.js**
5. Inside the mainProfilePosts variable, under the second <hr/> tag, create a ternary statement that checks that the profilePosts results array is not empty.
6. If the array is not empty, add an InfiniteScroll component, if it is empty add an Asset component.
7. Add the following props to the InfiniteScroll component:
    1. Set the children prop to display all Posts stored in the profilePosts results array. Pass it all the appropriate props
    2. Set the dataLength of the InfiniteScroll component to the appropriate length
    3. Use the loader prop to display a spinner.
    4. Set the hasMore prop to the correct boolean value.
    5. Set the next prop to an arrow function that calls the fetchMoreData function we built in the utils file.
    6. Pass the fetchMoreData function the required arguments to handle fetching more profilePosts
8. In case the posts have been fetched and the results array is still empty, give your Asset component a src attribute with its value being the imported "NoResults" graphic (you will need to import this, just like in PostsPage.js)
9. Pass your Asset component the following message prop: `No results found, ${profile?.owner} hasn't posted yet.`
10. Update the “Profile owner's posts” paragraph at the top of the mainProfilePosts varaible, by replacing the text "Profile owner" with the profile owner’s name.

**To test your code is working**
- Go to a profile with at least 11 posts and scroll to see that all the posts are loaded.
- Go to a profile that hasn’t created any posts yet and check to see the no results image and message
- Check that the correct users name is displayed in the profile

#### [Displaying the Posts for a Profile: solution code](https://github.com/mr-fibonacci/moments/blob/83234283da32adb4a6bf5d5053a6c80068f6391c/src/pages/profiles/ProfilePage.js)

________________________________________________________________________

## Following Profiles

- follow/unfollow logic

> As we have all our ProfileData and the function to set it in the ProfileDataContext file, that’s where we’ll define our handleFollow async function.

go to `ProfileDataContext.js`
1. after/below the call to the `useCurrentUser` hook, create a `handleFollow` `async` function that takes `clickedProfile` as an argument.
2. inside the function, add a `try/catch` block
3. in the `try` block, make an `axiosRes.post` request to the path: `/followers/`, but add an object to the path which will be a KVP of `followed: clickedProfile.id`, destructure the response into a `data` variable
```jsx
const handleFollow = async (clickedProfile) => {
    try {
        const {data} = await axiosRes.post('/followers/', {
            followed: clickedProfile.id
        })
    } catch (err) {
        console.log(err)
    }
}
```
> The data we’ll send is information about what profile the user just followed, which is the id of the profile the user just clicked. Ok, now we have to expose the handleFollow function in the ProfileDataContext.Provider

> Ok, now we have to expose the handleFollow function in the ProfileDataContext.Provider so that the Profile components have access to it when the follow button is clicked.

4. in the return statement, inside the `SetProfileDataContext.Provider` opening tag, amend the `value` prop to include the `handleFollow` function in addition to the `setProfileData` function., wrap the 2 functions in a set of additional curly braces
```jsx
return (
    <ProfileDataContext.Provider value={profileData}>
    <SetProfileDataContext.Provider value={ {setProfileData, handleFollow} }>
        {children}
    </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
)
```
> Now that we’re returning multiple functions within an object rather than a single function, we’ll have to destructure setProfileData in ProfilePage.js, where we called our useSetProfileData hook before. We’ll also have to destructure handleFollow.

5. go to `ProfilePage.js`. amend the `setProfileData` const that calls the `useSetProfileData` function to be destrcutured into `setProfileData` and `handleFollow`
```jsx
function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const {id} = useParams();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const {setProfileData, handleFollow} = useSetProfileData(); // <--- newly destructured
```
> Let’s now go to the follow button and call the handleFollow function with the profile in the onClick attribute.

6. go to the `mainProfile` const, in the ternary statement, where the follow button is being called, amend the `Button`'s onClick attribute to run the `handleFollow` function, taking a parameter of `profile`
```jsx
<Col lg={3} className="text-lg-right">
    {currentUser && !is_owner && (
            profile?.following_id ? (
                <Button className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                onClick={() => {}}>Unfollow</Button>
            ) : (
                <Button className={`${btnStyles.Button} ${btnStyles.Black}`} 
                onClick={() => handleFollow(profile)}>Follow</Button>
        ))}
</Col>
```
> Ok now that we added the handleFollow function and made sure things won’t break in ProfilePage.js, let’s go to the Profile.js file so that we can add our handleFollow function to our follow button there, too.

7. go to `Profile.js`
8. above the return statement, import `useSetProfileData` and destructure the `handleFollow` function from it.
```jsx
const {handleFollow} = useSetProfileData();

return (...
```

9. add it as the function for the onClick attribute of the follow button in the return statement
```jsx
<div className={`text-right ${!mobile && 'ml-auto'}`}>
            {!mobile && currentUser && !is_owner && (
                following_id ? (
                    <Button className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                    onClick={() => {}}>Unfollow</Button>
                ) : (
                    <Button className={`${btnStyles.Button} ${btnStyles.Black}`} 
                    onClick={() => handleFollow(profile)}>Follow</Button> // <-----------
            ))}
        </div>
```
> Now if we go to the ProfilePage and click on a ‘follow’ button, nothing seems to have happened. If we refresh though, we can see that we are indeed following a profile. The button says ‘unfollow’ and the pageProfile’s followers count increased by one.

> What happened was we made a network request to follow a profile in the background and all the associated data was updated on the server. When we refreshed the page, all the up-to–date data was fetched.

> What we have to do now, is reflect all these changes on the client side, so that we don’t have to refresh the page every time we click the follow button.

> when we click on a profile in our popularProfiles component, we’ll have to map over every single profile in the state one by one, and consider the following cases for each.

> If the id of the profile in the array is the same as the one we clicked, we’ll update its following_id so that the unfollow button is rendered. And it'll also increase its followers_count by one.

> If it is the profile of the logged in user, we’ll increase their following count by one, to reflect that the user has just followed another profile.

> Finally, in case none of these are true, we’ll just return the profile as is without changing anything.

10. go back to `ProfileDataContext.js`
11. inside the `try` block of `handleFollow`, call the `setProfileData` function and pass it `prevState` as its argument.
    - `spread` `prevState`
```jsx
const handleFollow = async (clickedProfile) => {
        try {
            const {data} = await axiosRes.post('/followers/', {
                followed: clickedProfile.id
            });

            setProfileData(prevState => ({
                ...prevState, // <---- setProfileData and stuff
                
            }))
        } catch (err) {
            console.log(err)
        }
    }
```

12. after `spread`ing the `prevState`, update the `popularProfiles` prop with the an object:
    - inside the object, `spread` the `popularProfiles` of `prevState`
```jsx
try {
    const {data} = await axiosRes.post('/followers/', {
        followed: clickedProfile.id
    });

    setProfileData(prevState => ({
        ...prevState,
        popularProfiles: { // <--- second update
            ...prevState.popularProfiles,
        }

    }))
```

13. then, **inside** the `popularProfiles` prop update inside `setProfileData`, update the `results` property by `map`ping the the `prevState` of the `popularProfiles.results`, 
    - inside the `map` method, pass it a callback of `profile` and then inside its arrow function `return` a ternary statement that checks if `profile.id` matches the `clickedProfile.id`
    - also add an `else if` that checks if the current user `is_owner` of a `profile`
```jsx
setProfileData(prevState => ({
    ...prevState,
    popularProfiles: {
        ...prevState.popularProfiles,
        results: prevState.popularProfiles.results.map(profile => {
            return profile.id === clickedProfile.id
            ? // this is the profile i clicked on,
                // update its followers count and set its following id
                {}
            : profile.is_owner
            ? // tis is the profile of the logged in user
                //update its following count
                {}
            : // this is not the profile the user clicked on
                // or the profile the user owns, so just return unchanged
                {};
        })
    }
}))
```
> In the first part, we’ll check if the profile in the array we’re iterating over is the same one the user just clicked on.

> So if their id’s are the same, we’ll return the profile object, increasing its followers_count by one and setting its following_id to data.id.

14. in the first block for the ternary:
    - `spread` the `profile` in that iteration of the `map` functions loop
    - update the `followers_count` with the value of the `profile`'s `followers_count + 1`
    - assign the `following_id` the value of the `id` from the `data` in the request
```jsx
 setProfileData(prevState => ({
                ...prevState,
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map(profile => {
                        return profile.id === clickedProfile.id
                        ? // this is the profile i clicked on,
                          // update its followers count and set its following id
                          {
                            ...profile,
{/* updated values --->*/}  followers_count: profile.followers_count + 1,
                            following_id: data.id
                          }
                        : profile.is_owner
                        ? // tis is the profile of the logged in user
                          //update its following count
                          {}
                        : // this is not the profile the user clicked on
                          // or the profile the user owns, so just return unchanged
                          {};
                    })
                }
            }))
``` 

15. for the second block of the ternary:
    - `spread` `profile`
    - update the `following_count` to the value of the `profile`'s `following_count + 1`
```jsx
results: prevState.popularProfiles.results.map(profile => {
    return profile.id === clickedProfile.id
    ? // this is the profile i clicked on,
        // update its followers count and set its following id
        {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id: data.id
        }
    : profile.is_owner
    ? // tis is the profile of the logged in user
        //update its following count
        {
        ...profile, following_count: profile.following_count + 1
        }
    : // this is not the profile the user clicked on
        // or the profile the user owns, so just return unchanged
        {};
})
```

16. for the last block, remove the `{}` and just call the `profile`. as no changes need to be made
```jsx
return profile.id === clickedProfile.id
    ? // this is the profile i clicked on,
        // update its followers count and set its following id
        {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id: data.id
        }
    : profile.is_owner
    ? // tis is the profile of the logged in user
        //update its following count
        {
        ...profile, following_count: profile.following_count + 1
        }
    : // this is not the profile the user clicked on
        // or the profile the user owns, so just return unchanged
        profile;
```

17. check it works

> We can see the button changed to ‘unfollow’, as in our setProfileData function we updated the popularProfiles.

> However, I just liked a profile but my following count didn’t budge, even though if I refresh the page we can see it was updated in our API.

> So to get my statistics here to update immediately, we need to run the same code again on the pageProfile object as well, as that data is in a separate array.

> Even though this array only contains one item, we deliberately put our pageProfile in an array so that we have the same data type as the popularProfiles array, making it very easy for us to reuse our map code from before.

18. in the call to `setProfileData` in `handleFollow`, after `spread`ing `prevState`, add a `pageProfile` prop update to the `results` array of `pageProfile` with the value of `prevState.pageProfile.results`
```jsx
setProfileData(prevState => ({
    ...prevState,
    pageProfile: { // <--- new prop update added
        results: prevState.pageProfile.results
    },
    popularProfiles: {
        ...prevState.popularProfiles,
        results: prevState.popularProfiles.results.map(profile => {
```
19. copy the entire `map` function from inside the `popularProfiles` update directly below the newly created `pageProfile`s one created above.
    - paste/append that map function onto the `pageProfile` `results` update:
```jsx
setProfileData(prevState => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map(profile => {
{/* identical to */}    return profile.id === clickedProfile.id
{/* the map method */}  ? {
{/* below */}               ...profile,
{/* this one */}            followers_count: profile.followers_count + 1,
                            following_id: data.id
                        } : profile.is_owner
                        ? {
                            ...profile, following_count: profile.following_count + 1
                        } : profile;
                    })
                },
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map(profile => {
                        return profile.id === clickedProfile.id
                        ? // this is the profile i clicked on,
                          // update its followers count and set its following id
                          {
                            ...profile,
                            followers_count: profile.followers_count + 1,
                            following_id: data.id
                          }
                        : profile.is_owner
                        ? // tis is the profile of the logged in user
                          //update its following count
                          {
                            ...profile, following_count: profile.following_count + 1
                          }
                        : // this is not the profile the user clicked on
                          // or the profile the user owns, so just return unchanged
                          profile;
                    })
                }
            }))
```
20. as this code is lengthy and repetitive, refactor it into a file of its own in the `utils` file
    - go to `Utils.js`
    - `export` and create a const function called `followHelper`, inside it, copy/paste in the entire conditional statement just created in the previous steps:
        - > We’ll need to pass the helper function three arguments: the profile from the array we’re currently iterating over, the clickedProfile and the following_id.
```jsx
export const followHelper = (profile, clickedProfile, following_id) => {
     //                                               ^^^^^^^^^^^^^
    // This is the id of the data returned by the API when we make the request to follow a user.
    return profile.id === clickedProfile.id
        ? // this is the profile i clicked on,
            // update its followers count and set its following id
            {
            ...profile,
            followers_count: profile.followers_count + 1,
            following_id: data.id
            }
        : profile.is_owner
        ? // tis is the profile of the logged in user
            //update its following count
            {
            ...profile, following_count: profile.following_count + 1
            }
        : // this is not the profile the user clicked on
            // or the profile the user owns, so just return unchanged
            profile;
}
```
21. As we’re passing data.id into our helper function as an argument named following_id, we can update the value of the same name, so we can remove data.id from the `data.id` part of the `following_id` update in the truth/first block of the ternary.
```jsx
// comments removed, as it was getting a bit too pine fresh.
 return profile.id === clickedProfile.id
        ? 
        {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id // <--- no more data.id!
        }
        : profile.is_owner
        ? 
        {
        ...profile, following_count: profile.following_count + 1
        }
        : 
        profile;
```

22. go back to the `handleFollow` function in `ProfileDataContext.js.`
23. inside the `map` method of the updating of `popularProfiles`, remove the ternary block and autoImport the new `followHelper` function in its place
    - pass it the arguments `profile`, `clickedProfile` and `data.id`
24. repeat this process for the updating of `pageProfile`
```jsx
const handleFollow = async (clickedProfile) => {
        try {
            const {data} = await axiosRes.post('/followers/', {
                followed: clickedProfile.id
            });

            setProfileData(prevState => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map(profile => followHelper(
                        profile, clickedProfile, data.id // follow helper imported ^^^
                        ))
                },
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map(profile => followHelper(
                        profile, clickedProfile, data.id // follow helper imported ^^^
                        ))
                }
            }))
        } catch (err) {
            console.log(err)
        }
    }
```

_______________________________________________________________________

## Challenge: Unfollowing Profiles
- [Challenge link](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/f2a43e76b6694b0c85d8bf5be2d9700f/?child=first)
- [solution code](https://github.com/mr-fibonacci/moments/tree/7184267c052b3b969131925f1d06aec7be8949f8)

**Challenge Description**
In this challenge, you’ll add the functionality to unfollow a profile. Users will be able to click an unfollow button anywhere in the application and all of the relevant states will be kept in sync, just like we have done for the follow functionality

Clicking an unfollow button will cause your following count to go down, and the followers count of the profile clicked will go down too.

**Note:** We recommend referring back to the handleFollow and followHelper code when completing this challenge.

**Steps**
This challenge has 4 parts:

**Part 1: ProfileDataContext.js**
1. Define the handleUnfollow async function, that will accept clickedProfile as an argument too.
```jsx
const handleUnfollow = async (clickedProfile) => {
    try {} catch (err) {}
}
```
2. Inside, make a DELETE request to: `/followers/${clickedProfile.following_id}/` with the axiosRes instance.
```jsx
const handleUnfollow = async (clickedProfile) => {
    try {
        const {data} = await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);
    } catch (err) {}
}
```
3. Call the setProfileData function and update the pageProfile and popularProfiles in the same way we did inside handleFollow, but call the unfollowHelper instead.
```jsx
const handleUnfollow = async (clickedProfile) => {
        try {
            const {data} = await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);
            setProfileData(prevState => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map(profile => unfollowHelper(
                        profile, clickedProfile, data.id
                        ))
                },
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map(profile => unfollowHelper(
                        profile, clickedProfile, data.id
                        ))
                }
            }))
        } catch (err) {}
    }
```

**Note:** In this case, we only need to pass the unfollowHelper 2 arguments. Which ones do you think are needed? (Compare with followHelper)

**Part 2: utils.js**
4. Define the unfollowHelper function.
```jsx
export const unfollowHelper = () => {}
```
5. Unlike followHelper, it should take two arguments, which ones do you think? (following_id no longer needed)
```jsx
export const unfollowHelper = (profile, clickedProfile) => {}
```
6. Base your unfollowHelper function on the followHelper, make appropriate adjustments where necessary to the functionality.
```jsx
export const unfollowHelper = (profile, clickedProfile) => {
    return profile.id === clickedProfile.id
    ? // this is the profile i clicked on,
        // update its followers count and nulls the following id that's been deleted
        {
        ...profile,
        followers_count: profile.followers_count - 1,
        following_id: null,
        }
    : profile.is_owner
    ? // this is the profile of the logged in user
        //update its following count
        {
        ...profile, 
        following_count: profile.following_count - 1
        }
    : // this is not the profile the user clicked on
        // or the profile the user owns, so just return unchanged
        profile;
}
```

**Part 3: Wire things up properly**
7. ProfileDataContext.js: pass the handleUnfollow to the appropriate Context Provider.
```jsx
 return (
    <ProfileDataContext.Provider value={profileData}>
    <SetProfileDataContext.Provider value={ {setProfileData, handleFollow, handleUnfollow} }>
        {children}
    </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
)
```
8. ProfilePage.js: destructure handleUnfollow where calling the useSetProfileData hook and add the handleUnfollow functionality to the unfollow button.
```jsx
const {setProfileData, handleFollow, handleUnfollow} = useSetProfileData();
...
{currentUser && !is_owner && (
    profile?.following_id ? (
        <Button className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
        onClick={() => handleUnfollow(profile)}>Unfollow</Button>
    ) : ( ...
```
9. Profile.js: destructure handleUnfollow where calling the useSetProfileData hook and add the handleUnfollow functionality to the unfollow button.
```jsx
const {handleFollow, handleUnfollow} = useSetProfileData();
...
 <div className={`text-right ${!mobile && 'ml-auto'}`}>
    {!mobile && currentUser && !is_owner && (
        following_id ? (
            <Button className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
            onClick={() => handleUnfollow(profile)}>Unfollow</Button>
```

**Part 4: Replace the PopularProfiles placeholders on PostPage.**
Now that we have the Follow/Unfollow functionality working, we can finally replace the PopularProfiles placeholders on PostPage

10. In PostPage: Replace the PopularProfiles placeholders with the PopularProfiles Component (for both desktop and mobile).
```jsx
// PopularProfiles manually imported at top of file
return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles />
        <Post {...post.results[0]} setPosts={setPost} postPage />
        <Container className={appStyles.Content}>
...
<Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
</Col>
```

__________________________________________________________________

## Text Instructions: Editing the profile

Instructions
Now that we have the profile page working. We need to add a dropdown menu for users to edit their profile and update their username or password. As almost all of this code is not new to you, we’ll provide you with the files and steps to add into your project. And then we’ll take a moment to explain one small section of code that is new.


Note: [Using this Source Code Link](https://github.com/mr-fibonacci/moments/tree/703c2f453c98e61f9df91981f8df973640569afc), please follow the steps below to add the relevant components to your project.

**Part 1: In MoreDropdown.js**

1. Add the following import:
```jsx
import { useHistory } from "react-router";
```

2. Add and export the ProfileEditDropdown component
```jsx
export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> edit profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="far fa-id-card" />
          change username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
```

**Part 2: In ProfilePage.js**

3. Add the following import
```jsx
import { ProfileEditDropdown } from "../../components/MoreDropdown";
```

4. In the mainProfile JSX, add the following code inside the fragment, above the 1st Row component
```jsx
{profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
```

**Part 3: Add Boilerplate**

5. Add UsernameForm.js to the profiles directory, and [paste in the code from the source code provided.](https://github.com/Code-Institute-Solutions/moments/blob/703c2f453c98e61f9df91981f8df973640569afc/src/pages/profiles/UsernameForm.js)
6. Add UserPasswordForm.js to the profiles directory, and [paste in the code from the source code provided.](https://github.com/Code-Institute-Solutions/moments/blob/703c2f453c98e61f9df91981f8df973640569afc/src/pages/profiles/UserPasswordForm.js)
7. Add ProfileEditForm.js file to the profiles directory and [paste in the code from the source code provided.](https://github.com/Code-Institute-Solutions/moments/blob/703c2f453c98e61f9df91981f8df973640569afc/src/pages/profiles/ProfileEditForm.js)

**Add the relevant routes in App.js:**
5. add the following imports
```jsx
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
```
6. Add the following routes (Above the "Page not found!" Route)
```jsx
<Route
  exact
  path="/profiles/:id/edit/username"
  render={() => <UsernameForm />}
/>
<Route
  exact
  path="/profiles/:id/edit/password"
  render={() => <UserPasswordForm />}
/>
<Route
  exact
  path="/profiles/:id/edit"
  render={() => <ProfileEditForm />}
/>
```
**To test your code**
Log in and go to your profile. Then click the dropdown menu options and test that each option in the dropdown gives you the following functionality: Upload a profile image, give yourself a bio, change your username and/password

**A final note**
As we said at the top of this lesson, there is one small section of code that is new to this project. And that is in UsernameForm and UserPasswordForm where we check if the profile_id is the same as the id with code like this.
```jsx
if (currentUser?.profile_id?.toString() !== id) {
  history.push("/");
}
```

We’re relying on the currentUser value here, which is fetched asynchronously on mount. So if you were to refresh the page, you’d get redirected to home, because the currentUser is initially null. It takes a moment for the API response to come back saying that you’re actually logged in.

Also, since the profile id is an integer, and the param id is a string, we need to convert the integer into a string using the toString() method before we can check that they are equal.

Note: We could also have used != rather than having to use toString(), but the linter throws a warning with this.

Spend a few moments reviewing the code to make sure you understand what's happening here.

_________________________________________________________________________

## Redirecting the User

- Authorized users shouldn’t be able to access the sign in and sign up pages, but rather be redirected to the home page.
- When Unauthorised users try to access the page to create a post, then should be redirected back to the home page.
- If a user had signed in but their refresh token eventually expired, they will be redirected back to the page they were on previously.
- If a new user registers and signs in, they’ll first go back to the sign up page. As it is the case that they’re now logged in, they’ll be instantaneously redirected again

create a new file in the `hooks` folder called `useRedirect.js`
1. inside, export and define a hook with the name `useRedirect`, it should take an argument of `userAuthStatus`
```jsx
export const useRedirect = (userAuthStatus) => {
    
}
```
> We’re going to programmatically redirect users back to the home page, so we’ll have to auto-import and call the useHistory hook to save the history object into a variable.

2. inside the the function, create a `history` variable that calls the `useHistory` hook:
```jsx
import { useHistory } from "react-router-dom/cjs/react-router-dom"

export const useRedirect = (userAuthStatus) => {
    const history = useHistory()
}
```

3. beneath `history`, create a `handleMount` `async` function that contains a `try/catch` block
```jsx
import { useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom"

export const useRedirect = (userAuthStatus) => {
    history = useHistory();

    useEffect(() => {
        const handleMount = async () => {
            try {

            } catch (err) {
                console.log(err)
            }
        }
    });
};
```
> Inside the try block, we’ll make a post request to the dj-rest-auth/token/refresh endpoint with the default axios instance, which we’ll have to auto-import.

4.  inside the try block make an `axios.post()` request to the path `'dj-rest-auth/token/refresh/'`
```jsx
export const useRedirect = (userAuthStatus) => {
    const history = useHistory()

    useEffect(() => {
        const handleMount = async () => {
            try {
                await axios.post('dj-rest-auth/token/refresh/')
                // We don’t need either of our axios interceptors here because
                // this endpoint will let us know if the user is authenticated or not.
                // The post request will act like a check as to whether the user 
                // is currently logged in or not.
            } catch (err) {
                console.log(err)
            }
        }
    })
}
```
> If a user is logged in; the access token will be refreshed successfully, and any code left in the try block will be able to run. If they’re not logged in though, we’ll get a response with the 401 error, and then the code in our catch block will run.

5. below the `axios.post` request, add an `if` statement that checks if the `userAuthStatus` is equal to `'loggedIn'`
    - if its `true`, call the `history` function and `push` the user back tot he homepage path (`'/'`)
```jsx
 useEffect(() => {
    const handleMount = async () => {
        try {
            await axios.post('dj-rest-auth/token/refresh/')
            // if user is logged in, th code below will run
            if (userAuthStatus === 'loggedIn') {
                history.push('/')
            }
```

6. in the `catch` block, add an if statement to check if the `userAuthStatus` is equal to `loggedOut`
    - if its `true`, call the `history` function and `push` the user back tot he homepage path (`'/'`)
```jsx
try {
    await axios.post('dj-rest-auth/token/refresh/')
    // if user is logged in, th code below will run
    if (userAuthStatus === 'loggedIn') {
        history.push('/')
    }
} catch (err) {
    // if user is not logged in, th code below will run
    if (userAuthStatus === 'loggedOut') {
        history.push('/')
    }
    console.log(err)
}
```

7. outside of the `handleMount` function, but still inside `useEffect`, call the `handleMount` function, then, add the following ependencies to the `useEffect` hook: `[history, userAuthStatus]`
```jsx
export const useRedirect = (userAuthStatus) => {
    const history = useHistory()

    useEffect(() => {
        const handleMount = async () => {
            try {
                await axios.post('dj-rest-auth/token/refresh/')
                // if user is logged in, th code below will run
                if (userAuthStatus === 'loggedIn') {
                    history.push('/')
                }
            } catch (err) {
                // if user is logged in, th code below will run
                if (userAuthStatus === 'loggedOut') {
                    history.push('/')
                }
                console.log(err)
            }
        }
        handleMount()
    }, [history, userAuthStatus]);
};
```

> Great! Now all we have to do is call the hook where we need to use it. Let’s start with redirecting our logged in users away from the sign in and sign up forms.

8. go to `SignInForm.js` and below the `setCurrentUSer` variable add a call to the `useRedirect` function, passing it a value of `'loggedIn'`
```jsx
import { useRedirect } from "../../hooks/useRedirect";

function SignInForm() {
    const setCurrentUser = useSetCurrentUser();
    useRedirect('loggedIn')
```
> Let’s now update the redirect on successful sign in to send the user back rather than have them redirected to the home page.

9.  go to the `handleSubmit` function and amend the call to `history` to `goBack` instead of `push`ing users to the homepage.
```jsx
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const {data} = await axios.post('dj-rest-auth/login/', signInData);
        setCurrentUser(data.user)
        history.goBack(); // <-- updated
    } catch(err){
        console.log(err)
        setErrors(err.response?.data)
    }
}
```
> We’ll also call our useRedirect hook in the SignUpForm

10. go to the `signUpForm.js`, inside the `SignUpForm` function, at the top, call `useRedirect`, passing it a value of `'loggedIn'`
```jsx
const SignUpForm = () => {
  useRedirect('loggedIn')
  const [signUpData, setSignUpData] = useState({
    username: '',
    password1: '',
    password2: '',
  })
```

11. check that it works

> Now let’s handle redirecting any logged out users away from the form to create a post.

12. go to `PostCreateForm.js` , import the `useRedirect` hook and call it at the top of the function, passing it the `loggedOut` string
```jsx
import { useRedirect } from "../../hooks/useRedirect";

function PostCreateForm() {
  useRedirect('loggedOut')
```

13. check it works (shouldnt be able to access the /posts/create/ path when logged out)

______________________________________________________________

## Testing in React - part 1

- so in this video we’ll focus on what you’ll need to know to work with testing React components and mocking API responses.
- In this video we’ll get ourselves set up
- [source code](https://github.com/mr-fibonacci/moments/tree/5ea7b13a4131a39f519c24e8421516df3ffb5018)
- [mocking with jest](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JT101+2021_T1/courseware/3ff1b42de7174d29baa8e28deba1b717/658d56e6555044f6b4b5a97e629333c6/5?activate_block_id=block-v1%3ACodeInstitute%2BJT101%2B2021_T1%2Btype%40vertical%2Bblock%401e742c8d10004c77a9013e93db16eac1)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro) 
- [React Query testing methods](https://testing-library.com/docs/queries/about)

reasons for using tests:
- manual tests using an API can be slow
- manual tests using an API is dependent on passing data over a network, so it has the potential to be bbuggy when te code is actually fine.
- requests can be costly:
    > Requests can be costly. When you come to work in a professional environment you’re likely to work with paid for 3rd party APIs. In this case, making constant API requests to test code may become very expensive

fortunately, mock API responses can be created in tests using the react testing framework:
> To do this, the React testing library recommends using a library called Mock Service Worker, which uses an API built into all modern browsers to intercept requests so that we can declaratively mock API responses. So let’s use it to create the two mock endpoints we need to test our NavBar component.

1. install the mock service worker library in the CLI:
    - `npm install msw --save-dev`
        - > As we’ll only need it for testing, we’ll use the --save-dev tag at the end of the command. This way,I’ll have it saved as a dependency which we only use in the development version of our project.
2. in the `src` folder create a new folder called `mocks`
3. inside the `mocks` folder, create a file called `handlers.js`
4. inside the new file, `export` an empty array called `handlers`
```jsx
export const handlers = []
```

> Next, we’ll need to grab our API base url for our mock responses.

5. above the newly defined array, create a new variable called `baseURL` and give it a string value of the url to the heroku api. (this can be found in the `axiosDefaults.js` file, as the value of the `axios.defaults.baseURL` variable)
```jsx
const baseURL = "https://django-rest-walkthrough-8fb26a5960d5.herokuapp.com/"
export const handlers = []
```
> Next, let’s auto import the rest object and define a mock response for a GET request for user details,

6. import the `rest` object from `msw`
7. inside the `handlers` array, use the newly imported `rest` object to make a `get` request and run an arrow function on the path of the `baseURL` variable appended with `dj-rest-auth/user/` pass **3** arguments to a callback function: `req`uest, `res`ponse and `c`on`t`e`x`t:
```jsx
import { rest } from "msw"

const baseURL = "https://django-rest-walkthrough-8fb26a5960d5.herokuapp.com/"
export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        
    })
]
```
> Inside, we’ll return a json response with a user object, just like a real response from our API would do. 

8. inside the arrow function, `return` a `res`ponse of the `ctx` callback appended with the `json` function.
```jsx
export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json()
        );
    }),
];
```
9.  go to the app preview and make sure you are logged into an account. refresh the tokens (just to be sure) by logging out and back in again.
    - for thie test the admin account is being used: u: admin, p: guest

10. next, go to the deployed API app and manually check the json value returned from the `dj-rest-auth/user/` endpoint. it should return something like this:
```json
{
    "pk":1,
    "username":"admin",
    "email":"",
    "first_name":"",
    "last_name":"",
    "profile_id":1,
    "profile_image":"https://res.cloudinary.com/deth0ifla/image/upload/v1/media/../samples/landscapes/girl-urban-view"
}
```

11. copy this entire json object and past it inside the `.json()` function appended to the `ctx` callback in the `get` request of the `handlers` export inside handlers.js:
```jsx
// Now when our tests try to reach out to this endpoint to get the users details,
// our mocked api request handlers will intercept the test request 
// and respond with our provided data here, 
// indicating that for my test Brian is the currently logged in user.
export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json(
                { // imported json data from api
                    "pk":1,
                    "username":"admin",
                    "email":"",
                    "first_name":"",
                    "last_name":"",
                    "profile_id":1,
                    "profile_image":"https://res.cloudinary.com/deth0ifla/image/upload/v1/media/../samples/landscapes/girl-urban-view"
                }
            )
        );
    }),
];
```
> Now, the logout endpoint is going to be much easier. All we want to do is log out successfully with no errors. 

12. in `handlers.js`, add a second value to the `handlers` array. it will be a `post` request using `rest` to the `dj-rest-auth/logout/` endpoint of the `baseUrl` that then runs an arrow function with callbacks of `req`, `res`, and `ctx`
13. inside the function, `return` a `res`ponse of the `status` of the `ctx`, which should be `200`:
```jsx
export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json(
                {
                    "pk":1,
                    "username":"admin",
                    "email":"",
                    "first_name":"",
                    "last_name":"",
                    "profile_id":1,
                    "profile_image":"https://res.cloudinary.com/deth0ifla/image/upload/v1/media/../samples/landscapes/girl-urban-view"
                }
            )
        );
    }), // second array value \/
    rest.post(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];
```

the tests are set up but now they need to be connected to the **mock service worker**

- > Now, to connect the mock service worker to our project’s tests, we need to:
    1. create a server instance with all the handlers defined in handlers.js
    2. start the server before all tests are run
    3. reset the handlers after each test
        - > in case the default handlers are overwritten in any of the tests
    4. close the server after all the tests are run

14. go to `setupTests.js`
15. import the `{setupServer}` function from the `'msw/node'` library
16. define a variable called `server` that makes a call to the `setupServer` function, `spread`ing in the `handlers`(autoimported) variable as its argument
```jsx
import '@testing-library/jest-dom';
import {setupServer} from 'msw/node'
import {handlers} from '.mocks/handlers'

const server = setupServer(...handlers)
```
> Now we can move onto the test setup and teardown.

17. write the following 3 functions after the `server` variable:
```jsx
beforeAll(() => server.listen()); // We’ll first call the server’s listen method before all the tests
afterEach(() => server.resetHandlers()); //  call resetHandlers after each test
afterAll(() => server.close()); // and finally shut the server down after all the tests have been run
```
_____________________________________________________________________________

## Testing in React - part 2

running tests that do the following:
- check if the NavBar component renders
- if the provifle avatar is shown for a logged in user
- if the sign in and sign out links are shown to a user after they have clicked the sign in/out link

test types covered:
- Tests to check that a component can be run without any errors
- tests to check that elements such as links are rendered on mount within the component
- tests to check that certain elements such as links are rendered as a result of an asynchronous request after mounting
- tests that simulate user interactions such as clicks

additional documentation:
- [testing source code](https://github.com/mr-fibonacci/moments/tree/fd58d0bb11e37db437d098a462e8312ae293ba95)
- [Mocking](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JT101+2021_T1/courseware/3ff1b42de7174d29baa8e28deba1b717/658d56e6555044f6b4b5a97e629333c6/5?activate_block_id=block-v1%3ACodeInstitute%2BJT101%2B2021_T1%2Btype%40vertical%2Bblock%401e742c8d10004c77a9013e93db16eac1)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Mock Service Worker Documentation](https://mswjs.io/docs/)

steps:
1. in the `components` folder, create a `__tests__` folder
2. inside, create a new file: `NavBar.test.js`

> we’ll create our first test to make sure the NavBar component gets rendered correctly.

3. call a function called `test` and pass it the string argument `'renders NavBar'`, and runs an arrow function. inside the arrow function, call `return`, which should be autoImported:
```jsx
import { render } from "@testing-library/react"

test('renders NavBar', () => {
    render()
})
```
> Then we’ll need to import the BrowserRouter as a Router component from the react-router-dom library, to wrap around
our auto-imported NavBar

4. at the top of the file, import `{BrowserRouter as Router}` from `'react-router-dom'`
5. inside the `render()` function in the return add a `<Router>` component, inside its tags. Add the `<NavBar />` component
    - make sure to also import the `NavBar` component
```jsx
import { render } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from '../NavBar'

test('renders NavBar', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    )
})
```

6. run `npm test` to test the render

> If we run npm test, all we can see is green! If you’d like to check out the rendered HTML, you can always use the screen.debug method and call it in your test.

7.  inside the `test` function but after the `render`, call the `screen.debug()` method.
    - make sure to import this along with `render` at the top of the file
```jsx
import { render, screen } from "@testing-library/react" // <-- imported
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from '../NavBar'

test('renders NavBar', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    )
    screen.debug(); // <-- added
    // screen.debug works just like console.log
    // you can put it in wherever you want.
})
```
- **note**: One thing worth noting is that if you put it below an assertion, and the assertion throws an error, you won’t see anything printed to the terminal.

> If we have a look at the terminal, we can see the printout of our navbar and its links to home, sign in and sign up pages. It’s a useful thing to know about for debugging your tests,

8. comment out the `screen.debug` for the time being.

 > If we have a look at the terminal, we can see the printout of our navbar and its links to home, sign in and sign up pages. It’s a useful thing to know about for debugging your tests,

9. below the commented out `screen.debug`, create a variable called `signInLink` that uses the value of `screen`, appended with the function `.getByRole()`
    - pass `.getByRole` an arguments of `link` and `{name: 'Sign in'}`, which will search links in the nav bar for ones called "Sign in"
        > the value in the name object is case sensitivem so make sure it matches the value in your own link
```jsx
import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from '../NavBar'

test('renders NavBar', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    )
    // screen.debug();
    const signinLink = screen.getByRole('link', {name: 'Sign In'})
    // new line ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
})
```
> Now to check if the signInLink is present in the document,

10. underneath the new const, call the `expect` function and pass in the `signInLink` variable. append the function with `.not.toBeInTheDocument` to make the test fail initially:
```jsx
import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from '../NavBar'

test('renders NavBar', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    )
    // screen.debug();
    const signinLink = screen.getByRole('link', {name: 'Sign In'});
    expect(signinLink).not.toBeInTheDocument();
})
```
> Now if we remove the ‘not’ bit and save our file again, we can see that the test is passing.

> Ok, now we’ll write a test to check that the link to the user profile avatar is rendered in our NavBar

11. copy the whole `test` function and past a copy below itself to create a new test
12. change the string argument of the test to `"renders link to the user profile for a logged in user"`
13. as this test will have to check data normally fetched asynchronously. amend the arrow function to be `async`
14. delete the lines of code for the `signInLink` test
```jsx
test('renders renders link to the user profile for a logged in user', async () => {
    render(
        <Router>
            <NavBar />
        </Router>
    )
})
```
> Our profile link will only show once the currentUser data is fetched, so for that we’ll need to render the CurrentUserProvider as well.

15. import the `CurrentUserProvider` component and wrap the `NavBar` component, inside the `Router` component

```jsx
test('renders renders link to the user profile for a logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    )
});
```

16. beneath the render, define a variable called `profileAvatar` and have it `await` the profile avatar by calling `screen.findByText('Profile')`
```jsx
test('renders link to the user profile for a logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );

    const profileAvatar = await screen.findByText("Profile");
```
> You probably noticed that we used a different query method this time to find the profileAvatar, we did this because the “profile” text we are searching for isn’t inside a link this time.
- [learn more about querying in tests fromt he documentation here](https://mswjs.io/docs/)

7. use the `expect` function to assert that the `profileAvatar` variable value should be in the document with the `toBeInTheDocument` function:
```jsx
const profileAvatar = await screen.findByText("Profile");
// expect(profileAvatar).not.toBeInTheDocument();
// ^^^ using the `not` call will try to assert that this item shouldnt be in the document
expect(profileAvatar).toBeInTheDocument();
```

> Ok, for our final test, let’s make sure that once the currently logged in user clicks the Sign out link, the Sign in and Sign up links reappear.

8. duplicate the second test in the file, place it after the test that was just written.
9. rename the `test` string to `"renders sign in and dign up buttons again on logout"`
10. delete the `ProfileAvatar`-specific code and define a new variable called `signOutLink`
> Similar to the profile link, the sign out link isn’t present in the document on mount either. So, we will use a find method like last time.

> This time we’ll use the findByRole method because it’s an asynchronous query.

11. in the variable `signOutLink`, `await` a responce from a call to the `screen` by running the `findByRole` method on it, defining that we are looking for a `'link'` and the name of the link should be `Sign Out`:
```jsx
test('renders Sign in and Sign up buttons again on log out', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );

        const signOutLink = await screen.findByRole('link', {name: 'Sign Out'})
});
```
> Now, we need to simulate a user click event. The way to do this is by importing fireEvent from the React testing library.

12. on the same line as the `render` and `screen` imports, import `fireEvent`

> Then, inside our test we can call the click method on fireEvent, and pass it the signOutLink variable so that our user click is fired on our chosen element.

13. beneath the `signOutLink` variable, call the `fireEvent` import and run the `click` method on it, passing it the `signOutLink` variable
```jsx
const signOutLink = await screen.findByRole('link', {name: 'Sign Out'});
fireEvent.click(signOutLink);
const signinLink = await screen.findByRole('link', {name: 'Sign In'});
const signupLink = await screen.findByRole('link', {name: 'Sign Up'});
```
> With the sign out link clicked, all we have to do is wait for both sign in and sign up links to be rendered in our NavBar again, and then check that they are in the document.

### BUG

so during this step, the freEvent method would not work for me, will revisit this query if it occurs again in the main profject. but as it staands:
- when running the test with fireEvent, if i run a `screen.debug()` beneath it, it can be seen in the log that the html on the page does not change. 
- when the click happens, the the html structure _should_ shange to contain links for `'Sign In'` and `'Sign Up'`, but the screen debug shows that the `'Sign Out'` button remains


14. 