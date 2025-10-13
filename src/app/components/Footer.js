import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
      <footer className=" bottom-0 w-full bg-gradient-to-b from-transparent to-[#5e0b2f] text-white p-8 text-center">
        {/* Botão de contato */}
        <button className="flex items-center justify-center border border-white rounded-full px-6 py-3 mx-auto mb-4 hover:bg-white hover:text-black transition">
        <PaperAirplaneIcon className="h-5 w-5 mr-2" />
            <a href="https://wa.me/5511963241576?text=Ol%C3%A1%2C%20me%20interessei%20por%20seus%20trabalhos.">
            ENTRAR EM CONTATO

            </a>
        </button>
  
        {/* Ícones sociais */}
       
         <div className="flex justify-center gap-4 mb-6">
         <a className="w-10 " href="https://www.linkedin.com/in/gris-ayumi-mariano-3ab6791a2/?profileId=ACoAAC9w3fMBLCMPgQ47ejYQAint0x9n2TKhJys">
         <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a className="w-10 " href="https://wa.me/5511963241576?text=Ol%C3%A1%2C%20me%20interessei%20por%20seus%20trabalhos.">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
          <a className="w-10 " href="https://www.instagram.com/gris.postonly/">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a className="w-10 " href="mailto:grispostonly@gmail.com?subject=grispostonly@gmail.com&body=grispostonly@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>

        <hr className="border-t border-white opacity-10 w-5/6 mx-auto my-6"/>

        {/* Créditos */}
        <p className="text-sm font-medium opacity-70 mb-6">
        Um oferecimento de:
        </p>

        {/* Círculos */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
        </div>
  
        {/* Créditos */}
        <p className="text-sm font-light opacity-70">
          © 2025 | AYUMI, GRIS | JUNDIAÍ-SP
        </p>
      </footer>
    );
  }
  