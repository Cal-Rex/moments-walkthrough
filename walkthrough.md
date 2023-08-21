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

5. 