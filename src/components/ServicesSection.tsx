import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Индивидуальная терапия",
      description: "Персональная работа с вашими запросами в комфортном темпе",
      price: "от 3500 ₽",
      duration: "50 минут",
      features: [
        "Глубокая проработка личных тем",
        "Индивидуальный подход к каждому клиенту",
        "Гибкий график встреч",
        "Конфиденциальность и безопасность"
      ]
    },
    {
      title: "Парная терапия",
      description: "Работа с отношениями и парными конфликтами",
      price: "от 5000 ₽",
      duration: "80 минут",
      features: [
        "Улучшение коммуникации в паре",
        "Проработка конфликтов",
        "Укрепление близости",
        "Работа с семейными кризисами"
      ]
    }
  ];

  const packages = [
    {
      title: "Пакет \"Знакомство\"",
      sessions: "3 сессии",
      price: "9900 ₽",
      description: "Идеально для первого опыта терапии",
      savings: "Экономия 600 ₽"
    },
    {
      title: "Пакет \"Углубление\"",
      sessions: "8 сессий",
      price: "25600 ₽",
      description: "Для серьезной работы над запросом",
      savings: "Экономия 2400 ₽"
    },
    {
      title: "Пакет \"Трансформация\"",
      sessions: "15 сессий",
      price: "47250 ₽",
      description: "Для глубоких изменений в жизни",
      savings: "Экономия 5250 ₽"
    }
  ];

  return (
    <section className="py-20 bg-peach-light/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Услуги и стоимость
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Я предлагаю различные форматы работы, адаптированные под ваши потребности и возможности
          </p>
        </div>

        {/* Individual Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300">
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">{service.price}</span>
                  <span className="text-sm text-muted-foreground">{service.duration}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="list-leaf text-sm">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Package Deals */}
        <div className="bg-card rounded-2xl p-8 shadow-soft">
          <h3 className="font-heading text-3xl font-semibold mb-8 text-center text-foreground">
            Пакетные предложения
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                  index === 1 ? 'border-primary bg-primary/5' : 'border-border bg-background'
                }`}
              >
                <div className="text-center">
                  <h4 className="font-semibold text-lg mb-2">{pkg.title}</h4>
                  <div className="text-2xl font-bold text-primary mb-1">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground mb-3">{pkg.sessions}</div>
                  <p className="text-sm mb-3">{pkg.description}</p>
                  <div className="text-xs text-accent font-medium">{pkg.savings}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;