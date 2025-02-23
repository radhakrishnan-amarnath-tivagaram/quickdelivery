import { Button } from '@mui/material'
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
// import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
// import Searchbar from '../Header/Searchbar';
import { IoIosSearch } from 'react-icons/io'
import { IoIosCloseCircle } from "react-icons/io";
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const CountryDropdown = () => {

  const [isCountryModal,setisCountryModal] = useState(false)

  return (<div>
            <Button className='countryDropdown' onClick={()=>setisCountryModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>India</span>
                </div>
                <span className='ml-auto'><FaAngleDown/></span>
            </Button>
            
            <Dialog className='countryDialog' open={isCountryModal} onClose={()=>setisCountryModal(false)}
              TransitionComponent={Transition}>
                  <h5 className='countryDialogheader' >Choose your Delivery Location</h5>
                  <p className='countryDialogDesc' >Enter your location and check service availability in your area.</p>
                  <Button className='close_' onClick={()=>setisCountryModal(false)}><IoIosCloseCircle/></Button>
                  <div className='headerSearch'>
                          <input type='text' placeholder='Pick Your Location...'/>
                          <Button><IoIosSearch/></Button>
                   </div>
                   <ul className='countryList mt-3'>
                      <li><Button onClick={()=>setisCountryModal(false)}>Chennai</Button></li>
                      <li><Button>Namakkal</Button></li>
                      <li><Button>Thanjavur</Button></li>
                      <li><Button>Kumbakonam</Button></li>
                      <li><Button>Chennai</Button></li>
                      <li><Button>Namakkal</Button></li>
                      <li><Button>Thanjavur</Button></li>
                      <li><Button>Kumbakonam</Button></li>   
                      <li><Button>Chennai</Button></li>
                      <li><Button>Namakkal</Button></li>
                      <li><Button>Thanjavur</Button></li>
                      <li><Button>Kumbakonam</Button></li>   
                      <li><Button>Chennai</Button></li>
                      <li><Button>Namakkal</Button></li>
                      <li><Button>Thanjavur</Button></li>
                      <li><Button>Kumbakonam</Button></li>                        
                    </ul>
            </Dialog>
        </div>
  )
}

export default CountryDropdown
