# Node Boilerplate Documentation

### Summary

This repo is just a starter boilerplate for projects to be up and running quickly and with everything necessary for a
production-ready application. So far, upon download and subsequently running

```
npm install
```

You'll have a setup that includes the following:

+ A node.js server configured with express and a redis session store (you'll need to have redis and node installed
and redis running)

+ The ability to run your application in different configurations. For instance, a development environment and a
production environment.

+ Integrated gulp functions that include:
    - JS linting
    - Test running (mocha, chai)
    - JS and CSS minification
    - JS uglification
    - CSS autoprefixing
    - Compilation from LESS to CSS

+ A pre-configured json file for groc documentation.