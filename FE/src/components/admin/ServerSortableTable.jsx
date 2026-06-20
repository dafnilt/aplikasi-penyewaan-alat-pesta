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

function ServerSortableTable({
  columns = [],
  rows = [],
  totalItems = 0,
  page = 0,
  rowsPerPage = 10,
  order = "asc",
  orderBy = "",
  onSort,
  onPageChange,
  onRowsPerPageChange,
  emptyMessage = "Belum ada data",
}) {
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    const newOrder = isAsc ? "desc" : "asc";

    onSort?.(property, newOrder);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 2,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
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
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <TableRow key={row.idOrder || rowIndex}>
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    {column.render
                      ? column.render(
                          row[column.id],
                          row,
                          page * rowsPerPage + rowIndex
                        )
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
        count={totalItems}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={10}
        onPageChange={onPageChange}
        labelRowsPerPage="Data per halaman"
        SelectProps={{
            native: false,
        }}
      />
    </TableContainer>
  );
}

export default ServerSortableTable;