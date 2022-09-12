import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleDown} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const SidebarManu = ({showAnimation,route,isOpen}) => {
    const menuAnimation = {
        hidden: {
            height:0,
          width: 0,
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        },
        show: {
            height:"auto",
          width: "auto",
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        },
      };
      const menuItemAnimation={
        hidden: {
        padding:0,
        x:"-100%",
        transition:{
            duration:0.1,
        }

        },
        show: {
            x:"0",
            transition:{
                duration:0.1,
            }
        },
      }
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
 
    return (
    <>
    <div className="menu" onClick={toggleMenu}>
    <div className="menu_item">
      <div className="icon">{route.icon}</div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={showAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="link_text"
          >
            {route.name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <div>
        <FaAngleDown/>
    </div>
  
  </div>
  {/* <AnimatePresence>
{isMenuOpen&&( <motion.div
 initial="hidden"
 animate="show"
 exit="hidden"
 variants={menuAnimation}
 className='menu_container'>

{route.subRoutes.map((subRoute,i)=>(
     <NavLink
     activeClassName="active"
     to={subRoute.path}
     key={i}
     className="link"
   >
     <div className="icon">{subRoute.icon}</div>
     <AnimatePresence>
       {isOpen && (
         <motion.div
           variants={showAnimation}
           className="link_text"
         >
           {subRoute.name}
         </motion.div>
       )}
     </AnimatePresence>
   </NavLink>
))}
</motion.div>)}
</AnimatePresence> */}
  </>
  )
}

export default SidebarManu