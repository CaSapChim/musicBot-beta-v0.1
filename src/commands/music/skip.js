const { useMainPlayer, useQueue } = require('discord-player');
const { EmbedBuilder } = require('discord.js');

module.exports = {
     name: 'skip',
     description: 'skip the queue',
     deleted: false,
     voiceChannel: true,
     callback: async (client, interaction) => {
          const player = useMainPlayer();
          const queue = useQueue(interaction.guild);

          const noMusic = new EmbedBuilder()
               .setAuthor({ name: 'Không có gì đang phát ấy ? thử lại ikkk.... ❌' })

          if (!queue || !queue.isPlaying())
               return await interaction.editReply({ embeds: [noMusic], ephemeral: true });
          const success = queue.node.skip();

          const skipEmbed = new EmbedBuilder()
               .setDescription(`⏭\`Đã bỏ qua bài nhạc đang chơi ${queue.currentTrack.title}\``)

          await interaction.editReply({embeds: [skipEmbed]});
     }
};