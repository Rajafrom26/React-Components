import React, { Component } from "react";

class FolderComp extends Component {
  state = {
    count: 0,
    characters: 0,
  };

  render() {
    const Input = (event) => {
      let text = event.target.value;
      let charCount = text.length;
      let words = text.trim().split(" ");
      let sentenceCount =
        words.filter((word) => word.endsWith(".")).length;
      this.setState({
        characters: charCount,
        count: sentenceCount,
      });
    };

    const Delete = () => {
      this.setState({
        characters: 0,
        count: 0,
      });
      document.getElementById("folder").value = "";
    };

    return (
      <div className="container text-center dev">
        <div className="row border border-1 rounded p-3">
          <div className="col-lg-6">
            <textarea
              name="folder"
              id="folder"
              cols="30"
              rows="10"
              className="form-control border border-0"
              placeholder="Enter your content here..."
              onChange={Input}
            ></textarea>
            <br />
          </div>
          <div className="col-lg-6 border border-1 ms-0 rounded p-3">
            <h2>Results</h2> <hr />
            <div className="row">
              <div className="col-lg-6">
                <h3>Characters: {this.state.characters}</h3>
              </div>
              <div className="col-lg-6">
                <h3>Sentences : {this.state.count}</h3>
              </div>
            </div>
          </div>
        </div>

        <br />
        <button className="btn btn-danger p3 ms-0 d-flex" onClick={Delete}>
          Delete
        </button>
      </div>
    );
  }
}

export default FolderComp;


/**.dev {
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
} */