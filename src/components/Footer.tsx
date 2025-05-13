import { Button } from "@/components/ui/button";
import { Mail, Globe, Clock, Shield, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-synca-900 text-white">
      <div className="container-custom">
        {/* CTA Section */}
        <div className="py-16 md:py-20 text-center">
          <h2 className="heading-lg mb-6 text-white">
            ¿Listo para Tomar el Control Definitivo de tus Activos Digitales?
          </h2>
          <p className="text-lg text-synca-100 max-w-3xl mx-auto mb-8">
            Únete a cientos de agencias que ya han transformado su gestión de activos digitales con Synca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary">
              Inicia tu Prueba Gratuita por 14 Días
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => window.open('https://calendly.com/debora-vazquez/30min', '_blank')}
            >
              <span>Solicita una Demo Guiada</span>
              <ExternalLink size={16} className="ml-1" />
            </Button>
          </div>
        </div>

        <hr className="border-synca-700" />

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Synca</h3>
            <p className="text-synca-200 mb-4">
              La plataforma integral para la gestión de activos digitales diseñada específicamente para agencias y consultorías.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-synca-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-synca-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Producto</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-synca-200 hover:text-white">Características</a></li>
              <li><a href="#pricing" className="text-synca-200 hover:text-white">Precios</a></li>
              <li><a href="#" className="text-synca-200 hover:text-white">Demo</a></li>
              <li><a href="#" className="text-synca-200 hover:text-white">Seguridad</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-synca-200 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-synca-200 hover:text-white">Documentación</a></li>
              <li><a href="#" className="text-synca-200 hover:text-white">Tutoriales</a></li>
              <li><a href="#" className="text-synca-200 hover:text-white">Preguntas frecuentes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-synca-300" />
                <a href="mailto:info@synca.app" className="text-synca-200 hover:text-white">info@synca.app</a>
              </li>
              <li className="flex items-start">
                <Globe size={18} className="mr-2 mt-1 text-synca-300" />
                <a href="https://synca.app" className="text-synca-200 hover:text-white">synca.app</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-synca-700" />

        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-synca-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Synca. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-synca-300 text-sm hover:text-white">Términos de servicio</a>
            <a href="#" className="text-synca-300 text-sm hover:text-white">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
