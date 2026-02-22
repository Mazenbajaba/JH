'use client';

import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    // Load Tajawal Font
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Load n8n Chat CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Inject Custom Styles
    const style = document.createElement('style');
    style.innerHTML = `
      :root {
        --chat--color-primary: #1e3a8a; /* أزرق رئيسي */
        --chat--color-primary-shade-50: #1e40af;
        --chat--color-primary-shade-100: #1e429f;

        --chat--color-secondary: #0f172a; /* خلفية المستخدم */
        --chat--color-secondary-shade-50: #1e293b;

        --chat--color-white: #ffffff;
        --chat--color-light: #1a1a1a;
        --chat--color-light-shade-50: #111827;
        --chat--color-light-shade-100: #1f2937;

        --chat--color-medium: #2c2c2c;
        --chat--color-dark: #000000;

        --chat--message--bot--background: var(--chat--color-primary);
        --chat--message--bot--color: var(--chat--color-white);
        --chat--message--user--background: var(--chat--color-secondary);
        --chat--message--user--color: var(--chat--color-white);

        --chat--toggle--background: var(--chat--color-primary);
        --chat--toggle--hover--background: var(--chat--color-primary-shade-50);
        --chat--toggle--active--background: var(--chat--color-primary-shade-100);
        --chat--toggle--color: var(--chat--color-white);

        --chat--header--background: var(--chat--color-dark);
        --chat--header--color: var(--chat--color-white);
      }

      /* دعم الاتجاه RTL */
      #n8n-chat,
      .n8n-chat-container,
      .n8n-chat-bubble,
      .n8n-chat-user-bubble,
      .n8n-chat-footer input {
        direction: rtl !important;
        text-align: right !important;
        font-family: 'Tajawal', sans-serif !important;
      }
    `;
    document.head.appendChild(style);

    // Initialize Chat
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      createChat({
        webhookUrl: 'https://live-salmon-annually.ngrok-free.app/webhook/e3218886-282e-4031-88fe-d4efecc95686/chat',
        defaultLanguage: 'ar',
        initialMessages: [
          'مرحبًا 👋، كيف ممكن أساعدك؟'
        ],
        i18n: {
          ar: {
            title: 'أهلاً وسهلاً 👋',
            subtitle: 'ابدأ المحادثة، متواجدين على مدار الساعة لخدمتك.',
            inputPlaceholder: 'اكتب سؤالك...',
            getStarted: 'بدء المحادثة'
          }
        }
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(link);
      document.head.removeChild(style);
      document.body.removeChild(script);
      const n8nChat = document.querySelector('#n8n-chat');
      if (n8nChat) n8nChat.remove();
    };
  }, []);

  return <div id="n8n-chat"></div>;
}
