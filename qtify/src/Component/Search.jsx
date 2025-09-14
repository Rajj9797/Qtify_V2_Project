import React from "react";

export default function Search() {
    console.log("Search component rendered");
  return (
    <input
      type="text"
      placeholder="Search a song of your choice"
      // onChange={(e) => searchData(e.target.value)}
    />
  );
}