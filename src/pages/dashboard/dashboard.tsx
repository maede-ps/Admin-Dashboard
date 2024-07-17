import React from 'react'
import { Box, Grid } from '../../../node_modules/@mui/material/index'
import DataRibbon from '@/components/Dashboard/DateRibbon/DataRibbon'
import TransactionsPerDay from '@/components/Dashboard/TransactionsPerDay'
import TransactionBottomRow from '@/components/Dashboard/TransactionBottomRow'

const Dashboard = () => {
  return (
    <Box>
      {/* <Grid container gap={2} className={scss.topCardsContainer}>
        <Grid>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
        
      </Grid><Grid xs={12} marginY={2}>
          <Paper className={scss.dataCard}>xs=8</Paper>
        </Grid> */}

<Grid container gap={4} marginTop={2}>
         <DataRibbon/>
         <TransactionsPerDay/>
         </Grid>

         <TransactionBottomRow/>

    </Box>
  )
}

export default Dashboard