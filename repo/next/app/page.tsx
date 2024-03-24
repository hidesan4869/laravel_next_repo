'use client';
import React, { useState, useEffect } from 'react';

interface Item {
    id: number;
    name: string;
    description: string;
}

const ItemList: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${process.env.NEXT_PUBLIC_API_ENDOPOINT}samples`)
            .then(response => response.json())
            .then(response => {
                setItems(response.data);
                setTotalPages(response.last_page);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching items:', error);
                setIsLoading(false);
            });
    }, [currentPage]);

    const setPage = (page: number) => {
        setCurrentPage(page);
    };

    const pagerNumbers = [];
    const pagesToShow = 5;
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (startPage <= 0) {
        endPage -= (startPage - 1);
        startPage = 1;
    }
    if (endPage > totalPages) {
        endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
        pagerNumbers.push(
            <button key={i} onClick={() => setPage(i)} disabled={currentPage === i}>
                {i}
            </button>
        );
    }

    return (
        <div>
            <h1>Item List</h1>
                <>
                    <div>
                        <p>Page {currentPage} of {totalPages}</p>
                        <button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>＜</button>
                        {pagerNumbers}
                        <button onClick={() => setPage(currentPage + 1)} disabled={currentPage === totalPages}>＞</button>
                    </div>
                </>
        </div>
    );
};

export default ItemList;