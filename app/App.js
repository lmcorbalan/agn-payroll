import React, { Component } from 'react'
import {
  AragonApp,
  Button,
  Text,
  AppBar,
  SidePanel,
  observe
} from '@aragon/ui'

import Aragon, { providers } from '@aragon/client'
import styled from 'styled-components'

import AppLayout from './components/AppLayout'
import AvailableSalary from './components/AvailableSalary';

class App extends Component {
  state = {
    testVisible: false,
    test2Visible: false
  }

  handleTestOpen = () => {
    this.setState({ testVisible: true })
  }
  handleTestClose = () => {
    this.setState({ testVisible: false })
  }

  handleTest2Open = () => {
    this.setState({ test2Visible: true })
  }
  handleTest2Close = () => {
    this.setState({ test2Visible: false })
  }

  render () {
    return (
      <AragonApp publicUrl="./aragon-ui/">
        <AppLayout>
          <AppLayout.Header>
            <AppBar
              title="Payroll"
              endContent={
                <Button mode="strong" onClick={this.handleTestOpen}>
                  Test
                </Button>
              }
            />
          </AppLayout.Header>
          <AppLayout.ScrollWrapper>
            <AppLayout.Content>
              <AppLayout.Main>
                <AvailableSalary />
              </AppLayout.Main>
              <AppLayout.RightPane>
                <Text.Block size='xxlarge'>Right Pane</Text.Block>
              </AppLayout.RightPane>
            </AppLayout.Content>
          </AppLayout.ScrollWrapper>
        </AppLayout>
        <SidePanel
          title="Test Sidebar"
          opened={this.state.testVisible}
          onClose={this.handleTestClose}
        >
          This is a sidebar1
          <Button mode="strong" onClick={this.handleTest2Open}>
            Test
          </Button>
        </SidePanel>
        <SidePanel
          title="Test Sidebar2"
          opened={this.state.test2Visible}
          onClose={this.handleTest2Close}
        >
          This is a sidebar2
        </SidePanel>
      </AragonApp>
    )
  }
}

export default observe(
  observable => observable.map(state => ({ ...state })),
  {}
)(App)
