const { ActivityType } = require('discord.js');

let status = [
     {
          name: 'Youtube 🎧',
          type: ActivityType.Listening,
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
     },
     {
          name: 'Spotify 🎧',
          type: ActivityType.Listening,
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
     },
     {
          name: 'soundCloud 🎧',
          type: ActivityType.Listening,
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
     },
     // {
     //   name: 'Custom Status 3',
     //   type: ActivityType.Listening,
     // },
];

module.exports = (client) => {
     console.log(`✔ Sucessfully logged into ${client.user.tag}!.`);
     setInterval(() => {
          let random = Math.floor(Math.random() * status.length);
          client.user.setActivity(status[random]);
     }, 10000)
};