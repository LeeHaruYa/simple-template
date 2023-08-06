import { createI18n } from 'vue-i18n';
import en from './en-US';
import cn from './zh-CN';
import es from './es-ES';

export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
  { label: 'Español', value: 'es-ES' },
];
const defaultLocale = localStorage.getItem('arco-locale') || 'zh-CN';

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en-US',
  legacy: false,
  allowComposition: true,
  messages: {
    'en-US': en,
    'zh-CN': cn,
    'es-ES': es,
  },
});

export default i18n;
