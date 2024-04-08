import Container from "./_components/container";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />

      <div className="h-full flex">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default HomeLayout;
