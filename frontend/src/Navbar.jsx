// Navbar.jsx (updated)
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import {
  FiUser,
  FiChevronDown,
  FiHome,
  FiFileText,
  FiDollarSign,
} from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const getActiveModule = () => {
    if (location.pathname === "/") return "dashboard";
    if (location.pathname.includes("quotations")) return "quotations";
    if (location.pathname.includes("invoices")) return "invoices";
    if (location.pathname.includes("orders")) return "orders";
    return "";
  };

  const activeModule = getActiveModule();

  return (
    <nav className="top-navbar">
      <div className="navbar-left">
        <span className="erp-brand">ERP</span>
        <span className="module-name">Sales & Orders</span>
      </div>

      <div className="navbar-center">
        <button
          className={`nav-btn ${activeModule === "dashboard" ? "active" : ""}`}
          onClick={() => navigate("/")}
          // style={{ color: "white", fontSize: "15px" }}
        >
          <FiHome
            className="nav-icon"
            // style={{ height: "17px", width: "17px" }}
          />{" "}
          Dashboard
        </button>
        <button
          className={`nav-btn ${activeModule === "orders" ? "active" : ""}`}
          onClick={() => navigate("/orders")}
          // style={{ color: "white", fontSize: "15px" }}
        >
          <FiFileText
            className="nav-icon"
            // style={{ height: "17px", width: "17px" }}
          />{" "}
          Orders
        </button>
        <button
          className={`nav-btn ${activeModule === "quotations" ? "active" : ""}`}
          onClick={() => navigate("/quotations")}
          // style={{ color: "white", fontSize: "15px" }}
        >
          <FiFileText
            className="nav-icon"
            // style={{ height: "17px", width: "17px" }}
          />{" "}
          Quotations
        </button>
        <button
          className={`nav-btn ${activeModule === "invoices" ? "active" : ""}`}
          onClick={() => navigate("/invoices")}
          // style={{ color: "white", fontSize: "15px" }}
        >
          <FiDollarSign
            className="nav-icon"
            // style={{ height: "17px", width: "17px" }}
          />{" "}
          Invoices
        </button>
      </div>

      <div className="navbar-right">
        <div
          className="profile-dropdown"
          onClick={() => setShowProfileDropdown(!showProfileDropdown)}
        >
          <FiUser className="profile-icon" />
          <span>Admin User</span>
          <FiChevronDown
            className={`dropdown-arrow ${showProfileDropdown ? "rotate" : ""}`}
          />

          {showProfileDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item">My Profile</div>
              <div className="dropdown-item">Settings</div>
              <div className="dropdown-divider"></div>
              <div
                className="dropdown-item"
                style={{ color: "#dc3545", fontWeight: "bold" }}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
