import { Grid, Paper } from '@mui/material'
import React from 'react'
import scss from './TransactionBottomRow.module.scss'
import DataChat from '@/components/DataChart/DataChat'
import { doughnutChartData } from '@/components/mockData'


const TransactionBottomRow = () => {
  return (
    <Grid container className={scss.bottomRow}>
        <Grid>
            <Paper className={scss.dataCard}>
                <p>Transactions per user type</p>
                <DataChat type='doughnut' data={doughnutChartData}/>
            </Paper>
        </Grid>
        <Grid>
            <Paper className={scss.dataCard}>
                <p>Transactions per user type</p>
                <DataChat type='doughnut' data={doughnutChartData}/>
            </Paper>
        </Grid>
        <Grid>
            <Paper className={scss.dataCard}>
                <p>Transactions per user type</p>
                <DataChat type='doughnut' data={doughnutChartData}/>
            </Paper>
        </Grid>
        <Grid>
            <Paper className={scss.dataCard}>
                <p>Transactions per user type</p>
                <DataChat type='doughnut' data={doughnutChartData}/>
            </Paper>
        </Grid>
    </Grid>
  )
}

export default TransactionBottomRow