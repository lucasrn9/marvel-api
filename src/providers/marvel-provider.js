import React, { useState,useEffect } from 'react';
import marvelApi from '../apis/marvel-api';

export const MarvelContext = React.createContext();

export const MarvelProvider = ({children})=>{

    const [character,setCharacters] = useState([])

    useEffect(()=>{
        marvelApi.then(response=>{
            setCharacters(response.data.data.results)
          })
      
      },[])

const marvelContextValue = {
    character
}


return <MarvelContext.Provider value={marvelContextValue}>{children}</MarvelContext.Provider>

}