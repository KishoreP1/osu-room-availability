// components/BuildingList.js
import { Accordion } from 'react-bootstrap';
import Building from '../Building/Building';

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
        <Accordion defaultActiveKey="0">
            {buildings.map((building, index) => (
                <Building key={index} building={building} />
            ))}
        </Accordion>
    );
}

export default BuildingList;
