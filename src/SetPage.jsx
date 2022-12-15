import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { useState } from "react";
import fetchSearch from "./fetchSearch";

const SetPage = () => {
  const [reqParams, setReqParams] = useState({ type: "" });
  const [type, setType] = useState("");
  console.log(type);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReqParams(type);
  };

  const results = useQuery(["search", reqParams], fetchSearch);
  if (results.isLoading) {
    return <div className="loading-pane">Loading Sets...</div>;
  }
  const sets = results.data.sets;
  console.log(sets);

  return (
    <div className="container">
      <h1>Search MTG Sets</h1>
      <div className="dropdown">
        <form
          onSubmit={handleSubmit}
          // only call API on form submit
          //   onSubmit={(e) => {
          //     e.preventDefault();
          //     const formData = new FormData(e.target);
          //     console.log(formData);
          //     // make req obj with form data
          //     const type = {
          //       type: formData.get("type") ?? "",
          //     };
          //     console.log(type);
          //     // update reqParams
          //     setReqParams(type);
          //   }}
        >
          <label htmlFor="type">
            <span className="choose">Select Set Type</span>
            <select
              id="type"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option />
              <option value="starter">Starter</option>
              <option value="commander">Commander</option>
              <option value="core">Core</option>
              <option value="planechase">Planechase</option>
              <option value="box">Box</option>
              <option value="funny">Funny</option>
              <option value="expansion">Expansion</option>
              <option value="memorabilia">Memorabilia</option>
              <option value="token">Token</option>
            </select>
          </label>
          <button className="button-81">Submit</button>
        </form>
      </div>

      <div className="display">
        {sets.map((set) => {
          return <h1>{set.name}</h1>;
        })}
      </div>
    </div>
  );
};

export default SetPage;