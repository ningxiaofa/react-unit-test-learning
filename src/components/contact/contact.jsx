import React from "react";
import Map from "./map";

export default function Contact(props) {
  return (
    <div>
      <address>
        联系 {props.name}，通过{" "}
        <a data-testid="email" href={"mailto:" + props.email}>
          email
        </a>
        或者他们的 <a data-testid="site" href={props.site}>
          网站
        </a>。
      </address>
      <Map center={props.center} />
    </div>
  );
}