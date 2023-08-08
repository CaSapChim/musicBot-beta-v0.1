module.exports = {
     app: {
          token: 'Your Token',
          global: true,
          guild: 'Your guildId',
          ExtraMessages: false,
          loopMessage: false,
          client: 'Your clientId',
     },

     opt: {
          DJ: {
               enabled: false,
               roleName: '',
               commands: []
          },
          maxVol: 100,
          spotifyBridge: true,
          volume: 75,
          leaveOnEmpty: false,
          leaveOnEmptyCooldown: 30000,
          leaveOnEnd: false,
          leaveOnEndCooldown: false,
          discordPlayer: {
               ytdlOptions: {
                    quality: 'highestaudio',
                    highWaterMark: 1 << 25
               }
          }
     }
}