const express = require("express");
const fetch = require("node-fetch");
const fs = require("fs");
const Eris = require("eris")
const moment = require("moment");
/////////////////////////////////////////////////////////////////////////////////////////////////
const app = express();
app.use(express.static("public"));
app.get("/", (request, response) => {response.json({"message": "اوق"});});
const listener = app.listen(3000, () => {});
/////////////////////////////////////////////////////////////////////////////////////////////////
console.log(`==============\nAuthor: A7med & YouSuf & AoEmad\nDes: Spam Code\nVersion: 1.5\n==============`)
/////////////////////////////////////////////////////////////////////////////////////////////////
let config = JSON.parse(fs.readFileSync("./config.json", "utf8"))
let prefix = config.prefix

let api_status = true
let data = {}
let prefixs = {}
let commands = new Eris.Collection();
let num = 0
    for(var i = config.from; i < Math.floor(config.from + 10); i++){
      num++
       prefixs[`s${num}`] = `${i}`
    }

async function message_got(message , bot , prefix_num){
if(message.author.id == bot.user.id) return;
let args = message.content.slice(Math.floor(prefix.length + prefix_num.length)).trim().split(/ +/);
let args1 = message.content.slice(Math.floor(prefix.length + prefix_num.length)).trim().split(/ +/);
let commandName = args.shift().toLowerCase();
if(message.content.split(" ")[0].toLowerCase() == prefix + "sc") {
commandName = "sc"
	let command = commands.get(commandName) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
if (!command) return;
try {command.execute(bot,message, args , prefix_num , prefixs);} catch (error) {console.error(error);}
}

if(message.content.split(" ")[0].toLowerCase() == prefix + "reload") {
commandName = "reload"
	let command = commands.get(commandName) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
if (!command) return;
try {command.execute(bot,message, args , prefix_num , prefixs);} catch (error) {console.error(error);}
}

if (!message.content.startsWith(prefix + prefix_num)) return;
if(message.content.split(" ")[0].toLowerCase() == prefix + prefix_num) {
commandName = "say"
args = args1
}
	let command = commands.get(commandName) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
if (!command) return;

try {
command.execute(bot,message, args , prefix_num , prefixs);
} catch (error) {
console.error(error);
}}

async function spam(bot){
try{
    let code = '';
let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
for(var i = 0; i < data.lenght; i++){code = code + dict.charAt(Math.floor(Math.random() * dict.length));}
if(data.start < moment(Date.now()).utcOffset(`${data.timezone}00`).format('HH') && data.stop > moment(Date.now()).utcOffset(`${data.timezone}00`).format('HH')) { 
bot.createMessage(config.channel , code).catch(err=>{})
}
} catch {}
} 



const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {const command = require(`./commands/${file}`);commands.set(command.name, command);console.log(command.name + " has lodded")}

fetch('https://raw.githubusercontent.com/jfgsodiuahmgfsuanyvfkgsduaygr/dhsvcngyfgdsauydgsa/master/api.json').catch(err => {api_status = false;}).then(res => res.json()).then(async json => {
if(api_status === false) return;
data = json

let bot_1 = new Eris(config[`token_1`]);bot_1.connect();
bot_1.on("messageCreate", (message) => {message_got(message , bot_1 , prefixs["s" + `1`])});

let bot_2 = new Eris(config[`token_2`]);bot_2.connect();
bot_2.on("messageCreate", (message) => {message_got(message , bot_2 , prefixs["s" + `2`])});

let bot_3 = new Eris(config[`token_3`]);bot_3.connect();
bot_3.on("messageCreate", (message) => {message_got(message , bot_3 , prefixs["s" + `3`])});

let bot_4 = new Eris(config[`token_4`]);bot_4.connect();
bot_4.on("messageCreate", (message) => {message_got(message , bot_4 , prefixs["s" + `4`])});

let bot_5 = new Eris(config[`token_5`]);bot_5.connect();
bot_5.on("messageCreate", (message) => {message_got(message , bot_5 , prefixs["s" + `5`])});

let bot_6 = new Eris(config[`token_6`]);bot_6.connect();
bot_6.on("messageCreate", (message) => {message_got(message , bot_6 , prefixs["s" + `6`])});

let bot_7 = new Eris(config[`token_7`]);bot_7.connect();
bot_7.on("messageCreate", (message) => {message_got(message , bot_7 , prefixs["s" + `7`])});

let bot_8 = new Eris(config[`token_8`]);bot_8.connect();
bot_8.on("messageCreate", (message) => {message_got(message , bot_8 , prefixs["s" + `8`])});

let bot_9 = new Eris(config[`token_9`]);bot_9.connect();
bot_9.on("messageCreate", (message) => {message_got(message , bot_9 , prefixs["s" + `9`])});


let bot_10 = new Eris(config[`token_10`]);bot_10.connect();
bot_10.on("messageCreate", (message) => {message_got(message , bot_10 , prefixs["s" + `10`])});

setInterval(function(){ 
spam(bot_1)
spam(bot_2)
spam(bot_3)
spam(bot_4)
spam(bot_5)
spam(bot_6)
spam(bot_7)
spam(bot_8)
spam(bot_9)
spam(bot_10)
}, 30000)

});


setInterval(function(){ 
config = JSON.parse(fs.readFileSync("./config.json", "utf8"))
fetch('https://raw.githubusercontent.com/jfgsodiuahmgfsuanyvfkgsduaygr/dhsvcngyfgdsauydgsa/master/api.json').catch(err => {api_status = false;}).then(res => res.json()).then(async json => {
if(api_status === false) return;
data = json
})
}, 25000);