import React from "react";
import Story from "./story";
import StoriesDetails from "./StoriesDetails";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storyIds: [],
      storyDetails: [],
      searchStoryDetails: [],
      searchOption: "top",
      searchInput: "",
    };
  }

  onValueChange = (event) => {
    this.setState({
      searchOption: event.target.value,
      storyIds: [],
      storyDetails: [],
    });
    this.getData(this.state.searchOption);
  };

  getData = (type) => {
    // fetch(
    //   `https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`
    // )
    //   .then((response) => response.json())
    //   .then((result) => {
    //     this.setState({
    //       storyIds: result,
    //     });
    //     this.getStoryData(this.state.storyIds.filter((x, index) => index < 5));
    //   });
  };

  componentDidMount() {
    this.getData(this.state.searchOption);
  }

  handleChange = (e) => {
    console.log(e.target.value);
    let searchBarText = e.target.value;
    this.setState({
      searchInput: e.target.value,
    });
    console.log(e.target.value);
  };

  // getStoryData = (storyId) => {
  //   if (storyId.length > 0) {
  //     storyId.forEach(
  //       (storyId) =>
  //         setTimeout(() => {
  //           fetch(
  //             `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
  //           )
  //             .then((response) => response.json())
  //             .then((data) => {
  //               this.setState({
  //                 storyDetails: [...this.state.storyDetails, data],
  //               });
  //             });
  //         }),
  //       0
  //     );
  //   }
  // };

  render() {
    console.log(this.state.storyDetails);
    console.log(JSON.stringify(this.state.storyDetails));
    return (
      <div>
        {
          <table
            style={{
              margin: "0 auto",
              border: "2px solid silver",
              width: "700px",
              padding: "10px",
            }}
          >
            <tr>
              <td
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  borderBottom: "1px solid black",
                }}
              >
                <h3>HackerNews LIVE</h3>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>
                <input
                  type="text"
                  placeholder="Search by title, user"
                  onChange={this.handleChange}
                  value={this.state.searchInput}
                  style={{
                    width: "400px",
                    height: "20px",
                    marginTop: "10px",
                    border: "1px solid silver",
                  }}
                />
                <input
                  type="radio"
                  value="top"
                  checked={this.state.searchOption === "top"}
                  onChange={this.onValueChange}
                />
                Top
                <input
                  type="radio"
                  value="ask"
                  checked={this.state.searchOption === "ask"}
                  onChange={this.onValueChange}
                />
                Ask
                <input
                  type="radio"
                  value="show"
                  checked={this.state.searchOption === "show"}
                  onChange={this.onValueChange}
                />
                Show
                <input
                  type="radio"
                  value="job"
                  checked={this.state.searchOption === "job"}
                  onChange={this.onValueChange}
                />
                Jobs
              </td>
            </tr>
            <tr>
              <td>
                <StoriesDetails
                  searchInput={this.state.searchInput}
                  searchOption={this.state.searchOption}
                />
              </td>
            </tr>
          </table>
        }
      </div>
    );
  }
}

export default Dashboard;
