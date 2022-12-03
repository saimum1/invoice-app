import React from 'react'
import style from '../styles/table.module.css'

const Table = () => {
  return (
 
    <section className={style.tablecontainer}>

      

    <table className={style.tablecont} border="1" >

    <tr className={style.tablerow}>

      <th>SL NO.</th>
      <th>Description of Goods / Services (including Brand name if applicable)</th>
      <th>Unity Supply</th>
      <th>Quantity</th>
      <th>Unit Price*</th>
      <th>Total Vlaue</th>
      <th>Rate of Supplementary Duty</th>
      <th>Supplementary Duty</th>
      <th>VAT Rate</th>
      <th>VAT</th>
      <th colSpan="2">Value including SP and VAT</th>

    </tr>


    <tr className={style.tablerow}>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6 =  4* 5</td>

      <td>7</td>
      <td>8 = 6 * 7 </td>
      <td>9</td>
      <td>10=(6+8) * 9</td>
      <td>11 = 6 + 8 + 10</td>
    </tr>

    <tr className={style.tablerow}>
      <td>1</td>
      <td>OIDC</td>
      <td>Room</td>
      <td>4</td>
      <td>3200</td>
      <td>12,000.00</td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> 1920.00</td>
      <td>14,720.00 </td>
    </tr>

    <tr className={style.tablerow}>
      <td>2</td>
      <td>3D Design</td>
      <td>Room</td>
      <td>2</td>
      <td>5500</td>
      <td>11,000.00</td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> 1650.00</td>
      <td>12,650.00 </td>
    </tr>

    <tr className={style.tablerow}>
      <td>3</td>
      <td>Installation</td>
      <td>Room</td>
      <td>1</td>
      <td>350000</td>
      <td>350000.00</td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> 52500.00</td>
      <td>402500.00 </td>
    </tr>



    <tr className={style.tablerow}>
      <td>4</td>
      <td></td>
      <td>Room</td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> </td>
      <td></td>
    </tr>

    <tr className={style.tablerow}>
      <td>5</td>
      <td></td>
      <td>Room</td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> </td>
      <td></td>
    </tr>

    <tr className={style.tablerow}>
      <td>6</td>
      <td></td>
      <td>Room</td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> </td>
      <td></td>
    </tr>



    <tr className={style.tablerow}>
      <td>7</td>
      <td></td>
      <td>Room</td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> </td>
      <td></td>
    </tr>


    <tr className={style.tablerow}>
      <td>8</td>
      <td></td>
      <td>Room</td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> </td>
      <td></td>
    </tr>



    <tr className={style.tablerow}>
      <td>9</td>
      <td></td>
      <td>Room</td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> </td>
      <td></td>
    </tr>



    <tr className={style.tablerow}>
      <td>10</td>
      <td></td>
      <td>Room</td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> </td>
      <td></td>
    </tr>


    <tr className={style.tablerow}>
      <td>11</td>
      <td></td>
      <td>Room</td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> </td>
      <td></td>
    </tr>



    <tr className={style.tablerow}>
      <td>12</td>
      <td></td>
      <td>Room</td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> </td>
      <td></td>
    </tr>


    <tr className={style.tablerow}>
      <td>13</td>
      <td></td>
      <td>Room</td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> </td>
      <td></td>
    </tr>



    <tr className={style.tablerow}>
      <td>14</td>
      <td></td>
      <td>Room</td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> </td>
      <td></td>
    </tr>


    <tr className={style.tablerow}>
      <td>15</td>
      <td></td>
      <td>Room</td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> </td>
      <td></td>
    </tr>



    <tr className={style.tablerow}>
      <td>16</td>
      <td></td>
      <td>Room</td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> </td>
      <td></td>
    </tr>



    <tr className={style.tablerow}>
      <td>17</td>
      <td></td>
      <td>Room</td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td> -</td>
      <td> 15%</td>
      <td> </td>
      <td></td>
    </tr>


    <tr className={style.tablerow} colSpan='5'>
       {/* <td></td>  */}
      <td colSpan='3'> total</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td> </td>
      <td></td>
    
    </tr>




  </table> 




    </section>
  )
}

export default Table