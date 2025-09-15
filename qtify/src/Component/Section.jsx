import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import styles from "./Section.module.css";
import Carousel from "./CarouselComponent/Carousel";
import Filters from "./Filters";
import Cards from "./Cards";

export default function Section({ title, data, filterSource, type }) {
    const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
    const [carouselToggle, setCarouselToggle] = useState(true);

    const handleToggle = () => {
        setCarouselToggle((prev) => !prev);
    };

    useEffect(() => {
        if (filterSource) {
            filterSource().then((fetchedFilters) => {
                const { data } = fetchedFilters;
                setFilters([...filters, ...data]);
            });
        }
    }, []);

    const showFilters = filters.length > 1;
    const cardsToShow = data.filter((item) =>
        showFilters && selectedFilterIndex !== 0
            ? item.genre.key === filters[selectedFilterIndex].key
            : item
    );

    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {!carouselToggle ? "Collapse All" : "Show All"  }
                </h4>
            </div>
            {showFilters && (
                <div className={styles.filtersWrapper}>
                    <Filters
                        filters={filters}
                        selectedFilterIndex={selectedFilterIndex}
                        setSelectedFilterIndex={setSelectedFilterIndex}
                    />
                </div>
            )}
            {data.length === 0 ? (
                <CircularProgress />
            ) : (
                <div className={styles.cardsWrapper}>
                    {!carouselToggle ? (
                        <div className={styles.wrapper}>
                            {cardsToShow.map((item) => (
                                <Cards data={item} type={type} />
                            ))}
                        </div>
                    ) : (
                        <Carousel data={cardsToShow} renderComponent = {(data) => <Cards data={data} type={type} />} />
                    )}
                </div>
            )}
        </div>
    )
};
