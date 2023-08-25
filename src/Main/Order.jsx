import React , {useEffect, useState}from 'react'
import { useLocation } from 'react-router-dom'


import OrderList from '../Multi/OrderLisr';

const Order = () => {
    const location = useLocation();

    const datas = location.state?.data;

   

    // console.log(datas)



    

    // const matchingItems = data?.filter(item1 =>
        // datas?.Order?.some(item2 => item2 === item1._id)
        // datas?.Order?.some(item2 => console.log(item2))
    //  datas.some((item2)=> item2?.Order[0] === item1?._id )
    // datas.map((ele)=>{
    // ele.Order.some((item2)=> item2 === item1?._id)
    // })
    //   );


      // console.log(matchingItems)

      const render = datas?.map((items,index)=>{
     const  { _id, Order,createdAt} = items
     const inputDate = new Date(createdAt);
     const formattedDate = `${("0" + (inputDate.getMonth() + 1)).slice(-2)}-${( "0" + inputDate.getDate()  ).slice(-2)}-${inputDate.getFullYear()}`;
     const formattedTime = `${("0" + inputDate.getHours()).slice(-2)}:${(  "0" + inputDate.getMinutes() ).slice(-2)}`;

// console.log(Order)
        return (
          <OrderList key={index} id={_id} Order={Order} timeFormat={formattedTime} dateformat={formattedDate}/>
        )
    })

 
  return (
    <main>

      {render}
    </main>
  )
}

export default Order
