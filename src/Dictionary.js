import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  let apiUrl = `http://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

  axios.get(apiUrl).then(handleResponse);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter word"
          onChange={handleKeywordChange}
        />
        <input
          type="submit"
          class="btn btn-primary"
          value="Search"
          className="searchButton"
        />
      </form>
    </div>
  );
}
