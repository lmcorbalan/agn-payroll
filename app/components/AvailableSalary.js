import React from 'react';
import { Table, TableHeader, TableRow, TableCell, Text, Countdown, theme } from '@aragon/ui'

const DAY_IN_MS = 1000 * 60 * 60 * 24
const endDate = new Date(Date.now() + 5 * DAY_IN_MS)

const AvailableSalary = () => (
  <React.Fragment>
    <Text.Block size='xlarge'>Available salary</Text.Block>
    <Table
      header={
        <TableRow>
          <TableHeader title={<Text weight="bold" style={{color:theme.textTertiary}}>TIME SINCE LAST SALARY</Text>} />
          <TableHeader title={<Text weight="bold" style={{color:theme.textTertiary}}>AVAILABLE BALANCE</Text>} />
          <TableHeader title={<Text weight="bold" style={{color:theme.textTertiary}}>TOTAL TRANSFERRED</Text>} />
          <TableHeader title={<Text weight="bold" style={{color:theme.textTertiary}}>YOUR YEARLY SALARY</Text>} />
        </TableRow>
      }
    >
      <TableRow>
        <TableCell>
          <Countdown end={endDate} />
        </TableCell>
        <TableCell>
          <Text size='xxlarge'>+$6,245.52</Text>
        </TableCell>
        <TableCell>
          <Text size='xxlarge'>$45,352.27</Text>
        </TableCell>
        <TableCell>
          <Text size='xxlarge'>$80,000</Text>
        </TableCell>
      </TableRow>
    </Table>
  </React.Fragment>
)

export default AvailableSalary
