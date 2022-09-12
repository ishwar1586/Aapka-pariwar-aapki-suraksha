import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaUserTag } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FiUser,FiUserCheck } from "react-icons/fi";
import { SiMastercomfig } from "react-icons/si";
import { VscGroupByRefType, VscDebugBreakpointConditionalUnverified} from "react-icons/vsc";
import { MdOutlineShareLocation, MdCategory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { GiHotSurface } from "react-icons/gi";
import { IoIosHelpCircleOutline } from "react-icons/io";

import { TiLocationOutline } from "react-icons/ti";
import { BiSearch, BiMoney, BiCodeCurly,BiCategory, BiCategoryAlt, BiUserVoice } from "react-icons/bi";
import { SiHelpdesk } from "react-icons/si";
import { AiOutlineTransaction, AiOutlineDashboard, AiOutlineUserAdd} from "react-icons/ai";
import { GoMailRead } from "react-icons/go";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { TbTransferIn } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import SidebarManu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <AiOutlineDashboard />,

  },
  {
    path: "/Leads",
    name: "Leads",
    icon: <FiUser />,
     },
  {
    path: "/Deals",
    name: "Deals",
    icon: <FiUserCheck />, 
  },
  {
    path: "/Clients",
    name: "Clients",
    icon: <AiOutlineTransaction />,
  
  },
  {
    path: "/User",
    name: "Users",
    icon: <HiOutlineDocumentReport />,
  },
  {
    path: "/Products",
    name: "Products",
    icon: <IoIosHelpCircleOutline />,
  },
  {
    path: "/Services",
    name: "Services",
    icon: <AiOutlineDashboard />,
    
  },
  {
    path: "/Roles",
    name: "Roles",
    icon: <FiUser />,
     },
  {
    path: "/Accessibility",
    name: "Accessibility",
    icon: <FiUserCheck />, 
  },
  {
    path: "/Territories",
    name: "Territories",
    icon: <AiOutlineTransaction />,
  
  },
  {
    path: "/LostDeals",
    name: "Lost Deals",
    icon: <HiOutlineDocumentReport />,
  },
  {
    path: "/UnqualifiedLead",
    name: "Unqualified Lead",
    icon: <IoIosHelpCircleOutline />,
  },
  {
    path: "/LeadStages",
    name: "LeadStages",
    icon: <AiOutlineDashboard />,
    
  },
  {
    path: "/LeadSources",
    name: "Lead Sources",
    icon: <FiUser />,
     },
  {
    path: "/CommonTask",
    name: "Common Task",
    icon: <FiUserCheck />, 
  },
  {
    path: "/Accounts",
    name: "Accounts",
    icon: <AiOutlineTransaction />,
  
  },
  {
    path: "/PaymentHistory",
    name: "Payment History",
    icon: <HiOutlineDocumentReport />,
  },
  {
    path: "/InvoiceHistory",
    name: "Invoice History",
    icon: <IoIosHelpCircleOutline />,
  },
  {
    path: "/Renewals",
    name: "Renewals",
    icon: <AiOutlineDashboard />,
    
  },
  {
    path: "/RenewalsServices",
    name: "Renewals Services",
    icon: <FiUser />,
     },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
    },
    show: {
      width: "100%",
      padding: "5px 10px 10px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "" : "100px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className="sidebar"
      >
        <div className="top-section">
          {isOpen && (
            <motion.h1
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="logo"
            >
       C R M
            </motion.h1>
          )}
          <div className="bars Side_Search">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="search">
          <div className="search_icon">
            <BiSearch className='Side_Search' />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
                placeholder="Search...."
              />
            )}
          </AnimatePresence>
        </div>
        <section className="routes Side_Search">
          {Array.isArray(routes) &&
            routes.map((route) => {
              if (route.subRoutes) {
                return (
                  <SidebarManu
                    showAnimation={showAnimation}
                    route={route}
                    isOpen={isOpen}
                    key={route.name}
                  />
                );
              }
              return (
                <NavLink
                  activeClassName="active"
                  to={route.path}
                  key={route.name}
                  className="link"
                >
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
                </NavLink>
              );
            })}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
