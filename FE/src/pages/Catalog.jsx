import { useMemo, useState } from "react";
import Layout from "../layout/Layout";
import CalendarModal from "../components/catalog/CalendarModal";
import CatalogFilter from "../components/catalog/CatalogFilter";
import ProductCard from "../components/catalog/ProductCard";
import { useCatalogPage } from "../hooks/useCatalogPage";
import { useCatalogProducts } from "../hooks/useCatalogProducts";

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

  const { products, isFetching, isError } = useCatalogProducts(requestParams);

  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Semua Kategori") {
      return products;
    }

    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <Layout className="bg-[#f3f3f3]">
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
      />

      {/* {isError && <div>Gagal memuat produk</div>} */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            requestParams={requestParams}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Catalog;
