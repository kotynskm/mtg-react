import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { useState } from "react";
import fetchSearch from "./fetchSearch";
import SetItem from "./SetItem";

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
    return <div className="loading-pane">Loading...</div>;
  }

  const sets = results.data.sets;

  return (
    <div className="container">
      <h1>Search MTG Sets</h1>
      <div className="dropdown">
        <form onSubmit={handleSubmit}>
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
              <option value="core">Core</option>
              <option value="starter">Starter</option>
              <option value="commander">Commander</option>
              <option value="box">Box</option>
              <option value="funny">Funny</option>
              <option value="expansion">Expansion</option>
              <option value="planechase">Planechase</option>
            </select>
          </label>
          <button className="button-81">Submit</button>
        </form>
      </div>

      <div className="display">
        {sets.map((set) => {
          return (
            <SetItem
              code={set.code}
              name={set.name}
              type={set.type}
              key={set.code}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SetPage;
