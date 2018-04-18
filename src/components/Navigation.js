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
              Metadata
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
              Provenance
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
              Variables
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
              Statistics
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
              Pair Plot
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
              Probabilistic Modeling
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="groundtruth"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Ground Truth Correlations
            </Link>
          </li>
        </ul>
      </GDiv>
    );
  }
}
export default Navigation;
