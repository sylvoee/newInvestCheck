import Footer from '@/components/footer';
import Navbar from '@/components/navBar';
import Head from 'next/head' ;
import Image from 'next/image';

// const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <div className ="main container-fluid">import Footer from '@/components/footer';
import Navbar from '@/components/navBar';
import Head from 'next/head' ;
import Image from 'next/image';

// const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <div className ="main container-fluid">
     <Head>
      <title>CONTACT</title>
     </Head>
       
       {/* main start here */}
  <div className = "">
        
    <div className = "row">
       <div className = "col-sm-5 image-banner d-none d-sm-block shadow">
        <Image width ={500} height = {500} className ="banner-img" src="/svg_img/banner.png" alt="" />
       
        </div>

       {/* caption starts here */}
       <div className =" col-sm-7 caption">
       <div>

       <h5 className='h5'>We ll like to hear from you</h5>
       <hr className='col-sm-6'/>
       
       <form className='form-group col-sm-6'>
        <div>
          <label>Name</label>
          <input type="text"  className="form-control bg-dark border-bottom-2 text-light" placeholder ="Enter your Name" />
        </div>

        <div>
          <label>Email</label>
          <input type="Email"  className="form-control bg-dark border-bottom-2 text-light" placeholder ="Enter your Name" />
        </div>

        <div>
          <label>Message</label>
         <textarea className ="form-control bg-dark" name="" id="" cols={44} rows="4" border-2 ></textarea>
        </div>

        <div>
          <button className="btn btn-deafult btn-submit col-sm-12 mt-1" placeholder='Enter your message'>Send</button>
        </div>

       </form>

      </div>
       </div>
       {/* caption ends here */}

     </div>
       
  </div>
       {/* home ends here */}
      
    </div>
  )
}

     <Head>
      <title>CONTACT</title>
     </Head>
       
       {/* main start here */}
  <div className = "home">
        
    <div className = "row">
       <div className = "col-sm-4 image-banner d-none d-md-block">
        <Image width ={370} height = {370} className ="banner-img mb-2" src="/svg_img/banner.png" alt="" />
       
        </div>

       {/* caption starts here */}
       <div className =" col-sm-8 caption">
       <div>

       <h3>I ll like to hear from you</h3>
       <hr className= "bg-info"></hr>
        <p>
         +234 7039472179 | Email : Sylvoee@gmail.com
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
