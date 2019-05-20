import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Cases from "./Cases";
import Samples from "./Samples";
import Reports from "./Reports";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="col-sm-12 navbar-menu">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">WGA Cloud Services Team</a>
            </div>
            <div className="logo-head">
              IBM Watson for Genomics
        </div>
            <ul className="nav navbar-nav pull-right navbar-list">
              <li className="dropdown">
                <a className="dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  Patient Cases <span className="caret"></span>

                </a>
                <ul className="dropdown-menu">
                  <li><a>Patient Cases</a></li>
                  <li><a>Shared Cases</a></li>
                  <li><a>Report Review</a></li>
                  <li><a>Administration</a></li>
                  <li><a>Support Services</a></li>
                  <li><a>Usage Reports</a></li>
                  <li><a>Insights Dashboard</a></li>
                  <li><a>Level of evidence Dashboard</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" href="#" id="navbardrop1" data-toggle="dropdown">About <span className="caret"></span></a>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" href="#" id="navbardrop2" data-toggle="dropdown">
                  Harshakaveli <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a>Change passowrd</a></li>
                  <li><a>className>Sign out</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row wrapper">
          <div className="col-sm-1 col-md-1 tab-button">
            <div className="list-group">
              <NavLink className="list-group-item text-center" exact to="/">
              <i className="glyphicon glyphicon-book col-sm-12 text-center"></i> Cases</NavLink>
              <NavLink className="list-group-item text-center" to="/samples">
              <i className="glyphicon glyphicon-search col-sm-12 text-center"></i> Samples</NavLink>
              <NavLink className="list-group-item text-center" to="/reports">
              <i className="glyphicon glyphicon-user col-sm-12 text-center"></i>Reports</NavLink>
            </div>
          </div>
          <div className="col-sm-11 col-md-11 tab-content">
            <Route exact path="/" component={Cases} />
            <Route path="/samples" component={Samples} />
            <Route path="/reports" component={Reports} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;

