import React from "react"
import Markdown from '@jetbrains/ring-ui/components/markdown/markdown'
import {Col, Grid, Row} from '@jetbrains/ring-ui/components/grid/grid'
import Pager from '@jetbrains/ring-ui/components/pager/pager'
import Code from '@jetbrains/ring-ui/components/code/code'
import Table from '@jetbrains/ring-ui/components/table/table'
import Selection from '@jetbrains/ring-ui/components/table/selection'
import mock from './permissions.json'

import './permissions.css'

export class Permissions extends React.Component {
  state = {
    data: [],
    selection: new Selection(),
    caption: undefined,
    selectable: false,
    draggable: false,
    page: 1,
    pageSize: 11,
    total: mock.length,
    sortKey: 'permission',
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
      id: 'permission', title: 'Permission',
      getValue: ({permission}) => <Code className="inline-code" code={permission}/>
    },
    {id: 'description', title: 'Description'}
  ]

  onPageChange = page => this.setState({page})

  loadPage = () => {
    const {page, pageSize, sortKey, sortOrder} = this.state
    let data = [...mock]
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]) * (sortOrder ? 1 : -1))
    data = data.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
    const selection = new Selection({data})
    this.setState({data, selection})
  }

  render = () => {
    const {
      data, caption, selectable, draggable, page, pageSize, total, selection, sortKey, sortOrder
    } = this.state;

    return (
      <div>
        <Markdown
          source={`
            # Permissions

            ## Syntax introduction

            As you see table below includes some syntax for describing permission nodes.

            ### Some definitions for understanding that:

            1. \`/ X\` - required callback operator level.
            2. \`/ ~\` - operator level can't be related to permission node.
            3. \`<>\` - argument can have a any value.

            ### Still feeling confusing?

            1. Open the issue in related module repository.
            2. Ask about it in telegram or discord chat.

            ## Table of permissions
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
            onSort={undefined}
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
      </div>
    );
  }
}
