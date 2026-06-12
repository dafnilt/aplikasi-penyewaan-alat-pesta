import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout({ children, className = "" }) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Navbar />

      <main className="flex-1 mt-[66px] px-4 md:px-6 lg:px-8 mx-auto max-w-6xl w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;