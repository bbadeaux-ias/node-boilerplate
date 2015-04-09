node-boilerplate
================

A framework of default libraries for starting a project.

# Current state

Added express, jade templates, gulp, bootstrap, and redis.

### Note

The logs directory isn't tracked so you'll need to cd into node-boilerplate and

    ```

    mkdir logs
    cd logs
    vim server.log
    :wq

    ```

### Self-signed ssl certificate generation

In case running the application over https is necessary, here are the instructions to generate a self signed certificate:

1. In your project directory, create a directory called ssl


    ```
    mkdir ssl
    ```


2. cd into ssl and type:


    ```
    sudo ssh-keygen -f host.key
    ```


3. Once the key is created, generate a certificate request file:


    ```
    sudo openssl req -new -key host.key -out request.csr
    ```


4. Fill the required fields as requested in the terminal until the request is created.


5. When you have the certificate request create the ssl certificate:


    ```
    sudo openssl x509 -req -days 365 -in request.csr -signkey host.key -out server.crt
    ```


6. To enable https in node, make sure the following lines are included in app.js:

    ```javascript
    var fs = require('fs'),                                           //includes the file system package
        https = require('https'),                                     //includes the https package
        privateKey = fs.readFileSync('./ssl/host.key', 'utf8'),       //reads the recently created ssl key
        certificate = fs.readFileSync('./ssl/server.crt', 'utf8'),    //reads the ssl certificate
        credentials = {key: privateKey, cert: certificate};           //puts the key and certificate in the right format for the https package to read them

    var app = express();                                          //...configure express

    var httpsServer = https.createServer(credentials, app);       //creates an https server instance with the assigned credentials

    httpsServer.listen(3443);                                     //enables https server connections in https://localhost:3443
    ```

7. In some cases, you'll need to update the permissions to the ssl directory so that node has access to its information:

    ```
    sudo chmod -R a+r ssl
    ```