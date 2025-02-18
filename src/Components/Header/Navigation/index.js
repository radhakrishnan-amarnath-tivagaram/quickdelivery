import { Button } from '@mui/material'
import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-3 catogertyTab1'>
                <Button className='allCatTab'>
                  <span className='allCatIcon1'><IoIosMenu/></span>
                  <span class="text">All Categories</span>
                  <span className='allCatIcon2'><FaAngleDown/></span>
                </Button>
              </div>
              <div className='col-sm-8 catogertyTab2 d-flex align-items-center'>
                <ul className='list list-inline ml-auto'>
                    <li className='list-inline-item'><Link to="/">Home</Link></li>
                    <li className='list-inline-item'><Link to="/">Fashion</Link></li>
                    <li className='list-inline-item'><Link to="/">Electronics</Link></li>
                    <li className='list-inline-item'><Link to="/">Bakery</Link></li>
                    <li className='list-inline-item'><Link to="/">Grocery</Link></li>
                    <li className='list-inline-item'><Link to="/">Blog</Link></li>
                    <li className='list-inline-item'><Link to="/">Contact us</Link></li>
                </ul>
              </div>
            </div>
          </div>
      </nav>
  )
}

export default Navigation
