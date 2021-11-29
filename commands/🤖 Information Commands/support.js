
const functions = require("../../functions")
const config = require("../../config.json")
module.exports = {
    name: "support",
	aliases: ["sup"],
    category: "🤖 Information Commands",
    description: "Shows you the Support Server",
    usage: "support",
    run: async (client, message, args) => {
        message.reply(
            new Discord.MessageEmbed()
                .setColor(config.colors.yes)
                .setFooter(client.user.username, config.AVATARURL) 
                .setAuthor(""+client.user.username + " | Support", client.user.displayAvatarURL(), "https://yakibot.ga/")
                .setDescription("[\`Server\`](https://discord.gg/2t8EM3BvPG)")
            )}
}
