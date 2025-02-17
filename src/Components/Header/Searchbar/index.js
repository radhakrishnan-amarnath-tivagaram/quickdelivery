import { Button } from '@mui/material'
import { IoIosSearch } from 'react-icons/io'

const Searchbar = () => {
  return (
    <div className='headerSearch ml-3 mr-6'>
        <input type='text' placeholder='Search for products...'/>
        <Button><IoIosSearch/></Button>
    </div>
  )
}

export default Searchbar
