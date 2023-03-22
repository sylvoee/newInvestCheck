
// import { GetServerSideProps } from "./about";


// Generates

let url =  'https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=xDCdWA0O8nAngBUGuOORmtEFqLlucG2G';

export const getStaticPaths = async()=>{

  const res = await fetch('https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=xDCdWA0O8nAngBUGuOORmtEFqLlucG2G');
  const data = await res.json()

   // Looping through the array of objects
   const paths = data.results.map(aRecord =>{
     return {
       params : {id: aRecord.T}

     }
   });

     return {
       paths,
       fallback: false, // can also be true or 'blocking'
     } 

  } 

 // get  Static
 export const getStaticProps = async(context)=>{
  const id = context.params.id ;
  console.log("This is an ID " + id);
  
  const res = await fetch('https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=xDCdWA0O8nAngBUGuOORmtEFqLlucG2G');
  const data = await res.json()

  console.log("ARecord ....." + data.results);

  return{
    props:{aRecord : data.filter(rec =>{
      return rec.T == id
    })

    }
  }  
}  


const  aRecord = ({aRecord}) => {
    return ( 
        <div>
            <h3>{}</h3>
            <p>{}</p>
        </div>
     );

} 

export default aRecord ;
