import React from "react";
import axios from "axios";

const Base_URL = "https://qtify-backend-labs.crio.do/"

export const fetchTopAlbums = async () => {
    try {
        const response = await axios.get(`${Base_URL}/albums/top`);
        return response.data;
    } catch (error) {
        console.error("Error fetching new albums:", error);
        return [];
    }
}

export const fetchNewAlbums = async () => {
    try {
        const response = await axios.get(`${Base_URL}/albums/new`);
        return response.data;
    } catch (error) {
        console.error("Error fetching top albums:", error);
        return [];
    }
};

export const fetchSongs = async () => {
    try {
        const response = await axios.get(`${Base_URL}/songs`);
        return response.data;
    } catch (error) {
        console.error("Error fetching songs:", error);
        return [];     
    }
}

export const fetchFilters = async () => {
    try {
        const response = await axios.get(`${Base_URL}/genres`);
        return response.data;
    } catch (error) {
        console.error("Error fetching filters:", error);
        return [];
    }
}