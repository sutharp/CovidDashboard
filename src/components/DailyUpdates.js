import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DailyUpdates.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";

class DailyUpdates extends Component {
  timeDifference = time => {
    let currentTime = new Date().getTime();
    let timeDiff = currentTime - time;
    let seconds = (timeDiff / 1000).toFixed(0);
    let minutes = (timeDiff / (1000 * 60)).toFixed(0);
    let hours = (timeDiff / (1000 * 60 * 60)).toFixed(0);
    let days = (timeDiff / (1000 * 60 * 60 * 24)).toFixed(0);

    if (seconds < 60) {
      return seconds + " Seconds";
    } else if (minutes < 60) {
      return minutes + " Minutes";
    } else if (hours < 24) {
      return hours + " Hours";
    } else {
      return days + " Days";
    }
  };

  render() {
    if (this.props.type === "in") {
      return (
        <div>
          <div className="db-current-update-section">
            <div className="current-update-country-name">
              <h3>Current Update</h3>
            </div>

            <div className="last-update-time">
              <p>
                <FontAwesomeIcon icon={faHourglassHalf} />{" "}
                {this.props.data.lastupdatedtime}
              </p>
            </div>
          </div>

          <div className="row">

            <div className="col-12 col-sm-12 col-md-4 ">
              <div className="db-case-update new-case">
                <div className="db-current-count-num"> New Cases </div>
                <div className="db-current-update-text">
                  {this.props.data.deltaconfirmed}
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4 ">
              <div className="db-case-update death-case">
                <div className="db-current-count-num">Death Cases </div>
                <div className="db-current-update-text">
                  {this.props.data.deltadeaths}
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4">
              <div className=" db-case-update test-case">
                <div className="db-current-count-num">Recovered </div>
                <div className="db-current-update-text">
                  {this.props.data.deltarecovered}
                </div>
              </div>
            </div>

          </div>

        </div>
      );
    } else {
      return (
        <>
          <div className="db-current-update-section">
            <div className="current-update-country-name">
              {this.props.data.country ? (
                <h3>{this.props.data.country} Update </h3>
              ) : (
                <h3>Current Update</h3>
              )}
            </div>

            <div className="last-update-time">
              <p>
                <FontAwesomeIcon icon={faHourglassHalf} />{" "}
                {this.timeDifference(this.props.data.updated)} ago
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 ">
              <div className="db-case-update new-case">
                <div className="db-current-count-num"> New Cases </div>
                <div className="db-current-update-text">
                  {this.props.data.todayCases}
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4 ">
              <div className="db-case-update death-case">
                <div className="db-current-count-num">Death Cases </div>
                <div className="db-current-update-text">
                  {this.props.data.todayDeaths}
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4">
              <div className=" db-case-update test-case">
                <div className="db-current-count-num">Test </div>
                <div className="db-current-update-text">
                  {this.props.data.tests}
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4">
              <div className=" db-case-update new-case">
                <div className="db-current-count-num">Cases Per Million</div>
                <div className="db-current-update-text">
                  {this.props.data.casesPerOneMillion}
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4">
              <div className=" db-case-update death-case">
                <div className="db-current-count-num">Deaths Per Million </div>
                <div className="db-current-update-text">
                  {this.props.data.deathsPerOneMillion}
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4">
              <div className=" db-case-update test-case">
                <div className="db-current-count-num">Test Per Million</div>
                <div className="db-current-update-text">
                  {this.props.data.testsPerOneMillion}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default DailyUpdates;
