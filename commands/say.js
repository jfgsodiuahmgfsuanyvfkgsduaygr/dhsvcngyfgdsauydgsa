  
const { prefix } = require('../config.json');

module.exports = {
	name: 'say',
	aliases: ['s', ""],
  execute(bot , message, args) {
bot.createMessage(message.channel.id, args.join(" ")).catch(err=>{})
}
}