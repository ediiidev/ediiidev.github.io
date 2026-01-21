import React, { useState } from 'react';

const languages = [
  { code: 'es', label: 'Español', flag: '🇪🇸', url: '/' },
  { code: 'en', label: 'English', flag: '🇺🇸', url: '/en' },
  { code: 'pt', label: 'Português', flag: '🇧🇷', url: '/pt' }
];

export default function LanguagePicker() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all text-sm"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="text-lg">🌐</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop para cerrar al hacer click fuera */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          ></div>
          
          <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-white/20 shadow-2xl z-20 overflow-hidden">
            <div className="py-1">
              {languages.map((lang) => (
                <a
                  key={lang.code}
                  href={lang.url}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary/10 transition-colors"
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}