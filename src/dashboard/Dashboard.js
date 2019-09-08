import React from 'react';
import './Dashboard.css'

class Dashboard extends React.Component {
  render() {
    return (
      <div class="page-wrapper chiller-theme toggled">
        <nav id="sidebar" class="sidebar-wrapper">
          <div class="sidebar-content">

            <div class="sidebar-brand">
              <a href="#">Admin UI</a>
              {/* <div id="close-sidebar">
                <i class="fas fa-times"></i>
              </div> */}
            </div>

            <div class="sidebar-header">
              <div class="user-pic">
                <img class="img-responsive img-rounded" src="https://raw.githubusercontent.com/binoykr/react-admin-ui/master/public/imgs/user.jpg"
                  alt="User picture" />
              </div>
              <div class="user-info">
                <span class="user-name">Binoy
            <strong>K R</strong>
                </span>
                <span class="user-role">Developer</span>
                <span class="user-status">
                  <i class="fa fa-circle"></i>
                  <span>Online</span>
                </span>
              </div>
            </div>

            <div class="sidebar-menu">
              <ul>

                <li class="sidebar-dropdown">

                  <a href="#">
                    <i class="fa fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                    <span class="badge badge-pill badge-warning">New</span>
                  </a>

                  <div class="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">Dashboard 1
                    <span class="badge badge-pill badge-success">Pro</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">Dashboard 2</a>
                      </li>
                      <li>
                        <a href="#">Dashboard 3</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="sidebar-dropdown">
                  <a href="#">
                    <i class="fa fa-shopping-cart"></i>
                    <span>E-commerce</span>
                    <span class="badge badge-pill badge-danger">3</span>
                  </a>
                  <div class="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">Products

                  </a>
                      </li>
                      <li>
                        <a href="#">Orders</a>
                      </li>
                      <li>
                        <a href="#">Credit cart</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="sidebar-dropdown">
                  <a href="#">
                    <i class="far fa-gem"></i>
                    <span>Components</span>
                  </a>
                  <div class="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">General</a>
                      </li>
                      <li>
                        <a href="#">Panels</a>
                      </li>
                      <li>
                        <a href="#">Tables</a>
                      </li>
                      <li>
                        <a href="#">Icons</a>
                      </li>
                      <li>
                        <a href="#">Forms</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="sidebar-dropdown">
                  <a href="#">
                    <i class="fa fa-chart-line"></i>
                    <span>Charts</span>
                  </a>
                  <div class="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">Pie chart</a>
                      </li>
                      <li>
                        <a href="#">Line chart</a>
                      </li>
                      <li>
                        <a href="#">Bar chart</a>
                      </li>
                      <li>
                        <a href="#">Histogram</a>
                      </li>
                    </ul>
                  </div>
                </li>


                <li class="sidebar-dropdown">
                  <a href="#">
                    <i class="fa fa-globe"></i>
                    <span>Maps</span>
                  </a>
                  <div class="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">Google maps</a>
                      </li>
                      <li>
                        <a href="#">Open street map</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="header-menu">
                  <span>Extra</span>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-book"></i>
                    <span>Documentation</span>
                    <span class="badge badge-pill badge-primary">Beta</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-calendar"></i>
                    <span>Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-folder"></i>
                    <span>Examples</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="sidebar-footer">
            <a href="#">
              <i class="fa fa-bell"></i>
              <span class="badge badge-pill badge-warning notification">3</span>
            </a>
            <a href="#">
              <i class="fa fa-envelope"></i>
              <span class="badge badge-pill badge-success notification">7</span>
            </a>
            <a href="#">
              <i class="fa fa-cog"></i>
              <span class="badge-sonar"></span>
            </a>
            <a href="#">
              <i class="fa fa-power-off"></i>
            </a>
          </div>


        </nav>

        <main class="page-content">
          <div class="container-fluid">

            <h2>React Admin UI</h2>
            <hr />
            <div class="row">
              <div class="form-group col-md-12">
                <p>This is a sample admin react application </p>
                <p> You can get code on <a href="https://github.com/binoykr/react-admin-ui" target="_blank">
                  Github</a></p>
              </div>
              <div class="form-group col-md-12">
                Development going on.......!
              </div>
            </div>

          </div>

        </main>

      </div >
    );
  }
}

export default Dashboard;