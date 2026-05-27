import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const PHOTO = 'https://cdn.poehali.dev/projects/74f1ecd7-61ba-46bf-89dc-14348c0bc87a/bucket/6c9786ba-13bc-4bc0-8f40-24497a883f15.jpg';

const MESSENGERS = ['Whatsapp', 'Telegram', 'Звонок'];

export function openConsult() {
  window.dispatchEvent(new CustomEvent('open-consult'));
}

const isPhoneValid = (p: string) => {
  const digits = p.replace(/\D/g, '');
  return digits.length === 10;
};

const formatPhone = (raw: string) => {
  let digits = raw.replace(/\D/g, '');
  if (digits.startsWith('7') || digits.startsWith('8')) digits = digits.slice(1);
  digits = digits.slice(0, 10);
  let result = '';
  if (digits.length > 0) result += '(' + digits.slice(0, 3);
  if (digits.length >= 4) result += ') ' + digits.slice(3, 6);
  if (digits.length >= 7) result += '-' + digits.slice(6, 8);
  if (digits.length >= 9) result += '-' + digits.slice(8, 10);
  return result;
};

const ConsultModal = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => {
      setOpen(true); setSelected(''); setPhone(''); setPhoneError(false); setSubmitted(false);
      if (typeof window.ym === 'function') window.ym(109281441, 'reachGoal', 'consalt_open');
    };
    window.addEventListener('open-consult', handler);
    return () => window.removeEventListener('open-consult', handler);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center" onClick={() => setOpen(false)}>
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="relative bg-white w-full sm:max-w-sm rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Фото */}
        <div className="relative h-52 overflow-hidden bg-gray-100">
          <img
            src={PHOTO}
            alt="Георгий Сагинадзе"
            className="w-full h-full object-cover object-top"
          />
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition"
          >
            <Icon name="X" size={16} />
          </button>
          {/* Подпись */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black/60 to-transparent">
            <p className="text-white text-sm font-semibold">Георгий Сагинадзе</p>
            <p className="text-white/80 text-xs">Основатель Saginadze Estate</p>
          </div>
        </div>

        {/* Контент */}
        <div className="px-5 py-5">
          <h2 className="text-lg font-bold text-iberia-dark text-center mb-1">
            Получите консультацию от эксперта недвижимости!
          </h2>
          <p className="text-sm text-gray-500 text-center mb-5">
            Мы проконсультируем Вас по всем вопросам приобретения недвижимости
          </p>

          <p className="text-sm font-semibold text-iberia-dark mb-3">Выберите как с Вами связаться:</p>
          <div className="flex flex-col gap-3 mb-5">
            {MESSENGERS.map((m) => (
              <label key={m} className="flex items-center gap-3 cursor-pointer">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    selected === m ? 'border-iberia-orange bg-iberia-orange' : 'border-gray-300 hover:border-iberia-orange'
                  }`}
                  onClick={() => setSelected(m)}
                >
                  {selected === m && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <span className="text-sm text-gray-700" onClick={() => setSelected(m)}>{m}</span>
              </label>
            ))}
          </div>

          {/* Телефон */}
          <div className={`flex items-center border-2 rounded-full px-5 py-3 focus-within:border-iberia-orange transition-colors mb-1 ${phoneError ? 'border-red-400' : 'border-gray-200'}`}>
            <span className="text-lg mr-2">🇷🇺</span>
            <span className="text-gray-400 mr-1 text-sm">+7</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => { setPhone(formatPhone(e.target.value)); setPhoneError(false); }}
              placeholder="(000) 000-00-00"
              className="flex-1 outline-none text-gray-800 bg-transparent text-sm"
            />
          </div>
          {phoneError && <p className="text-red-500 text-xs mb-3 pl-2">Введите корректный номер телефона</p>}
          {!phoneError && <div className="mb-3" />}

          <button
            onClick={() => {
              if (!isPhoneValid(phone)) { setPhoneError(true); return; }
              if (typeof window.ym === 'function') window.ym(109281441, 'reachGoal', 'consalt_goal');
              fetch('https://functions.poehali.dev/2fd7767f-03cc-4200-ad29-5888ffc15e92', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ source: 'consult', phone, messenger: selected }),
              }).catch(() => {});
              setSubmitted(true);
            }}
            className="w-full bg-iberia-orange text-white font-bold py-3.5 rounded-full hover:bg-[#e26e60] transition-colors uppercase text-sm tracking-wide"
          >
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </button>
        </div>

        {/* Экран успеха */}
        {submitted && (
          <div className="absolute inset-0 bg-white flex flex-col items-center justify-center px-8 py-10 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
              <Icon name="Check" size={32} className="text-green-500" />
            </div>
            <h2 className="text-xl font-bold text-iberia-dark mb-3">Спасибо за обращение!</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Ваша заявка принята. Георгий свяжется с вами в ближайшее время и проведёт персональную консультацию по всем вопросам.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="bg-iberia-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-[#e26e60] transition-colors"
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultModal;