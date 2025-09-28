import { Button } from "@/components/ui/button";
import { Heart, Sprout, Target, RotateCcw, UserCheck, Focus, Users, Heart as HeartIcon, Bird, UsersRound } from "lucide-react";

const ApproachSection = () => {
  const principles = [
    {
      icon: Heart,
      title: "Безопасность и принятие",
      description: "Создаю пространство, где вы можете быть собой без страха осуждения. Каждая эмоция и переживание имеют право на существование."
    },
    {
      icon: Sprout,
      title: "Целостный подход",
      description: "Работаю не только с мыслями, но и с телом, эмоциями и отношениями. Человек — это единая система, где всё взаимосвязано."
    },
    {
      icon: Target,
      title: "Фокус на ресурсах",
      description: "Помогаю обнаружить и активировать ваши внутренние силы. Верю, что у каждого есть способность к исцелению и росту."
    },
    {
      icon: RotateCcw,
      title: "Экологичные изменения",
      description: "Изменения происходят в комфортном темпе, с уважением к вашим границам и готовности к трансформациям."
    }
  ];

  return (
    <section className="py-20 bg-peach-light/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Мой подход и принципы работы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            В основе моей работы лежит глубокое уважение к личности каждого клиента 
            и вера в его способность к позитивным изменениям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <principle.icon className="w-12 h-12 text-emerald-500 drop-shadow-lg flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-soft">
          <h3 className="font-heading text-2xl font-semibold mb-6 text-center text-foreground">
            Методы, которые я использую
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-background rounded-xl">
              <UserCheck className="w-10 h-10 text-emerald-500 drop-shadow-sm mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Телесно-ориентированная терапия</h4>
              <p className="text-sm text-muted-foreground">
                Работа через тело для освобождения от напряжений и травм
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-xl">
              <Focus className="w-10 h-10 text-emerald-500 drop-shadow-sm mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Гештальт подход</h4>
              <p className="text-sm text-muted-foreground">
                Фокус на настоящем моменте и осознанности
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-xl">
              <Users className="w-10 h-10 text-emerald-500 drop-shadow-sm mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Системная терапия</h4>
              <p className="text-sm text-muted-foreground">
                Работа с семейными и парными динамиками
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-xl">
              <HeartIcon className="w-10 h-10 text-emerald-500 drop-shadow-sm mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Сексологическое консультирование</h4>
              <p className="text-sm text-muted-foreground">
                Работа с интимностью и сексуальностью
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-xl">
              <Bird className="w-10 h-10 text-emerald-500 drop-shadow-sm mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Работа с горем</h4>
              <p className="text-sm text-muted-foreground">
                Сопровождение в процессе переживания потерь
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-xl">
              <UsersRound className="w-10 h-10 text-emerald-500 drop-shadow-sm mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Парная терапия</h4>
              <p className="text-sm text-muted-foreground">
                Работа с отношениями и коммуникацией
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-destructive/5 border border-destructive/20 rounded-xl">
            <h4 className="font-semibold mb-3 text-destructive">С кем я не работаю:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-destructive">✗</span>
                <span>Химически зависимые (в активной фазе)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-destructive">✗</span>
                <span>Авторы насилия</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-destructive">✗</span>
                <span>Дети и подростки до 18 лет</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;