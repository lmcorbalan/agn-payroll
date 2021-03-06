import styled from 'styled-components'

const AppLayout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
`

AppLayout.Header = styled.div`
  flex-shrink: 0;
`

AppLayout.ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  overflow: auto;
  flex-grow: 1;
`

AppLayout.Content = styled.div`
  display: flex;
  flex-direction: row;
`

AppLayout.Main = styled.div`
  padding: 30px;
  flex-grow: 2;
`

AppLayout.RightPane = styled.div`
  padding: 30px;
  flex-grow: 1;
`

export default AppLayout
