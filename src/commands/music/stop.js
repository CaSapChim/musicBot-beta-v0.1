const { EmbedBuilder } = require('@discordjs/builders');
const { useQueue, useMainPlayer } = require('discord-player');

module.exports = {
     name: 'stop',
     description: 'stop the player!',
     deleted: false,
     voiceChannel: true,

     callback: async (client, interaction) => {
          const player = useMainPlayer();
          const queue = useQueue(interaction.guild);


          if (!queue.isPlaying() || !queue) {
               await interaction.editReply({ content: "Không có bài nhạc nào đang phát...." });
          }

          queue.delete();

          const stopEmbed = new EmbedBuilder()
               .setColor('#b72563')
               .setAuthor({ name: 'Nhà ngươi đã cho ta ngừng hát 🤬', iconURL: interaction.user.avatarURL() })

          await interaction.editReply({ embeds: [stopEmbed] });
     },
}