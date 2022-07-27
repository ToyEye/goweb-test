import { Container } from 'components/reusableComponents';
import Navigation from 'components/Navigation';
import Hero from 'components/Hero';
import About from 'components/About';
import Blog from 'components/Blog';
import Cases from 'components/Cases';
import Team from 'components/Team';
import Form from 'components/Form';
import Footer from 'components/Footer';

function App() {
  return (
    <Container>
      <Navigation />
      <Hero />
      <About />
      <Cases />
      <Blog />
      <Team />
      <Form />
      <Footer />
    </Container>
  );
}

export default App;
