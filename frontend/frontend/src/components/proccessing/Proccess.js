import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

export const Proccess = () => {
    
    const [ logged, setLooged ] = useState('') 

    useEffect( async () => {
        const url = window.location.search
        try {
            await axios.get(`http://localhost:8000/server/getAToken/${url}`,
            Headers={ "Origin": "localhost:8000" } )
            setLooged( <Navigate to='/lobby' /> )
        } catch (error) {
            console.log(error)
            setLooged( <Navigate to='/' /> )
        }
    }, [])

  return (
    <div>
        <h1> Loading </h1>
        {logged}
    </div>
  )
}
