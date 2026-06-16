import { useMemo, useState } from "react";
import Layout from "../layout/Layout";
import CalendarModal from "../components/catalog/CalendarModal";
import CatalogFilter from "../components/catalog/CatalogFilter";
import ProductCard from "../components/catalog/ProductCard";
import { useCatalogPage } from "../hooks/useCatalogPage";
import { useCatalogProducts } from "../hooks/useCatalogProducts";
import { Skeleton } from "@mui/material";
import CardSkeleton from "../components/catalog/CardSkeleton";
import { Empty } from "antd";

function Catalog() {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,

    requestParams,

    isCalendarOpen,
    setIsCalendarOpen,

    handleSaveCalendar,
  } = useCatalogPage();

  const { products, isFetching, isError } = useCatalogProducts(
    startDate,
    endDate,
  );

  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        selectedCategory === "Semua Kategori" ||
        product.category?.toLowerCase() === selectedCategory.toLowerCase();

      const matchSearch =
        search.trim() === "" ||
        product.name?.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [products, selectedCategory, search]);

  const isEmpty = !isFetching && filteredProducts.length === 0;

  return (
    <Layout className="bg-[#EFEFEF]">
      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        onSave={handleSaveCalendar}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        isLoading={isFetching}
      />
      <CatalogFilter
        category={selectedCategory}
        setCategory={setSelectedCategory}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        search={search}
        setSearch={setSearch}
      />

      {isError ? (
        <div className="flex justify-center items-center py-20">
          <Empty description="Gagal memuat produk" />
        </div>
      ) : isEmpty ? (
        <div className="flex justify-center items-center py-20">
          <Empty description="Produk tidak ditemukan" />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-5 gap-4">
          {isFetching
            ? Array.from({ length: 10 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            : filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  requestParams={requestParams}
                />
              ))}
        </div>
      )}
    </Layout>
  );
}

export default Catalog;
