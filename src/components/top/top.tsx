import React from 'react'
import Link from '@jetbrains/ring-ui/components/link/link'
import Tray from '@jetbrains/ring-ui/components/header/tray'
import TrayIcon from '@jetbrains/ring-ui/components/header/tray-icon'
import Button from '@jetbrains/ring-ui/components/button/button'
import Header from '@jetbrains/ring-ui/components/header/header'
import GitIcon from '@jetbrains/icons/git.svg'
import Theme from '@jetbrains/ring-ui/components/global/theme';

import EssLogo from '../../logo.svg'
import './top.css'

export default class Top extends React.Component {
  render = () => (
    <Header theme={Theme.LIGHT}>
      <a title="Project Essentials" href="/">
        <img
          alt={'A red pen, is Project Essentials logo'}
          src={EssLogo}
          className="logo"
        />
      </a>
      <Link href={"/download"}>{'Download'}</Link>
      <Link href="#">{'Manual'}</Link>
      <Tray>
        <TrayIcon
          className="github-button"
          href="https://github.com/ProjectEssentials"
          primary
          title="GitHub"
          icon={GitIcon}
        />
        <Button
          href="https://gist.github.com/MairwunNx/fda95062618db6880ef8ee06e1bba54f"
          title="Support"
          button-primary="true"
          key={'button-primary'}
          data-test={'button-primary'}
          {...{['primary']: true}}
        >{'Support'}</Button>
      </Tray>
    </Header>
  )
}
