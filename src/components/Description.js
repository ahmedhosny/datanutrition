import React, { Component } from "react";
import PropTypes from "prop-types";
import Glamorous from "glamorous";
/**
 * The component
 * @type {Object}
 */
class Description extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const GDiv = Glamorous.div({
      paddingTop: 50,
      color: "#696969",
      fontSize: 24,
      fontFamily: "Lato"
    });
    const GStrong = Glamorous.div({
      fontWeight: 600,
      display: "inline"
    });
    return (
      <GDiv>
        The <GStrong>Dataset Nutrition Label</GStrong> project aims to create a
        standard for interrogating datasets for measures that will ultimately
        drive the creation of better, more inclusive machine learning models.
        Our current prototype includes several ‘modules’ across a variety of
        qualitative and quantitative data that we believe is useful for
        exploring several aspects in datasets before the development of models.
        <br />
        <br />
        <img
          src={"img/poster+figures_22.png"}
          style={{ width: "100%", opacity: 0.75 }}
        />
        <br />
        <br />
        We developed this prototype on ProPublica’s Dollars for Docs (2013-2015){" "}
        <a href="https://projects.propublica.org/docdollars/" target="_blank">
          dataset
        </a>, which details payments made from pharmaceutical companies to
        doctors. You can navigate through the modules using the links on the
        left.
        <br />
        <br />
        To learn more about our project, please visit our{" "}
        <a href="http://datanutrition.media.mit.edu/" target="_blank">
          website
        </a>, read our{" "}
        <a
          href="http://datanutrition.media.mit.edu/abstract.pdf"
          target="_blank"
        >
          paper abstract
        </a>
        , or email us at{" "}
        <a href="mailto:nutrition@media.mit.edu" target="_blank">
          nutrition@media.mit.edu
        </a>.
      </GDiv>
    );
  }
}
Description.propTypes = {};
export default Description;
