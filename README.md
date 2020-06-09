
## Real-time Chat Application
[https://react-chatbox-app.netlify.app/](https://react-chatbox-app.netlify.app/)  
A real time chat application created with React and hosted in a server. 

## Motivation
I saw a quick 2h tutorial about a real time chat app with React on youtube and jump right into it.

## Getting Started
These instructions will guild you through the inital setting up process and 
highlight what the apps can do for you to explore on your own.  


## Notable feature
- Real time chat box
- Text soft wrap on message box
- Multiple people can join the room
- Welcome message, leaving message for better UX
- Usage of both hook and component life cycle function


## Prequesite
Nodejs installed for local running purpose    
check out Node installation instruction [here](https://nodejs.org/en/)  
Netlify set up if you would like to continuous deploy and host your own client side app
check out Netlify instruction [here](https://www.netlify.com/)  
Or you use any other hostin site, including github page (the site is static anyway)
Heroku set up if you want to host your own server  
chek out Heroku installation [here](https://devcenter.heroku.com/start)


## Installing and Running
Clone the repo
```
$ git clone https://github.com/zahego/Covid-Tracker-19.git
```
Run Node command to create node_modules folder from the information in package.json, which hold all the necessary dependencies
```
$ npm install
```
Run Node command for local testing
```
$ npm start
```

## Deploying on Netlify
access the client folder  
create a prouction build of the app
```
$ yarn build
```
install Netlify on your local repo
```
$ npm install netlify-cli -g
```
login to your Netlify account
```
$ netlify login
```
start the deploy process
```
$ netlify deploy
```
choose the option to Create and Config a new site  
change the site name to your preference  
set the deploy path to   
```
$ ./build
```

## Deploying on Heroku
access the server folder  
add a file name Procfile in and specify the content inside the file
```
web: node index.js
```
add and commit
```
$ git add .
$ git commit -m "add Procfile"
```
login to Heroku
```
$ heroku login
```
add heroku remote repo
```
$ heroku git:remote -a [name of your server]
```
push from local repo to heroku remote repo
```
$ git push heroku master
```
remember to add the new server link to the cosnt ENDPOINT at src/components/Chat/Chat.js



## What you can do
- join an existed room or create your own room and invite other to join the chat using the same room name
- send message to everyone in the room and recieved text message back


## Technologies stack
client:  
- [React](https://reactjs.org/) - framework
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - react router web version to set route
- [socket.io](https://socket.io/) - core js framework of the app that enable real-time communication  
- [queryString](https://www.npmjs.com/package/query-string) - help read the URL query so that I don't have to pass room as props continuosly or use redux to get the props
- [react-scroll-to-bottom](https://www.npmjs.com/package/react-scroll-to-bottom) - bascially overflow:auto in css for the chat body  

server:  
- [express](https://expressjs.com/) - improve the working experience with web building
- [Nodejs](https://nodejs.org/en/download/) - JavaScript runtime environment that executes JavaScript code outside a web browser
- [nodemon](https://www.npmjs.com/package/nodemon) - auto restart browser on change
- [socket.io](https://socket.io/) - core js framework of the app that enable real-time communication  
- [cors](https://www.npmjs.com/package/cors) - enable client hosting server to connect to server hosting server that is not from the same origin (cross-origin-resource-sharing)


## Contributors
Minh Tran 


## License
This project is licensed under the MIT License

## Challenges and resolutions
- Query string is outdated and location or window.location doesn't work well with hook. So I migrate all the code from functional programming to class based programming and replace hook with component did mount
- Client socket was recieving too many duplicate message server despite I only send one message. Turn out componentWillUpdate is not the best place for client socket to recieve message. I move the method to componentDidMount for the fix. I gained a better understanding of Hook and component life cycle function after this.

## Acknowlegement
JavaScript MAstery youtube channel and [this tutorial](https://www.youtube.com/watch?v=ZwFA3YMfkoc&t=5051s)
