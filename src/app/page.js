import Header from './components/Header';
import Start from './components/Start';


export const metadata = {
  title: 'Home | Portifólio Interativo'
};

export default function Home() {
  return (
    <main>
    <Header />
      <Start />
    </main>
  );
}