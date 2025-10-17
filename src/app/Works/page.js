import WorksContent from '../components/WorksContent.jsx'; // componente cliente
import Rating from '../components/Rating.jsx';

export const metadata = {
  title: 'Works',
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
