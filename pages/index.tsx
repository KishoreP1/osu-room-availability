import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../components/Button/Button';
import BuildingList from '../components/BuildingList/BuildingList';
import fetchClosest from '../utils/fetchClosest';
import useGeoLocation from '../utils/useGeoLocation';

export default function Home() {

  type Building = {
    building: string;
    rooms: {
      room: string;
      availablefor: number;
    }[];
  };

  const [buildings, setBuildings] = useState<Building[]>([]);
  const [showSearchBTNLoader, setShowSearchBTNLoader] = useState(false);
  const [page, setPage] = useState(0);

  const [showLoadMoreBTN, setShowLoadMoreBTN] = useState(false);
  const [showLoadMoreBTNLoader, setLoadMoreBTNLoader] = useState(false);

  // call the useGeoLocation function and store the latitude and longitude in the variables
  const location = useGeoLocation();

  const handleSearchClick = () => {
    setShowSearchBTNLoader(true);  // Start the loading animation
    fetchClosest(location.coordinates.lat, location.coordinates.lng, 0).then((data) => {
      setBuildings(data as Building[]);
      setShowSearchBTNLoader(false); // Stop the loading animation
      setPage(1); // set page to 1
      setShowLoadMoreBTN((data as Building[]).length > 0);  // don't show the load more button if the data is 0 buildings
    });
  };

  const handleLoadMoreClick = () => {
    setLoadMoreBTNLoader(true);  // Start the loading animation
    fetchClosest(location.coordinates.lat, location.coordinates.lng, page).then((data) => {
      setBuildings([...buildings, ...(data as Building[])]);
      setLoadMoreBTNLoader(false); // Stop the loading animation
      setPage(page + 1); // increment the page
      setShowLoadMoreBTN((data as Building[]).length > 0);  // don't show the load more button if the data is 0 buildings
    });
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>OSU Classrooms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          OSU Classroom Avaliability
        </h1>

        <p className={styles.description}>
          Term: Summer 2023
        </p>

        {location.loaded ? (
          <>
            <Button
              style="btn btn-primary"
              text="Search"
              onClick={handleSearchClick}
              loading={showSearchBTNLoader}
              disabled={showSearchBTNLoader}
            />
          </>
        ) : (
          <div>Location data not available yet. </div>
        )}

        <BuildingList buildings={buildings} />

        {showLoadMoreBTN && (
          <Button
            style="btn btn-outline-secondary"
            text="Load More"
            onClick={handleLoadMoreClick}
            loading={showLoadMoreBTNLoader}
            disabled={showLoadMoreBTNLoader}
          />
        )}

      </main>

      <footer>
        <a>
          Support us ❤️
        </a>
      </footer>
    </div>
  )
}