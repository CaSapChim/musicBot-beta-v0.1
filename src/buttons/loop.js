const { QueueRepeatMode } = require('discord-player');
const { EmbedBuilder } = require('discord.js');

module.exports = async ({ interaction, queue }) => {
     const methods = ['disable', 'track', 'queue'];
     const noMusic = new EmbedBuilder()
          .setAuthor({ name: 'Không có gì đang phát ấy ? thử lại ikkk.... ❌' })

     if (!queue || !queue.isPlaying()) await interaction.editReply({ embeds: [noMusic] })


     const repeatMode = queue.repeatMode
     switch (repeatMode) {
          case 1:
               queue.setRepeatMode(QueueRepeatMode.TRACK)
               break;
          case 2:
               queue.setRepeatMode(QueueRepeatMode.QUEUE)
               break;
          case 3:
               queue.setRepeatMode(QueueRepeatMode.OFF)
               break;
          default:
               break;
     }

     const loopEmbed = new EmbedBuilder()
          .setDescription(`Vòng lặp đã được thiết lập : **${methods[repeatMode]}** ✅`)

     await interaction.editReply({ embeds: [loopEmbed] })
}