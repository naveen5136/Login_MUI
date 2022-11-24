import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Cards = () => {
  return (
    <div>
    <Box sx={{ minWidth: 275 }}>
    <Card sx={{minWidth: 200,color:'primary'}}>
     <Typography sx={{fontSize:14}}>word of the day</Typography>
     <Typography variant="h5">be•nev•o•lent
     </Typography>
     <Typography color="text.secondary">adjective</Typography>
     <Typography variant="body1">well meaning and kindly.
     "a benevolent smile"</Typography>
    </Card>
    </Box>
    <Box sx={{ display: { xs: 'none', md: 'block' }}}>
  hide on screens smaller than md
</Box>

    </div>
  )
}

export default Cards