import {API_KEY,imageUrl} from '/home/nikhil/Desktop/Brotoype/netflix-2/src/constants/constants.js'
export const originals =`discover/tv?api_key=${API_KEY}&with_networks=213`
export const action =`discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy =`discover/movie?api_key=${API_KEY}&with_genres=35`
export const trending= `trending/all/week?api_key=${API_KEY}&language=en-US`
export const documentaries=`discover/movie?api_key=${API_KEY}&with_genres=99`