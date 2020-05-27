import React, { Component } from "react";
import SidePanel from "./sidePanel";

export class Info extends Component {
  render() {
    return (
      <>
        <div className="main-container ">
          <div
            className="db-main-nav slideright"
            style={{ animationDelay: ".1s" }}
          >
            <SidePanel history={this.props.history} />
          </div>
          <div
            className="container db-side-content-section"
          >
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <h3>Resources Used : </h3>
              </div>

              <div
                className="col-12 col-sm-12 col-md-12"
                style={{ marginTop: "10px" }}
              >
                <ul class="list-group">
                  <li class="list-group-item">
                    Global API :{" "}
                    <a href="https://corona.lmao.ninja">
                      https://corona.lmao.ninja
                    </a>
                  </li>
                  <li class="list-group-item">
                    {" "}
                    India API :{" "}
                    <a href="https://api.covid19india.org">
                      https://api.covid19india.org
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className="col-12 col-sm-12 col-md-12"
                style={{ marginTop: "20px" }}
              >
                <h4>Illustration Credit: </h4>
              </div>

              <div
                className="col-12 col-sm-12 col-md-12 "
                style={{ marginTop: "10px" }}
              >
                <ul class="list-group">
                  <li class="list-group-item">
                    Undraw :{" "}
                    <a href="https://undraw.co/">https://corona.lmao.ninja</a>
                  </li>
                </ul>
              </div>

              <div
                className="col-12 col-sm-12 col-md-12"
                style={{ marginTop: "30px" }}
              >
                <h4>Developed and Designed by: </h4>
              </div>

              <div
                className="col-12 col-sm-12 col-md-12 "
                style={{ marginTop: "20px" }}
              >
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6">
                  
                    <div
                      className="card"
                      style={{
                        width: " 20rem",
                        padding: "20px",
                        boxShadow: "0px 4px 61px 4px rgba(49, 32, 80, 0.1)",
                        borderRadius: "20px",
                        border: "none",
                        margin:"10px auto"
                      }}
                    >
                      <img
                        src={require("../Assets/developer.svg")}
                        className="card-img-top"
                        style={{width:"100%",height:"250px",paddingBottom:"30px"}}
                        alt="developer"
                      />
                      <div className="card-body text-center">
                        <h4 className="card-title text-center">
                          SUMANYU SHUKLA
                        </h4>

                        <h6 className="card-subtitle mb-2 text-muted text-center">
                          Full-Stack Developer
                        </h6>

                        <a href="#" className="card-link">
                          Linkedin
                        </a>
                        <a href="#" className="card-link">
                          Medium
                        </a>
                      </div>
                    </div>

                  </div>
                  <div className="col-12 col-sm-12 col-md-6">
                    <div
                      className="card"
                      style={{
                        width: " 20rem",
                        padding: "20px",
                        boxShadow: "0px 4px 61px 4px rgba(49, 32, 80, 0.1)",
                        borderRadius: "20px",
                        border: "none",
                        margin:"10px auto"
                      }}
                    >
                      <img
                        src={require("../Assets/Designer.svg")}
                        className="card-img-top"
                        alt="developer"
                        style={{width:"100%",height:"250px"}}
                      />
                      <div className="card-body text-center">
                        <h4 className="card-title text-center">
                          PANKAJ SUTHAR
                        </h4>

                        <h6 className="card-subtitle mb-2 text-muted text-center">
                          UI | UX Designer
                        </h6>

                        <a href="https://www.linkedin.com/in/psuthar2065/" className="card-link">
                          Linkedin
                        </a>
                        <a href="https://dribbble.com/sutharp" className="card-link">
                          dribbble
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
