var app = require('express')();
var http = require('http').createServer(app);
const socketio = require('socket.io');

const server = app.listen(3000, () =>{
    console.log(`Listening on port ${server.address().port}`)
})
const io = socketio(server);

//var express = require('express')
//var app = express()
//var http = require('http').createServer(app);
//var io = require('socket.io')(http);
//const router = express.Router();
//const path = __dirname + '/'
//const synth = new Tone.synth;
//synth.toMaster();
//synth.triggerAttack('C4','8n');

//app.set('port', (process.env.PORT || 5000))
//app.use(express.static(__dirname + '/public'))

//app.get('/', function(request, response) {
//  response.send('Hello World!')
//})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


//app.listen(app.get('port'), function() {
  //console.log("Node app is running at localhost:" + app.get('port'))
//})

