-----> Building on the Heroku-22 stack
-----> Determining which buildpack to use for this app
-----> Node.js app detected
       
-----> Creating runtime environment
       
       NPM_CONFIG_LOGLEVEL=error
       NODE_VERBOSE=false
       NODE_ENV=production
       NODE_MODULES_CACHE=true
       
-----> Installing binaries
       engines.node (package.json):  16.19.1
       engines.npm (package.json):   8.19.3
       
       Resolving node version 16.19.1...
       Downloading and installing node 16.19.1...
       npm 8.19.3 already installed with node
       
-----> Prebuild
       Running heroku-prebuild
       
       > moments@0.1.0 heroku-prebuild
       > npm install -g serve
       
       
       added 89 packages, and audited 90 packages in 2s
       
       24 packages are looking for funding
         run `npm fund` for details
       
       found 0 vulnerabilities
       
-----> Installing dependencies
       Installing node modules
       npm ERR! code EUSAGE
       npm ERR! 
       npm ERR! `npm ci` can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync. Please update your lock file with `npm install` before continuing.
       npm ERR! 
       npm ERR! Invalid: lock file's typescript@5.1.6 does not satisfy typescript@4.9.5
       npm ERR! 
       npm ERR! Clean install a project
       npm ERR! 
       npm ERR! Usage:
       npm ERR! npm ci
       npm ERR! 
       npm ERR! Options:
       npm ERR! [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer|--save-bundle]
       npm ERR! [-E|--save-exact] [-g|--global] [--global-style] [--legacy-bundling]
       npm ERR! [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
       npm ERR! [--strict-peer-deps] [--no-package-lock] [--foreground-scripts]
       npm ERR! [--ignore-scripts] [--no-audit] [--no-bin-links] [--no-fund] [--dry-run]
       npm ERR! [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
       npm ERR! [-ws|--workspaces] [--include-workspace-root] [--install-links]
       npm ERR! 
       npm ERR! aliases: clean-install, ic, install-clean, isntall-clean
       npm ERR! 
       npm ERR! Run "npm help ci" for more info
       
       npm ERR! A complete log of this run can be found in:
       npm ERR!     /tmp/npmcache.rIt5G/_logs/2023-08-21T14_01_02_605Z-debug-0.log
-----> Build failed
       
       We're sorry this build is failing! You can troubleshoot common issues here:
       https://devcenter.heroku.com/articles/troubleshooting-node-deploys
       
       If you're stuck, please submit a ticket so we can help:
       https://help.heroku.com/
       
       Love,
       Heroku
       
 !     Push rejected, failed to compile Node.js app.
 !     Push failed