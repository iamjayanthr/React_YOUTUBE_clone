import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos,   ChannelCard} from "./"
import { fetchFromAPI } from './utils/fetchFromAPI'
const ChannelDetail = ()=> {
  const[channelDetail,setChannelDetail]=useState(null)
  const[videos,setVideos] = useState([])
  const {id} = useParams(); //react-router-dom package has useParams hooks that let you access the parameters of the current route. Syntax: useParams();
  
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]))
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items))
  },[id])

  return (
    <Box>
      <Box>
        <div style={{ zIndex:10,height:"300px",background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,65,121,1) 50%, rgba(0,212,255,1) 100%)'}}/>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:"100px"}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail