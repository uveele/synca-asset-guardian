
import { Check, TrendingUp, Briefcase, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Check,
    iconColor: "text-green-500",
    bgColor: "bg-green-50",
    title: "Tranquilidad Garantizada",
    description:
      "Reduce el estrés y la ansiedad asociados a la gestión de activos críticos. Duerme tranquilo sabiendo que nada importante caducará sin aviso."
  },
  {
    icon: TrendingUp,
    iconColor: "text-synca-600",
    bgColor: "bg-synca-50",
    title: "Eficiencia Multiplicada",
    description:
      "Ahorra horas de trabajo administrativo cada semana. Localiza cualquier información en segundos, sin búsquedas interminables ni confusión."
  },
  {
    icon: Shield,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
    title: "Seguridad Reforzada",
    description:
      "Protege los datos valiosos de tus clientes y la reputación de tu agencia con un sistema encriptado y acceso controlado."
  },
  {
    icon: Briefcase,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
    title: "Profesionalismo Demostrado",
    description:
      "Ofrece un servicio más organizado y proactivo a tus clientes. Impresiona con tu nivel de control y previsión sobre todos los activos."
  }
];

const Benefits = () => {
  return (
    <section className="bg-synca-50 section-padding" id="benefits">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            ¿Qué Ganas con Synca?
          </h2>
          <p className="text-lg text-muted-foreground">
            Transforma tu forma de trabajar y disfruta de los resultados con nuestra plataforma integral
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg animate-on-scroll"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className={`mb-6 inline-flex p-3 ${benefit.bgColor} rounded-full ${benefit.iconColor}`}>
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synca-900">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-white rounded-xl shadow-lg">
            <p className="text-lg font-medium text-synca-800">
              "Synca me ha salvado de perder un dominio crítico de un cliente importante. 
              Ahora puedo gestionar todos nuestros activos desde un solo lugar."
            </p>
            <div className="mt-4">
              <p className="font-semibold">Ana Martínez</p>
              <p className="text-muted-foreground text-sm">Directora de Proyectos, Agencia Web</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
