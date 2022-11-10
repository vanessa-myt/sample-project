import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { removeUserSession } from "../../Helpers/Utils/Common";
// import { getName, getType, getRole } from "../../Helpers/Utils/Common";
import MenuItem from "./MenuItem";

//css
import '../Navbar/Navbar.css';

//icons
import dashboard from "../../Assets/Navbar/dashboard.png";
import gmap from "../../Assets/Navbar/gmaps.png";
import chart from "../../Assets/Navbar/chart.png";
import modal from "../../Assets/Navbar/modals.png";
import report from "../../Assets/Navbar/report.png";
import form from "../../Assets/Navbar/forms.png";
import fileupload from "../../Assets/Navbar/fileupload.png";
import logo from "../../Assets/Logo/MYT_nobg.png";
import logout from "../../Assets/Navbar/logout.png";

const Navbar = (props) => {

  const agentItems = [
    {
      name: "DASHBOARD",
      exact: true,
      to: "/dashboard",
      iconClassName: dashboard,
    },
    {
      name: "GOOGLE MAPS",
      exact: true,
      to: "/",
      iconClassName: gmap,
    },
    {
      name: "CHART",
      exact: true,
      to: "/dashboard",
      iconClassName: chart,
    },
    {
      name: "MODAL",
      exact: true,
      to: "/dashboard",
      iconClassName: modal,
    },
    {
      name: "REPORT",
      exact: true,
      to: "/dashboard",
      iconClassName: report,
    },
    {
      name: "FORM",
      exact: true,
      to: "/form",
      iconClassName: form,
    },{
      name: "FILE UPLOAD",
      exact: true,
      to: "/file-upload",
      iconClassName: fileupload,
    },
    // {
    //   name: "FEDEX",
    //   exact: true,
    //   to: "/",
    //   iconClassName: deliverytruck,
    //   subMenus: [
    //     {name: "PRE-ENCODED TRANSACTION", to: "/data-retrieval"},
    //   ],
    // },
  ]

  const [inactive, setInactive] = useState(true);
  const [menuItems, setMenuItems] = useState([]);


  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  useEffect(() => {
    //Determine user role

    // const role = getRole();
    setMenuItems(agentItems);

    
    let menuItemsList = document.querySelectorAll(".menu-item");
    menuItemsList.forEach((el, index) => {
      if(menuItems[index].name == props.active) {
        el.classList.add("active");
      }
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItemsList.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);


  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo d-flex justify-content-center logo-mb">
            <img src={logo} className="navbar-logo" onClick={() => setInactive(!inactive)} />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
              <div className="max-menu-cont">
             <FontAwesomeIcon
             icon={'angle-double-right'}
             alt={'open'}
             className={'max-menu'}
             aria-hidden="true"
         /></div>
          ) : (
            <FontAwesomeIcon
            icon={'angle-double-left'}
            alt={'close'}
            className={'min-menu'}
            aria-hidden="true"
        />
          )}
        </div>
      </div>
      <div>
        <p>Banban Batumbakal</p>
      </div>
      <hr/>
      <div className="main-menu">
        
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact.toString()}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
      </div>
      
      <div className="side-menu-footer">
        <div className="user-details-footer">
            <div className="account-label">Account</div>
            <span className="navbar-user-label"></span><br/>
            <span className="user-type-label"></span>
        </div>
        <hr/>
        <div className="logout-cont">
          <img src={logout} className="logout-btn"/>
          <span className="logout-label">LOG OUT</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;