import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import SidePanel from "./sidePanel";
import MainCounter from "./mainCounter";
import CountryList from "./countryList";
import Chart from "./chart";
import "./home.css";
import DailyUpdates from "./DailyUpdates";
import { fetchUpdates } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

class India extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      active: 0,
      recovered: 0,
      deaths: 0,
      country: Object,
      dailyData: Object,
      stateCode: "",
      stateData: ""
    };
  }

  fetchHistoricalData = country => {
    return new Promise((resolve, reject) =>
      axios
        .get(
          "https://corona.lmao.ninja/v2/historical/" + country + "?lastdays=30"
        )
        .then(response => {
          if (country === "all") {
            resolve(response.data);
          } else {
            resolve(response.data.timeline);
          }
        })
    );
  };

  fetchStateData = () => {
    return new Promise((resolve, reject) =>
      axios
        .get("https://api.covid19india.org/states_daily.json")
        .then(response => {
          resolve(response.data);
        })
    );
  };

  callback = data => {
    if (this.state.stateData === "") {
      this.fetchStateData().then(response => {
        this.setState({
          stateData: response
        });
      });
    }
    this.setState({
      dailyData: data,
      total: parseInt(data.confirmed),
      active: parseInt(data.active),
      recovered: parseInt(data.recovered),
      deaths: parseInt(data.deaths),
      stateCode: data.statecode.toLowerCase()
    });
  };

  componentDidMount() {
    fetchUpdates().then(data => {
      this.setState({
        total: parseInt(data.statewise[0].confirmed),
        active: parseInt(data.statewise[0].active),
        recovered: parseInt(data.statewise[0].recovered),
        deaths: parseInt(data.statewise[0].deaths),
        country: data,
        dailyData: data.statewise[0],
        stateCode: data.statewise[0].statecode.toLowerCase()
      });
    });
  }

  render() {
    return (
      <>
        <div className="main-container ">
          <div className="db-main-nav slideright" style={{animationDelay:".1s"}}>
            <SidePanel history={this.props.history}/>
          </div>

          <div className="container-fluid db-side-content-section">
            <div className="row">
              {/*dashboard main header with global and india selection */}
              <div className="col-12 col-sm-12 col-md-12">
                <div className="row">
                  <div
                    className="col-12 col-sm-12 col-md-12 db-top-big-h fadeInUp"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="db-top-header-selected-country">
                      {/*dashboard main header */}
                      <span>
                        <h3 className="db-top-main-header">
                          COVID-19 India Update{" "}
                        </h3>
                      </span>
                      {/*dashboard main header closed*/}
                    </div>
                    <div
                      className="db-button"
                      onClick={() => this.props.history.push("/global")}
                    >
                      <FontAwesomeIcon
                        icon={faGlobeAmericas}
                        style={{ paddingRight: "5px",fontSize:"1.4em" }}
                      />
                      <p style={{ margin: "0px" }}>GLOBAL</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*dashboard main header with global and india selection closed
                ========================================================= */}

              {/*cards for the data*/}
              <div className="col-12 col-sm-12 col-md-12 db-cards-section">
                {this.state.total !== 0 ? (
                  <MainCounter
                    total={this.state.total}
                    active={this.state.active}
                    deaths={this.state.deaths}
                    recovered={this.state.recovered}
                  />
                ) : (
                  <div>Loading...</div>
                )}
              </div>
              {/*cards for the data closed 
                ===========================*/}

              {/*country list for the data*/}
              <div className="col-12 col-sm-12 col-md-4">
                <CountryList callback={this.callback} type="in" list={this.state.country} />
              </div>
              {/*country list for the data closed
                 ================================*/}

              <div className="col-12 col-sm-12 col-md-8">
                <div className="row">
                  {/*current update for the data*/}
                  <div className="col-12 col-sm-12 col-md-12">
                    <DailyUpdates data={this.state.dailyData} type="in" />
                  </div>
                  {/*current update for the data closed
                    =====================================*/}

                  {/*prevention and sysmtoms card*/}
                  <div className="col-12 col-sm-12 col-md-6 ">
                    <div className="db-prevention-card">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                          <img
                            src={require("../Assets/Images/prevention.png")}
                            className="db-prevention-img"
                            alt="prevention"
                          />
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 db-prevention-heading-start-icon">
                          <div className="db-prevention-text">
                            <h3>Prevention</h3>
                            <h6 className="db-who-sub-text">
                              Check WHO Guidelines
                            </h6>
                          </div>

                          <div className="db-prevention-card-arrow-icon" onClick={()=>window.open("https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public","blank")}>
                            <FontAwesomeIcon icon={faArrowCircleRight} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-6 ">
                    <div className="db-prevention-card">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                          <img
                            src={require("../Assets/Images/doctor.png")}
                            className="db-prevention-img"
                            alt="prevention"
                          />
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 db-prevention-heading-start-icon">
                          <div className="db-prevention-text">
                            <h3>Symptoms</h3>
                            <h6 className="db-who-sub-text">
                              Check WHO Guidelines
                            </h6>
                          </div>

                          <div className="db-prevention-card-arrow-icon" onClick={()=>window.open("https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html","blank")}>
                            <FontAwesomeIcon icon={faArrowCircleRight} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*prevention and sysmtoms card 
                    ==============================*/}
                </div>
              </div>

              {/*graph for the data */}

              <div className="col-12 col-sm-12 col-md-12">
                {this.state.country !== null ? (
                  <Chart
                    labels={["Active", "Recovered", "Deaths"]}
                    data={[
                      this.state.active,
                      this.state.recovered,
                      this.state.deaths
                    ]}
                    country={this.state.country}
                    stateCode={this.state.stateCode}
                    stateData={this.state.stateData} type="in"
                  />
                ) : (
                  <div>Loading...</div>
                )}
              </div>

              {/*graph for the data
                 =====================*/}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default India;
