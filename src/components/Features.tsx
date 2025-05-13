
import { Folder, Globe, Bell, Calendar, Key, Database } from "lucide-react";

const features = [
  {
    icon: Folder,
    title: "Organización por Proyectos",
    description:
      "Todos los activos (dominios, hostings, credenciales) agrupados lógicamente por cada cliente o proyecto."
  },
  {
    icon: Globe,
    title: "Gestión de Dominios y Hostings",
    description:
      "Control total sobre fechas de registro, expiración y proveedores."
  },
  {
    icon: Bell,
    title: "Notificaciones Proactivas",
    description:
      "Alertas automáticas (móvil/email) antes de los vencimientos para que puedas actuar a tiempo."
  },
  {
    icon: Calendar,
    title: "Integración con Calendarios",
    description:
      "Sincroniza todas las fechas críticas con tu calendario de trabajo habitual."
  },
  {
    icon: Key,
    title: "Almacén Seguro de Credenciales",
    description:
      "Un lugar centralizado y encriptado para todas las contraseñas y datos de acceso."
  },
  {
    icon: Database,
    title: "Dashboard Centralizado",
    description:
      "Visibilidad completa del estado de todos tus activos de un solo vistazo."
  }
];

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-white to-synca-50 section-padding" id="features">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Te Presentamos Synca: <span className="gradient-text">La Solución Integral para tu Agencia</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Synca está diseñada específicamente para resolver los desafíos diarios de las agencias web, agencias de marketing y consultorías tecnológicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card animate-on-scroll"
              style={{ animationDelay: `${(index % 3 + 1) * 150}ms` }}
            >
              <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-synca-100 to-synca-200 rounded-lg text-synca-700">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-synca-900">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
