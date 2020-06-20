import React from "react";
import Markdown from '@jetbrains/ring-ui/components/markdown/markdown';

export default class Installation extends React.Component {
  render = () => (
    <div>
      <Markdown
        source={`
          # Installation

          ## Requirements

          Project Essentials runs on the Java edition of Minecraft, either on your single player/local game or a dedicated server.

          **At now Project Essentials supports only Forge, so you can install only on Forge.**

          ### Basic requirements/recommendations for Forge version:

          * For Minecraft 1.14.4 is Forge 28.2.X.
          * For Minecraft 1.15.2 is Forge 31.2.X.

          ## Installing

          1. In your game/server root folder, create a "mods" folder if one does not yet exist.
          2. Download or copy "Project Essentials XXX-[version].jar" into the "mods" folder.
          3. Don't forget install dependencies (core module for all, and worldedit for protect module).
          4. Start your server or client.

          ## Localization?

          **You see it because probably you have this problem.**

          That's function by default disabled in configuration so if you want using Project Essentials modules on server side only "as spigot plugin" then you need configure \`general.properties\` in \`.\\config\\ProjectEssentials\`. You can fix it by two ways:

          1. Open the \`general.properties\` file via any text editor (*I recommend VS Code*), find the \`v2-localization-enabled\` property and change his value to \`true\`, save the file and reload the server.
          2. In-game way: (*you need operator rights or * permission*), execute the command \`/configure-essentials v2-localization-enabled set true\`, **voila**!
        `}
      />
    </div>
  )
}
