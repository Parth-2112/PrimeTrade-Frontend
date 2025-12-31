import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { LuSun, LuMoon } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <div className='md:grid md:grid-cols-3 w-full border-2 border-amber-100 items-center'>
      
      <div className='border-2 font-bold text-xl'>
        notes<span className='text-(--secondary-color)'>Nook</span>
      </div>
      
      <div className='flex items-center '>
        DashBoard
      </div>
      
      <div className='justify-end flex'>
        <div className='w-10 h-10 rounded-full items-center justify-center flex'>
          <FaUserCircle className='hover:cursor-pointer'/>
        </div>

        <div className="w-10 h-10 rounded-full">
          <button
            onClick={toggleTheme}
            className="w-full h-full flex items-center justify-center rounded-full hover:cursor-pointer"
          >
            {theme === "dark" ? (
              <LuSun className=" text-(--primary-color)" />
            ) : (
              <LuMoon className=" text-(--secondary-color)" />
            )}
          </button>
        </div>
      
      </div>
    
    </div>
  
  )
}

export default Header