import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
        <Navbar />
        <main className=" max-w-site mx-auto flex flex-col">
            {children}
        </main>
        <Footer />
    </>
  )
}

export default MainLayout;