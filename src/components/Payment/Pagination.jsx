import React from 'react';
import Button from "@mui/material/Button";

const Pagination = ({
  currentPage,
  totalPages,
  isLoading,
  handleChangePage,
}) => {
  console.log(currentPage);
  return (
    <div className="pagination-button-wrapper">
      <Button
        className="pagination-button"
        onClick={() => handleChangePage(currentPage-1)}
        disabled={currentPage === 1 || isLoading}
        title="prev"
      >
        Previous
      </Button>

      <span className="pagination-page-info">
        {currentPage > 1 ?<span className="current-page"><Button onClick={() => handleChangePage(currentPage - 1)}>{currentPage - 1}</Button></span> : null}
        <span className="current-page"><Button onClick={() => handleChangePage(currentPage)} disabled>{currentPage}</Button></span>
        {currentPage !== totalPages ? <span className="current-page"><Button onClick={() => handleChangePage(currentPage + 1)}>{currentPage + 1}</Button></span> : null}
      </span>

      <Button
        className="pagination-button"
        onClick={() => handleChangePage(currentPage+1)}
        disabled={currentPage === totalPages || isLoading}
        title="Next"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
