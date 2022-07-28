import React,{useEffect,useState}from 'react'
import './RowPost.css'
import axios from '/home/nikhil/Desktop/Brotoype/netflix-2/src/axios.js'
import {imageUrl,API_KEY} from '/home/nikhil/Desktop/Brotoype/netflix-2/src/constants/constants.js'
import YouTube from 'react-youtube'


function RowPost(props) {
  const[movie,setMovie]=useState([])
  const[urlId,setUrlId]=useState('')
  useEffect(()=>{               //unauthorised error handled by catch
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovie(response.data.results)
    }).catch(err=>{
      //alert('Network Error')
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) =>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
      console.log(response.data)
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Array Empty')
      }
    })
    
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
        {movie.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )}    
        </div>
       {urlId && <YouTube opts={opts} videoId={urlId.key}  />}
    </div>
  )
}

export default RowPost