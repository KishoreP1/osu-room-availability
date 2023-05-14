// components/Building.js
import { Card, Button } from 'react-bootstrap';
import styles from './Building.module.css';
import Classroom from '../Classroom/Classroom';
import { useState } from 'react';

// Define the BuildingProps type
type BuildingProps = {
    building: {
        buildingName: string;
        rooms: {
            room: string;
            availableFor: number;
        }[];
    };
};

function Building({ building }: BuildingProps) {
    const [showRooms, setShowRooms] = useState(false);

    const handleCardClick = () => {
        setShowRooms(!showRooms);
    };

    return (
        <Card className={styles.card} onClick={handleCardClick}>
            <Card.Body>
                <Card.Title className="text-center">{building.buildingName}</Card.Title>

                <div className={`${styles.rooms} ${showRooms ? styles.show : ''}`}>
                    {showRooms && (
                        building.rooms.map((room, index) => (
                            <Classroom classroom={room} />
                        ))
                    )}
                </div>
            </Card.Body>
        </Card>
    );

}
export default Building;
