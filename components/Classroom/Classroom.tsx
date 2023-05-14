import styles from './Classroom.module.css';

type ClassroomProps = {
    classroom: {
        room: string;
        availableFor: number;
    };
};

function Classroom({ classroom }: ClassroomProps) {
    return (
        <div className={styles.classroom}>
            <p>{classroom.room}</p>
            <p>free for {classroom.availableFor} mins</p>
        </div>
    );
}

export default Classroom;
