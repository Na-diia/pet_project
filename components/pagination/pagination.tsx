
interface Props {
    perPage: number, 
    length:number,
    handlePagination(page: number): void,
}


export default function Pagination ({perPage, length, handlePagination}: Props) {

    const paginationNumbers = [];

    for (let i = 1; i <= Math.ceil(length / perPage); i++) {
        paginationNumbers.push(i);
    }

    return (
        <div>
            {paginationNumbers.map((pageNumber) => (
                    <button key={pageNumber} onClick={() => handlePagination(pageNumber)}>{pageNumber}</button>
                ))}
        </div>
    )
}