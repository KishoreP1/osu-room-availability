// components/Building.js
import { Card, Button } from 'react-bootstrap';
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

    const handleButtonClick = () => {
        setShowRooms(!showRooms);
    };

    return (
        <div>
            <Button onClick={handleButtonClick}>
                {building.buildingName}
            </Button>

            {showRooms && (
                <ul>
                    { // Use the Classroom component to render each room
                        building.rooms.map((room, index) => (
                            <Classroom key={index} classroom={room} />
                        ))
                    }
                </ul>
            )}
        </div>
    );
}
export default Building;
