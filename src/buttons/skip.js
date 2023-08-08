const { EmbedBuilder } = require("discord.js");

module.exports = async ({ interaction, queue }) => {
     const noMusic = new EmbedBuilder()
          .setAuthor({ name: 'Không có gì đang phát ấy ? thử lại ikkk.... ❌' })

     if (!queue || !queue.isPlaying()) return await interaction.editReply({embeds: [noMusic]});

     const success = await queue.node.skip();
     const skipEmbed = new EmbedBuilder()
          .setDescription(`⏭\`Đã bỏ qua bài nhạc đang chơi ${queue.currentTrack.title}\``)

     await interaction.editReply({ embeds: [skipEmbed] });
}