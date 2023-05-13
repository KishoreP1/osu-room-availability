import styles from './Button.module.css';
import Image from 'next/image';
import Loader from '../../public/loader.svg';

type ButtonProps = {
    onClick: () => void;  // A function that takes no arguments and doesn't return anything
    text: string;
    loading: boolean;
    disabled: boolean;
}


export default function Button({ onClick, text, loading, disabled }: ButtonProps) {
    return (
        <button className={styles["search-btn"]} onClick={onClick} disabled={disabled}>
            {!loading ? text : <Image className={styles["spinner"]} src={Loader} alt="Loading" width={20} height={20} />}
        </button>
    )
}

