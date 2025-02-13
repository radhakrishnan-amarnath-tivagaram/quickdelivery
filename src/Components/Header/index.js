import React from 'react'
import qdlogo from '../../assets/images/qdlogo.png'
import {Button, Link} from "@mui/material";
import CountryDropdown from '../CountryDropdown';
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";

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
                        
                        <div className='headerSearch ml-3 mr-5'>
                          <input type='text' placeholder='Search for products...'/>
                          <Button><IoIosSearch/></Button>
                        </div>

                        <div className='align-items-start d-flex userLogin'>
                          <Button className='loginCircleButton'><FiUser size={20} color='grey'/></Button>
                        </div> 
                    </div>
                    
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header
