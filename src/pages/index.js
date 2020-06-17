import Carousel from '../components/Carousel';

const WelcomePage = () => (
  <>
    <h1 className='text-center mt-5'>Welcome to Next.js</h1>
    <img
      src="/mdb-react-small.png"
      alt='MDBReact'
      className='img-fluid d-block mx-auto mt-3'
    />
    <Carousel />
  </>
);

export default WelcomePage;
