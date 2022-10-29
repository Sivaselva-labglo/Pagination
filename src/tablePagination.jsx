import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function TablePaginationDemo() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log('newPage ', newPage)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    console.log((parseInt(event.target.value, 10)));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />

    //     <TablePagination
    //   component="div"
    //   rowsPerPageOptions={[2,4,6,8,10,12]}
    //   onPageChange={handleChangePage}
    //   onRowsPerPageChange={ChangeRowsPerPage}/> 
  );
}
