import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-psychologist.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Путь к себе начинается здесь
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
          Профессиональная психологическая поддержка в онлайн формате. 
          Работаю с индивидуальными запросами и парными отношениями.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="gradient" 
            size="lg"
            className="px-8 py-4 text-lg"
          >
            Записаться на консультацию
          </Button>
          <Button 
            variant="glass" 
            size="lg"
            className="px-8 py-4 text-lg"
          >
            Узнать больше
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="glass-morphism p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">18+</div>
            <div className="text-sm opacity-80">лет опыта в психологии</div>
          </div>
          <div className="glass-morphism p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm opacity-80">онлайн формат</div>
          </div>
          <div className="glass-morphism p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-80">поддержка и забота</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;