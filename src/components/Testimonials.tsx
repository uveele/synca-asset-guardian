
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Director de Operaciones, DigitalFlow",
    image: "",
    content:
      "Synca ha revolucionado cómo gestionamos nuestros activos digitales. Antes gastábamos horas cada semana buscando credenciales y controlando renovaciones. Ahora todo está centralizado y las alertas llegan con tiempo suficiente."
  },
  {
    name: "Laura Sánchez",
    role: "Gerente de Proyectos, TechConsult",
    image: "",
    content:
      "La integración con nuestro calendario de trabajo es perfecta. Las notificaciones de vencimientos llegan al email y al móvil, lo que nos da tranquilidad absoluta de que nada se nos pasará por alto."
  },
  {
    name: "Miguel Ángel Torres",
    role: "CEO, Agencia Impulso Digital",
    image: "",
    content:
      "Como director de agencia, necesitaba una solución que me diera visibilidad total sobre todos nuestros activos digitales. Synca no solo cumplió esa expectativa, sino que mejoró dramáticamente nuestra eficiencia operativa."
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white section-padding" id="testimonials">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Lo que Dicen Agencias Como la Tuya</h2>
          <p className="text-lg text-muted-foreground">
            Profesionales del sector que ya han transformado su forma de trabajar con Synca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border border-synca-100 shadow-md hover:shadow-lg transition-shadow animate-on-scroll"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarFallback className="bg-synca-200 text-synca-700">
                      {testimonial.name.split(' ').map(word => word[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-synca-900">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-12 opacity-70">
          <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">Logo Cliente</div>
          <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">Logo Cliente</div>
          <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">Logo Cliente</div>
          <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">Logo Cliente</div>
          <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">Logo Cliente</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
