import React from 'react'
import style from '../styles/footer.module.css'

const Footer = () => {
  return (

    <div className={style.container}>
    <sectioin className={style.section4}>

    <div className={style.sec4div}>
    
    
    
        <div className={style.description2}>
    
                   
    <div > 
    
    <span className={style.descleft}>Name of Authorised Person </span>
    <span  className={style.descmid}> :</span>
    <span className={style.descright}>Sourav Biswas
    </span>
    
    </div>
    
    
    
    
    
    <div >
         <span className={style.descleft}>Designation  </span> 
         <span className={style.descmid}>:</span>
         <span className={style.descright}>Accounts Executive</span>
         </div>
    
         <div >
         <span className={style.descleft}>Signature  </span> 
         <span className={style.descmid}>:</span>
         <span className={style.descright}></span>
         </div>
    
    
    
    <div > 
    <span className={style.descleft}>Seal </span> 
    <span className={style.descmid}>:</span>
    <span className={style.descright}></span>
    </div>
    
    
    
    
    </div>
      
      
     
    
    </div>
    
    </sectioin>


    <section className={style.lastdiv}>
<div > 
<span className={style.lastpass}>*Applicable to the supplies made to the withholding entity only and in that case it will be used as combined tax invoice cum withholding certificate. </span> 

</div>
<div>
    <hr></hr>
</div>

<div > 
<span className={style.lastpass}>* Value exclusive all taxes i.e. SD and VAT </span> 

</div>



</section>

    </div>
  )
}

export default Footer