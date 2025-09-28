import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    sessionType: "individual"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в течение 24 часов для уточнения деталей встречи.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      sessionType: "individual"
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-peach-light/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Записаться на консультацию
          </h2>
          <p className="text-xl text-muted-foreground">
            Заполните форму, и я свяжусь с вами для уточнения деталей встречи
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-soft">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ваше имя"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 (000) 000-00-00"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sessionType">Тип консультации</Label>
              <select
                id="sessionType"
                name="sessionType"
                value={formData.sessionType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              >
                <option value="consultation">Знакомство (20 мин, бесплатно)</option>
                <option value="individual">Индивидуальная сессия (60 мин)</option>
                <option value="couple">Парная терапия (80 мин)</option>
                <option value="package">Пакетное предложение</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Расскажите кратко о том, с чем хотели бы поработать. Это поможет мне лучше подготовиться к нашей встрече."
                rows={4}
              />
            </div>

            <div className="text-center">
              <Button 
                type="submit" 
                variant="gradient" 
                size="lg"
                disabled={isSubmitting}
                className="px-8 py-4"
              >
                {isSubmitting ? "Отправляю..." : "Отправить заявку"}
              </Button>
            </div>

            <div className="text-sm text-muted-foreground text-center">
              <p>
                Отправляя форму, вы соглашаетесь с обработкой персональных данных 
                в соответствии с политикой конфиденциальности
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;