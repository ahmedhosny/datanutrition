import React, { Component } from "react";
import PropTypes from "prop-types";
import Glamorous from "glamorous";
import Typo from "./Typo";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

/**
 * The component
 * @type {Object}
 */
class Navigation extends Component {
  handleSetActive(to) {}

  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const GDiv = Glamorous.div({
      padding: 20,
      color: "#696969",
      position: "sticky",
      top: 0,
      backgroundColor: "#eeeeee",
      cursor: "pointer",
      zIndex: 9999
    });
    return (
      <GDiv>
        <Typo content={"Navigate"} size={3} />
        <ul>
          <li>
            <Link
              activeClass="active"
              to="metadata"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              metadata
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="provenance"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              provenance
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="variables"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              variables
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="statistics"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              statistics
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="pairplot"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              pair plot
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="probabilistic"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Probabilistic modeling
            </Link>
          </li>
        </ul>
      </GDiv>
    );
  }
}
export default Navigation;
