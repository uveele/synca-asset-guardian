
import { Search, Clock, Files, Shield } from "lucide-react";

const painPoints = [
  {
    icon: Search,
    title: "Búsqueda interminable de contraseñas y datos de acceso",
    description:
      "Perder tiempo valioso buscando credenciales a través de documentos dispersos, mensajes de email o notas personales."
  },
  {
    icon: Clock,
    title: "Miedo constante a que caduquen dominios o hostings de clientes",
    description:
      "La preocupación permanente por recordar fechas de renovación y la posibilidad de perder activos críticos de los clientes."
  },
  {
    icon: Files,
    title: "Información crítica dispersa y desorganizada",
    description:
      "Datos importantes de proyectos fragmentados en distintas herramientas, dispositivos y colaboradores."
  },
  {
    icon: Shield,
    title: "Vulnerabilidades por compartir accesos de forma insegura",
    description:
      "Riesgos de seguridad al compartir información sensible a través de canales no seguros como chats o emails."
  }
];

const PainPoints = () => {
  return (
    <section className="bg-white section-padding" id="pain-points">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-lg mb-4">
            ¿Cansado de Perder Tiempo y Correr Riesgos Innecesarios?
          </h2>
          <p className="text-lg text-muted-foreground">
            Las agencias y consultorías como la tuya enfrentan estos desafíos diarios en la gestión de activos digitales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="feature-card flex hover:border-synca-200 hover:border animate-on-scroll"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="mr-4 mt-1">
                <div className="p-2 bg-synca-50 rounded-lg text-synca-700">
                  <point.icon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-synca-800">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
