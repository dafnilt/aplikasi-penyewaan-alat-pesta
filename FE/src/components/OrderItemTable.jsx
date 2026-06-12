import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { formatPrice } from "../utils/formatPrice";

function OrderItemTable({ items = [] }) {
  return (
    <div className="mt-8">
      <div className="text-base font-semibold mb-4">Daftar Produk</div>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table className="w-full text-sm">
          <TableHead className="border-b">
            <TableRow>
              <TableCell className="py-3">No</TableCell>
              <TableCell>Nama Produk</TableCell>
              <TableCell>Varian Produk</TableCell>
              <TableCell>Jumlah</TableCell>
              <TableCell>Harga Satuan</TableCell>
              <TableCell>Subtotal</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((item, index) => (
              <TableRow key={item.idOrderItem || item.idProduct || index}>
                <TableCell className="py-3">{index + 1}</TableCell>
                <TableCell>{item.productName}</TableCell>
                <TableCell>
                  {item.variantCombination?.variants?.length > 0
                    ? item.variantCombination.variants.join(", ")
                    : "-"}
                </TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>Rp {formatPrice(item.pricePerItem)}</TableCell>
                <TableCell>Rp {formatPrice(item.subtotal)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default OrderItemTable;