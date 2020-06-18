import React from "react";

import './download.css'
import Module from "./module/module";
import {Struct} from "../../structs/pair";
import ImmutablePair = Struct.ImmutablePair;

export default class Download extends React.Component {
  render = () => (
    <div className="download-container">
      <p className="greetings-subtitle download-title">{'Download the Project Essentials'}</p>
      <div className="download-cards-container">
        <Module
          name={"Core Module"}
          urlend={"core"}
          description={"API for creating modules of Project Essentials and reduce code duplication, also core module contains kotlin runtime and libraries. Also contains some settings for vanilla commands and events."}
          map={new Map().set(
            "1.15.2", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Core/releases/download/2.1.0%2BMC-1.15.2/Project.Essentials.Core-MOD-2.1.0+MC-1.15.2.jar", "2.1.0")
          ).set(
            "1.14.4", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Core/releases/download/2.1.0%2BMC-1.14.4/Project.Essentials.Core-MOD-2.1.0+MC-1.14.4.jar", "2.1.0")
          )}
          previewMap={new Map()}
        />
        <Module
          name={"Basic Module"}
          urlend={null}
          description={"A basic module of Project Essentials. This module adds a few basic commands in minecraft for the project. Many of the commands in this module will be familiar to you from EssentialsX."}
          map={new Map().set(
            "1.15.2", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials/releases/download/2.0.0%2BMC-1.15.2/Project.Essentials.Basic-2.0.0+MC-1.15.2.jar", "2.0.0")
          ).set(
            "1.14.4", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials/releases/download/2.0.0%2BMC-1.14.4/Project.Essentials.Basic-2.0.0+MC-1.14.4.jar", "2.0.0")
          )}
          previewMap={new Map()}
        />
        <Module
          name={"Permissions Module"}
          urlend={"permissions"}
          description={"API for controlling the activities of the player on the server and client. You can limit some commands to the player, his activities in the world and more."}
          map={new Map().set(
            "1.15.2", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Permissions/releases/download/2.0.0%2BMC-1.15.2/Project.Essentials.Permissions-2.0.0+MC-1.15.2.jar", "2.0.0")
          ).set(
            "1.14.4", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Permissions/releases/download/2.0.0%2BMC-1.14.4/Project.Essentials.Permissions-2.0.0+MC-1.14.4.jar", "2.0.0")
          )}
          previewMap={new Map()}
        />
        <Module
          name={"Spawn Module"}
          urlend={"spawn"}
          description={"How we control spawn point! Adds literally two commands to configure players spawn point in the game world."}
          map={new Map().set(
            "1.15.2", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Spawn/releases/download/2.0.0%2BMC-1.15.2/Project.Essentials.Spawn-2.0.0+MC-1.15.2.jar", "2.0.0")
          ).set(
            "1.14.4", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Spawn/releases/download/2.0.0%2BMC-1.14.4/Project.Essentials.Spawn-2.0.0+MC-1.14.4.jar", "2.0.0")
          )}
          previewMap={new Map().set(
            "1.15.2", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Spawn/releases/download/2.0.1-RC.1%2BMC-1.15.2/Project.Essentials.Spawn-2.0.1-RC.1+MC-1.15.2.jar", "2.1.0-RC.1")
          ).set(
            "1.14.4", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Spawn/releases/download/2.0.1-RC.1%2BMC-1.14.4/Project.Essentials.Spawn-2.0.1-RC.1+MC-1.14.4.jar", "2.1.0-RC.1")
          )}
        />
        <Module
          name={"Warps Module"}
          urlend={"warps"}
          description={"Share the ender portal with players! Adds the ability to control public points in different worlds."}
          map={new Map().set(
            "1.15.2", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Warps/releases/download/2.0.0%2BMC-1.15.2/Project.Essentials.Warps-2.0.0+MC-1.15.2.jar", "2.0.0")
          ).set(
            "1.14.4", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Warps/releases/download/2.0.0%2BMC-1.14.4/Project.Essentials.Warps-2.0.0+MC-1.14.4.jar", "2.0.0")
          )}
          previewMap={new Map()}
        />
        <Module
          name={"Home Module"}
          urlend={"home"}
          description={"A wonderful module not to lose your home! The module allows you to create, delete and teleport to homes."}
          map={new Map().set(
            "1.15.2", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Home/releases/download/2.0.0%2BMC-1.15.2/Project.Essentials.Home-2.0.0+MC-1.15.2.jar", "2.0.0")
          ).set(
            "1.14.4", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Home/releases/download/2.0.0%2BMC-1.14.4/Project.Essentials.Home-2.0.0+MC-1.14.4.jar", "2.0.0")
          )}
          previewMap={new Map()}
        />
        <Module
          name={"Backup Module"}
          urlend={"backup"}
          description={"Lightweight module for controlling the backup of the game world and configuration files on the server and in a single world."}
          map={new Map().set(
            "1.15.2", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Backup/releases/download/2.0.0%2BMC-1.15.2/Project.Essentials.Backup-2.0.0+MC-1.15.2.jar", "2.0.0")
          ).set(
            "1.14.4", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Backup/releases/download/2.0.0%2BMC-1.14.4/Project.Essentials.Backup-2.0.0+MC-1.14.4.jar", "2.0.0")
          )}
          previewMap={new Map()}
        />
        <Module
          name={"Chat Module"}
          urlend={"chat"}
          description={"A lightweight chat manager for forge servers, with simple anti-spam and anti-advertising and anti-swearing protection, mutes, ranged chat, and other stuff."}
          map={new Map().set(
            "1.15.2", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Chat/releases/download/v1.15.2-1.1.1/Project.Essentials.Chat-1.15.2-1.1.1.jar", "1.1.1")
          ).set(
            "1.14.4", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Chat/releases/download/v1.14.4-1.1.1/Project.Essentials.Chat-1.14.4-1.1.1.jar", "1.1.1")
          )}
          previewMap={new Map()}
        />
        <Module
          name={"Cooldown Module"}
          urlend={"cooldown"}
          description={"A lightweight cooldown manager for item using and command executing, helps reduce the command and item using spam."}
          map={new Map().set(
            "1.15.2", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Cooldown/releases/download/v1.15.2-1.0.2/Project.Essentials.Cooldown-1.15.2-1.0.2.jar", "1.0.2")
          ).set(
            "1.14.4", ImmutablePair.of("https://github.com/ProjectEssentials/ProjectEssentials-Cooldown/releases/download/v1.14.4-1.0.5/Project.Essentials.Cooldown-1.14.4-1.0.5.jar", "1.0.5")
          )}
          previewMap={new Map()}
        />
      </div>
    </div>
  )
}
