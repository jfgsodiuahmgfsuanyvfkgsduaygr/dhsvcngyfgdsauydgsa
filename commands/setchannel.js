  
const { prefix } = require('../config.json');
const fs = require("fs")
module.exports = {
	name: 'setchannel',
	aliases: ['sc', "channel"],
  execute(bot , message, args, prefix_num , prefixs) {
let config = JSON.parse(fs.readFileSync("./config.json", "utf8"))
if(prefix_num !== prefixs["s1"]) return;
if(!args) return bot.createMessage(message.channel.id, ":x: insert the id of the channel").catch(err=>{});
if(!args.join(" ")) return bot.createMessage(message.channel.id, ":x: insert the id of the channel").catch(err=>{});
let channel = bot.getChannel(args.join(" "))
if(!channel) return bot.createMessage(message.channel.id, ":x: i can't find this channel!").catch(err=>{});
if(channel.type !== 0) return bot.createMessage(message.channel.id, `:x: you can select text channels only`).catch(err=>{});
config.channel = args.join(" ")
  fs.writeFile("./config.json", JSON.stringify(config, null, 5), function(err) {if(err) console.log(err)});
 bot.createMessage(message.channel.id, `:white_check_mark: Done [${channel.name}]`).catch(err=>{});
}
}