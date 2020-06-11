## Installation

### Requirements

Project Essentials runs on the Java edition of Minecraft, either on your single player/local game or a dedicated server.

At now Project Essentials supports only Forge, so you can install only on Forge.

Basic requirements \ recommendations for Forge version:
- for `1.14.4` is Forge `28.2.X`
- for `1.15.2` is Forge `31.2.X`

### Installation

```
    1. In your game \ server root folder, create a "mods" folder if one does not yet exist.
    2. Download or copy "Project Essentials XXX-<version>.jar" into the "mods" folder.
    3. Don't forget install dependencies (if you install one of not main modules).
    4. Start your server or client.
```

### Localization

You see it because probably you have this problem.

That's function by default disabled in configuration so if you want using Project Essentials modules on server side only "as spigot plugin" then you need configure `general.properties` in `.\config\ProjectEssentials`. You can fix it by two ways:

- Open the `general.properties` file via any text editor *(I recommend VS Code)*, find the `v2-localization-enabled` property and change his value to `true`, save the file and reload the server.
- In-game way: *(you need operator rights or `*` permission)*, execute the command `/configure-essentials v2-localization-enabled set true`, **voila**! 

## Configurations

::: tip
All configurations of Project Essentials modules stores in `.\config\ProjectEssentials` directory.
:::

---

### Configurations of core module

#### general.properties

Contains common \ general settings for the Project Essentials.

Small syntax guide

1. **Simple commentary:**
```
    #Thu Jun 11 18:36:37 MSK 2020
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    commentary to file \ property
```

2. **Simple value:**
```
    v2-localization-enabled =           true
    ^^^^^^^^^^^^^^^^^^^^^^^ ^           ^^^^
    property                separator   value
```

3. **Value of type empty list:**
```
    first-join-commands     =           []
    ^^^^^^^^^^^^^^^^^^^     ^           ^^
    property                separator   value
```

4. **Value of type filled list:**
```
    first-join-commands     =           ["/hello", "/there"]
    ^^^^^^^^^^^^^^^^^^^     ^           ^^^^^^^^^^^^^^^^^^^^
    property                separator   value
```

5. **Description of properties**

| Property                                          | Description                                                                                                                       | Type          | Provider  |
| -------------                                     | -------------                                                                                                                     | -----------   | --------- |
| help-command-max-lines-out                        | Lines for one page in `/help` command out.                                                                                        | Int           | basic     |
| enable-native-command-aliases-replace             | If this value will true then aliases for vanilla commands will processed and registered.                                          | Boolean       | core      |     
| feed-max-food-level                               | Maximum feed level will regenerated after executing `/feed` command.                                                              | Int           | basic     |
| v2-localization-fallback-lang                     | Fallback language for v2 localization, uses when localization string not found for specified language.                            | String        | core      |     
| afk-idleness-kick-time                            | Idleness time in afk state of player, player will kicked from server after this time.                                             | Int           | basic     |
| afk-handle-activity                               | If this value will true then afk will do handling player activity.                                                                | Boolean       | basic     |
| first-join-commands                               | First join commands, commands in this list will executed if player plays on server at first time.                                 | List          | basic     |
| enable-console-colors                             | Enables color messages in server console, if you use not CMD :D, you can set this value to true.                                  | Boolean       | core      |     
| feed-max-food-saturation-level                    | The saturation level that will be obtained when the command is executed.                                                          | Float         | basic     | 
| disable-safely-enchant-level                      | If this value is true disables safely enchantment level, i.e allows to enchant item for 1000 lvl.                                 | Boolean       | core      |     
| auto-fly-mode-on-join-enabled                     | If this value is true enables fly mode automatically if player was in fly mode before leaving from server.                        | Boolean       | basic     |
| fly-worlds-disabled                               | Words in which fly mode is restricted.                                                                                            | List          | basic     |
| list-max-elements-in-page                         | In-chat lines for one page in commands which out is list info.                                                                    | Int           | core      |     
| disable-portal-spawning                           | If this value is true portal spawning by players in world will suppressed.                                                        | Boolean       | core      |     
| v2-localization-enabled                           | If this value is true enables experimental server-side only localization (but it also works on client, side independent).         | Boolean       | core      |     
| teleport-request-timeout                          | Teleport request time out in seconds. (for tpa, tpa-here commands).                                                               | Int           | basic     |
| invsee-disable-danger-slots                       | If this value is true will restricts and suppresses any actions with "fake" slots in invsee.                                      | Boolean       | basic     |
| god-worlds-disabled                               | Like fly-worlds-disabled.                                                                                                         | List          | basic     |
| locate-command-find-radius                        | Max radius which locate command will search structures in the game world.                                                         | Int           | core      |     
| enable-native-command-replace                     | If this value is true SOME vanilla commands will replaced by core module.                                                         | Boolean       | core      |     
| auto-god-mode-on-join-enabled                     | Like auto-fly-mode-on-join-enabled.                                                                                               | Boolean       | basic     |
| disabled-commands                                 | List with restricted commands on the server.                                                                                      | List          | basic     |
| enable-native-command-require-predicate-replace   | If this value is true require predicate of vanilla commands will replaced, i.e permission checking algorithm will replaced.       | Boolean       | core      |     
| replace-native-help-command                       | If this value is true help command will replaced on enchanted help command by basic module.                                       | Boolean       | basic     |

#### native-mappings.json

This configuration controlling native command permissions and aliases mappings.

1. `permissions` object has type a `Map` with key type `String` and value type also `String`.

```json
  "ban": "native.moderation.ban@3"
```

`ban` is property (key), - command which you want change permission.
`native.moderation.ban@3` - is value of property, `@` symbol separate permission node and min required op level.

If you will remove this core will use generated permission basing on command name, e.g for ban command it will `native.ban` and operator level by vanilla. 

2. `aliases` object has type like `permissions` object.

```json
  "locate": "find,where"
```

`locate` is target command for applying aliases.
`find,where` is aliases to apply for `locate` command.

---

### Configurations of permissions module

#### permissions-settings.json

*Stores settings of permissions module.*

| Property                              | Description                                                                                            | Type    |
| -------------                         | -------------                                                                                          | ------- |
| useSimplifiedWorldPermissions         | If this value is true for checking world actions permissions will used simplified permission nodes.    | Boolean |
| replaceWorldEditPermissionsHandler    | If this value is true WorldEdit permission checking compatibility will enabled.                        | Boolean |
| debugMode                             | If this value is true debug mode will enabled (checked nodes in logs).                                 | Boolean |
| handleBlockBreaking                   | If this value is true block breaking event will handled.                                               | Boolean |
| handleBlockPlacing                    | If this value is true block placing event will handled.                                                | Boolean |
| handleFarmlandTrampling               | If this value is true farmland trampling event will handled.                                           | Boolean |
| handleItemUsing                       | If this value is true item using event will handled.                                                   | Boolean |

#### permissions.json

*Stores permissions of players, groups.*

There are "live example" `permissions.json` file structure

```json5
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
```

---

## Commands

### Command of core module

| Command                 | Permission / Level                          | Description                                                       |
| -------------           | -------------                               | -------------                                                     |
| configure-essentials    | ess.configure.essentials.<setting-name*>    | Configuring any value in `general.properties`.                    |
| back                    | ess.back                                    | Rolling back to last your position in world before teleportation. |

`*` setting name is name of any property in `general.properties` configuration.

---

### Command of permissions module

| Command                 | Permission / Level                          | Description                                                       |
| -------------           | -------------                               | -------------                                                     |
| configure-permissions   | ess.configure.permissions.<setting-name*>   | Configuring any value in `permissions-settings.json`.             |

`*` setting name is name of any property in `permissions-settings.json` configuration.

One more command, so it heavy command and it not can be written in commands table.

*`permissions` command has aliases such as `perm`, `perms`, `permission`*.

```
    <> - is mandatory argument
    [] - is optional argument.
```

Commands for management users:

```
`/perm save` - saves permissions configuration.
`/perm reload` - does reload permissions configuration.
`/perm user <user-name> info` - displays information about user.
`/perm user <user-name> remove` - does remove user if he is present in users list.
`/perm user permissions <user-name> add <node>` - adds permission node to target user.
`/perm user permissions <user-name> remove <node>` - does remove permission node from user if it exist.
`/perm user permissions <user-name> list [deep [page]] [page]` - displays all permissions of user. (if you want get all permissions of user you need pass `deep` argument).
`/perm user group set <group-name> for <user-name>` - sets group for target user.
```

Commands for management groups:

```
`/perm group list [page]` - displays all registered groups.
`/perm group set-default <group-name>` - switch `isDefault` group factor to new target group.
`/perm group create <group-name>` - creates new group with specified name.
`/perm group remove <group-name>` - removes group by name. (Only if that group is not default).
`/perm group permissions <group-name> add <node>` - adds permission node to target group.
`/perm group permissions <group-name> remove <node>` - does remove permission node from user if it exist.
`/perm group permissions <group-name> list [deep [page]] [page]` - displays all permissions of group. (deep arguments works as in similar command for user).
`/perm group inherit <group-name> add <child-group>` - adds new inherit group to target group.
`/perm group inherit <group-name> remove <child-group>` - removes inherit group from target group.
`/perm group inherit <group-name> list [page]` - display all inherits groups of target group.
`/perm group prefix <group-name>` - displays the current prefix of group in the chat.
`/perm group prefix <group-name> <prefix>` - sets new prefix for target group.
```

---

## Module API's

### API of core module

```properties
# This content in gradle.properties.
package_public_token=ZDhjMjgyNjlhM2E0ZTQ0MmM2Mjk5ZWI4YmMyZjI0YzNjOTNkMDVkZA==
package_maven_repo=https://maven.pkg.github.com/projectessentials/projectessentials
package_maven_repo_name=GitHubPackages
package_maven_repo_mail=MairwunNx@gmail.com
core_version=2.0.3
```

```groovy
/*
    Declare a repository for getting core module as dependency.
*/
repositories {
    maven {
        name = package_maven_repo_name
        url = uri "$package_maven_repo-core"
        credentials {
            username = package_maven_repo_mail
            password = packagesToken
        }
    }
}

/*
    Declare a dependency in dependencies block.
*/
implementation("com.projectessentials.core:ProjectEssentials-Core:$core_version") {
    /*
        Set this value to false for ignoring core dependencies.
    */
    transitive = false
}
```

### API of permissions module

```properties
# This content in gradle.properties.
package_public_token=ZDhjMjgyNjlhM2E0ZTQ0MmM2Mjk5ZWI4YmMyZjI0YzNjOTNkMDVkZA==
package_maven_repo=https://maven.pkg.github.com/projectessentials/projectessentials
package_maven_repo_name=GitHubPackages
package_maven_repo_mail=MairwunNx@gmail.com
permissions_version=2.0.0
```

```groovy
/*
    Declare a repository for getting core module as dependency.
*/
repositories {
    maven {
        name = package_maven_repo_name
        url = uri "$package_maven_repo-permissions"
        credentials {
            username = package_maven_repo_mail
            password = packagesToken
        }
    }
}

/*
    Declare a dependency in dependencies block.
*/
implementation("com.projectessentials.core:ProjectEssentials-Permissions:$core_version") {
    /*
        Set this value to false for ignoring permissions dependencies.
    */
    transitive = false
}
```
