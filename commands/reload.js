  
const { prefix } = require('../config.json');
const cmd = require("node-cmd")
module.exports = {
	name: 'reload',
	aliases: [],
  execute(bot , message, args ,prefix_num , prefixs) {
if(prefix_num !== prefixs["s1"]) return;
bot.createMessage(message.channel.id, "ok wait").then(msg =>{
setTimeout(function(){ 
console.log("reloading")
msg.edit("reloading")
    cmd.run('refresh');
}, 3000);
})

}
}