import React from "react";

export default function Heading({ level = "1", title }) {
  return React.createElement(`h${level}`, {}, title);
}