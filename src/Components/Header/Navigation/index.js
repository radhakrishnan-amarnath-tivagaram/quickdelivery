import { Button } from '@mui/material'
import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-3'>
                <Button className='allCatTab'>
                  <span className='allCatIcon1'><IoIosMenu/></span>
                  <span class="text">ALL CATEGORIES</span>
                  <span className='allCatIcon2'><FaAngleDown/></span>
                </Button>
              </div>
              <div className='col-sm-8 bg-danger'>

              </div>
            </div>
          </div>
      </nav>
  )
}

export default Navigation
