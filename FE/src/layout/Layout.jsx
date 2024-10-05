import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="pt-[66px]">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
