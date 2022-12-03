import React from 'react'
import logo from "../image/R.jpg"
import style from '../styles/top.module.css'

const Top = () => {
  return (
         <section className={style.headingSectiion}>

    <div className={style.leftdiv}>

      <img className={style.image} src={logo} alt='logo' 
       />

    </div>

    <div className={style.middlediv}>

          <div className={style.description}>

              <span>Government of Peoples' Republic of Bangladesh</span>
              <span>National Board of Revenue</span>
              <span>VAT Invoice</span>
              <span>As per Para (Ga) and Para (Cha) of Subrule 1 of Rule 40</span>
          </div>

    </div>


    <div className={style.rightdiv}>
          <div>
              <span>Mushak - 6.3</span>
          </div>
    </div>
  </section>
  )
}

export default Top