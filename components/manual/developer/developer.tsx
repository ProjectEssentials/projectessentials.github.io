import React from "react";
import Markdown from '@jetbrains/ring-ui/components/markdown/markdown';

export class Developer extends React.Component {
  render = () => (
    <div>
      <Markdown
        source={`
          # Developer API

          ## Declare the repository

          ### build.gradle file

          \`\`\`groovy
          /*
              That's code must be placed after the plugins applying.
          */
          String packagesToken = new String(package_public_token.decodeBase64())

          repositories {
              maven {
                  name = package_maven_repo_name
                  /*
                      "xxx" is a module name in lower case, for example: core.
                  */
                  url = uri "$package_maven_repo-xxx"
                  credentials {
                      username = package_maven_repo_mail
                      password = packagesToken
                  }
              }
          }
          \`\`\`

          ### gradle.properties file

          \`\`\`properties
          package_public_token=ZDhjMjgyNjlhM2E0ZTQ0MmM2Mjk5ZWI4YmMyZjI0YzNjOTNkMDVkZA==
          package_maven_repo=https://maven.pkg.github.com/projectessentials/projectessentials
          package_maven_repo_name=GitHubPackages
          package_maven_repo_mail=MairwunNx@gmail.com
          \`\`\`

          ## Get a dependency

          ### build.gradle file

          \`\`\`groovy
          /*
              "xxx" is a module name in lower case, like in declared repo.
              "zzz" is a module version, can be found in repo releases or packages.
          */
          implementation("com.projectessentials.xxx:ProjectEssentials-xxx:zzz") {
              transitive = false
          }
          \`\`\`

          **API is simple for understanding if you know how to use your IDE and some lower english knowledge.**

          *If you have questions about working with the API, feel free to ask them in the appropriate repository.*
        `}
      />
    </div>
  )
}
