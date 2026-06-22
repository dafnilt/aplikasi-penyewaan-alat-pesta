import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  TablePagination,
} from "@mui/material";

function SortableTable({
  columns = [],
  rows = [],
  defaultOrderBy = "",
  defaultOrder = "asc",
  emptyMessage = "Belum ada data",
}) {
  const [order, setOrder] = React.useState(defaultOrder);
  const [orderBy, setOrderBy] = React.useState(defaultOrderBy || columns[0]?.id);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";

    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedRows = React.useMemo(() => {
    return [...rows].sort((a, b) => {
      const valueA = a[orderBy];
      const valueB = b[orderBy];

      if (valueA === null || valueA === undefined) return 1;
      if (valueB === null || valueB === undefined) return -1;

      const dateA = new Date(valueA);
      const dateB = new Date(valueB);

      if (!isNaN(dateA) && !isNaN(dateB)) {
        return order === "asc"
          ? dateA - dateB
          : dateB - dateA;
      }

      if (typeof valueA === "number" && typeof valueB === "number") {
        return order === "asc" ? valueA - valueB : valueB - valueA;
      }

      return order === "asc"
        ? String(valueA).localeCompare(String(valueB))
        : String(valueB).localeCompare(String(valueA));
    });
  }, [rows, order, orderBy]);

  const paginatedRows = sortedRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => {
            const isSortable = column.sortable !== false;

            return (
                <TableCell key={column.id}>
                {isSortable ? (
                    <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={() => handleRequestSort(column.id)}
                    >
                    {column.label}
                    </TableSortLabel>
                ) : (
                    column.label
                )}
                </TableCell>
            );
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {paginatedRows.length > 0 ? (
            paginatedRows.map((row, rowIndex) => (
              <TableRow key={row.id || rowIndex}>
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    {column.render
                      ? column.render(row[column.id], row, page * rowsPerPage + rowIndex)
                      : row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} align="center" sx={{ py: 4 }}>
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={10}
        onPageChange={handleChangePage}
        labelRowsPerPage="Data per halaman"
      />
    </TableContainer>
  );
}

export default SortableTable;