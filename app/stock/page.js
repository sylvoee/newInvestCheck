
// "use client" ;

// import { useEffect, useState } from 'react';
// import axios from 'axios';
import Link from 'next/link';
import { metadata } from '../layout';

const URL = process.env.URL;

let getRecord = async() =>{
  metadata.title = "All Stocks || InvestCheque" ;

 try {
  const data = await fetch(URL, {
    next :{revalidate:60*60}
  });
  return data.json();
 } catch (error) {
  console.log(error);
 }

}


const Page = async() => {
  const stocks = await getRecord();
 
     return ( 
      <div className = "main">
        {/* main start here */}
      <div className = "about">
        {/* Row atarts here */}
        <div className = "row">
        {/* <div className = "col-sm-3">..........</div> */}
        
        {/* stock starts here */}
        <div className = "col-sm-12 row stocks">
          
          <div className ="row p-1 m-2">

          {stocks.results.map(st =>(
            <div className = "col-sm-3 shadow-lg mb-4" key = {st.T}>
              
              <div className = "stocks shadow-lg">
              <h3 className ="bg-warning text-dark shadow-lg">{st.T}</h3>
              <hr></hr>
            <p className = "text-warning">Open Price:</p> <b className = "d-flex justify-content-end">{st.o}</b> 
             <hr></hr>
            <p className = "text-warning">Highest Price:</p> <b className = "d-flex justify-content-end">{st.h} </b> 
            <hr></hr>
            <p className = "text-warning">Lowest Price:</p> <b className = "d-flex justify-content-end"> {st.l} </b>
            <hr></hr>
            <p className = "text-warning"> Number of Transactions</p> <b className = "d-flex justify-content-end">{st.n} </b>
            <hr></hr> 
            <p className = "text-warning"> volume weighted average price: </p> <b className = "d-flex justify-content-end">{st.vw}</b>  
            <hr></hr>
            <p className = "text-warning"> Trading Volume:</p> <b className = "d-flex justify-content-end">{st.v}</b> 
            <hr></hr>
            <p className = " text-warning"> Closing Price: </p> <b className = "d-flex justify-content-end">{st.c}</b> 
      
                
          <button className = "btn btn-warning text-light w-100"><Link className ="text-dark" href ="#">More</Link></button>

              </div>
              

            </div>
          ))
          }

          </div>
        
        </div>
        {/* stocks ends here */}

        </div>
        {/* row ends here */}
      </div>
       {/* main ends here */}

    </div>
   );

       

  

  ;
};
export default Page;