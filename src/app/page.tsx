import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cover from "./components/Cover";

export default function Home() {
  return (
    <div>
      <Header />
      <Cover />
      <Footer />
    </div>
  );
}
