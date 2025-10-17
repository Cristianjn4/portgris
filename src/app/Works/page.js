import WorksContent from '../components/WorksContent.jsx'; // componente cliente
import Rating from '../components/Rating.jsx';

export const metadata = {
  title: 'Trabalhos | Explore o portifólio. ',
  description: 'Trabalhos',
};

export default function Works() {
  return (
    <div>
      <WorksContent />
      <Rating />
    </div>
  );
}
