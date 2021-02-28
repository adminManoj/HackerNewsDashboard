import React, { useState, useEffect } from "react";

function UserDetails(props) {
  const {
    match: { params },
  } = props;

  const [story, setStory] = useState([]);

  useEffect(() => {
    fetch(
      `https://hacker-news.firebaseio.com/v0/user/${params.id}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => {
        setStory(data);
      });
  }, []);
  return (
    <table
      style={{
        backgroundColor: "lightcyan",
        margin: "0 auto",
        border: "2px solid black",
      }}
    >
      <tr>
        <td colSpan="2">
          <h1>User Details</h1>
        </td>
      </tr>
      <tr>
        <td>About :</td>
        <td>
          <h3>{story.about}</h3>
        </td>
      </tr>
      <tr>
        <td>created :</td>
        <td>
          <h3>{story.created}</h3>
        </td>
      </tr>
      <tr>
        <td>Id :</td>
        <td>
          <h3>{story.id}</h3>
        </td>
      </tr>
      <tr>
        <td>Delay :</td>
        <td>
          <h3>{story.delay}</h3>
        </td>
      </tr>
      <tr>
        <td>karma :</td>
        <td>
          <h3>{story.karma}</h3>
        </td>
      </tr>
      {/* <tr>
        <td>submitted :</td>
        <td>{story.submitted}</td>
      </tr> */}
    </table>
  );
}

export default UserDetails;
