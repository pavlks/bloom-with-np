import Logo from "./Logo";

import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Профессиональная психологическая помощь онлайн. 
              Индивидуальная и семейная терапия с опытом работы с 2005 года.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Индивидуальная терапия</li>
              <li>Парная терапия</li>
              <li>Работа с горем</li>
              <li>Сексологическое консультирование</li>
              <li>Телесно-ориентированная терапия</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📧 nanana.pupupu@psychology.com</li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 drop-shadow-sm" />
                +7 (999) 123-45-67
              </li>
              <li>💬 @nanana_psychologist</li>
              <li>🕐 Пн-Пт: 9:00-20:00 МСК</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Nanana Pupupu. Все права защищены.</p>
          <p className="mt-2">
            Сайт создан с заботой о вашем комфорте и конфиденциальности
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;