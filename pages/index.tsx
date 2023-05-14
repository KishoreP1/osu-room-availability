import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../components/Button/Button';
import BuildingList from '../components/BuildingList/BuildingList';



export default function Home() {

  type Building = {
    buildingName: string;
    rooms: {
      room: string;
      availableFor: number;
    }[];
  };

  const [buildings, setBuildings] = useState<Building[]>([]);
  const [showLoader, setShowLoader] = useState(false);

  const handleClick = () => {
    setShowLoader(true);  // Start the loading animation
    fetchBuildings().then((data) => {
      setBuildings(data as Building[]);
      setShowLoader(false); // Stop the loading animation
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

        <Button
          text="Search"
          onClick={handleClick}
          loading={showLoader}
          disabled={showLoader}
        />

        <BuildingList buildings={buildings} />

      </main>

      <footer>
        <a>
          Support us ❤️
        </a>
      </footer>
    </div>
  )
}


const fetchBuildings = () => {
  // Here we simulate an API call with a Promise that resolves after 2 seconds
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          buildingName: 'Dreese Labs',
          rooms: [
            {
              room: 'DL0369',
              availableFor: 100,
            },
            {
              room: 'DL0368',
              availableFor: 100,
            },
            {
              room: 'DL0367',
              availableFor: 100,
            },
            {
              room: 'DL0369',
              availableFor: 100,
            },
            {
              room: 'DL0368',
              availableFor: 100,
            },
            {
              room: 'DL0367',
              availableFor: 100,
            },
            {
              room: 'DL0369',
              availableFor: 100,
            },
            {
              room: 'DL0368',
              availableFor: 100,
            },
            {
              room: 'DL0367',
              availableFor: 100,
            },
          ],
        },
        // fill in random buildings Cladwell, etc. with random calssrooms 
        {
          buildingName: 'Caldwell Labs',
          rooms: [
            {
              room: 'CL0369',
              availableFor: 100,
            },
            {
              room: 'CL0368',
              availableFor: 100,
            },
            {
              room: 'CL0367',
              availableFor: 100,
            },
          ],
        },
        {
          buildingName: 'Bolz Hall',
          rooms: [
            {
              room: 'BH0369',
              availableFor: 100,
            },
            {
              room: 'BH0368',
              availableFor: 100,
            },
            {
              room: 'BH0367',
              availableFor: 100,
            },
          ],
        },
      ]);
    }, 2000);
  });
};
