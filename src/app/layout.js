import "./globals.css";
import Footer from './components/Footer';


export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`antialiased`}>
        {children}

        
        <Footer />



      </body>
    </html>
  );
}
