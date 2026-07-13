import React from "react";
import classNames from "classnames";

export default function Container({ className, as: Comp = "div", ...props }) {
  return <Comp className={classNames("container-page", className)} {...props} />;
}

