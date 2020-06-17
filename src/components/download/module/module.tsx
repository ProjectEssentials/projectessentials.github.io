import React from "react";
import Link from "../../link/link";
import Footer from '@jetbrains/ring-ui/components/footer/footer';

import './module.css'
import {Struct} from "../../../structs/Pair";
import ImmutablePair = Struct.ImmutablePair;

interface ModuleProperties {
  name: string
  urlend: string | null
  description: string
  map: Map<string, ImmutablePair<string, string>>
  previewMap: Map<string, ImmutablePair<string, string>>
}

export default class Module extends React.Component<ModuleProperties, any> {
  render = () => (
    <div className="module-card">
      <p className="module-title">{this.props.name}</p>
      <div className="module-div">
        {
          mapTheMap(this.props.map, (k: string, v: ImmutablePair<string, string>) => {
            return (
              <Link
                className="download-link"
                href={v.first}
                content={`Latest /${v.second}/ — for ${k} >`}
              />
            )
          })
        }
      </div>
      {
        Array.from(this.props.previewMap.keys()).length != 0 ? (
          <div>
            <Footer className="download-footer"/>
            <div className="module-div">
              {
                mapTheMap(this.props.previewMap, (k: string, v: ImmutablePair<string, string>) => {
                  return (
                    <Link
                      className="download-link"
                      href={v.first}
                      content={`Preview /${v.second}/ — for ${k} >`}
                    />
                  )
                })
              }
            </div>
          </div>
        ) : null
      }
      <Footer className="download-footer"/>
      <div className="other-stuff-container">
        <div className="module-description-container">
          <p className="module-description">{this.props.description}</p>
        </div>
        <Footer className="download-footer"/>
        <div className="download-link-container">
          <Link
            className="download-link"
            href={
              this.props.urlend != null ? `https://github.com/ProjectEssentials/ProjectEssentials-${this.props.urlend}` : "https://github.com/ProjectEssentials/ProjectEssentials"
            }
            content={`Source Code >`}
          />
          <Link
            className="download-link"
            href={
              this.props.urlend != null ? `https://www.curseforge.com/minecraft/mc-mods/project-essentials-${this.props.urlend}` : "https://www.curseforge.com/minecraft/mc-mods/project-essentials"
            }
            content={`CurseForge Page >`}
          />
        </div>
      </div>
    </div>
  )
}

function mapTheMap(map, cb) {
  let i = 0;
  let out = new Array(map.size);
  map.forEach((val, key) => out[i++] = cb(key, val));
  return out;
}
