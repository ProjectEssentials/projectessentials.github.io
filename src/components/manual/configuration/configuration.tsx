import React from "react";
import Markdown from '@jetbrains/ring-ui/components/markdown/markdown';

export default class Configuration extends React.Component {
  render = () => (
    <div>
      <Markdown
        source={`
          # Configuration Introduction

          ## Requirements

          1. JSON syntax knowledge's.
          2. About ~1 minute for reading this.

          ## Witty notes and tips

          1. If you have a problem with configuration just remove it, server will re-create that.
          2. Before doing 1 variant, check your configuration for syntax errors.
          3. Some world specific configurations stores in \`ProjectEssentials\\<world-name>\`.
          4. Configuration stores in \`.\\config\\ProjectEssentials\` directory.

          # Configuration Description

          ## general.properties

          ### This configuration related to core module also has a regular java properties type.

          ### Syntax excursion

          - Define an empty list: \`[]\`
          - Define an filled list: \`["1", "2", "3"]\` (\`"\` can be removed).
          - Commentary starts with symbol \`#\`.

          ### Properties and description

          \`\`\`properties
          help-command-max-lines-out                        # Type Int      | Provider: Basic   | Lines for one page in /help command out.
          enable-native-command-aliases-replace             # Type Boolean  | Provider: Core    | If this value will true then aliases for vanilla commands will processed and registered.
          feed-max-food-level                               # Type Int      | Provider: Basic   | Maximum feed level will regenerated after executing /feed command.
          v2-localization-fallback-lang                     # Type String   | Provider: Core    | Fallback language for v2 localization, uses when localization string not found for specified language.
          afk-idleness-kick-time                            # Type Int      | Provider: Basic   | Idleness time in afk state of player, player will kicked from server after this time.
          afk-handle-activity                               # Type Boolean  | Provider: Basic   | If this value will true then afk will do handling player activity.
          first-join-commands                               # Type List     | Provider: Basic   | First join commands, commands in this list will executed if player plays on server at first time.
          enable-console-colors                             # Type Boolean  | Provider: Core    | Enables color messages in server console, if you use not CMD 😄, you can set this value to true.
          feed-max-food-saturation-level                    # Type Float    | Provider: Basic   | The saturation level that will be obtained when the command is executed.
          disable-safely-enchant-level                      # Type Boolean  | Provider: Core    | If this value is true disables safely enchantment level, i.e allows to enchant item for 1000 lvl.
          auto-fly-mode-on-join-enabled                     # Type Boolean  | Provider: Basic   | If this value is true enables fly mode automatically if player was in fly mode before leaving from server.
          fly-worlds-disabled                               # Type List     | Provider: Basic   | Words in which fly mode is restricted.
          list-max-elements-in-page                         # Type Int      | Provider: Core    | In-chat lines for one page in commands which out is list info.
          disable-portal-spawning                           # Type Boolean  | Provider: Core    | If this value is true portal spawning by players in world will suppressed.
          v2-localization-enabled                           # Type Boolean  | Provider: Core    | If this value is true enables experimental server-side only localization (but it also works on client, side independent).
          teleport-request-timeout                          # Type Int      | Provider: Basic   | Teleport request time out in seconds. (for tpa, tpa-here commands).
          invsee-disable-danger-slots                       # Type Boolean  | Provider: Basic   | If this value is true will restricts and suppresses any actions with "fake" slots in invsee.
          god-worlds-disabled                               # Type List     | Provider: Basic   | Like fly-worlds-disabled.
          locate-command-find-radius                        # Type Int      | Provider: Core    | Max radius which locate command will search structures in the game world.
          enable-native-command-replace                     # Type Boolean  | Provider: Core    | If this value is true SOME vanilla commands will replaced by core module.
          auto-god-mode-on-join-enabled                     # Type Boolean  | Provider: Basic   | Like auto-fly-mode-on-join-enabled.
          disabled-commands                                 # Type List     | Provider: Basic   | List with restricted commands on the server.
          enable-native-command-require-predicate-replace   # Type Boolean  | Provider: Core    | If this value is true require predicate of vanilla commands will replaced, i.e permission checking algorithm will replaced.
          replace-native-help-command                       # Type Boolean  | Provider: Basic   | If this value is true help command will replaced on enchanted help command by basic module.
          \`\`\`

          ---

          ## native-mappings.json

          ### This configuration controlling native command permissions and aliases mappings.

          1. \`permissions\` object has type a \`Map\` with key type \`String\` and value type also \`String\`.

          \`\`\`json
            "ban": "native.moderation.ban@3"
          \`\`\`

          \`ban\` is property (key), - command which you want change permission.
          \`native.moderation.ban@3\` - is value of property, \`@\` symbol separate permission node and min required op level.

          If you will remove this core will use generated permission basing on command name, e.g for ban command it will \`native.ban\` and operator level by vanilla.

          2. \`aliases\` object has type like \`permissions\` object.

          \`\`\`json
            "locate": "find,where"
          \`\`\`

          \`locate\` is target command for applying aliases.
          \`find,where\` is aliases to apply for \`locate\` command.

          ---

          ## permissions-settings.json

          ### This configuration stores settings of permissions module.

          \`\`\`json
          {
            "useSimplifiedWorldPermissions": false, // If this value is true for checking world actions permissions will used simplified permission nodes.
            "replaceWorldEditPermissionsHandler": true, // If this value is true WorldEdit permission checking compatibility will enabled.
            "debugMode": false, // If this value is true debug mode will enabled (checked nodes in logs).
            "handleBlockBreaking": true, // If this value is true block breaking event will handled.
            "handleBlockPlacing": true, // If this value is true block placing event will handled.
            "handleFarmlandTrampling": false, // If this value is true farmland trampling event will handled.
            "handleItemUsing": false // If this value is true item using event will handled.
          }
          \`\`\`

          ---

          ## permissions.json

          ### This configuration stores all user permissions and groups.

          \`\`\`json
          {
            // Important node: comments not supports in regular json. If you will copy this - remove comments!
            "groups": [ // <- groups object, contains groups.
              {
                "name": "default", // <- group name, must be unique and not empty. (String type)
                "isDefault": true, // <- is default group? (Boolean type)
                "permissions": [ // <- list with permission nodes (every node has String type).
                  "native.help", // <- regular permission node.
                  "ess.warp.*", // <- permission node with allowing all nodes after last dot.
                  "^native.event.world.overworld.block.bedrock.break" // <- inverted permission node.
                ],
                "inheritFrom": [
                  // "fly" <- inherit permissions from fly group (for example).
                ],
                "prefix": "" // <- prefix of group.
              }, // <- semicolon for enumerating next group :D.
              { // <- one more group object!
                "name": "owner", // <- I think you understand what it is ;).
                "isDefault": false, // <- I think owner group must be not default :|.
                "permissions": [
                  "*" // <- "star" or "all permissions notation". (Like Operator level).
                ],
                "inheritFrom": [ // <- no need to inherit something =).
                ],
                "prefix": "§c[§7owner§c]" // <- custom and pretty prefix in chat.
              } // <- no need semicolon if it last group.
            ], // <- end of groups list.
            "users": [ // <- stores users. List with users.
              {
                "nickname": "*", // <- nickname of user, "star" mean all nicknames, like user by default.
                "group": "default", // <- group of user (in this context for all users).
                "permissions": [ // <- no specific permissions of user.
                ]
              },
              {
                "nickname": "MairwunNx", // <- nickna... yea, you know about it. Btw he is project creator.
                "group": "owner", // <- his group. (Of course he is owner he is creator of this module lol)
                "permissions": [
                ]
              },
              { // <- One more user.
                "nickname": "JopaBibBib",
                "group": "owner", // <- his group.
                "permissions": [ // <- ok, he is can execute all commands because he is owner with except /stop.
                  "^native.server.stop" // <- yea, it's permission node.
                ]
              } // <- last user, no need to semicolon here.
            ]
          } // <- god bless you, man. This end of file. Relax.
          \`\`\`

          ---

          ## warps-settings.json

          \`\`\`json
          {
            "playSoundOnTeleport": true, // plays a teleport sound after your teleporting.
            "showEffectOnTeleport": true, // makes a teleport effects after your teleporting.
            "addResistanceEffect": true, // adds resistance effect after your teleporting, as "shield".
            "resistanceEffectDuration": 200, // resistance effect duration in ticks. 200 / 20 is 10 seconds.
            "warpsLimitations": { // contains pairs of limitations. Defined this groups must have permission \`ess.warp.limit.<group-name>\`.
              "default": 6, // default group can create 6 warps maximum.
              "better-than-default": 8 // another group.
            }
          }
          \`\`\`

          ---

          ## home-settings.json

          \`\`\`json
          {
            "respawnAtHomeAfterDeath": true, // respawn player at home after death? If value will false player will respawned at spawn or bed point.
            "respawnHomeSelectStrategy": "Last", // respawn home selecting strategy, if you want player respawn at fist his home, pass the value "First".
            "playSoundOnTeleport": false, // plays sound after teleporing to home?
            "showEffectOnTeleport": true, // show a teleport effect after teleporting to home?
            "homeLimitations": { // like warp limitations, see above. (But permission is \`ess.home.limit.<group-name>\`.)
              "default": 2
            }
          }
          \`\`\`

          ---

          ## backup-settings.json

          \`\`\`json
          {
            "backupEnabled": true, // backup cycle is enabled?
            "firstLaunchDelay": true, // do delay for first launch of backup cycle?
            "backupConfigurations": true, // do backup configuration? (config directory).
            "backupCreationDelay": 300, // backup creation delay in seconds.
            "backupCompressionLevel": 3, // backup compression level between 1 and 10 (inclusive).
            "backupDirectoryPath": "backup", // backup directory path, allowed relative and absolute path.
            "backupDateFormat": "yyyy-MM-dd_HH.mm.ss", // backup date format.
            "maxBackupFiles": 10, // maximum backup files in out dir, between 1 and 2,147,483,647 (inclusive).
            "rollingBackupFilesEnabled": true, // enable backup files rolling? (what is it? see this https://en.wikipedia.org/wiki/Log_rotation).
            "notifyPlayersAboutBackup": false, // Need notification to player with specified permission about backup done?
            "purgeBackupOutDirectory": true, // Do purge backup directory? (clean up from other files).
            "purgeExtensionsExceptions": [], // Exceptions of files which specified extension while purging. (Files with passed extensions will not removed.)
            "purgeNamesExceptions": [] // Exceptions of file names while purging. (Files with passed names will not removed.)
          }
          \`\`\`

          ---

          ## kits.json

          \`\`\`json
          {
            "kits": [ // <- kits array start this.
              { // <- kit "data class".
                "name": "newbies", <- kit name.
                "delay": 43200, <- kit receiving delay, in seconds, value between -1 and 2,147,483,647.
                "requiredMinOpLevel": 0, // <- required min op level for receiving kit, if you plays without any permissions providers.
                "items": [ // <- Items array for this kit.
                  { // <- Item start this :).
                    "name": "oak_wood", <- Item index (since 1.13 ID not uses).
                    "count": 8, <- Count of this item.
                    "displayName": "&7[&cStarter %player's Item&7]", <- Display name of this item. (%player and %kit as variables available now).
                    "enchantments": [] // <- Enchantments for this item. I think oak no need to enchant lol.
                  }, // <- DON'T FORGET THIS, SAINT COMMA!
                  {
                    // I think no need comments here.
                    "name": "cow_spawn_egg", // <- yea, even the egg.
                    "count": 1,
                    "displayName": "&7[&c%player's cow&7]",
                    "enchantments": []
                  },
                  {
                    "name": "diamond_sword",
                    "count": 1, // <- you can also make it more lol :D.
                    "displayName": "&7[&dGod's Sword&7]",
                    "enchantments": [
                      {
                        "enchantment": "knockback", // <- Enchantment (see other here https://minecraft.gamepedia.com/Enchanting -> Data values)
                        "level": 1 // <- Level of enchantment, probably allowed to use any unsafe level (bigger than normal).
                      }
                    ]
                  }
                ]
              }
            ]
          }
          \`\`\`
        `}
      />
    </div>
  )
}
