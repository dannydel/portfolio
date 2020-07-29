import React from 'react';

/**
 * Toaster stateless component.
 */
const Toaster = () => {
  return <div id='toast-container'></div>;
};

/**
 * Presents the toaster message to the user.
 * @param {string} type
 * @param {string} message
 */
const toast = (type, message) => {
  const toaster = document.getElementById('toast-container');
  toaster.classList.add(type);
  toaster.innerHTML = message;

  setTimeout(() => {
    toaster.classList.remove(type);
    toaster.innerHTML = '';
  }, 3000);
};

export { Toaster, toast };
