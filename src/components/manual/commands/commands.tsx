import React from "react"
import Markdown from '@jetbrains/ring-ui/components/markdown/markdown'
import {Col, Grid, Row} from '@jetbrains/ring-ui/components/grid/grid'
import Pager from '@jetbrains/ring-ui/components/pager/pager'
import Code from '@jetbrains/ring-ui/components/code/code'
import Table from '@jetbrains/ring-ui/components/table/table'
import Selection from '@jetbrains/ring-ui/components/table/selection'
import mock from './commands.json'

import './commands.css'

export class Commands extends React.Component {
  state = {
    data: [],
    selection: new Selection(),
    caption: undefined,
    selectable: false,
    draggable: false,
    page: 1,
    pageSize: 12,
    total: mock.length,
    sortKey: 'command',
    sortOrder: true
  }

  componentDidMount = () => this.loadPage()

  componentDidUpdate(prevProps, prevState) {
    const {page, sortKey, sortOrder} = this.state
    if (
      page !== prevState.page ||
      sortKey !== prevState.sortKey ||
      sortOrder !== prevState.sortOrder
    ) this.loadPage()
  }

  columns = [
    {
      id: 'command', title: 'Command', sortable: true,
      getValue: ({command}) => <Code className="inline-code" code={command}/>
    },
    {
      id: 'permission', title: 'Permission/Op level',
      getValue: ({permission}) => <Code className="inline-code" code={permission}/>
    },
    {id: 'description', title: 'Description'},
    {id: 'provider', title: 'Provider', getValue: ({provider}) => <b>{provider}</b>}
  ]

  onSort = ({column: {id: sortKey}, order: sortOrder}) => this.setState({sortKey, sortOrder})

  onPageChange = page => {
    this.setState({page});
  };

  loadPage = () => {
    const {page, pageSize, sortKey, sortOrder} = this.state;
    let data = [...mock];
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]) * (sortOrder ? 1 : -1));
    data = data.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    const selection = new Selection({data});
    this.setState({data, selection});
  };

  render = () => {
    const {
      data, caption, selectable, draggable, page, pageSize, total, selection, sortKey, sortOrder
    } = this.state;

    return (
      <div>
        <Markdown
          source={`
            # Commands

            ## Syntax introduction

            As you see table below includes some strange syntax for describing command and permission node.

            ### Some definitions for understanding that:

            1. \`[]\` - not mandatory argument, command can works without that.
            2. \`<>\` - mandatory argument, required for executing the command.
            3. \`~\` - reference symbol, does relate argument to part of permission node.
            4. \`/X\` - required operator level if you uses other permissions provider or without that.
            5. \`|\` - **or** operator.

            ### Still not understand some nodes or command? Let's see some examples:

            1. \`vanish [~players]\` *(permission is \`ess.vanish.[self/2|~other/3]\`)* able for use two commands:
              - \`vanish\`, will affects yourself, and requires permission \`ess.vanish.self\` or requires operator level 2.
              - \`vanish MairwunNx\`, will affects for selected player, and requires permission \`ess.vanish.other\` or requires operator level 3.

            2. \`kit [<name> ~[target]|~~list [page]]\` *(permission is \`ess.kit.[receive.<kit-name>/0[~.other/3]|~~list/0]\`)* able for use few commands:
              - \`kit starter\` - gives to you selected kit, requires permission \`ess.kit.receive.starter\` or requires operator level 0.
              - \`kit starter MairwunNx\` - gives to selected player selected kit, requires permission \`ess.kit.receive.starter.other\` or requires operator level 3.
              - \`kit list\` - lists first page of kits, requires permission \`ess.kit.list\` or requires operator level 0.
              - \`kit list 2\` - lists selected page of kits, requires the same as simple list.

            ### Still feeling confusing?

            1. Open the issue in related module repository.
            2. Ask about it in telegram or discord chat.

            ## Table of commands
          `}
        />
        <div className="table-container">
          <Table
            data={data}
            columns={this.columns}
            selection={selection}
            onSelect={newSelection => this.setState({selection: newSelection})}
            onReorder={({data: newData}) => this.setState({data: newData})}
            loading={false}
            onSort={this.onSort}
            sortKey={sortKey}
            sortOrder={sortOrder}
            caption={caption}
            selectable={selectable}
            draggable={draggable}
            autofocus
          />
          <Grid>
            <Row>
              <Col>
                <Pager
                  total={total}
                  pageSize={pageSize}
                  currentPage={page}
                  disablePageSizeSelector
                  onPageChange={this.onPageChange}
                />
              </Col>
            </Row>
          </Grid>
        </div>
        <Markdown
          className={"permissions-container"}
          source={`
            ## Another commands

            Sorry for this, permissions commands contains a big nodes, that can't be described in the common command table.

            What about this? See below, that's permissions commands, for controlling permissions configuration. You already know about command syntax, it will easy for understand.

            ### User management:

            \`\`\`
                \`/perm save\`
                    - description: saves permissions configuration.
                    - required node: ess.permissions.store.save

                \`/perm reload\`
                    - description: does reload permissions configuration.
                    - required node: ess.permissions.store.reload

                \`/perm user <user-name> info\`
                    - description: displays information about user.
                    - required node: ess.permissions.user.read.info

                \`/perm user <user-name> remove\`
                    - description: does remove user if he is present in users list.
                    - required node: ess.permissions.user.remove

                \`/perm user permissions <user-name> add <node>\`
                    - description: adds permission node to target user.
                    - required node: ess.permissions.user.permissions.add

                \`/perm user permissions <user-name> remove <node>\`
                    - description: does remove permission node from user if it exist.
                    - required node: ess.permissions.user.permissions.remove

                \`/perm user permissions <user-name> list [deep [page]] [page]\`
                    - description: displays all permissions of user. (if you want get all permissions of user you need pass \`deep\` argument).
                    - required node: ess.permissions.user.read.permissions

                \`/perm user group set <group-name> for <user-name>\`
                    - description: sets group for target user.
                    - required node: ess.permissions.user.group.set
            \`\`\`

            ### Group management:

            \`\`\`
                \`/perm group list [page]\`
                    - description: displays all registered groups.
                    - required node: ess.permissions.group.read.list

                \`/perm group set-default <group-name>\`
                    - description: switch \`isDefault\` group factor to new target group.
                    - required node: ess.permissions.group.default.set

                \`/perm group create <group-name>\`
                    - description: creates new group with specified name.
                    - required node: ess.permissions.group.create

                \`/perm group remove <group-name>\`
                    - description: removes group by name. (Only if that group is not default).
                    - required node: ess.permissions.group.remove

                \`/perm group permissions <group-name> add <node>\`
                    - description: adds permission node to target group.
                    - required node: ess.permissions.group.permissions.add

                \`/perm group permissions <group-name> remove <node>\`
                    - description: does remove permission node from user if it exist.
                    - required node: ess.permissions.group.permissions.remove

                \`/perm group permissions <group-name> list [deep [page]] [page]\`
                    - description: displays all permissions of group. (deep arguments works as in similar command for user).
                    - required node: ess.permissions.group.read.permissions

                \`/perm group inherit <group-name> add <child-group>\`
                    - description: adds new inherit group to target group.
                    - required node: ess.permissions.group.inherit.add

                \`/perm group inherit <group-name> remove <child-group>\`
                    - description: removes inherit group from target group.
                    - required node: ess.permissions.group.inherit.remove

                \`/perm group inherit <group-name> list [page]\`
                    - description: display all inherits groups of target group.
                    - required node: ess.permissions.group.read.inherit

                \`/perm group prefix <group-name>\`
                    - description: displays the current prefix of group in the chat.
                    - required node: ess.permissions.group.read.prefix

                \`/perm group prefix <group-name> <prefix>\`
                    - description: sets new prefix for target group.
                    - required node: ess.permissions.group.prefix.set
            \`\`\`
          `}
        />
      </div>
    );
  }
}
