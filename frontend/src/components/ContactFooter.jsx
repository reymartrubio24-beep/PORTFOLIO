import React from 'react';

const ContactFooter = () => {
  return (
    <section className="py-6 px-6 max-w-6xl mx-auto bg-white dark:bg-black transition-colors duration-500 border-t border-gray-100 dark:border-zinc-900">
      {/* Footer Copyright at the bottom of the content flow */}
      <footer className="flex flex-col justify-center items-center text-base font-bold opacity-60">
         <p className="text-gray-900 dark:text-zinc-500">© 2026 Rey-Dev. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default ContactFooter;
