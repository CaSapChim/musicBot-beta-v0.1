const areCommandsDifferent = require('../../utils/areCommandsDifferent.js');
const getApplicationCommands = require('../../utils/getApplicationCommands.js');
const getLocalCommands = require('../../utils/getLocalCommands.js');

module.exports = async (client) => {
     try {
          const localCommands = getLocalCommands();
          
          const applicationCommands = await getApplicationCommands(
               client,
               configure.app.guild
          );

          for (const localCommand of localCommands) {
               const { name, description, options } = localCommand;

               const existingCommand = await applicationCommands.cache.find(
                    (cmd) => cmd.name === name
               );

               if (existingCommand) {
                    if (localCommand.deleted) {
                         await applicationCommands.delete(existingCommand.id);
                         console.log(`🗑 Deleted command "${name}".`);
                         continue;
                    }

                    if (areCommandsDifferent(existingCommand, localCommand)) {
                         await applicationCommands.edit(existingCommand.id, {
                              description,
                              options,
                         });

                         console.log(`🔁 Edited command "${name}".`);
                    }
               } else {
                    if (localCommand.deleted) {
                         console.log(
                              `⏩ Skipping registering command "${name}" as it's set to delete.`
                         );

                         continue;
                    }

                    await applicationCommands.create({
                         name,
                         description,
                         options,
                    });
                    console.log(`👍 Registered command "${name}."`);
               }
          }
          console.log('👍 Succesfully Registering command! ')
     } catch (error) {
          console.log(`There was an error: ${error}`);
     }
};