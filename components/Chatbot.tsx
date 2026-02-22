'use client';

import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.innerHTML = `
      :root {
        --chat--color-primary: #d4af37;
        --chat--color-primary-shade-50: #b8962f;
        --chat--color-primary-shade-100: #a8905c;
        --chat--color-secondary: #1a1a1a;
        --chat--color-secondary-shade-50: #2a2a2a;
        --chat--color-white: #f5f0e8;
        --chat--color-light: #141414;
        --chat--color-light-shade-50: #1a1a1a;
        --chat--color-light-shade-100: #2a2a2a;
        --chat--color-medium: #3a3a3a;
        --chat--color-dark: #0a0a0a;
        --chat--message--bot--background: #1a1a1a;
        --chat--message--bot--color: #f5f0e8;
        --chat--message--user--background: #d4af37;
        --chat--message--user--color: #0a0a0a;
        --chat--toggle--background: #d4af37;
        --chat--toggle--hover--background: #e8c547;
        --chat--toggle--active--background: #b8962f;
        --chat--toggle--color: #0a0a0a;
        --chat--header--background: #0a0a0a;
        --chat--header--color: #f5f0e8;
      }

      #n8n-chat,
      .n8n-chat-container,
      .n8n-chat-bubble,
      .n8n-chat-user-bubble,
      .n8n-chat-footer input {
        direction: rtl !important;
        text-align: right !important;
        font-family: 'Tajawal', sans-serif !important;
      }

      .n8n-chat-window {
        border: 1px solid rgba(212, 175, 55, 0.3) !important;
        border-radius: 16px !important;
        overflow: hidden;
      }

      .n8n-chat-header {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%) !important;
        border-bottom: 1px solid rgba(212, 175, 55, 0.2) !important;
      }

      .n8n-chat-toggle-button {
        background: linear-gradient(135deg, #d4af37 0%, #e8c547 100%) !important;
        box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4) !important;
      }
    `;
    document.head.appendChild(style);

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
