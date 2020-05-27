import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";
import "./mainCounter.css";

class MainCounter extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-6 col-sm-6 col-md-3 opa" style={{animationDelay:".1s"}}>
            <div className="db-total-number">
              <div>
                <h4>Total</h4>
                <h2>
                  <CountUp
                    start={0}
                    end={this.props.total}
                    duration={1.5}
                    separator=","
                  />
                </h2>
              </div>
              <div className="db-total-dot-shape">
                <span></span>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 opa" style={{animationDelay:".3s"}}>
            <div className="db-active-number">
              <div>
                <h4>Active</h4>
                <h2>
                  <CountUp
                    start={0}
                    end={this.props.active}
                    duration={1.5}
                    separator=","
                  />
                </h2>
              </div>
              <div className="db-active-dot-shape">
                <span></span>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 opa" style={{animationDelay:".5s"}}>
            <div className="db-recovered-number">
              <div>
                <h4>Recovered</h4>
                <h2>
                  <CountUp
                    start={0}
                    end={this.props.recovered}
                    duration={1.5}
                    separator=","
                  />
                </h2>
              </div>
              <div className="db-recovered-dot-shape">
                <span></span>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 opa" style={{animationDelay:".7s"}}>
            <div className="db-death-number">
              <div>
                <h4>Deaths</h4>
                <h2>
                  <CountUp
                    start={0}
                    end={this.props.deaths}
                    duration={1.5}
                    separator=","
                  />
                </h2>
              </div>
              <div className="db-death-dot-shape">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainCounter;
