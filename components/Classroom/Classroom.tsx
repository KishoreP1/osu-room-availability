type ClassroomProps = {
    classroom: {
        room: string;
        availableFor: number;
    };
};

function Classroom({ classroom }: ClassroomProps) {
    return (
        <div>
            <p>Room: {classroom.room}</p>
            <p>Available For: {classroom.availableFor}</p>
        </div>
    );
}

export default Classroom;
