import React from "react";
import { Link } from "react-router-dom";

function Story(props) {
  return (
    <tr>
      <td style={{ textAlign: "justify" }}>
        <Link
          to={`/storyDetails/${props.id}`}
          target="blank"
          style={{ color: "black", textDecoration: "none" }}
        >
          <h3>
            {props.serial}
            {" -> "}
            {props.title}
          </h3>
        </Link>
        <p
          style={{
            fontWeight: "none",
            fontSize: "12px",
            color: "silver",
            lineHeight: "0px",
          }}
        >
          {props.score} points by{" "}
          <Link
            to={`/userDetails/${props.by}`}
            target="blank"
            style={{
              color: "silver",
              textDecoration: "none",
            }}
          >
            {props.by}{" "}
          </Link>
          {Math.floor(props.time)} hour ago | {props.descendants} comments
        </p>
      </td>
    </tr>
  );
}

export default Story;
