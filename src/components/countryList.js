import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./countryList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { fetchUpdates } from "./data";

class CountryList extends Component {
  constructor() {
    super();
    this.state = {
      countryList: []
    };
  }

  oldIndex = "";
  sendObj = (obj, index) => {
    this.props.callback(obj);
    if (this.oldIndex !== "") {
      if (document.getElementById(this.oldIndex)) {
        document.getElementById(this.oldIndex).style.backgroundColor =
          "transparent";
      }
    }
    document.getElementById(index).style.cssText = "background-color:#604B86;color:#fff !Important";
    
    this.oldIndex = index;
  };

  fetchCountryList = () => {
    return new Promise((resolve, reject) =>
      axios.get("https://corona.lmao.ninja/v2/countries").then(response => {
        resolve(response);
      })
    );
  };

  sortArray(array, key) {
    if (this.props.type === "in") {
      var a = [];
      for (var i of array) {
        a.push(i);
      }
      return a;
    } else {
      return array.sort(function(a, b) {
        return a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0;
      });
    }
  }

  searchArray = [];

  search = e => {
    this.searchArray = [];
    if (e.target.value !== "") {
      for (let c of this.countryArray) {
        if (this.props.type === "in") {
          if (c.state.toLowerCase().startsWith(e.target.value.toLowerCase())) {
            this.searchArray.push(c);
          }
        } else {
          if (
            c.country.toLowerCase().startsWith(e.target.value.toLowerCase())
          ) {
            this.searchArray.push(c);
          }
        }
      }
      this.setState({
        countryList: this.searchArray
      });
    } else {
      document.getElementById(this.oldIndex).style.backgroundColor =
        "transparent";
      this.setState({
        countryList: this.countryArray
      });
    }
  };

  countryArray = [];

  componentDidMount() {
    if (this.props.type === "in") {
      fetchUpdates().then(data => {
        this.countryArray = this.sortArray(data.statewise, "active");
        this.setState({
          countryList: this.sortArray(data.statewise, "active")
        });
      });
    } else {
      this.fetchCountryList().then(list => {
        this.countryArray = this.sortArray(list.data, "active");
        this.setState({
          countryList: this.sortArray(list.data, "active")
        });
      });
    }
  }

  render() {
    let listName;
    if (this.props.type === "in") {
      listName = this.state.countryList.map((l, index) => (
        <div
          className="db-list-section"
          key={index}
          id={index}
          style={{ color: "#604d86" }}
          onClick={() => this.sendObj(l, index)}
        >
          <div className="db-list-ele-number">{l.active}</div>
          <div className="db-list-ele-name">{l.state}</div>
        </div>
      ));
    } else {
      listName = this.state.countryList.map((l, index) => (
        <div
          className="db-list-section"
          key={index}
          id={index}
          style={{ color: "#604d86" }}
          onClick={() => this.sendObj(l, index)}
        >
          <div className="db-list-ele-number">{l.active}</div>
          <div className="db-list-ele-name">{l.country}</div>
        </div>
      ));
    }
    return (
      <div className="db-state-country-list">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 text-center">
            <div className="form-group db-search-form">
              {this.props.type === "in" ? (
                <input
                  type="text"
                  className="db-search-input form-control"
                  placeholder="Search State"
                  onChange={this.search}
                  style={{ marginLeft: "8%" }}
                />
              ) : (
                <input
                  type="text"
                  className="db-search-input form-control"
                  placeholder="Search Country"
                  onChange={this.search}
                  style={{ marginLeft: "8%" }}
                />
              )}
              <FontAwesomeIcon
                icon={faSearch}
                className="db-searchinput-icon"
              />
            </div>
          </div>
        </div>
        <div className="row db-coun-state-list">
          <div className="col-md-12">{listName}</div>
        </div>
      </div>
    );
  }
}

export default CountryList;
