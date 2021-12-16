const { MessageEmbed } = require('discord.js')
const { client } = require('../index')

client.on(`messageCreate`, async (message) => {
    if (message.author.bot) return

    if (message.content.startsWith('.msgGen')) {
        message.channel.send(new MessageEmbed().setDescription(`** **`))
    }
})