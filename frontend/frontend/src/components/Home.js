import React from 'react'
import axios from 'axios'
import style from './home.module.css'

export const Home = () => {

  console.log(window.location.host)

  return (
    <div className={style.container}>
      <a href="http://localhost:8000/server/signin">Sign in</a>
    </div>
  )
}
