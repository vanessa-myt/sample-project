import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "./MenuItem";

//css
import "../Navbar/Navbar.css";

//icons
import logo from "../../Assets/Logo/MYT_nobg.png";
import logout from "../../Assets/Navbar/logout.png";
import dashboard from "../../Assets/Navbar/dashboard.png";
import chart from "../../Assets/Navbar/chart.png";
import { Chart } from "react-chartjs-2";

import modal from "../../Assets/Navbar/modals.png";
import upload from "../../Assets/Navbar/fileupload.png"
const Navbar = (props) => {

  //BU Head
  const buHeadItems = [
    {
      name: "DASHBOARD",
      exact: true,
      to: "/dashboard",
      iconClassName: dashboard,
    },
    {
      name: "CHART",
      exact: true,
      to: "/chart",
      iconClassName: chart,
    },
    {
      name: "OTHERS",
      exact: true,
      to: "/others",
      iconClassName: chart,
      subMenus: [
        { name: "Adjustments", to: "/others/loaders" },
      ],
      expand: true,
      name: "MODALS",
      exact: true,
      to: "/modals",
      iconClassName: modal,
    },
    { 
    name: "UPLOADS",
    exact: true,
    to: "/uploads",
    iconClassName: upload,
    },
    // {
    //   name: "FEDEX",
    //   exact: true,
    //   to: "/",
    //   iconClassName: fedex,
    //   subMenus: [
    //     { name: "Adjustments", to: "/adjustments" },
    //     { name: "Announcements", to: "/announcements" },
    //     { name: "Outlets", to: "/Otheroutlets/fedex" },
    //     { name: "Customers", to: "/customers" },
    //     { name: "Discounts", to: "/discounts" },
    //     { name: "Package Type", to: "/packagetype" },
    //     { name: "Ship Services", to: "/shipservices" },
    //     { name: "Surcharges", to: "/surcharges" },
    //   ],
    //   expand: true,
    // },
    
  ];

  const [inactive, setInactive] = useState(true);
  const [menuItems, setMenuItems] = useState([]);
  const [expandManage, setExpandManage] = useState(true);

  const handleExpand = (index) => {
    var list = [...menuItems];

    if (!inactive) {
      for (var i = 0; i < list.length; i++) {
        if (i !== index) {
          list[i]["expand"] = true;
        }
      }

      list[index]["expand"] = !list[index]["expand"];

      setMenuItems(list);
    }
  };

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
    setMenuItems(buHeadItems);

    let menuItemsList = document.querySelectorAll(".menu-item");
    menuItemsList.forEach((el, index) => {
      if (menuItems[index].name == props.active) {
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
        <div className="logo d-flex justify-content-center">
          <img
            src={logo}
            className="navbar-logo"
            onClick={() => setInactive(!inactive)}
          />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <div className="max-menu-cont">
              <FontAwesomeIcon
                icon={"angle-double-right"}
                alt={"open"}
                className={"max-menu"}
                aria-hidden="true"
              />
            </div>
          ) : (
            <FontAwesomeIcon
              icon={"angle-double-left"}
              alt={"close"}
              className={"min-menu"}
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      <div className={inactive ? "main-menu" : "main-menu active-menu"}>
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={index}
            name={menuItem.name}
            exact={menuItem.exact.toString()}
            to={menuItem.to}
            subMenus={menuItem.subMenus || []}
            iconClassName={menuItem.iconClassName}
            expandManage={menuItem.expand}
            setExpandManage={handleExpand}
            index={index}
            activeSub={menuItem.name === props.active}
            onClick={(e) => {
              if (inactive) {
                setInactive(false);
              }
            }}
          />
        ))}
      </div>
      <div className="side-menu-footer">
        {!inactive && (
          <div className="user-details-footer">
            <div className="account-label">Account</div>
            <span className="navbar-user-label">BANBAN BATUMBAKAL</span>
            <br />
            <span className="user-type-label">ADMINISTATOR</span>
          </div>
        )}
        {/* <div className="logout-cont" onClick={removeUserSession}> */}
        <div className="logout-cont">
          <img src={logout} className="logout-btn" />
          <span className="logout-label">LOG OUT</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
