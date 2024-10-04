import styles from './Table.module.scss';

type TableProps = {
    arrayOfData: any;
}

const Table = (props: TableProps) => {

    return props.arrayOfData.length !== 0 ? (
        <table className={styles.table}>
            <tr className={styles.tableRow + " " + styles.tableHeadingRow}>
                {Object.keys(props.arrayOfData[0]).map((key: string, index: number) => (
                    <th className={styles.tableHeadingRowCell} key={"Key: " + index}>{key}</th>
                ))}
            </tr>
            {props.arrayOfData.map((data: any, index: number) => (
                <tr className={styles.tableRow} key={"Row: " + index}>
                    {Object.keys(data).map((key: string, index: number) => (
                        <td className={styles.tableCell} key={"Row cell: " + key + index}>
                            <div className={styles.tableCellContent}>
                                {data[key]}
                            </div>
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    ) : (
        <h1>No Data</h1>
    )
}

export default Table;