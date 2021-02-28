import React, { useState, useEffect } from "react";
import Story from "./story";

function StoriesDetails(props) {
  let counter = 0;
  let session = null;
  let KeepSessionAlive = function () {
    counter++;
    console.log(counter);
    getStoriesData(searchOption);
    clearTimeout(session);
    session = setTimeout(KeepSessionAlive, 60000);
  };

  const { searchInput, searchOption } = props;
  const [storyDetails, setstoryDetails] = useState([]);
  const [storyIds, setstoryIds] = useState([]);
  useEffect(() => {
    counter = 0;
    setTimeout(KeepSessionAlive, 0);
  }, [searchOption]);

  let getStoriesData = (type) => {
    setstoryIds([]);
    setstoryDetails([]);
    console.log("getStoriesData", type);
    fetch(
      `https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`
    )
      .then((response) => response.json())
      .then((result) => {
        setstoryIds(result);
        getStoryData(result.filter((x, index) => index < 7));
      });
  };

  let getStoryData = (storyIds) => {
    if (storyIds.length > 0) {
      storyIds.forEach(
        (storyId) =>
          setTimeout(() => {
            fetch(
              `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
            )
              .then((response) => response.json())
              .then((data) => {
                setstoryDetails((storyDetails) => [...storyDetails, data]);
                // [1,5,9]
              });
          }),
        0
      );
    }
  };

  return (
    <div>
      {storyDetails.length > 0
        ? storyDetails
            .filter((x) =>
              searchInput.length > 0
                ? x.title.toLowerCase().indexOf(searchInput.toLowerCase()) >
                    -1 ||
                  x.by.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
                : true
            )
            .map((s, index) => (
              <Story
                key={index}
                serial={index + 1}
                score={s.score}
                id={s.id}
                title={s.title}
                by={s.by}
                time={s.time}
                descendants={s.descendants}
              />
            ))
        : "Loading"}
    </div>
  );
}

export default StoriesDetails;
