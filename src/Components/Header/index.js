import React from 'react'
import qdlogo from '../../assets/images/qdlogo.png'
import {Link} from "@mui/material";
import CountryDropdown from '../CountryDropdown';
import Searchbar from '../Searchbar';

const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className='top-strip bg-purple'>
        <div className='container'>
          <p className='mb-0 mt-0 text-center'>Due to covid 19 pandemic , orders may be processed with slight delay</p>
        </div>
      </div>
        <div className='header'>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
