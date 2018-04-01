import React, { Component } from "react";
import _ from "lodash";

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getType(key) {
  if (_.includes(key, "url")) {
    return "url";
  } else if (_.includes(key, "email")) {
    return "email";
  } else {
    return "text";
  }
}

export function getInner(type, content) {
  if (type === "url") {
    return (
      <a href={content} target="_blank">
        {content}
      </a>
    );
  } else if (type === "email") {
    return (
      <a href={"mailto:" + content} target="_top">
        {content}
      </a>
    );
  } else {
    return content;
  }
}
