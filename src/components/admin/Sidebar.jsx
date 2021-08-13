import React from "react";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";

const Sidebar = () => {
  const { path, url } = useRouteMatch();

  return (
    // <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar fixed-top">
    //  <div className="dropdown">
    //     <NavLink className="dropdown-item" exact to={`${url}`}>
    //       Dashboard
    //     </NavLink>
    //   </div>

    //   <div className="dropdown">
    //     <button
    //       className="m-2 btn btn-secondary dropdown-toggle"
    //       type="button"
    //       id="dropdownMenuButton1"
    //       data-bs-toggle="dropdown"
    //       aria-expanded="false"
    //     >
    //       Gram Sevak
    //     </button>
    //     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    //       <li>
    //         <NavLink className="dropdown-item" to={`${url}/gsreg`}>
    //           Registeration
    //         </NavLink>
    //       </li>

    //       <li>
    //         <NavLink className="dropdown-item" to={`${url}/gslist`}>
    //           List of Gram sevak
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>

    //   <div className="dropdown">
    //     <NavLink className="dropdown-item" to={`${url}/complainreg`}>
    //       Complaint Registeration
    //     </NavLink>
    //   </div>

    //   <div className="dropdown">
    //     <NavLink className="dropdown-item" to={`${url}/userdetail`}>
    //       User Details
    //     </NavLink>
    //   </div>

    //   <div className="dropdown">
    //     <NavLink className="dropdown-item" to={`${url}/reports`}>
    //       Reports
    //     </NavLink>
    //   </div>
    // </div>

    <>
      {/* <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
      <aside className="app-sidebar">
        <ul className="side-menu">
          <li className="slide">
            <NavLink className="side-menu__item" data-toggle="slide" to={`${url}`}>
              <i className="side-menu__icon si si-screen-desktop"></i>
              <span className="side-menu__label">Dashboard</span>
              <i className="angle fas fa-angle-right"></i>
            </NavLink>
            <ul className="slide-menu">
              <li>
                <NavLink className="slide-item" to='#'>
                  Dashboard 01
                </NavLink>
              </li>
            </ul>
          </li>


          <li className="slide">
            <NavLink className="side-menu__item" data-toggle="slide" to="">
              <i className="side-menu__icon si si-screen-desktop"></i>
              <span className="side-menu__label">Gramsevak</span>
              <i className="angle fas fa-angle-right"></i>
            </NavLink>
            <ul className="slide-menu">
              <li>
                <NavLink className="slide-item" to={`${url}/gsreg`}>
                  Registeration
                </NavLink>
              </li>
              <li>
                <NavLink className="slide-item" to={`${url}/gslist`}>
                  List
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </aside> */}

      <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
      <aside class="app-sidebar">
        <div class="app-sidebar__user">
          <div class="user-body">
            <span
              class="avatar avatar-lg brround text-center cover-image"
              data-image-src="../assets/images/users/5.jpg"
            ></span>
          </div>
          <div class="user-info">
            <a href="#" class="ml-2">
              <span class="text-dark app-sidebar__user-name font-weight-semibold">
                Vanessa Dyer
              </span>
              <br />
              <span class="text-muted app-sidebar__user-name text-sm">
                Web Developer
              </span>
            </a>
          </div>
        </div>
        <ul class="side-menu">
          <li class="slide">
            <a class="side-menu__item" data-toggle="slide" href="#">
              <i class="side-menu__icon si si-screen-desktop"></i>
              <span class="side-menu__label">Dashboard</span>
              <i class="angle fas fa-angle-right"></i>
            </a>
            <ul class="slide-menu">
              <li>
                <a class="slide-item" href="index.html">
                  Dashboard 01
                </a>
              </li>
              <li>
                <a class="slide-item" href="index2.html">
                  Dashboard 02
                </a>
              </li>
              <li>
                <a class="slide-item" href="index3.html">
                  Dashboard 03
                </a>
              </li>
              <li>
                <a class="slide-item" href="index4.html">
                  Dashboard 04
                </a>
              </li>
              <li>
                <a class="slide-item" href="index5.html">
                  Dashboard 05
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a class="side-menu__item" href="widgets.html">
              <i class="side-menu__icon si si-layers"></i>
              <span class="side-menu__label">Widgets</span>
            </a>
          </li>
          <li class="slide">
            <a class="side-menu__item" data-toggle="slide" href="#">
              <i class="side-menu__icon si si-rocket"></i>
              <span class="side-menu__label">Ui Design</span>
              <i class="angle fas fa-angle-right"></i>
            </a>
            <ul class="slide-menu">
              <li>
                <a href="cards.html" class="slide-item">
                  Cards
                </a>
              </li>
              <li>
                <a href="chat.html" class="slide-item">
                  Chat
                </a>
              </li>
              <li>
                <a href="notify.html" class="slide-item">
                  Notifications
                </a>
              </li>
              <li>
                <a href="sweetalert.html" class="slide-item">
                  Sweet alerts
                </a>
              </li>
              <li>
                <a href="rangeslider.html" class="slide-item">
                  Range slider
                </a>
              </li>
              <li>
                <a href="scroll.html" class="slide-item">
                  Content Scroll bar
                </a>
              </li>
              <li>
                <a href="counters.html" class="slide-item">
                  Counters
                </a>
              </li>
              <li>
                <a href="loaders.html" class="slide-item">
                  Loaders
                </a>
              </li>
              <li>
                <a href="rating.html" class="slide-item">
                  Rating
                </a>
              </li>
              <li>
                <a href="time-line.html" class="slide-item">
                  Time Line
                </a>
              </li>
            </ul>
          </li>
          <li class="slide">
            <a class="side-menu__item" data-toggle="slide" href="#">
              <i class="side-menu__icon si si-chart"></i>
              <span class="side-menu__label">Chart Types</span>
              <i class="angle fas fa-angle-right"></i>
            </a>
            <ul class="slide-menu">
              <li>
                <a href="chart-morris.html" class="slide-item">
                  Morris Chart{" "}
                </a>
              </li>
              <li>
                <a href="chart-echart.html" class="slide-item">
                  Echarts
                </a>
              </li>
              <li>
                <a href="charts-peity.html" class="slide-item">
                  Peity Charts
                </a>
              </li>
              <li>
                <a href="chart-chartist.html" class="slide-item">
                  Chartist Charts
                </a>
              </li>
              <li>
                <a href="chartjs.html" class="slide-item">
                  Chart js
                </a>
              </li>
              <li>
                <a href="chart-flot.html" class="slide-item">
                  Chart flot
                </a>
              </li>
            </ul>
          </li>
          <li class="slide">
            <a class="side-menu__item" data-toggle="slide" href="#">
              <i class="side-menu__icon si si-calendar"></i>
              <span class="side-menu__label">Calendar</span>
              <i class="angle fas fa-angle-right"></i>
            </a>
            <ul class="slide-menu">
              <li>
                <a href="calendar.html" class="slide-item">
                  Default calendar
                </a>
              </li>
              <li>
                <a href="calendar2.html" class="slide-item">
                  Full calendar
                </a>
              </li>
            </ul>
          </li>
          <li class="slide">
            <a class="side-menu__item" data-toggle="slide" href="#">
              <i class="side-menu__icon si si-diamond"></i>
              <span class="side-menu__label">Components</span>
              <i class="angle fas fa-angle-right"></i>
            </a>
            <ul class="slide-menu">
              <li>
                <a href="modal.html" class="slide-item">
                  Modal
                </a>
              </li>
              <li>
                <a href="tooltipandpopover.html" class="slide-item">
                  Tooltip and popover
                </a>
              </li>
              <li>
                <a href="progress.html" class="slide-item">
                  Progress
                </a>
              </li>

              <li>
                <a href="carousel.html" class="slide-item">
                  Carousels
                </a>
              </li>
              <li>
                <a href="accordion.html" class="slide-item">
                  Accordions
                </a>
              </li>
              <li>
                <a href="tabs.html" class="slide-item">
                  Tabs
                </a>
              </li>
              <li>
                <a href="headers.html" class="slide-item">
                  Headers
                </a>
              </li>
              <li>
                <a href="footers.html" class="slide-item">
                  Footers
                </a>
              </li>
              <li>
                <a href="crypto-currencies.html" class="slide-item">
                  Crypto-currencies
                </a>
              </li>
              <li>
                <a href="users-list.html" class="slide-item">
                  User List
                </a>
              </li>
              <li>
                <a href="search.html" class="slide-item">
                  Search page
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a class="side-menu__item" href="maps.html">
              <i class="side-menu__icon si si-map"></i>
              <span class="side-menu__label">Maps</span>
            </a>
          </li>
          <li class="slide">
            <a class="side-menu__item" data-toggle="slide" href="#">
              <i class="side-menu__icon si si-grid"></i>
              <span class="side-menu__label">Elements</span>
              <i class="angle fas fa-angle-right"></i>
            </a>
            <ul class="slide-menu">
              <li>
                <a href="alerts.html" class="slide-item">
                  Alerts
                </a>
              </li>
              <li>
                <a href="buttons.html" class="slide-item">
                  Buttons
                </a>
              </li>
              <li>
                <a href="colors.html" class="slide-item">
                  Colors
                </a>
              </li>
              <li>
                <a href="avatars.html" class="slide-item">
                  Avatars
                </a>
              </li>
              <li>
                <a href="dropdown.html" class="slide-item">
                  Drop downs
                </a>
              </li>
              <li>
                <a href="thumbnails.html" class="slide-item">
                  Thumbnails
                </a>
              </li>
              <li>
                <a href="mediaobject.html" class="slide-item">
                  Media Object
                </a>
              </li>
              <li>
                <a href="list.html" class="slide-item">
                  List
                </a>
              </li>
              <li>
                <a href="tags.html" class="slide-item">
                  Tags
                </a>
              </li>
              <li>
                <a href="pagination.html" class="slide-item">
                  Pagination
                </a>
              </li>
              <li>
                <a href="navigation.html" class="slide-item">
                  Navigation
                </a>
              </li>
              <li>
                <a href="typography.html" class="slide-item">
                  Typography
                </a>
              </li>
              <li>
                <a href="breadcrumbs.html" class="slide-item">
                  Breadcrumbs
                </a>
              </li>
              <li>
                <a href="badge.html" class="slide-item">
                  Badges
                </a>
              </li>
              <li>
                <a href="jumbotron.html" class="slide-item">
                  Jumbotron
                </a>
              </li>
              <li>
                <a href="panels.html" class="slide-item">
                  Panels
                </a>
              </li>
            </ul>
          </li>
          <li class="slide">
            <a class="side-menu__item" data-toggle="slide" href="#">
              <i class="side-menu__icon si si-calculator"></i>
              <span class="side-menu__label">Tables</span>
              <i class="angle fas fa-angle-right"></i>
            </a>
            <ul class="slide-menu">
              <li>
                <a href="tables.html" class="slide-item">
                  Default table
                </a>
              </li>
              <li>
                <a href="datatable.html" class="slide-item">
                  Data Table
                </a>
              </li>
            </ul>
          </li>
          <li class="slide">
            <a class="side-menu__item" data-toggle="slide" href="#">
              <i class="side-menu__icon si si-briefcase"></i>
              <span class="side-menu__label">Pages</span>
              <i class="angle fas fa-angle-right"></i>
            </a>
            <ul class="slide-menu">
              <li>
                <a href="profile.html" class="slide-item">
                  Profile
                </a>
              </li>
              <li>
                <a href="editprofile.html" class="slide-item">
                  Edit Profile
                </a>
              </li>
              <li>
                <a href="email.html" class="slide-item">
                  Email
                </a>
              </li>
              <li>
                <a href="emailservices.html" class="slide-item">
                  Email Inbox
                </a>
              </li>
              <li>
                <a href="gallery.html" class="slide-item">
                  Gallery
                </a>
              </li>
              <li>
                <a href="login.html" class="slide-item">
                  Login
                </a>
              </li>
              <li>
                <a href="register.html" class="slide-item">
                  Register
                </a>
              </li>
              <li>
                <a href="forgot-password.html" class="slide-item">
                  Forgot password
                </a>
              </li>
              <li>
                <a href="lockscreen.html" class="slide-item">
                  Lock screen
                </a>
              </li>
              <li>
                <a href="empty.html" class="slide-item">
                  Empty Page
                </a>
              </li>
              <li>
                <a href="construction.html" class="slide-item">
                  Under Construction
                </a>
              </li>
              <li>
                <a href="about.html" class="slide-item">
                  About Company
                </a>
              </li>
              <li>
                <a href="services.html" class="slide-item">
                  Services
                </a>
              </li>
              <li>
                <a href="faq.html" class="slide-item">
                  FAQS
                </a>
              </li>
              <li>
                <a href="terms.html" class="slide-item">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="pricing.html" class="slide-item">
                  Pricing Tables
                </a>
              </li>
              <li>
                <a href="blog.html" class="slide-item">
                  Blog
                </a>
              </li>
              <li>
                <a href="invoice.html" class="slide-item">
                  Invoice
                </a>
              </li>
            </ul>
          </li>
          <li class="slide">
            <a class="side-menu__item" data-toggle="slide" href="#">
              <i class="side-menu__icon si si-flag"></i>
              <span class="side-menu__label">Icons</span>
              <i class="angle fas fa-angle-right"></i>
            </a>
            <ul class="slide-menu">
              <li>
                <a href="icons.html" class="slide-item">
                  Font Awesome
                </a>
              </li>
              <li>
                <a href="icons2.html" class="slide-item">
                  Material Design Icons
                </a>
              </li>
              <li>
                <a href="icons3.html" class="slide-item">
                  Simple Line Iocns
                </a>
              </li>
              <li>
                <a href="icons4.html" class="slide-item">
                  Feather Icons
                </a>
              </li>
              <li>
                <a href="icons5.html" class="slide-item">
                  Ionic Icons
                </a>
              </li>
              <li>
                <a href="icons6.html" class="slide-item">
                  Flags Icons
                </a>
              </li>
            </ul>
          </li>
          <li class="slide">
            <a class="side-menu__item" data-toggle="slide" href="#">
              <i class="side-menu__icon si si-docs"></i>
              <span class="side-menu__label">Forms</span>
              <i class="angle fas fa-angle-right"></i>
            </a>
            <ul class="slide-menu">
              <li>
                <a href="form-elements.html" class="slide-item">
                  Form Elements
                </a>
              </li>
              <li>
                <a href="form-wizard.html" class="slide-item">
                  Form-wizard Elements
                </a>
              </li>
              <li>
                <a href="form-edior.html" class="slide-item">
                  Form Wizard
                </a>
              </li>
            </ul>
          </li>
          <li class="slide">
            <a class="side-menu__item" data-toggle="slide" href="#">
              <i class="side-menu__icon si si-basket-loaded"></i>
              <span class="side-menu__label">E-commerce</span>
              <i class="angle fas fa-angle-right"></i>
            </a>
            <ul class="slide-menu">
              <li>
                <a href="shop.html" class="slide-item">
                  Products
                </a>
              </li>
              <li>
                <a href="shop-des.html" class="slide-item">
                  Product Details
                </a>
              </li>
              <li>
                <a href="cart.html" class="slide-item">
                  Cart
                </a>
              </li>
            </ul>
          </li>
          <li class="slide">
            <a class="side-menu__item" data-toggle="slide" href="#">
              <i class="side-menu__icon si si-exclamation"></i>
              <span class="side-menu__label">Error pages</span>
              <i class="angle fas fa-angle-right"></i>
            </a>
            <ul class="slide-menu">
              <li>
                <a href="400.html" class="slide-item">
                  400 Error
                </a>
              </li>
              <li>
                <a href="401.html" class="slide-item">
                  401 Error
                </a>
              </li>
              <li>
                <a href="500.html" class="slide-item">
                  500 Error
                </a>
              </li>
              <li>
                <a href="503.html" class="slide-item">
                  503 Error
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
