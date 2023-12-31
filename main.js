require('events').EventEmitter.prototype._maxListeners = 100;
const { Client, IntentsBitField } = require('discord.js');
const eventHandlers = require('./src/handlers/eventHandler.js');
const { Player } = require('discord-player');

const client = new Client({
     intents: [
          IntentsBitField.Flags.GuildMembers,
          IntentsBitField.Flags.GuildMessages,
          IntentsBitField.Flags.MessageContent,
          IntentsBitField.Flags.Guilds,
          IntentsBitField.Flags.GuildVoiceStates,
     ],
     disbleMentions: 'everyone',
});


global.configure = require('./config.js');

const player = new Player(client, configure.opt.discordPlayer);
player.extractors.loadDefault();

eventHandlers(client); //handler the events

client.login(configure.app.token);