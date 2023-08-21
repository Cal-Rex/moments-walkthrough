# index

1. [getting set up](#getting-set-up)
    video: https://youtu.be/qANVPIWHfQg
    [page: (section 3)](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/953cd4e5015f483bb05263db3e740e19/)
    - creating a React App in a workspace
    - [managing a `'error:03000086:digital envelope routines::initialization error'`](#managing-a-error03000086digital-envelope-routinesinitialization-error)

_________________________

## Getting set up

for the walkthrough a template was provided, but here is a set up in general terms for reference/future:

**walkthrough specific tutorial steps 1-2**
1. create a new repo with the following [template](https://github.com/Code-Institute-Org/react-ci-template/generate)
2. enter the following command in the CLI:
    - `npm install`

**modern steps 1-2**
1. create a new blank repo with no template
2. enter the following command in the CLI to create a react app
    - `npx create-react-app . --use-npm`

3. start the app with `npm start`
    - ##### managing a `'error:03000086:digital envelope routines::initialization error'`
    if you get the error above when trying to run the `npm start` command, go to the `package`.json file and replace the following values inside the `scripts` object to:
    ```json
    {
        ...
        "scripts": {
            ...
            "start": "export SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
            "build": "export SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts build"
            ...
        }
        ...
    }
    ```

4. remove the react custom header, in `src > App.js` remove the `<header>` element from the return statement
5. inside the return div, add an `<h1>` with `hello world`
6. make the initial commit
7. 