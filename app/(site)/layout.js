import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";

export default function SiteLayout({ children }) {
  return (
    <div className="overflow-x-hidden">
      <Header />
      {children}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
