import { Button } from "@/components/ui/button";

const ContactsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground">
            Свяжитесь со мной удобным для вас способом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-foreground">
              Связаться со мной
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">nanana.pupupu@psychology.com</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Отвечаю в течение 24 часов
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp</h4>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Быстрые ответы и запись на консультации
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telegram</h4>
                  <p className="text-muted-foreground">@nanana_psychologist</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Конфиденциальная переписка
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">🕐</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Время работы</h4>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                  <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    МСК (GMT+3)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <Button variant="gradient" className="w-full" size="lg">
                Написать в WhatsApp
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                Быстрая запись
              </h3>
              <p className="text-muted-foreground mb-4">
                Для быстрой записи на консультацию используйте WhatsApp 
                или Telegram. Я отвечаю обычно в течение нескольких часов.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">WhatsApp</Button>
                <Button variant="outline" size="sm">Telegram</Button>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                Экстренная ситуация?
              </h3>
              <p className="text-muted-foreground mb-4">
                Если у вас кризисная ситуация, обратитесь в службу 
                экстренной психологической помощи:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Телефон доверия:</strong> 8-800-2000-122</p>
                <p><strong>Кризисная линия:</strong> 8-495-989-50-50</p>
              </div>
            </div>

            <div className="bg-peach-light/30 rounded-2xl p-6">
              <h4 className="font-semibold mb-3 text-foreground">
                🌿 Пространство для роста
              </h4>
              <p className="text-sm text-muted-foreground">
                Каждая сессия — это возможность стать ближе к себе настоящему. 
                Я буду рада поддержать вас на этом пути.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;