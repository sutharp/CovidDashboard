import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import SidePanel from "./sidePanel";
import MainCounter from "./mainCounter";
import CountryList from "./countryList";
import Chart from "./chart";
import "./home.css";
import DailyUpdates from "./DailyUpdates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      active: 0,
      recovered: 0,
      deaths: 0,
      country: Object,
      dailyData: Object
    };
  }

  fetchUpdates = () => {
    return new Promise((resolve, reject) =>
      axios.get("https://corona.lmao.ninja/v2/all").then(response => {
        resolve(response.data);
      })
    );
  };

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

  fetchCountryData = country => {
    if (country !== "all") {
      return new Promise((resolve, reject) =>
        axios
          .get("https://corona.lmao.ninja/v2/countries/" + country)
          .then(response => {
            resolve(response.data);
          })
      );
    }
  };

  callback = data => {
    this.fetchHistoricalData(data.country).then(r => {
      this.setState({
        country: r
      });
    });
    this.fetchCountryData(data.country).then(r => {
      this.setState({
        dailyData: r,
        total: r.cases,
        active: r.active,
        recovered: r.recovered,
        deaths: r.deaths
      });
    });
  };

  componentDidMount() {
    this.fetchHistoricalData("all").then(r => {
      this.setState({
        country: r
      });
    });
    this.fetchUpdates().then(data => {
      this.setState({
        total: data.cases,
        active: data.active,
        recovered: data.recovered,
        deaths: data.deaths,
        dailyData: data
      });
    });
  }

  render() {
    return (
      <>
        <div className="main-container">
          <div className="db-main-nav slideright" style={{animationDelay:".1s"}}>
            <SidePanel history={this.props.history}/>
          </div>

          <div className="container-fluid db-side-content-section">
            <div className="row">
              {/*dashboard main header with global and india selection */}
              <div className="col-12 col-sm-12 col-md-12">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 db-top-big-h fadeInUp" style={{animationDelay:"1s"}}>
                    <div className="db-top-header-selected-country">
                      {/*dashboard main header */}
                      <span>
                        <h3 className="db-top-main-header">COVID-19 Global Update </h3>
                      </span>
                      {/*dashboard main header closed*/}

                     
                    </div>
                    <div
                      className="db-button"
                      onClick={() => this.props.history.push("/")}
                    >
                      <img
                        src={require("../Assets/Images/india-flag.png")}
                        className="responsive"
                        style={{paddingRight:"5px"}}
                        alt="prevention"
                      />
                      <p style={{margin:"0px"}}>
                        INDIA
                      </p>
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
                <CountryList callback={this.callback} type="all" />
              </div>
              {/*country list for the data closed
               ================================*/}

              <div className="col-12 col-sm-12 col-md-8">
                <div className="row">
                  {/*current update for the data*/}
                  <div className="col-12 col-sm-12 col-md-12">
                    <DailyUpdates data={this.state.dailyData} type="all" />
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

                          <div className="db-prevention-card-arrow-icon">
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

                          <div className="db-prevention-card-arrow-icon">
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
                    type="all"
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

export default Home;
