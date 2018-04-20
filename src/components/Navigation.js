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
      paddingTop: 30,
      color: "#696969",
      position: "sticky",
      top: 0,
      backgroundColor: "#eeeeee",
      cursor: "pointer",
      zIndex: 9999,
      fontFamily: "Lato"
    });
    const GDivT = Glamorous.div({
      fontSize: 20
    });
    const GLink = Glamorous(Link)({
      textDecoration: "underline"
    });
    return (
      <GDiv>
        <ul>
          <GLink
            activeClass="active"
            to="introduction"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            Introduction
          </GLink>
          <br />
          <br />
          <GLink
            activeClass="active"
            to="metadata"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            Metadata
          </GLink>
          <br />
          <GLink
            activeClass="active"
            to="provenance"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            Provenance
          </GLink>
          <br />

          <GLink
            activeClass="active"
            to="variables"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            Variables
          </GLink>
          <br />
          <GLink
            activeClass="active"
            to="statistics"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            Statistics
          </GLink>
          <br />
          <GLink
            activeClass="active"
            to="pairplot"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            Pair Plot
          </GLink>
          <br />
          <GLink
            activeClass="active"
            to="probabilistic"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            Probabilistic Model
          </GLink>
          <br />
          <GLink
            activeClass="active"
            to="groundtruth"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            Ground Truth Correlations
          </GLink>
        </ul>
      </GDiv>
    );
  }
}
export default Navigation;
//           <GDivT> Navigate through different label modules here: </GDivT>
