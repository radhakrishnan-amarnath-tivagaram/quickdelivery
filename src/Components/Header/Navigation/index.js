import { Button } from '@mui/material'
import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsShop } from "react-icons/bs";
import { FaShopify } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GrBlog } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";

const Navigation = () => {
  return (
    <nav>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-2 catogertyTab1'>
                <Button className='allCatTab'>
                  <span className='allCatIcon1'><IoIosMenu/></span>
                  <span class="text">All Categories</span>
                  <span className='allCatIcon2'><FaAngleDown/></span>
                </Button>
              </div>
              <div className='col-sm-9 catogertyTab2 d-flex align-items-center'>
                <ul className='list list-inline ml-auto'>
                    <li className='list-inline-item'><Link to="/"><BsShop/> &nbsp; Home</Link></li>
                    <li className='list-inline-item'><Link to="/"><FaShopify/> &nbsp; Fashion</Link></li>
                    <li className='list-inline-item'><Link to="/"><FaMobileScreenButton/> &nbsp; Electronics</Link></li>
                    <li className='list-inline-item'><Link to="/"><GiChickenOven/> &nbsp; Foods</Link></li>
                    <li className='list-inline-item'><Link to="/"><MdOutlineLocalGroceryStore/> &nbsp; Groceries</Link></li>
                    <li className='list-inline-item'><Link to="/"><GrBlog/> &nbsp; Blog</Link></li>
                    <li className='list-inline-item'><Link to="/"><MdContactMail/> &nbsp; Contact us</Link></li>
                </ul>
              </div>
            </div>
          </div>
      </nav>
  )
}

export default Navigation
