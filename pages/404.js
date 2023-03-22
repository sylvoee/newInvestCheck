
import Head from 'next/head' ;
import Link from 'next/link';
// import react from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// const inter = Inter({ subsets: ['latin'] })

export default function notFound() {

let route = useRouter();
  useEffect(()=>{

   setTimeout(() => {
    route.push('/');
   }, 5000);

  }, []);


  return (
    <div className ="main container-fluid">
     <Head>
      <title>404</title>
     </Head>
       
       {/* main start here */}
      <div className = "not-found">
        {/* main starts here */}  

      <div >
       <div>
       <h3>Oooooops : Page not found</h3>
        <p>
          go back to <Link href = "/">Home</Link> page
        </p>
        <button className = "btn btn-info">Click</button>
       </div>
      </div>
       
      </div>
       {/* main ends here */}
      
    </div>
  )
}
