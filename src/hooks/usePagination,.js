import { useState } from "react";

// Custom hook para la paginación
export const usePagination = (initialPage = 0, itemsPerPage = 20) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [offset, setOffset] = useState(initialPage * itemsPerPage);

    const handlePageClick = ({ selected }) => {
        const newOffset = selected * itemsPerPage;
        setOffset(newOffset);
        setCurrentPage(selected);
    };

    return {
        currentPage,
        offset,
        itemsPerPage,
        handlePageClick,
    };
};
