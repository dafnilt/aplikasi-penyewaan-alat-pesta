import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout({ children, className = "" }) {
  return (
    <div className={className}>
      <Navbar />

      <div className="pt-[66px] mb-4 px-4 md:px-6 lg:px-8 mx-auto max-w-6xl">
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default Layout;

