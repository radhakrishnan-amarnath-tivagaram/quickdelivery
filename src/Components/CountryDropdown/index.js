import { Button } from '@mui/material'
import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const CountryDropdown = () => {
  return (<div>
        <Button className='countryDropdown'>
            <div className='info d-flex flex-column'>
                <span className='label'>Your Location</span>
                <span className='name'>India</span>
            </div>
            <span className='ml-auto'><FaAngleDown/></span>
        </Button>
        
        <Dialog open={true}>
              <DialogTitle>Set backup account</DialogTitle>
              <p>sfsdfd</p>
        </Dialog>
        </div>
  )
}

export default CountryDropdown
