import React from "react";
// import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import Search from "./Search";
import Button from "./Button";

function Navbar({ searchData }) {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button>Give Feedback</Button>
    </div>
  );
}

export default Navbar;