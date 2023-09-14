import React from "react";
import useMediaQuery from "./useMediaQuery";
import "./styles.css";

const JsxBreakpoint = (props: {
  children: any;
  start?: "sm" | "md" | "lg" | "xl" | "2xl";
  end?: "sm" | "md" | "lg" | "xl" | "2xl";
}) => {
  let className = "contents ";
  switch (props.start) {
    case "md":
      className += "max-sm:hidden ";
      break;
    case "lg":
      className += "max-md:hidden ";
      break;
    case "xl":
      className += "max-lg:hidden ";
      break;
    case "2xl":
      className += "max-xl:hidden ";
      break;
    default:
      className += "";
      break;
  }
  switch (props.end) {
    case "sm":
      className += "sm:hidden ";
      break;
    case "md":
      className += "md:hidden ";
      break;
    case "lg":
      className += "lg:hidden ";
      break;
    case "xl":
      className += "xl:hidden ";
      break;
    case "2xl":
      className += "2xl:hidden ";
      break;
    default:
      className += "";
      break;
  }

  return <div className={className}>{props.children}</div>;
};

export { JsxBreakpoint, useMediaQuery };
