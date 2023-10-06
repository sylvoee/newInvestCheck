import Head from 'next/head' ;
import Image from 'next/image';
import Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className ="main">
       {/* main start here */}
  <div className = "home">
        
    <div className = "row">
       <div className = "col-sm-4 image-banner d-none d-md-block">
        <Image width ={370} height = {370} className ="banner-img mb-2" src="/svg_img/banner2.png" alt="" />
        <button className = "btn btn-success"> <Link className='text-light text-decoration-none' href='/contact'> Contact us </Link> </button>
        </div>

       {/* caption starts here */}
       <div className =" col-sm-8 caption">
       <div>

       <h3>All Stock | All Price</h3>
       <hr className= "bg-info"></hr>
        <h5 className='h5'>
         A place where global stock lives stock lives
        </h5>
        <p> Smart Planning, Smart Invest</p>
        <p className='text-warning'>
          ............................
        </p>
       <a href='/stock'> <button className = "btn btn-info text-danger">Check stock</button></a>
      </div>
     
       </div>
       {/* caption ends here */}

     </div>
       
  </div>
       {/* home ends here */}
      
    </div>
  )
}