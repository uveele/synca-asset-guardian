
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-synca-50 to-white pt-32 pb-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-synca-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-[5%] -left-[5%] w-[30%] h-[30%] bg-secondary rounded-full opacity-60 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left lg:pr-12 animate-fade-in [animation-delay:200ms]">
            <h1 className="heading-xl mb-6">
              Control Total sobre <span className="gradient-text">Dominios, Hostings y Credenciales</span> con Synca. Cero Olvidos.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Synca centraliza todos los datos críticos de tus proyectos –dominios, hostings, accesos– organizados por cliente, con alertas proactivas para que nunca más se te pase una renovación importante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-primary text-base md:text-lg">
                Inicia tu Prueba Gratuita por 14 Días
              </Button>
              <Button size="lg" variant="outline" className="border-synca-200 text-synca-800 text-base md:text-lg">
                Solicita una Demo Guiada
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in [animation-delay:500ms]">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-2 lg:p-3 border border-synca-100">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Persona trabajando con Synca" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute top-2 right-2 flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="hidden lg:block absolute -top-6 -right-12 bg-white p-4 rounded-lg shadow-lg transform rotate-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Dominio Renovado</span>
              </div>
            </div>
            <div className="hidden lg:block absolute -bottom-8 -left-10 bg-white p-4 rounded-lg shadow-lg transform -rotate-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm font-medium">Hosting - 5 días</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
