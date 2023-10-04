
import Head from 'next/head' ;
import Image from 'next/image';
import { metadata } from '../layout';


// const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
 metadata.title = "Contact | investcheque" ;

  return (
    <div className ="main contact container-fluid">
       
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
       
       <form autoComplete="off" className='form-group col-sm-6'>
        <div>
          <label>Name</label>
          <input type="text" name='name'  className="form-control border-bottom-2 text-light" placeholder ="Enter your Name" />
        </div>

        <div>
          <label>Email</label>
          <input type="Email" name='email'  className="form-control border-bottom-2 text-light" placeholder ="Enter your Name" />
        </div>

        <div>
          <label>Message</label>
         <textarea className ="border-2 form-control" name="message" id="" cols={44} rows="4" ></textarea>
        </div>

        <div>
          <button style ={{backgroundColor:"rgb(91, 243, 61)", color:"black"}} className="btn btn-submit col-sm-12 mt-1" placeholder='Enter your message'>Send</button>
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
