import { Container } from 'components/reusableComponents';
import Hero from 'components/Hero';
import About from 'components/About';
import Blog from 'components/Blog';
import Cases from 'components/Cases';
import Contacts from 'components/Contacts';
import Footer from 'components/Footer';

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Cases />
      <Blog />
      <Contacts />
      <Footer />
    </Container>
  );
}

export default App;
