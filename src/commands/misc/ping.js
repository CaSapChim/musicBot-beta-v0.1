const { EmbedBuilder } = require("discord.js");

module.exports = {
     name: 'ping',
     description: 'pong!',
     /**
      * 
      * @param {import('discord.js').Client} client 
      * @param {import('discord.js').ChatInputCommandInteraction} interaction 
      */
     callback: async (client , interaction) => {
          const ping = client.ws.ping;
          const pingEmbed = new EmbedBuilder()
               .setColor('Blurple')
               .setAuthor({name: `${client.user.username}` , iconURL: client.user.displayAvatarURL()})
               .setDescription(` \`\`\`diff
               - API Ping: ${Math.round(ping)}ms
               \`\`\` `)
          
          await interaction.editReply({embeds: [pingEmbed]});
     }
}