import React, { useState, useEffect } from "react";

function StoryDetails(props) {
  const {
    match: { params },
  } = props;

  const [story, setStory] = useState([]);

  useEffect(() => {
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${params.id}.json?print=pretty`
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
      <tr style={{ border: "2px solid silver" }}>
        <td colSpan="2">
          <h1>Story Details</h1>
        </td>
      </tr>
      <tr>
        <td>Title :</td>
        <td>
          <h3>{story.title}</h3>
        </td>
      </tr>
      <tr>
        <td>Url :</td>
        <td>
          <h3>{story.url}</h3>
        </td>
      </tr>
      <tr>
        <td>Username :</td>
        <td>
          <h3>{story.by}</h3>
        </td>
      </tr>
      <tr>
        <td>Story Id :</td>
        <td>
          <h3>{story.id}</h3>
        </td>
      </tr>
      <tr>
        <td>Type :</td>
        <td>
          <h3>{story.type}</h3>
        </td>
      </tr>

      <tr>
        <td>Comments :</td>
        <td>
          <h3>{story.descendants}</h3>
        </td>
      </tr>
    </table>
  );
}

export default StoryDetails;
