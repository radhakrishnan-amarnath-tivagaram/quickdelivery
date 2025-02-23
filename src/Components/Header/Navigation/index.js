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
const db = require('countrycitystatejson')


const Navigation = () => {

  const getCities = () => {
    console.log(db.getStatesByShort("IN"));
    console.log(db.getCities('IN', 'Tamil Nadu'))
    //console.log(Array.isArray(cities)); // Full list
    //cities.flatMap(city => console.log(Array.isArray(city)))
  }

  return (
    <nav>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-2 catogertyTab1'>
                <Button className='allCatTab' onClick={getCities}>
                  <span className='allCatIcon1'><IoIosMenu/></span>
                  <span class="text">All Categories</span>
                  <span className='allCatIcon2'><FaAngleDown/></span>
                </Button>
              </div>
              <div className='col-sm-9 ml-5 catogertyTab2 d-flex align-items-center'>
                <ul className='list list-inline ml-auto'>
                    <li className='list-inline-item'><Link to="/"><Button><BsShop/> &nbsp; Home</Button></Link></li>
                    <li className='list-inline-item'><Link to="/"><Button><FaShopify/> &nbsp; Fashion</Button></Link></li>
                    <li className='list-inline-item'><Link to="/"><Button><FaMobileScreenButton/> &nbsp; Electronics</Button></Link></li>
                    <li className='list-inline-item'><Link to="/"><Button><GiChickenOven/> &nbsp; Foods</Button></Link></li>
                    <li className='list-inline-item'><Link to="/"><Button><MdOutlineLocalGroceryStore/> &nbsp; Groceries</Button></Link></li>
                    <li className='list-inline-item'><Link to="/"><Button><GrBlog/> &nbsp; Blog</Button></Link></li>
                    <li className='list-inline-item'><Link to="/"><Button><MdContactMail/> &nbsp; Contact us</Button></Link></li>
                </ul>
              </div>
            </div>
          </div>
      </nav>
  )
}

export default Navigation
