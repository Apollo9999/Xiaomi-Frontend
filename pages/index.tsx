import type { NextPage } from 'next';
import Body from '../components/Body/body';
import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
