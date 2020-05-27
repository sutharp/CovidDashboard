import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidePanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBiohazard,
  faHandHoldingMedical,
  faInfoCircle,
  faMoon
} from "@fortawesome/free-solid-svg-icons";

class SidePanel extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (window.location.href.split("/")[3] === "info") {
      document.getElementById("home").classList.remove("selected");
      document.getElementById("info").classList.add("selected");
      this.props.history.push("/info");
    }
  }

  render() {
    return (
      <div className="db-side-nav-menu">
        <nav className="db-nav-elements">
          <div className="db-covid19-logo">
            <FontAwesomeIcon icon={faBiohazard} />  
            <p>COVID-19</p>
          </div>

          <span
            className="selected"
            onClick={() => this.props.history.push("/")}
            id="home"
          >
            <FontAwesomeIcon icon={faHome} />
          </span>

          {/* <span>
              <FontAwesomeIcon icon={faHandHoldingMedical}/>
            </span> */}

          <span onClick={() => this.props.history.push("/info")} id="info">
            <FontAwesomeIcon icon={faInfoCircle} />
          </span>

          {/* <span>
              <FontAwesomeIcon icon={faMoon}/>
            </span> */}
        </nav>
      </div>
    );
  }
}

export default SidePanel;
