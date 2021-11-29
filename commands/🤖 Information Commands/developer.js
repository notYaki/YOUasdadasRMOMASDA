const {MessageEmbed} =require("discord.js")
const config = require("../../config.json")
module.exports = {
	name: "developer",
	category: "🤖 Information Commands",
  aliases: ["dev", "yaki"],
  description: "Shows Information about the Developer",
  useage: "developer",
  run: async (client, message, args) => {
	const embed = new MessageEmbed()
	.setColor(config.colors.yes)
	.setFooter("YAKI | Sponsor: Yo mama | Code  'x10'  == -5%", config.AVATARURL)
  .setTimestamp()
  .setThumbnail("https://cdn.discordapp.com/avatars/513003402377166909/17ccf170d62e5e0040660d003b075528.webp")
  .setTitle("Ÿακι ジ#4635 | Dev of 3 Orgs | Developer of 200+ BOTS")
  .setURL("https://yakibot.ga/")
  .setDescription(`
> Hello I am **Yaki** <@513003402377166909> *(\`Ÿακι ジ#4635\`)*
> Yeah i hope you like my stuff :v: <3

`)
	message.channel.send(embed).catch(error => console.log(error));
}
}