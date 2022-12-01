import { Box, FormControl, Input, InputLabel, MenuItem, TextField, Typography } from "@mui/material";
import { Container, padding, } from "@mui/system";
import Select from '@mui/material/Select';

import { useEffect, useState } from "react";
import Axios from 'axios'

export default function SelectStates(){

    const [states,setStates] = useState()
    const[dist,setDist]=useState()
    const[stateid,setStateid]=useState('')
    
//Receiving state api
useEffect(()=>{
    const getStates= async()=>{
        const stateResp = await Axios.get("https://cdn-api.co-vin.in/api/v2/admin/location/states")
        const stateData= await stateResp.data
        setStates(stateData)
    }
    getStates()
},[])

    function handleChange(e){
      const getStateId= e.target.value
      setStateid(getStateId)
      console.log(stateid)
    }


    // Receiving Districts with Api
    useEffect(()=>{
        const getDistData = async()=>{
            const getDist= await Axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateid}`)
            const getDistResp = await getDist.data
            setDist(getDistResp)
        }
        getDistData()
    },[stateid])

    return (
        <Container >
         <Box
         display="flex"
         flexDirection="row"
         justifyContent="center"
         alignItems="center"
         m="auto"
         p={1.5}
         borderRadius={2}
         boxShadow={"5px 5px 10px #ccc"}
         sx={{
            width:800,
            height:400,
            ":hover":{
                boxShadow:"10px 10px 20px #ccc"
            }
         }}> 
        <FormControl sx={{ m:0, minWidth: 120 ,padding:"3px"}}>
         <InputLabel display="flex" flexDirection="column">state</InputLabel>
         <Select select 
           label="state"
           sx={{width:200}}
           onChange={handleChange}
           
           > 
          {states && states.states.map((option)=>(
            <MenuItem value={option.state_id}>{option.state_name}</MenuItem>
          ))} 
         </Select>
         <Select label="District">
         {dist && dist.districts.map((district)=>(
            <MenuItem value={district.district_id}>{district.district_name}</MenuItem>
         ))} 
         </Select>
         </FormControl>
        </Box>
        </Container>
    )
}