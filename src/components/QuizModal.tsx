import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const STEPS = [
  {
    title: 'С какой целью Вы хотите приобрести недвижимость?',
    type: 'checkbox' as const,
    options: ['Для жизни или отдыха', 'Для инвестиций', 'Для сдачи в аренду'],
  },
  {
    title: 'Какая планировка Вас интересует?',
    type: 'checkbox' as const,
    options: ['Студия', '1 bdr (1 спальня)', '2 bdr (2 спальни)', '3 bdr (3 спальни)'],
  },
  {
    title: 'На какую примерную сумму рассчитываете?',
    type: 'radio' as const,
    options: ['44.500 - 65.000$', '65.000 - 90.000$', 'Более 90.000$'],
  },
  {
    title: 'Куда Вам выслать каталог?',
    type: 'radio' as const,
    options: ['Whatsapp', 'Telegram', 'Viber'],
  },
  {
    title: 'Введите Ваш телефон:',
    type: 'phone' as const,
    options: [],
  },
];

const TOTAL = STEPS.length;

export function openQuiz() {
  window.dispatchEvent(new CustomEvent('open-quiz'));
}

const isPhoneValid = (p: string) => {
  const digits = p.replace(/\D/g, '');
  if (digits.length === 11 && (digits[0] === '7' || digits[0] === '8')) return true;
  if (digits.length === 10 && digits[0] === '9') return true;
  return false;
};

const QuizModal = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => {
      setOpen(true); setStep(0); setAnswers({}); setPhone(''); setPhoneError(false); setSubmitted(false);
      if (typeof window.ym === 'function') window.ym(109281441, 'reachGoal', 'quiz_open');
    };
    window.addEventListener('open-quiz', handler);
    return () => window.removeEventListener('open-quiz', handler);
  }, []);

  if (!open) return null;

  const current = STEPS[step];
  const selected = answers[step] || [];

  const toggle = (option: string) => {
    if (current.type === 'radio') {
      setAnswers({ ...answers, [step]: [option] });
    } else {
      const next = selected.includes(option)
        ? selected.filter((o) => o !== option)
        : [...selected, option];
      setAnswers({ ...answers, [step]: next });
    }
  };

  const isLast = step === TOTAL - 1;
  const isSecondToLast = step === TOTAL - 2;

  const handleNext = () => {
    if (isLast) {
      if (!isPhoneValid(phone)) { setPhoneError(true); return; }
      setPhoneError(false);
      if (typeof window.ym === 'function') window.ym(109281441, 'reachGoal', 'quiz_goal');
      fetch('https://functions.poehali.dev/2fd7767f-03cc-4200-ad29-5888ffc15e92', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'quiz', phone, answers }),
      }).catch(() => {});
      setSubmitted(true);
    } else {
      setStep(step + 1);
    }
  };

  const progress = ((step + 1) / TOTAL) * 100;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4" onClick={() => setOpen(false)}>
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="relative bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted && (
          <div className="flex flex-col items-center justify-center px-8 py-14 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
              <Icon name="Check" size={32} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-iberia-dark mb-3">Спасибо за заявку!</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Каталог топ-15 проектов уже готовится к отправке. Наш специалист свяжется с вами в ближайшее время и ответит на все вопросы.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="bg-iberia-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-[#e26e60] transition-colors"
            >
              Закрыть
            </button>
          </div>
        )}
        {!submitted && (<>
        {/* Шапка */}
        <div className="bg-[#eef4fb] px-6 py-4 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <Icon name="ClipboardList" size={22} className="text-iberia-orange mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700 leading-snug">
              Ответьте на {TOTAL} вопроса и получите каталог топ-15 лучших проектов Батуми!
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-sm font-semibold text-gray-600">{step + 1}/{TOTAL}</span>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600">
              <Icon name="X" size={18} />
            </button>
          </div>
        </div>

        {/* Прогресс-бар */}
        <div className="h-1 bg-gray-200">
          <div
            className="h-1 bg-iberia-dark transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Контент */}
        <div className="px-6 py-8 min-h-[280px]">
          <p className="text-lg font-medium text-gray-800 mb-6">{current.title}</p>

          {current.type === 'phone' ? (
            <div>
              <div className={`flex items-center border-2 rounded-full px-5 py-3 focus-within:border-iberia-orange transition-colors ${phoneError ? 'border-red-400' : 'border-gray-200'}`}>
                <span className="text-lg mr-2">🇷🇺</span>
                <span className="text-gray-500 mr-2">+7</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setPhoneError(false); }}
                  placeholder="(000) 000-00-00"
                  className="flex-1 outline-none text-gray-800 bg-transparent"
                />
              </div>
              {phoneError && <p className="text-red-500 text-sm mt-2 pl-2">Введите корректный номер телефона</p>}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {current.options.map((option) => {
                const checked = selected.includes(option);
                return (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={`w-5 h-5 flex-shrink-0 border-2 flex items-center justify-center transition-colors ${
                        current.type === 'radio' ? 'rounded-full' : 'rounded'
                      } ${checked ? 'border-iberia-dark bg-iberia-dark' : 'border-gray-300 group-hover:border-iberia-dark'}`}
                      onClick={() => toggle(option)}
                    >
                      {checked && <Icon name="Check" size={12} className="text-white" />}
                    </div>
                    <span className="text-gray-700" onClick={() => toggle(option)}>{option}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* Футер */}
        <div className="px-6 pb-6 flex items-center justify-between">
          <button
            onClick={() => step > 0 ? setStep(step - 1) : setOpen(false)}
            className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1"
          >
            <Icon name="ArrowLeft" size={14} />
            НАЗАД
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 bg-iberia-orange text-white font-semibold px-7 py-3 rounded-full hover:bg-[#e26e60] transition-colors uppercase text-sm"
          >
            {isLast ? 'ПОЛУЧИТЬ КАТАЛОГ' : isSecondToLast ? 'ПОСЛЕДНИЙ ШАГ' : 'ДАЛЕЕ'}
            {!isLast && <Icon name="ArrowRight" size={14} />}
          </button>
        </div>
        </>)}
      </div>
    </div>
  );
};

export default QuizModal;