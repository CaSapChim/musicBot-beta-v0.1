const {useMainPlayer, useQueue} = require('discord-player');
const { EmbedBuilder } = require('discord.js');

module.exports = async ({interaction, queue}) => {
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
}