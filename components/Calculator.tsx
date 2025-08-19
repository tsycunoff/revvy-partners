import * as React from 'react';

const AnimatedCounter: React.FC<{ value: number; format: (val: number) => string; duration?: number }> = ({ 
  value, 
  format, 
  duration = 800 
}) => {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    let animationFrameId: number;
    const startTime = Date.now();
    const startValue = displayValue;
    const targetValue = value;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = startValue + (targetValue - startValue) * easeOutQuart;
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return <span>{format(displayValue)}</span>;
};

const ResultCard: React.FC<{ 
  time: string; 
  value: number; 
  isTotal?: boolean; 
  delay?: number;
  formatter: (val: number) => string;
}> = ({ time, value, isTotal = false, delay = 0, formatter }) => (
  <div 
    className={`bg-white p-6 rounded-2xl border border-gray-200 text-center transition-all duration-500 hover:shadow-lg hover:scale-105 ${
      isTotal 
        ? 'md:col-span-3 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-md' 
        : 'hover:border-blue-200'
    }`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <p className={`text-sm font-medium ${isTotal ? 'text-blue-600' : 'text-gray-500'}`}>
      {time}
    </p>
    <p className={`mt-2 font-extrabold transition-all duration-300 ${
      isTotal 
        ? 'text-3xl bg-gradient-to-r from-[#0D6EFD] to-blue-600 bg-clip-text text-transparent' 
        : 'text-2xl text-gray-900'
    }`}>
      <AnimatedCounter value={value} format={formatter} />
    </p>
    {isTotal && (
      <div className="mt-2 flex items-center justify-center text-xs text-blue-600">
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
        Ваш потенциал
      </div>
    )}
  </div>
);

const Calculator: React.FC = () => {
  const [clients, setClients] = React.useState(10);
  const [avgCheck, setAvgCheck] = React.useState(7500);
  const [isVisible, setIsVisible] = React.useState(false);
  
  const COMMISSION_RATE = 0.35;

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('calculator');
    if (section) observer.observe(section);

    return () => {
      if(section) observer.unobserve(section)
    };
  }, []);

  const incomePerCohort = React.useMemo(() => {
    return clients * avgCheck * COMMISSION_RATE;
  }, [clients, avgCheck]);

  const incomeProjection = React.useMemo(() => ({
    month3: 3 * incomePerCohort,
    month6: 6 * incomePerCohort,
    month12: 12 * incomePerCohort,
    totalYear: Array.from({ length: 12 }, (_, i) => (i + 1) * incomePerCohort).reduce((a, b) => a + b, 0),
  }), [incomePerCohort]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ru-RU', { 
      style: 'currency', 
      currency: 'RUB', 
      minimumFractionDigits: 0,
      maximumFractionDigits: 0 
    }).format(value);
  };

  const formatCurrencyWithSuffix = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M ₽`;
    }
    if (value >= 1000) {
      return `${Math.round(value / 1000)}K ₽`;
    }
    return formatCurrency(value);
  };

  return (
    <section id="calculator" className="py-20 sm:py-24 bg-white border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
            <svg className="w-4 h-4 mr-2 text-[#0D6EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Калькулятор дохода
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Рассчитайте свой пассивный доход
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Ваш доход растет каждый месяц: вы получаете комиссию и с новых, и со старых клиентов, которые продлевают подписку. 
            <br />
            <span className="inline-flex items-center mt-2 px-3 py-1 bg-gradient-to-r from-[#0D6EFD] to-blue-600 text-white font-bold rounded-full text-sm">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              До 35% пожизненно
            </span>
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-lg">
          {/* Enhanced Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-12">
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <label htmlFor="clients" className="font-semibold text-gray-700 text-lg">
                  Новых клиентов в месяц
                </label>
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-xl border border-blue-200">
                  <span className="text-2xl font-extrabold text-[#0D6EFD]">{clients}</span>
                </div>
              </div>
              
              <div className="relative">
                <input
                  id="clients"
                  type="range"
                  min="1"
                  max="50"
                  value={clients}
                  onChange={(e) => setClients(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer slider focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #0D6EFD 0%, #0D6EFD ${(clients / 50) * 100}%, #e5e7eb ${(clients / 50) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <label htmlFor="avgCheck" className="font-semibold text-gray-700 text-lg">
                  Средний чек клиента, ₽
                </label>
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-xl border border-blue-200">
                  <span className="text-2xl font-extrabold text-[#0D6EFD]">
                    <AnimatedCounter value={avgCheck} format={formatCurrency} />
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <input
                  id="avgCheck"
                  type="range"
                  min="5000"
                  max="10000"
                  value={avgCheck}
                  onChange={(e) => setAvgCheck(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer slider focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #0D6EFD 0%, #0D6EFD ${((avgCheck - 5000) / (10000 - 5000)) * 100}%, #e5e7eb ${((avgCheck - 5000) / (10000 - 5000)) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>5K ₽</span>
                  <span>7.5K ₽</span>
                  <span>10K ₽</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Ваш ежемесячный доход</h3>
              <p className="text-gray-600">При условии, что вы будете привлекать по {clients} клиентов ежемесячно.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ResultCard 
                time="Через 3 месяца" 
                value={incomeProjection.month3} 
                formatter={formatCurrency}
                delay={100}
              />
              <ResultCard 
                time="Через 6 месяцев" 
                value={incomeProjection.month6} 
                formatter={formatCurrency}
                delay={200}
              />
              <ResultCard 
                time="Через 12 месяцев" 
                value={incomeProjection.month12} 
                formatter={formatCurrency}
                delay={300}
              />
              <ResultCard 
                time="За первый год (накопительно)" 
                value={incomeProjection.totalYear} 
                isTotal 
                formatter={formatCurrency}
                delay={400}
              />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background: #0D6EFD;
          border: 4px solid white;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
          cursor: pointer;
          border-radius: 50%;
          margin-top: -8px;
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #0D6EFD;
          border: 4px solid white;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
          cursor: pointer;
          border-radius: 50%;
        }

        .slider:focus::-webkit-slider-thumb {
          outline: none;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }

        .slider:focus::-moz-range-thumb {
          outline: none;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
};

export default Calculator;
