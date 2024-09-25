import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="pt-14">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
