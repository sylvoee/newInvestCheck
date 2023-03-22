import Footer from '@/components/footer';
import Navbar from '@/components/navBar';
import Head from 'next/head' ;
import Image from 'next/image';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className ="main container-fluid">
     <Head>
      <title>HOME</title>
     </Head>
       
       {/* main start here */}
  <div className = "home">
        
    <div className = "row">
       <div className = "col-sm-4 image-banner d-none d-md-block">
        <Image width ={370} height = {370} className ="banner-img mb-2" src="/svg_img/banner2.png" alt="" />
        <button className = "btn btn-success">Check here</button>
        </div>

       {/* caption starts here */}
       <div className =" col-sm-8 caption">
       <div>

       <h3>All Stock | All Price</h3>
       <hr className= "bg-info"></hr>
        <p>
         A place where global stock lives stock lives. | Smart planning, smart invest
        </p>
        <button className = "btn btn-info">Know More</button>
      </div>
       </div>
       {/* caption ends here */}

     </div>
       
  </div>
       {/* home ends here */}
      
    </div>
  )
}
