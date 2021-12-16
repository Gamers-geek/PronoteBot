const { Client, Intents } = require('discord.js');
const { botToken } = require('./config');
const { readdirSync } = require('fs');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.DIRECT_MESSAGES
    ]
});

module.exports.client = client;

const eventFiles = readdirSync('./events/');
eventFiles.map(value => require(`./events/${value}`))

client.login(botToken);