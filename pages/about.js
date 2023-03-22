import Footer from '@/components/footer';
import Navbar from '@/components/navBar';
import Link from 'next/link';
import Head from 'next/Head';

export const getStaticProps = async()=>{
  const res = await fetch('https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=xDCdWA0O8nAngBUGuOORmtEFqLlucG2G');
  const data = await res.json()
  
  if(data){
    return{
      props:{stocks : data.results}
     }
  }else{
    console.log("Connecting ......................");
    return{
      props:{stocks : ["Connecting............."]}
     }
  }

}

const About =({stocks}) => {
  // let id = 0;
  
    return ( 
        <div className = "main">
        <Head>
            <title>About</title>
        </Head>

        {/* main start here */}
      <div className = "about">
        {/* Row atarts here */}
        <div className = "row">
        {/* <div className = "col-sm-3">..........</div> */}
        
        {/* stock starts here */}
        <div className = "col-sm-12 row stocks">
          
          <div className ="row p-1 m-2">

          {stocks.map(st =>(
            <div className = "col-sm-3 shadow-lg mb-4" key = {st.T}>
              {/* <p className = "d-none">{id ++}</p> */}
              
              <div className = "stocks">
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
      
                
          <button className = "btn btn-warning text-light w-100"><Link className ="text-dark" href = {'/aRecord/' + st.T}>More</Link></button>

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
}
 
export default About;