
import './Item.css'

import logo from '../image/logo.png'



function Item(){
  

  return(
     <div className="item-class">

        <div className='computer-icon'><img src={logo}></img></div>

        <div className='blue-button'
        >
          <div className='first-blue'>20 % off</div>

          <div className='second-blue'>Limited time</div>
        </div>

        <div className='title'>Webbuilder 1</div>

        <div className='descriptiom'>

          Computer Modern Classic with wix support

        </div>

        <div className='price-info'>

          <div className='price'>
             $39.6
          </div>

          <div className='discount'>
            $4.96
          </div>

          <div className='off'> (20% off)</div>
           
        </div>

        <div className='view-deal'><button>View Deal</button></div>
         
     </div>
  )

}

export default Item;