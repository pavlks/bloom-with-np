import { Button } from "@/components/ui/button";

const FirstMeetingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Первая встреча
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Выберите удобный для вас формат знакомства. Первая встреча поможет понять, 
          подходим ли мы друг другу для дальнейшей работы.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* 20 Minutes Option */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-accent/20">
            <div className="mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-2">Знакомство</h3>
              <div className="text-3xl font-bold text-primary mb-2">20 минут</div>
              <div className="text-xl font-semibold text-accent mb-4">Бесплатно</div>
            </div>
            
            <ul className="space-y-3 mb-6 text-left">
              <li className="list-leaf">Знакомство и установление контакта</li>
              <li className="list-leaf">Обсуждение вашего запроса</li>
              <li className="list-leaf">Понимание подходящего формата работы</li>
              <li className="list-leaf">Ответы на ваши вопросы</li>
            </ul>
            
            <Button variant="outline" className="w-full">
              Записаться на знакомство
            </Button>
          </div>

          {/* 1 Hour Option */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 border-2 border-primary/20">
            <div className="mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-2">Полная сессия</h3>
              <div className="text-3xl font-bold text-primary mb-2">60 минут</div>
              <div className="text-xl font-semibold text-accent mb-4">3500 ₽</div>
            </div>
            
            <ul className="space-y-3 mb-6 text-left">
              <li className="list-leaf">Полноценная терапевтическая сессия</li>
              <li className="list-leaf">Глубокая проработка вашего запроса</li>
              <li className="list-leaf">Практические техники и упражнения</li>
              <li className="list-leaf">Домашние задания и рекомендации</li>
            </ul>
            
            <Button variant="gradient" className="w-full">
              Записаться на сессию
            </Button>
          </div>
        </div>
        
        <div className="mt-12 bg-peach-light/30 rounded-2xl p-8">
          <h4 className="font-heading text-xl font-semibold mb-4 text-foreground">
            Что важно знать перед первой встречей:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <ul className="space-y-2">
              <li className="list-leaf">Обеспечьте спокойную обстановку</li>
              <li className="list-leaf">Проверьте интернет-соединение</li>
              <li className="list-leaf">Подготовьте вопросы, если они есть</li>
            </ul>
            <ul className="space-y-2">
              <li className="list-leaf">Настройтесь на открытый диалог</li>
              <li className="list-leaf">Будьте готовы поделиться своими чувствами</li>
              <li className="list-leaf">Помните: всё обсуждается в атмосфере доверия</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstMeetingSection;