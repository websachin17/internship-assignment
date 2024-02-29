
import './Footer.css'


function Footer(){
     

  return(
    <div className="footer">
       
        <div className="categories">
         CATEGORIES

         <div className='inside-content'>
        <div>Web Builder</div>

<div>Hosting</div>

<div>Data Center</div>

<div>Robotic-Automation</div>
        </div>
        </div>

      

        <div className="categories">CONTACT

          <div className='inside-content'>
          <div>Contact</div>

<div>Privacy Policy</div>

<div>Terms of Service</div>

<div>Categories</div>

<div>About</div>
          </div>
            
        </div>

        <div className="select">
          <select >

            <option value = "usa">united states</option>
              
          </select>
        </div>
    </div>
  )

}

export default Footer;