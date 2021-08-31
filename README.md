# developer-for-life
Code Snippets to practice concepts, entirely imagined on my own

	1. We require a package.json for depedency resolution
	2. We can create basic http server which listens for req ad responds and routes users with / for SPAs
	'use strict'
	const http = require('http');
	const port = process.env.PORT || 3000;
	const sessions = require('./sessions.json');
	
	const server = http.createServer((req, res) => {
	if(req.url === '/') {
	res.writeHead(200,{contentType: 'text/html'});
	res.write('<h1>Hola Salesforce developers</h1>');
	res.write('<p1>Hola Mundo</p1>');
	} else if(req.url === '/api/sessions'){
	res.writeHead(200, { contentType: "application/json" });
	res.write(JSON.stringify(sessions));
	} else {
	res.writeHead(404, { contentType: "text/plain" });
	res.write(`404: Not found ${req.url}`);
	}
	res.end();
	});
	server.listen(port,() => {
	console.log(`Server is running on http://localhost:${port}`);
	});
	
	
	The problem with this approach is that we need to write a maze of if else to consider all routes which quickly becomes unmanageable for enterprise web apps, Hence we use frameworks like Express for nodeJs.
	
	3. We can use two models commonJs(require) and EcmaJS(import)

First npm install express on local or server
Then in server.js 

Const express= require('express');
Const app = express();

What it does is it executes express() and creates a new application with express and we have an instance of app which can listen on a port or route etc..




JSON.Stringify---> to convert object to strings
JSON.Parse---> to convert strings to object

Const session = fs.readFileSync(path.join(_dirname,sessions.json), 'utf8');
Console.log(session) or res.json(session);

//session is now string of format utf8, so when we print session, it will show as string not properly formatted:

So if we want to print object we need to convert String to object

res.json(JSON.Parse(sessions));

Once you have created a server with reading file with fs, readfilesync, and express, we can deploy the code to Heroku.

	1. For that we need to login to heroku : Heroku Login

	2. Then create a app space on Heroku for our app to live : Heroku create csingh-sessions-api
	Then what heroku does when we deploy node app on that heroku space, is it runs npm start which starts the production server
	
	"scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "start": "node server.js",
	    "start-dev":"nodemon -w server.js"
	3. So what we can do is create a procfile, which is heroku process file and we can map the web process with the command that we want to run when the app is deployed
 web: node server.js
We also use procfile for worker processes

	4. Then push the branch to heroku
	Git push to heroku main branch: git push heroku main
	
	Heroku gets the code and detects that it's a node js application and starts installing the dependencies specified in package.json and creates a container application and this container runs on a dyno which is kinda machine/Agent, which is going to run our processes and Heroku router is going to take care of translating the url that heroku created into the application that we are running locally and then we will be able to able to access our application on that url
	
	https://git.heroku.com/csingh-sessions-api.git 
	https://git.heroku.com/csingh-sessions-api.git/api/sessions

