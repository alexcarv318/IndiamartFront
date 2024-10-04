import styles from './OpenFiltersButton.module.scss';

type OpenFiltersButtonProps = {
    onClick?: () => void;
}

const OpenFiltersButton = ({onClick}: OpenFiltersButtonProps) => {

    return (
        <button
            className={styles.openFiltersButton}
            onClick={onClick}
        >
            Filters &gt;
        </button>
    )
}

export default OpenFiltersButton;