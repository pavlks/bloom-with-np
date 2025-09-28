const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-soft">
        <span className="text-white font-heading font-bold text-xl">NP</span>
      </div>
      <div className="flex flex-col">
        <span className="font-heading font-semibold text-lg text-foreground">Nanana Pupupu</span>
        <span className="text-sm text-muted-foreground">Психолог</span>
      </div>
    </div>
  );
};

export default Logo;