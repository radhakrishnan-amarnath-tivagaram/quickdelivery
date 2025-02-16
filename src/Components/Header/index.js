import React from 'react'
import qdlogo from '../../assets/images/qdlogo.png'
import {Button, Link} from "@mui/material";
import CountryDropdown from '../CountryDropdown';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import Searchbar from '../Searchbar';

const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className='top-strip bg-purple'>
        <div className='container'>
          <p className='mb-0 mt-0 text-center'>Due to covid 19 pandemic , orders may be processed with slight delay</p>
        </div>
      </div>

        <header className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='logoWrapper col-sm-2 d-flex align-items-center'>
                        <Link to='/'>
                            <img src={qdlogo} alt="logo"/>
                        </Link>
                    </div>

                    <div className='col-sm-10 d-flex align-items-center country'>
                        <CountryDropdown/>
                        {/* search bar*/}
                        
                        <Searchbar/>

                        <div className='align-items-center d-flex userLogin'>
                          <Button className='loginCircleButton'><FiUser/></Button>
                          <span className='cartAmount'>Rs.100.0</span>
                          <div className='position-relative cartDiv'>
                            <Button className='cartCircleButton'><IoBagOutline /></Button>
                            <span className='count d-flex align-items-center justify-content-center' >12</span>
                          </div>
                        </div> 
                    </div>
                    
                </div>
            </div>
        </header>

        <nav>
          <div className='container'>

          </div>
        </nav>
    </div>
  )
}

export default Header
