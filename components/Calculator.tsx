
import React, { useState, useMemo } from 'react';

const ResultCard: React.FC<{ time: string; value: string; isTotal?: boolean }> = ({ time, value, isTotal = false }) => (
    <div className={`bg-white p-6 rounded-xl border border-gray-200 text-center ${isTotal ? 'md:col-span-3 bg-blue-50' : ''}`}>
        <p className="text-gray-500">{time}</p>
        <p className={`mt-2 font-extrabold ${isTotal ? 'text-3xl text-[#0D6EFD]' : 'text-2xl text-gray-900'}`}>{value}</p>
    </div>
);

const Calculator: React.FC = () => {
  const [clients, setClients] = useState(10);
  const [avgCheck, setAvgCheck] = useState(7000);
  const COMMISSION_RATE = 0.35;

  const incomePerCohort = useMemo(() => {
    return clients * avgCheck * COMMISSION_RATE;
  }, [clients, avgCheck]);

  const incomeProjection = useMemo(() => ({
    month3: 3 * incomePerCohort,
    month6: 6 * incomePerCohort,
    month12: 12 * incomePerCohort,
    totalYear: Array.from({ length: 12 }, (_, i) => (i + 1) * incomePerCohort).reduce((a, b) => a + b, 0),
  }), [incomePerCohort]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(value);
  };

  return (
    <section className="py-20 sm:py-24 bg-white border-y border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Рассчитайте свой пассивный доход
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Ваш доход растет каждый месяц: вы получаете комиссию и с новых, и со старых клиентов, которые продлевают подписку. Наша комиссия — <span className="text-[#0D6EFD] font-bold">до 35% пожизненно</span>.
          </p>
        </div>

        <div className="bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
          {/* Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label htmlFor="clients" className="font-semibold text-gray-700">Новых клиентов в месяц</label>
                <span className="text-2xl font-extrabold text-[#0D6EFD]">{clients}</span>
              </div>
              <input
                id="clients"
                type="range"
                min="1"
                max="50"
                value={clients}
                onChange={(e) => setClients(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label htmlFor="avgCheck" className="font-semibold text-gray-700">Средний чек клиента</label>
                <span className="text-2xl font-extrabold text-[#0D6EFD]">{formatCurrency(avgCheck)}</span>
              </div>
              <input
                id="avgCheck"
                type="range"
                min="5000"
                max="10000"
                step="500"
                value={avgCheck}
                onChange={(e) => setAvgCheck(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          {/* Results */}
          <div>
            <p className="text-center font-semibold text-gray-700 mb-4">Ваш ежемесячный доход составит:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ResultCard time="Через 3 месяца" value={`${formatCurrency(incomeProjection.month3)}/мес`} />
                <ResultCard time="Через 6 месяцев" value={`${formatCurrency(incomeProjection.month6)}/мес`} />
                <ResultCard time="Через 12 месяцев" value={`${formatCurrency(incomeProjection.month12)}/мес`} />
                <ResultCard time="Суммарный доход за год" value={formatCurrency(incomeProjection.totalYear)} isTotal={true} />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="bg-[#0D6EFD] text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-blue-700 transition-colors transform hover:scale-105 inline-block"
          >
            Начать зарабатывать
          </a>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
