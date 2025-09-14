import React from "react";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../api";
import Hero from "./Hero";
import styles from "./HomePage.module.css";
import Section from "./Sections";

function HomePage() {
  const { data } = useOutletContext();
  const { newAlbums, topAlums, songs, genres } = data;
  
  return (

    <div className={styles.homepage}>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section title="Songs" data={songs} fetchSource={fetchFilters} type="song" />

      </div>
    </div>
  );
}

export default HomePage;