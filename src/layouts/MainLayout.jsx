import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <div className="page-frame">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
      <Footer />
    </div>
  );
}