import LinearProgress from '@mui/material/LinearProgress'
import { DataGrid } from '@mui/x-data-grid'
import { useDemoData } from '@mui/x-data-grid-generator'
import React from 'react'

const Data = () => {
  const {data} = useDemoData({
    dataSet:"Commodity",
    rowLength:500,
    maxColumns:15
  })

  return (
    <>
    <h1>Data</h1>
    <p>
the bestest of data available here ar you finger tips in table form.
This could be a whole section of data that is availble for users to deep
dive further into the numbers/sats.
    </p>
    <div style={{height:"900px",width:"100%"}}>
      <DataGrid
      loading={!data}
      {...data}
      />
    </div>
    </>
  )
}

export default Data