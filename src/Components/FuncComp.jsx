import React from "react";

const FuncComp = () => {

    const [characters, setCharacters] = React.useState(0);
    const [count, setCount] = React.useState(0);

    const Input = event => {
        let value = event.target.value;
        setCharacters(value.length);
        let words = value.trim().split(" ");
        let Count = words.filter((word) => word.endsWith(".")).length ;
        setCount(Count);
    };

    const Delete = () => {
        document.getElementById("folders").value = "";
        setCharacters(0);
        setCount(0);
    }

  return (
    <div className="container text-center">
      <div className="row border border-1 rounded p-3">
        <div className="col-lg-6">
          <textarea
            name="folders"
            id="folders"
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
              <h3>Characters: {characters} </h3>
            </div>
            <div className="col-lg-6">
              <h3>Sentences : {count} </h3>
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
};

export default FuncComp;
