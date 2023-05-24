import styles from './Classroom.module.css';
import classNames from 'classnames';

type ClassroomProps = {
    classroom: {
        room: string;
        availablefor: number;
    };
};
function Classroom({ classroom }: ClassroomProps) {
    let availability = '';

    if (classroom.availablefor < 0) {
        availability = 'classroom-unavailable';
    } else if (classroom.availablefor > 0 && classroom.availablefor < 30) {
        availability = 'classroom-soon-unavailable';
    } else {
        availability = 'classroom-available';
    }

    const className = classNames(styles.classroom, styles[availability]);

    return (
        <div className={className}>
            <p>{classroom.room}</p>
            {classroom.availablefor < 0 ? (
                <p>Unavailable for {Math.abs(classroom.availablefor)} mins</p>
            ) : (
                <p>Free for {classroom.availablefor} mins</p>
            )}
        </div>
    );

}

export default Classroom;
