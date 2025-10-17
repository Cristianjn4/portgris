import AboutContent from '../components/AboutContent'; // componente cliente
import Rating from '../components/Rating';

export const metadata = {
  title: 'About',
  description: 'Sobre nós',
};

export default function About() {
  return(
    <div>
      <AboutContent />
                    <Rating />

    </div>
  ) ;
  
  
  
}