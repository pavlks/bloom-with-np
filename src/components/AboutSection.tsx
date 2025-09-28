const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Обо мне
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Меня зовут Nanana Pupupu, и я психолог с многолетним опытом работы в области 
                ментального здоровья. Мой путь в психологии начался в 2005 году с групповых 
                форматов, а с 2017 года я фокусируюсь на индивидуальной работе.
              </p>
              <p>
                Имею высшее психологическое образование и постоянно развиваюсь через 
                ежегодное повышение квалификации. За годы практики я провела множество 
                тренингов, вебинаров и курсов как в онлайн, так и в оффлайн форматах.
              </p>
              <p>
                Верю, что каждый человек обладает внутренними ресурсами для исцеления 
                и роста. Моя задача — создать безопасное пространство, где вы сможете 
                исследовать свои чувства, понять свои потребности и найти свой путь 
                к благополучию.
              </p>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-accent">
              Моя специализация
            </h3>
            <ul className="space-y-4">
              <li className="list-leaf">Телесно-ориентированная терапия</li>
              <li className="list-leaf">Гештальт подход</li>
              <li className="list-leaf">Системно-семейная терапия</li>
              <li className="list-leaf">Сексологическое консультирование</li>
              <li className="list-leaf">Горе-информированный подход (работа с потерями)</li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-semibold mb-4 text-accent">Формат работы:</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Индивидуальные консультации</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Работа с парами</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Только онлайн встречи</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;