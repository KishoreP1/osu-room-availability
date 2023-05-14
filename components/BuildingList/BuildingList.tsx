// components/BuildingList.js
import { Accordion } from 'react-bootstrap';
import Building from '../Building/Building';
import styles from './BuildingList.module.css';


type BuildingListProps = {
    buildings: {
        buildingName: string;
        rooms: {
            room: string;
            availableFor: number;
        }[];
    }[];
};


function BuildingList({ buildings }: BuildingListProps) {
    return (
        <div className={styles.list}>
            {
                buildings.map((building, index) => (
                    <Building key={index} building={building} />
                ))
            }
        </div>
    );
}

export default BuildingList;
