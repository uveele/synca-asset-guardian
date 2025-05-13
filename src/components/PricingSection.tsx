
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfecto para agencias pequeñas",
    price: "19",
    features: [
      "Hasta 10 proyectos",
      "Hasta 50 credenciales",
      "Alertas por email",
      "1 usuario"
    ],
    cta: "Comenzar prueba gratuita",
    highlighted: false
  },
  {
    name: "Profesional",
    description: "Para agencias en crecimiento",
    price: "49",
    features: [
      "Proyectos ilimitados",
      "Credenciales ilimitadas",
      "Alertas por email y móvil",
      "5 usuarios",
      "Integración con calendarios",
      "Soporte prioritario"
    ],
    cta: "Comenzar prueba gratuita",
    highlighted: true
  },
  {
    name: "Empresa",
    description: "Para grandes equipos",
    price: "99",
    features: [
      "Todo lo de Profesional",
      "Usuarios ilimitados",
      "API de integración",
      "Personalización avanzada",
      "Gestión por departamentos",
      "Soporte 24/7"
    ],
    cta: "Contactar ventas",
    highlighted: false
  }
];

const PricingSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-synca-50 section-padding" id="pricing">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Elige el Plan de Synca Perfecto para tu Agencia
          </h2>
          <p className="text-lg text-muted-foreground">
            Precios transparentes sin sorpresas. Todos los planes incluyen una prueba gratuita de 14 días.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.highlighted 
                  ? "border-synca-500 shadow-lg shadow-synca-100" 
                  : "border-synca-100"
              } animate-on-scroll`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-synca-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Más popular
                </div>
              )}
              
              <CardHeader className="pt-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-synca-900 mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>
              
              <CardContent className="text-center pt-4">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-synca-800">{plan.price}€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                
                <ul className="space-y-3 text-left mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1 text-green-500">
                        <Check size={18} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.highlighted ? "btn-primary" : "bg-white border border-synca-200 text-synca-800 hover:bg-synca-50"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            ¿Necesitas un plan personalizado? <a href="#contact" className="text-synca-700 underline">Contáctanos</a> para una solución a medida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
