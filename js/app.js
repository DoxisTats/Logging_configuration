/* Logging configuration – Doxis Business Studio prototype
   Plain JavaScript, no dependencies. State lives in `state`; render() redraws the page. */
(function () {
  'use strict';

  /* ---------- Icons (Untitled UI outlines, 24×24 stroke) ---------- */
  var P = {
    menu: 'M3 12L21 12M3 6L21 6M3 18L21 18',
    search: 'M21 21L17.5 17.5M20 11.5C20 16.19 16.19 20 11.5 20C6.81 20 3 16.19 3 11.5C3 6.81 6.81 3 11.5 3C16.19 3 20 6.81 20 11.5',
    bell: 'M18 8A6 6 0 0 0 6 8C6 11.09 5.22 13.21 4.35 14.61C3.62 15.79 3.25 16.38 3.26 16.54C3.28 16.72 3.31 16.79 3.46 16.9C3.59 17 4.19 17 5.39 17H18.61C19.81 17 20.41 17 20.54 16.9C20.69 16.79 20.72 16.72 20.74 16.54C20.75 16.38 20.38 15.79 19.65 14.61C18.78 13.21 18 11.09 18 8M14.65 21C13.94 21.62 13.01 22 12 22C10.99 22 10.06 21.62 9.35 21',
    help: 'M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12M9.09 9C9.33 8.33 9.79 7.77 10.4 7.41C11.01 7.05 11.73 6.92 12.43 7.04C13.13 7.16 13.76 7.52 14.22 8.06C14.67 8.61 14.92 9.29 14.92 10C14.92 12 11.92 13 11.92 13M12 17L12.01 17',
    chevronDown: 'M6 9L12 15L18 9', chevronUp: 'M18 15L12 9L6 15', chevronRight: 'M9 18L15 12L9 6',
    plus: 'M12 5V19M5 12H19',
    arrowUp: 'M12 19L12 5M5 12L12 5L19 12',
    arrowLeft: 'M19 12H5M12 19L5 12L12 5',
    edit: 'M18 10L14 6M2.5 21.5L5.88 21.12C6.3 21.08 6.5 21.05 6.7 20.99C6.87 20.94 7.04 20.86 7.19 20.76C7.36 20.65 7.51 20.5 7.8 20.2L21 7C22.1 5.9 22.1 4.1 21 3C19.9 1.9 18.1 1.9 17 3L3.8 16.2C3.5 16.49 3.35 16.64 3.24 16.81C3.14 16.96 3.06 17.13 3.01 17.3C2.95 17.5 2.92 17.7 2.88 18.12L2.5 21.5Z',
    trash: 'M16 6V5.2C16 4.08 16 3.52 15.78 3.09C15.59 2.72 15.28 2.41 14.91 2.22C14.48 2 13.92 2 12.8 2H11.2C10.08 2 9.52 2 9.09 2.22C8.72 2.41 8.41 2.72 8.22 3.09C8 3.52 8 4.08 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.88 19 19.72 18.67 20.36C18.39 20.93 17.93 21.39 17.36 21.67C16.72 22 15.88 22 14.2 22H9.8C8.12 22 7.28 22 6.64 21.67C6.07 21.39 5.61 20.93 5.33 20.36C5 19.72 5 18.88 5 17.2V6',
    info: 'M12 16V12M12 8H12.01M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z',
    lock: 'M17 10V8C17 5.24 14.76 3 12 3C9.24 3 7 5.24 7 8V10M12 14.5V16.5M8.8 21H15.2C16.88 21 17.72 21 18.36 20.67C18.93 20.39 19.39 19.93 19.67 19.36C20 18.72 20 17.88 20 16.2V14.8C20 13.12 20 12.28 19.67 11.64C19.39 11.07 18.93 10.61 18.36 10.33C17.72 10 16.88 10 15.2 10H8.8C7.12 10 6.28 10 5.64 10.33C5.07 10.61 4.61 11.07 4.33 11.64C4 12.28 4 13.12 4 14.8V16.2C4 17.88 4 18.72 4.33 19.36C4.61 19.93 5.07 20.39 5.64 20.67C6.28 21 7.12 21 8.8 21Z',
    warn: 'M12 9V13M12 17H12.01M10.62 3.89L2.39 18.11C1.93 18.9 1.71 19.29 1.74 19.62C1.77 19.9 1.91 20.16 2.14 20.33C2.41 20.53 2.86 20.53 3.77 20.53H20.23C21.14 20.53 21.59 20.53 21.86 20.33C22.09 20.16 22.23 19.9 22.26 19.62C22.29 19.29 22.07 18.9 21.61 18.11L13.38 3.89C12.92 3.1 12.69 2.71 12.4 2.58C12.14 2.46 11.86 2.46 11.6 2.58C11.31 2.71 11.08 3.1 10.62 3.89Z',
    alertCircle: 'M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12M12 8L12 12M12 16L12.01 16',
    close: 'M18 6L6 18M6 6L18 18',
    checkCircle: 'M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12M7.5 12L10.5 15L16.5 9',
    refresh: 'M16.25 19.36C12.18 21.71 6.99 20.32 4.64 16.25M20.45 12.89C20.18 15.5 18.7 17.95 16.25 19.36M4.64 16.25L4.39 15.82M7.75 4.64C11.82 2.29 17.01 3.68 19.36 7.75M3.55 11.11C3.82 8.5 5.3 6.05 7.75 4.64M19.36 7.75L19.61 8.18M3.49 18.07L4.23 15.33L6.96 16.07M17.04 7.93L19.77 8.67L20.51 5.93',
    terminal: 'M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.88 21 18.72 21 19.36 20.67C19.93 20.39 20.39 19.93 20.67 19.36C21 18.72 21 17.88 21 16.2V7.8C21 6.12 21 5.28 20.67 4.64C20.39 4.07 19.93 3.61 19.36 3.33C18.72 3 17.88 3 16.2 3H7.8C6.12 3 5.28 3 4.64 3.33C4.07 3.61 3.61 4.07 3.33 4.64C3 5.28 3 6.12 3 7.8V16.2C3 17.88 3 18.72 3.33 19.36C3.61 19.93 4.07 20.39 4.64 20.67C5.28 21 6.12 21 7.8 21Z',
    server: 'M5.5 7.5H18.5M18.5 14.5H5.5C3.57 14.5 2 12.93 2 11C2 9.07 3.57 7.5 5.5 7.5M22 11C22 12.93 20.43 14.5 18.5 14.5M18.5 7.5C20.43 7.5 22 9.07 22 11M18.5 21.5H5.5C3.57 21.5 2 19.93 2 18C2 16.07 3.57 14.5 5.5 14.5M22 18C22 19.93 20.43 21.5 18.5 21.5M6 11H6.01M6 18H6.01M12 11H18M12 18H18M2 10.5L2.47 6.7C2.66 5.22 2.75 4.47 3.1 3.91C3.41 3.42 3.86 3.02 4.39 2.78C4.99 2.5 5.74 2.5 7.24 2.5H16.76C18.26 2.5 19.01 2.5 19.61 2.78C20.14 3.02 20.59 3.42 20.9 3.91C21.25 4.47 21.34 5.22 21.53 6.7L22 10.5',
    save: 'M7 3V6.4C7 6.96 7 7.24 7.11 7.45C7.2 7.64 7.36 7.8 7.55 7.89C7.76 8 8.04 8 8.6 8H15.4C15.96 8 16.24 8 16.45 7.89C16.64 7.8 16.8 7.64 16.89 7.45C17 7.24 17 6.96 17 6.4V4M17 21V14.6C17 14.04 17 13.76 16.89 13.55C16.8 13.36 16.64 13.2 16.45 13.11C16.24 13 15.96 13 15.4 13H8.6C8.04 13 7.76 13 7.55 13.11C7.36 13.2 7.2 13.36 7.11 13.55C7 13.76 7 14.04 7 14.6V21M21 9.33V16.2C21 17.88 21 18.72 20.67 19.36C20.39 19.93 19.93 20.39 19.36 20.67C18.72 21 17.88 21 16.2 21H7.8C6.12 21 5.28 21 4.64 20.67C4.07 20.39 3.61 19.93 3.33 19.36C3 18.72 3 17.88 3 16.2V7.8C3 6.12 3 5.28 3.33 4.64C3.61 4.07 4.07 3.61 4.64 3.33C5.28 3 6.12 3 7.8 3H14.67C15.16 3 15.4 3 15.63 3.06C15.84 3.11 16.03 3.19 16.21 3.3C16.41 3.42 16.58 3.6 16.93 3.94L20.06 7.07C20.4 7.42 20.58 7.59 20.7 7.79C20.81 7.97 20.89 8.16 20.94 8.37C21 8.6 21 8.84 21 9.33Z',
    // Side menu
    home: 'M8 17H16M11.02 2.76L4.24 8.04C3.78 8.39 3.56 8.57 3.39 8.79C3.25 8.98 3.14 9.2 3.07 9.44C3 9.7 3 9.99 3 10.57V17.8C3 18.92 3 19.48 3.22 19.91C3.41 20.28 3.72 20.59 4.09 20.78C4.52 21 5.08 21 6.2 21H17.8C18.92 21 19.48 21 19.91 20.78C20.28 20.59 20.59 20.28 20.78 19.91C21 19.48 21 18.92 21 17.8V10.57C21 9.99 21 9.7 20.93 9.44C20.86 9.2 20.75 8.98 20.61 8.79C20.44 8.57 20.22 8.39 19.76 8.04L12.98 2.76C12.63 2.49 12.46 2.35 12.26 2.3C12.09 2.26 11.91 2.26 11.74 2.3C11.54 2.35 11.37 2.49 11.02 2.76',
    book: 'M12 21L11.9 20.85C11.21 19.81 10.86 19.29 10.4 18.91C9.99 18.58 9.52 18.33 9.02 18.17C8.45 18 7.83 18 6.57 18H5.2C4.08 18 3.52 18 3.09 17.78C2.72 17.59 2.41 17.28 2.22 16.91C2 16.48 2 15.92 2 14.8V6.2C2 5.08 2 4.52 2.22 4.09C2.41 3.72 2.72 3.41 3.09 3.22C3.52 3 4.08 3 5.2 3H5.6C7.84 3 8.96 3 9.82 3.44C10.57 3.82 11.18 4.43 11.56 5.18C12 6.04 12 7.16 12 9.4M12 21V9.4M12 21L12.1 20.85C12.79 19.81 13.14 19.29 13.6 18.91C14.01 18.58 14.48 18.33 14.98 18.17C15.55 18 16.17 18 17.43 18H18.8C19.92 18 20.48 18 20.91 17.78C21.28 17.59 21.59 17.28 21.78 16.91C22 16.48 22 15.92 22 14.8V6.2C22 5.08 22 4.52 21.78 4.09C21.59 3.72 21.28 3.41 20.91 3.22C20.48 3 19.92 3 18.8 3H18.4C16.16 3 15.04 3 14.18 3.44C13.43 3.82 12.82 4.43 12.44 5.18C12 6.04 12 7.16 12 9.4',
    grid: 'M3 3H10V10H3ZM14 3H21V10H14ZM14 14H21V21H14ZM3 14H10V21H3Z',
    intersect: 'M2 2H16V16H2ZM8 8H22V22H8Z',
    cpu: 'M9 2V4M15 2V4M9 20V22M15 20V22M20 9H22M20 14H22M2 9H4M2 14H4M8.8 20H15.2C16.88 20 17.72 20 18.36 19.67C18.93 19.39 19.39 18.93 19.67 18.36C20 17.72 20 16.88 20 15.2V8.8C20 7.12 20 6.28 19.67 5.64C19.39 5.07 18.93 4.61 18.36 4.33C17.72 4 16.88 4 15.2 4H8.8C7.12 4 6.28 4 5.64 4.33C5.07 4.61 4.61 5.07 4.33 5.64C4 6.28 4 7.12 4 8.8V15.2C4 16.88 4 17.72 4.33 18.36C4.61 18.93 5.07 19.39 5.64 19.67C6.28 20 7.12 20 8.8 20ZM9 9H15V15H9Z',
    tool: 'M6 6L10.5 10.5M6 6H3L2 3L3 2L6 3V6ZM12 15L17.5 20.5C18.33 21.33 19.67 21.33 20.5 20.5C21.33 19.67 21.33 18.33 20.5 17.5L15.98 12.98M19.26 2.74L16.63 5.37C16.24 5.76 16.04 5.96 15.96 6.19C15.9 6.39 15.9 6.61 15.96 6.81C16.04 7.04 16.24 7.24 16.63 7.63L16.87 7.87C17.26 8.26 17.46 8.46 17.69 8.54C17.89 8.6 18.11 8.6 18.31 8.54C18.54 8.46 18.74 8.26 19.13 7.87L21.59 5.41C21.85 6.05 22 6.76 22 7.5C22 10.54 19.54 13 16.5 13C16.13 13 15.78 12.96 15.43 12.9C14.94 12.8 14.7 12.75 14.55 12.77C14.4 12.78 14.32 12.81 14.18 12.88C14.05 12.95 13.92 13.08 13.66 13.34L6.5 20.5C5.67 21.33 4.33 21.33 3.5 20.5C2.67 19.67 2.67 18.33 3.5 17.5L10.66 10.34C10.92 10.08 11.05 9.95 11.12 9.82C11.19 9.68 11.22 9.6 11.23 9.45C11.25 9.3 11.2 9.06 11.1 8.57C11.04 8.22 11 7.87 11 7.5C11 4.46 13.46 2 16.5 2C17.51 2 18.45 2.27 19.26 2.74Z',
    data: 'M10 10.8C10 10.52 10.36 10 10.8 10H21.2C21.64 10 22 10.36 22 10.8V21.2C22 21.64 21.64 22 21.2 22H10.8C10.36 22 10 21.64 10 21.2V18.8M10 18H13.2C13.64 18 14 17.64 14 17.2V14.8C14 14.36 14.36 14 14.8 14H17.2C17.64 14 18 13.64 18 13.2V10.8M10 6.8C10 6.36 10.36 6 10.8 6H13.2C13.64 6 14 6.36 14 6.8V9.2C14 9.64 13.64 10 13.2 10H10.8C10.36 10 10 9.64 10 9.2V6.8ZM3 12.8C3 12.36 3.36 12 3.8 12H6.2C6.64 12 7 12.36 7 12.8V15.2C7 15.64 6.64 16 6.2 16H3.8C3.36 16 3 15.64 3 15.2V12.8ZM2 2.8C2 2.36 2.36 2 2.8 2H5.2C5.64 2 6 2.36 6 2.8V5.2C6 5.64 5.64 6 5.2 6H2.8C2.36 6 2 5.64 2 5.2V2.8Z',
    automation: 'M13.99 4.25A8 8 0 0 1 19.75 10.01M19.75 13.99A8 8 0 0 1 13.99 19.75M10.01 19.75A8 8 0 0 1 4.25 13.99M4.25 10.01A8 8 0 0 1 10.01 4.25M14 4A2 2 0 1 1 10 4A2 2 0 1 1 14 4ZM22 12A2 2 0 1 1 18 12A2 2 0 1 1 22 12ZM14 20A2 2 0 1 1 10 20A2 2 0 1 1 14 20ZM6 12A2 2 0 1 1 2 12A2 2 0 1 1 6 12Z',
    file: 'M14 11H8M10 15H8M16 7H8M20 6.8V17.2C20 18.88 20 19.72 19.67 20.36C19.39 20.93 18.93 21.39 18.36 21.67C17.72 22 16.88 22 15.2 22H8.8C7.12 22 6.28 22 5.64 21.67C5.07 21.39 4.61 20.93 4.33 20.36C4 19.72 4 18.88 4 17.2V6.8C4 5.12 4 4.28 4.33 3.64C4.61 3.07 5.07 2.61 5.64 2.33C6.28 2 7.12 2 8.8 2H15.2C16.88 2 17.72 2 18.36 2.33C18.93 2.61 19.39 3.07 19.67 3.64C20 4.28 20 5.12 20 6.8Z',
    user: 'M20 21C20 19.6 20 18.91 19.83 18.34C19.44 17.06 18.44 16.06 17.16 15.67C16.59 15.5 15.9 15.5 14.5 15.5H9.5C8.1 15.5 7.41 15.5 6.84 15.67C5.56 16.06 4.56 17.06 4.17 18.34C4 18.91 4 19.6 4 21M16.5 7.5C16.5 9.99 14.49 12 12 12C9.51 12 7.5 9.99 7.5 7.5C7.5 5.01 9.51 3 12 3C14.49 3 16.5 5.01 16.5 7.5Z',
    users: 'M22 21V19C22 17.14 20.73 15.57 19 15.13M15.5 3.29C16.97 3.88 18 5.32 18 7C18 8.68 16.97 10.12 15.5 10.71M17 21C17 19.14 17 18.2 16.7 17.47C16.29 16.49 15.51 15.71 14.53 15.3C13.8 15 12.86 15 11 15H8C6.14 15 5.2 15 4.47 15.3C3.49 15.71 2.71 16.49 2.3 17.47C2 18.2 2 19.14 2 21M13.5 7C13.5 9.21 11.71 11 9.5 11C7.29 11 5.5 9.21 5.5 7C5.5 4.79 7.29 3 9.5 3C11.71 3 13.5 4.79 13.5 7Z',
    layers: 'M2 14.5L12 19.5L22 14.5M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z',
    shield: 'M11.3 21.61C11.52 21.74 11.63 21.81 11.79 21.84C11.91 21.87 12.09 21.87 12.21 21.84C12.37 21.81 12.48 21.74 12.7 21.61C14.65 20.48 20 16.91 20 12V7.22C20 6.42 20 6.02 19.87 5.67C19.75 5.37 19.57 5.1 19.32 4.89C19.05 4.64 18.67 4.5 17.92 4.22L12.56 2.21C12.35 2.13 12.25 2.09 12.14 2.08C12.05 2.06 11.95 2.06 11.86 2.08C11.75 2.09 11.65 2.13 11.44 2.21L6.08 4.22C5.33 4.5 4.95 4.64 4.68 4.89C4.43 5.1 4.25 5.37 4.13 5.67C4 6.02 4 6.42 4 7.22V12C4 16.91 9.35 20.48 11.3 21.61Z',
    clock: 'M22.7 11.5L20.7 13.5L18.7 11.5M20.95 13C20.98 12.67 21 12.34 21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C14.83 21 17.35 19.7 19 17.66M12 7V12L15 14',
    ext: 'M21 9V3H15M21 3L12 12M10 3H7.8C6.12 3 5.28 3 4.64 3.33C4.07 3.61 3.61 4.07 3.33 4.64C3 5.28 3 6.12 3 7.8V16.2C3 17.88 3 18.72 3.33 19.36C3.61 19.93 4.07 20.39 4.64 20.67C5.28 21 6.12 21 7.8 21H16.2C17.88 21 18.72 21 19.36 20.67C19.93 20.39 20.39 19.93 20.67 19.36C21 18.72 21 17.88 21 16.2V14'
  };
  function icon(name, size, cls) {
    size = size || 20;
    return '<svg class="icon' + (cls ? ' ' + cls : '') + '" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" aria-hidden="true"><path d="' + P[name] + '"/></svg>';
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* ---------- Constants ---------- */
  var AGENT = 'HRCheckWorkPermit';
  var LEVELS = ['off', 'fatal', 'error', 'warn', 'info', 'debug', 'trace', 'all'];
  var VERBOSE = { debug: 1, trace: 1, all: 1 };
  var UNIT_MIN = { minutes: 1, hours: 60, days: 1440 };
  var MAX_MIN = 5 * 1440; // Placeholder: maximum lifetime not confirmed (open question)
  var DEFAULT_FORM = { logger: '', level: 'debug', amount: '12', unit: 'hours' };
  var MODES = [
    ['populated', 'Loggers configured'], ['empty', 'Empty'], ['readonly', 'Read-only (no permission)'], ['loading', 'Loading'],
    ['error', 'Server error'], ['unsupported', 'Unsupported CSB version'], ['unsaved', 'Unsaved agent definition']
  ];
  var NAV = [
    { title: '', items: [['Home', 'home'], ['Library', 'book'], ['Applications', 'grid'], ['Integrations', 'intersect', 'chevronDown'], ['AI Studio', 'cpu', 'chevronDown']] },
    { title: 'Configuration', items: [['General', 'tool', 'chevronDown'], ['Data model', 'data', 'chevronDown'], ['Search', 'search', 'chevronDown'], ['Automation', 'automation', 'chevronUp'], ['>Agents', 'current'], ['>File import (FIPS)'], ['Templates', 'file', 'ext']] },
    { title: 'Security', items: [['Users', 'user'], ['Groups', 'users'], ['Units & roles', 'layers'], ['Access rules', 'lock']] },
    { title: 'Compliance', items: [['Retention rules', 'shield']] },
    { title: 'Administration', items: [['Jobs', 'clock', 'chevronDown']] }
  ];

  function newId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); });
  }
  function seedEntries() {
    var now = Date.now();
    return [
      { id: '8f3c2a71-5d4e-4b9a-a1c6-2e7f90b3d415', logger: 'com.ser.myagent', level: 'debug', exp: now + 705 * 60000 },
      { id: '3b9e6d02-c718-4f53-9e2a-7a41c5f8b960', logger: 'ROOT', level: 'warn', exp: now + 2880 * 60000 },
      { id: 'd61a4f8c-0b37-4e95-b2d8-95c3e1a7f024', logger: 'com.ser.hr.workpermit', level: 'trace', exp: now + 45 * 60000 }
    ];
  }

  /* ---------- State ---------- */
  var params = new URLSearchParams(location.search);
  var initialMode = params.get('state');
  if (!MODES.some(function (m) { return m[0] === initialMode; })) initialMode = 'populated';
  var state = {
    mode: initialMode, tab: 'logging', entries: [], q: '', sel: {},
    dialog: null, editing: null, form: Object.assign({}, DEFAULT_FORM), errors: {},
    toast: null, prev: null, navOpen: false, infoOpen: false, infoSuppressed: false
  };
  state.entries = (initialMode === 'populated' || initialMode === 'readonly') ? seedEntries() : [];

  var app = document.getElementById('app');
  var returnFocus = null;

  /* ---------- Helpers ---------- */
  // Log levels are shown in sentence case; the values sent to CSB stay lower case.
  function cap(l) { return l ? l.charAt(0).toUpperCase() + l.slice(1) : l; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fmtDate(ms) { var d = new Date(ms); return pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear() + ', ' + pad(d.getHours()) + ':' + pad(d.getMinutes()); }
  function canEdit() { return state.mode === 'populated' || state.mode === 'empty'; }
  function listMode() { return state.mode === 'populated' || state.mode === 'empty' || state.mode === 'readonly'; }
  function sortedEntries() { return state.entries.slice().sort(function (a, b) { return a.exp - b.exp; }); }
  function visibleRows() {
    var q = state.q.trim().toLowerCase();
    var now = Date.now(); // hide entries whose expiry has passed, even before the server removes them
    return sortedEntries().filter(function (e) { return e.exp > now && (!q || e.logger.toLowerCase().indexOf(q) >= 0); });
  }
  function selKeys() { return Object.keys(state.sel).filter(function (k) { return state.sel[k]; }); }
  function lifetimeMin(f) { return Math.round(Number(f.amount) * UNIT_MIN[f.unit]); }
  function amountValid(f) { var a = Number(f.amount); return f.amount !== '' && a > 0 && Math.floor(a) === a; }
  function set(patch) { Object.assign(state, patch); render(); }
  function toast(title, text, undoable) { return { toast: { title: title, text: text, undo: undoable !== false }, prev: state.entries.slice() }; }

  /* ---------- Render ---------- */
  function renderTopbar() {
    return '<header class="topbar">' +
      '<button type="button" class="menu-btn" data-action="nav-toggle" aria-label="Open menu" aria-expanded="' + state.navOpen + '" aria-controls="sidebar">' + icon('menu') + '</button>' +
      '<a class="brand" href="#"><img src="assets/doxis-logo.svg" alt="Doxis"><span>Business Studio</span></a>' +
      '<label class="topbar-search">' + icon('search') + '<span class="sr-only">Search Business Studio</span><input type="search" placeholder="Search"></label>' +
      '<div class="topbar-actions"><div class="icons">' +
        '<button type="button" class="icon-btn" aria-label="Notifications">' + icon('bell') + '</button>' +
        '<button type="button" class="icon-btn help-btn" aria-label="Help">' + icon('help') + '</button></div>' +
        '<button type="button" class="avatar" aria-label="Account"><img src="assets/avatar.jpg" alt=""></button>' +
      '</div></header>';
  }

  function renderNav() {
    var h = '<nav id="sidebar" class="sidebar' + (state.navOpen ? ' open' : '') + '" aria-label="Main">';
    NAV.forEach(function (g) {
      h += '<div class="nav-group">' + (g.title ? '<div class="nav-title">' + g.title + '</div>' : '');
      g.items.forEach(function (it) {
        if (it[0].charAt(0) === '>') {
          var cur = it[1] === 'current';
          h += '<div class="nav-item sub"><a href="#"' + (cur ? ' aria-current="page"' : '') + '><span class="label">' + esc(it[0].slice(1)) + '</span></a></div>';
        } else {
          h += '<div class="nav-item"><a href="#">' + icon(it[1], 20, 'lead') + '<span class="label">' + esc(it[0]) + '</span>' + (it[2] ? icon(it[2], 16, 'trail') : '') + '</a></div>';
        }
      });
      h += '</div>';
    });
    return h + '</nav><button type="button" class="nav-scrim' + (state.navOpen ? ' open' : '') + '" data-action="nav-close" aria-label="Close menu" tabindex="-1"></button>';
  }

  function renderHeader() {
    var tabs = [['properties', 'Properties'], ['parameters', 'Agent parameters'], ['triggers', 'Triggers'], ['logging', 'Logging configuration']];
    return '<div class="page-header">' +
      '<a class="back-link" href="#" data-action="back">' + icon('arrowLeft') + 'Back</a>' +
      '<div class="title-row"><h1>' + AGENT + '</h1><div class="actions">' +
        '<button type="button" class="btn btn-lg" disabled>Reset changes</button>' +
        '<button type="button" class="btn btn-primary btn-lg" disabled>Save</button></div></div>' +
      '<div class="editor-tabs" role="tablist" aria-label="Agent definition">' +
        tabs.map(function (t) {
          var on = state.tab === t[0];
          return '<button type="button" class="editor-tab" role="tab" id="tab-' + t[0] + '" aria-controls="panel" aria-selected="' + on + '" tabindex="' + (on ? 0 : -1) + '" data-action="tab" data-v="' + t[0] + '">' + t[1] + '</button>';
        }).join('') +
      '</div></div>';
  }

  function renderLogging() {
    var h = '';
    if (state.mode === 'readonly') h += '<div class="note">' + icon('lock') + '<span>You can view these loggers but not change them. Changing them needs the permission to update the logging configuration. Ask an administrator.</span></div>';

    h += '<section class="card" aria-labelledby="loggers-title">';
    h += '<div class="toolbar">' +
      '<div class="card-title"><h2 id="loggers-title">Loggers</h2>' +
        '<span class="toggletip' + (state.infoSuppressed ? ' suppressed' : '') + '"><button type="button" id="info-btn" class="info-btn" aria-label="About loggers" aria-describedby="loggers-info" aria-expanded="' + state.infoOpen + '" data-action="info">' + icon('info', 18) + '</button>' +
        '<span class="toggletip-bubble' + (state.infoOpen ? ' open' : '') + '" id="loggers-info" role="tooltip">Log levels set here apply only to this agent definition, on top of the global logging configuration, and expire automatically. Running agents pick up changes within about 10 seconds.</span></span></div>';
    if (listMode()) {
      h += '<div class="toolbar-right">' +
          '<label class="field-search">' + icon('search') + '<span class="sr-only">Search loggers</span><input id="q" type="search" placeholder="Search" value="' + esc(state.q) + '" data-input="q" autocomplete="off"></label>' +
          '<button type="button" class="btn btn-icon" id="reload-btn" aria-label="Reload" title="Reload" data-action="refresh">' + icon('refresh') + '</button>' +
          (canEdit() ? '<button type="button" class="btn btn-icon" id="add-btn" aria-label="Add logger" title="Add logger" data-action="add">' + icon('plus') + '</button>' : '') +
        '</div>';
    }
    h += '</div>';

    if (state.mode === 'loading') {
      h += '<div role="status" aria-label="Loading loggers" style="border-top:1px solid var(--border-subtle)">' +
        [1, 2, 3].map(function () { return '<div class="skeleton-row"><span style="width:16px"></span><span style="width:60%"></span><span style="width:56px"></span><span style="width:70%"></span><span style="width:80%"></span></div>'; }).join('') + '</div>';
    } else if (state.mode === 'error') {
      h += stateBlock('alertCircle', true, 'Loggers couldn’t be loaded', 'The connection to the server was interrupted. Try again in a moment.', '<button type="button" class="btn" data-action="retry">' + icon('refresh') + 'Try again</button>');
    } else if (state.mode === 'unsupported') {
      h += stateBlock('server', false, 'Logging configuration isn’t available', 'Setting log levels per agent definition requires CSB [15.0.0] or later. Ask your administrator to update CSB.');
    } else if (state.mode === 'unsaved') {
      h += stateBlock('save', false, 'Save the agent definition first', 'You can add loggers after the agent definition has been saved.');
    } else if (!state.entries.length) {
      h += stateBlock('terminal', false, 'No custom logging configured', 'Default logging applies. Add a logger to raise or lower its log level for a limited time.',
        canEdit() ? '<button type="button" class="btn" data-action="add">' + icon('plus') + 'Add logger</button>' : '');
    } else {
      h += renderTable();
    }
    return h + '</section>';
  }

  function stateBlock(ic, isError, title, text, action) {
    return '<div class="state"><span class="featured' + (isError ? ' error' : '') + '">' + icon(ic, 24) + '</span><strong>' + title + '</strong><span>' + text + '</span>' + (action || '') + '</div>';
  }

  function renderTable() {
    var rows = visibleRows();
    var edit = canEdit();
    var keys = selKeys();
    var cols = (edit ? '48px ' : '') + 'minmax(240px, 1fr) 130px 190px 330px';
    var h = '<div class="bulk">';
    if (!keys.length) {
      h += '<span class="sel"><strong>' + rows.length + '</strong> ' + (rows.length === 1 ? 'logger' : 'loggers') + '</span>';
    } else {
      h += '<span class="sel"><strong>' + keys.length + '</strong> ' + (keys.length === 1 ? 'item' : 'items') + ' selected</span><span class="spacer"></span>' +
        (keys.length === 1 ? '<button type="button" class="link-btn" data-action="edit-selected">' + icon('edit') + 'Edit</button>' : '') +
        '<button type="button" class="link-btn" data-action="remove-selected">' + icon('trash') + 'Remove</button>';
    }
    h += '</div>';

    if (!rows.length) {
      return h + '<div class="state"><strong>No loggers found</strong><span>No logger name contains “' + esc(state.q) + '”.</span><button type="button" class="btn" data-action="clear-q">Clear search</button></div>';
    }
    var all = rows.every(function (e) { return state.sel[e.logger]; });
    var some = !all && rows.some(function (e) { return state.sel[e.logger]; });
    h += '<div class="table-wrap"><div class="table" role="table" aria-labelledby="loggers-title" style="--cols:' + cols + '">' +
      '<div class="tr thead" role="row">' +
        (edit ? '<div class="th cbcell" role="columnheader"><input type="checkbox" class="cb" id="cb-all" aria-label="Select all loggers" data-action="toggle-all"' + (all ? ' checked' : '') + (some ? ' data-indeterminate="1"' : '') + '></div>' : '') +
        '<div class="th" role="columnheader">Logger</div><div class="th" role="columnheader">Log level</div>' +
        '<div class="th" role="columnheader" aria-sort="ascending">Expiration Date' + icon('arrowUp', 16) + '</div><div class="th" role="columnheader">ID</div></div>';
    rows.forEach(function (e, i) {
      var on = !!state.sel[e.logger];
      var v = VERBOSE[e.level];
      h += '<div class="tr row' + (on ? ' selected' : '') + '" role="row" data-row="' + i + '" data-logger="' + esc(e.logger) + '">' +
        (edit ? '<div class="td cbcell" role="cell"><input type="checkbox" class="cb" aria-label="Select ' + esc(e.logger) + '" data-action="toggle-row" data-logger="' + esc(e.logger) + '"' + (on ? ' checked' : '') + '></div>' : '') +
        '<div class="td ellipsis" role="cell" title="' + esc(e.logger) + '">' + esc(e.logger) + '</div>' +
        '<div class="td" role="cell"><span class="badge level' + (v ? ' verbose' : '') + '"' + (v ? ' title="Writes a lot of log output"' : '') + '>' + (v ? icon('warn', 12) : '') + cap(e.level) + '</span></div>' +
        '<div class="td num" role="cell">' + fmtDate(e.exp) + '</div>' +
        '<div class="td num" role="cell">' + esc(e.id) + '</div></div>';
    });
    return h + '</div></div>';
  }

  function renderFormDialog() {
    var f = state.form, er = state.errors, isEdit = !!state.editing;
    var name = f.logger.trim();
    var existing = !isEdit && state.entries.filter(function (x) { return x.logger === name; })[0];
    var life = lifetimeMin(f);
    var preview = amountValid(f) && life <= MAX_MIN
      ? 'Expires on ' + fmtDate(Date.now() + life * 60000) + '. Default logging applies again afterwards.'
      : 'Default logging applies again when the entry expires.';
    return '<div class="scrim" data-action="scrim">' +
      '<form class="dialog" role="dialog" aria-modal="true" aria-labelledby="form-title" aria-describedby="form-desc" data-form="logger" novalidate>' +
        '<div class="dialog-head"><span class="featured-icon">' + icon('terminal', 24) + '</span>' +
          '<div><h2 id="form-title">' + (isEdit ? 'Edit logger' : 'Add logger') + '</h2><p id="form-desc">Set a log level for a logger of ' + AGENT + '.</p></div></div>' +
        '<button type="button" class="close" aria-label="Close" data-action="close-dialog">' + icon('close', 24) + '</button>' +
        '<div class="dialog-body">' +
          '<div class="field"><label for="f-logger">Logger <span class="req" aria-hidden="true">*</span></label>' +
            '<input id="f-logger" class="input" type="text" autocomplete="off" spellcheck="false" placeholder="com.ser.myagent" value="' + esc(f.logger) + '" data-input="logger" aria-required="true" aria-invalid="' + !!er.logger + '" aria-describedby="f-logger-err f-logger-hint"' + (isEdit ? ' disabled' : '') + '>' +
            (er.logger ? '<span class="err" id="f-logger-err">' + icon('alertCircle', 16) + er.logger + '</span>' : '') +
            '<span class="hint" id="f-logger-hint">Fully qualified logger name. Use ROOT for all loggers of the agent.</span>' +
            (existing ? '<div class="inline-note" role="status">' + icon('info') + '<span><strong>' + esc(existing.logger) + '</strong> already has the log level ' + cap(existing.level) + ' until ' + fmtDate(existing.exp) + '. Adding it again replaces that entry.</span></div>' : '') +
          '</div>' +
          '<div class="field"><label for="f-level">Log level <span class="req" aria-hidden="true">*</span></label>' +
            '<span class="select-wrap"><select id="f-level" class="select" data-input="level" aria-describedby="f-level-warn">' +
              LEVELS.map(function (l) { return '<option value="' + l + '"' + (l === f.level ? ' selected' : '') + '>' + cap(l) + '</option>'; }).join('') +
            '</select>' + icon('chevronDown') + '</span>' +
            (VERBOSE[f.level] ? '<span class="warn" id="f-level-warn">' + icon('warn', 16) + cap(f.level) + ' writes a lot of log output. Keep the lifetime short.</span>' : '') +
          '</div>' +
          '<div class="field" role="group" aria-labelledby="f-life-label"><span class="label" id="f-life-label">Expires after <span class="req" aria-hidden="true">*</span></span>' +
            '<div class="life-row"><input id="f-amount" class="input" type="number" min="1" step="1" inputmode="numeric" aria-label="Lifetime" value="' + esc(f.amount) + '" data-input="amount" aria-invalid="' + !!er.amount + '" aria-describedby="f-amount-err f-amount-hint">' +
              '<span class="select-wrap"><select id="f-unit" class="select" aria-label="Unit" data-input="unit">' +
                ['minutes', 'hours', 'days'].map(function (u) { return '<option value="' + u + '"' + (u === f.unit ? ' selected' : '') + '>' + u + '</option>'; }).join('') +
              '</select>' + icon('chevronDown') + '</span></div>' +
            (er.amount ? '<span class="err" id="f-amount-err">' + icon('alertCircle', 16) + er.amount + '</span>' : '') +
            '<span class="hint" id="f-amount-hint">' + preview + ' The default lifetime is 12 hours.</span>' +
          '</div>' +
        '</div>' +
        '<div class="dialog-foot"><button type="button" class="btn btn-lg" data-action="close-dialog">Cancel</button>' +
          '<button type="submit" class="btn btn-primary btn-lg">' + (isEdit ? 'Save changes' : 'Add logger') + '</button></div>' +
      '</form></div>';
  }

  function renderRemoveAllDialog() {
    var n = state.entries.length;
    return '<div class="scrim" data-action="scrim">' +
      '<div class="dialog sm" role="alertdialog" aria-modal="true" aria-labelledby="ra-title" aria-describedby="ra-text">' +
        '<div class="dialog-head"><span class="featured-icon danger">' + icon('trash', 24) + '</span>' +
          '<div><h2 id="ra-title">Remove all loggers?</h2><p id="ra-text">This removes ' + n + (n === 1 ? ' logger entry' : ' logger entries') + ' from ' + AGENT + '. Default logging applies again within about 10 seconds.</p></div></div>' +
        '<button type="button" class="close" aria-label="Close" data-action="close-dialog">' + icon('close', 24) + '</button>' +
        '<div class="dialog-foot"><button type="button" class="btn btn-lg" data-action="close-dialog" id="ra-cancel">Cancel</button>' +
          '<button type="button" class="btn btn-lg btn-destructive" data-action="remove-all">Remove all</button></div>' +
      '</div></div>';
  }

  function renderToast() {
    var t = state.toast;
    if (!t) return '';
    return '<div class="toast" role="status">' + icon('checkCircle') +
      '<div class="body"><strong>' + esc(t.title) + '</strong><span>' + esc(t.text) + '</span>' +
        '<div class="acts"><button type="button" class="link-btn gray" data-action="dismiss-toast">Dismiss</button>' +
        (t.undo ? '<button type="button" class="link-btn" data-action="undo">Undo</button>' : '') + '</div></div>' +
      '<button type="button" class="close" aria-label="Close notification" data-action="dismiss-toast">' + icon('close') + '</button></div>';
  }

  function renderProto() {
    return '<div class="proto"><label for="proto-state">Prototype state</label><select id="proto-state" data-input="proto">' +
      MODES.map(function (m) { return '<option value="' + m[0] + '"' + (m[0] === state.mode ? ' selected' : '') + '>' + m[1] + '</option>'; }).join('') + '</select></div>';
  }

  function render() {
    var active = document.activeElement;
    var focusId = active && active.id;
    var caret = focusId && typeof active.selectionStart === 'number' ? active.selectionStart : null;

    var panel = state.tab === 'logging' ? renderLogging()
      : '<div class="card"><div class="placeholder-tab">This tab isn’t part of the prototype. Open Logging configuration.</div></div>';
    app.innerHTML = renderTopbar() +
      '<div class="layout">' + renderNav() +
        '<main class="main" id="main">' + renderHeader() +
          '<div class="content" id="panel" role="tabpanel" aria-labelledby="tab-' + state.tab + '">' + panel + '</div>' +
        '</main></div>' +
      (state.dialog === 'form' ? renderFormDialog() : '') +
      (state.dialog === 'removeAll' ? renderRemoveAllDialog() : '') +
      renderToast() + renderProto();

    var selTab = document.getElementById('tab-' + state.tab);
    if (selTab) { var bar = selTab.parentNode; if (selTab.offsetLeft + selTab.offsetWidth > bar.scrollLeft + bar.clientWidth || selTab.offsetLeft < bar.scrollLeft) bar.scrollLeft = selTab.offsetLeft - 8; }
    var cbAll = document.getElementById('cb-all');
    if (cbAll && cbAll.getAttribute('data-indeterminate')) cbAll.indeterminate = true;

    if (focusId) {
      var el = document.getElementById(focusId);
      if (el && !el.disabled) {
        el.focus();
        if (caret != null && el.setSelectionRange && el.type !== 'number') { try { el.setSelectionRange(caret, caret); } catch (e) { /* not a text field */ } }
      }
    }
  }

  /* ---------- Actions ---------- */
  function openForm(editing) {
    returnFocus = document.activeElement && document.activeElement.id ? document.activeElement.id : 'add-btn';
    var form = Object.assign({}, DEFAULT_FORM);
    if (editing) {
      var e = state.entries.filter(function (x) { return x.logger === editing; })[0];
      var min = Math.max(1, Math.round((e.exp - Date.now()) / 60000));
      var unit = min % 1440 === 0 ? 'days' : min % 60 === 0 ? 'hours' : 'minutes';
      form = { logger: e.logger, level: e.level, amount: String(min / UNIT_MIN[unit]), unit: unit };
    }
    set({ dialog: 'form', editing: editing || null, form: form, errors: {}, navOpen: false });
    focusFirst();
  }
  function openRemoveAll() {
    returnFocus = 'add-btn';
    set({ dialog: 'removeAll' });
    var c = document.getElementById('ra-cancel'); if (c) c.focus();
  }
  function closeDialog() {
    set({ dialog: null, editing: null, errors: {} });
    var el = returnFocus && document.getElementById(returnFocus);
    if (el) el.focus();
  }
  function focusFirst() {
    var el = document.getElementById(state.editing ? 'f-level' : 'f-logger');
    if (el) el.focus();
  }
  function submitForm() {
    var f = state.form, er = {};
    var name = f.logger.trim();
    if (!name) er.logger = 'Enter a logger name.';
    else if (/\s/.test(name)) er.logger = 'Enter the logger name without spaces.';
    if (!amountValid(f)) er.amount = 'Enter a whole number greater than 0.';
    else if (lifetimeMin(f) > MAX_MIN) er.amount = 'Enter a lifetime of [5 days] or less.';
    if (er.logger || er.amount) {
      set({ errors: er });
      var first = document.getElementById(er.logger ? 'f-logger' : 'f-amount');
      if (first) first.focus();
      return;
    }
    var exp = Date.now() + lifetimeMin(f) * 60000;
    var verb = state.editing ? 'Logger updated' : 'Logger added';
    var t = toast(verb, name + ' is set to ' + cap(f.level) + ' until ' + fmtDate(exp) + '. Running agents pick this up within about 10 seconds.');
    var old = state.entries.filter(function (x) { return x.logger === name; })[0];
    var next = state.entries.filter(function (x) { return x.logger !== name; }).concat([{ id: (old && old.id) || newId(), logger: name, level: f.level, exp: exp }]);
    set(Object.assign({ entries: next, dialog: null, editing: null, errors: {}, sel: {}, mode: 'populated' }, t));
    var el = document.getElementById(returnFocus) || document.getElementById('add-btn');
    if (el) el.focus();
  }
  function removeLoggers(names) {
    var k = names.length;
    var t = toast(k === 1 ? 'Logger removed' : k + ' loggers removed', (k === 1 ? names[0] + ' uses' : 'These loggers use') + ' default logging again within about 10 seconds.');
    set(Object.assign({ entries: state.entries.filter(function (x) { return names.indexOf(x.logger) < 0; }), sel: {} }, t));
  }
  function setMode(mode) {
    var seeded = mode === 'populated' || mode === 'readonly';
    var url = new URL(location.href);
    if (mode === 'populated') url.searchParams.delete('state'); else url.searchParams.set('state', mode);
    history.replaceState(null, '', url);
    set({ mode: mode, entries: seeded ? seedEntries() : [], sel: {}, q: '', dialog: null, toast: null, tab: 'logging' });
  }

  /* ---------- Events ---------- */
  var lastRowClick = { k: null, t: 0 };
  app.addEventListener('click', function (ev) {
    // Click anywhere on a row to select it (as in Agent jobs); click the same row twice quickly to edit it.
    var row = ev.target.closest('.row');
    if (row && canEdit() && !ev.target.closest('input')) {
      var k = row.getAttribute('data-logger'), now = Date.now();
      if (lastRowClick.k === k && now - lastRowClick.t < 400) {
        lastRowClick = { k: null, t: 0 };
        var only = {}; only[k] = true; state.sel = only;
        returnFocus = 'add-btn'; openForm(k);
        return;
      }
      lastRowClick = { k: k, t: now };
      var n = Object.assign({}, state.sel);
      if (n[k]) delete n[k]; else n[k] = true;
      set({ sel: n });
      return;
    }
    var t = ev.target.closest('[data-action]');
    if (state.infoOpen && !ev.target.closest('.toggletip')) { state.infoOpen = false; if (!t) { render(); return; } }
    if (!t) return;
    var a = t.getAttribute('data-action');
    if (a === 'scrim') { if (ev.target === t) closeDialog(); return; }
    if (a === 'toggle-row' || a === 'toggle-all') return; // handled on change
    switch (a) {
      case 'back': ev.preventDefault(); break; // would return to the agent definitions list (not part of the prototype)
      case 'info': set({ infoOpen: !state.infoOpen }); break;
      case 'nav-toggle': set({ navOpen: !state.navOpen }); break;
      case 'nav-close': set({ navOpen: false }); break;
      case 'tab': set({ tab: t.getAttribute('data-v') }); document.getElementById('tab-' + state.tab).focus(); break;
      case 'add': openForm(null); break;
      case 'edit-selected': openForm(selKeys()[0]); break;
      case 'remove-selected': {
        var keys = selKeys();
        if (keys.length === state.entries.length && keys.length > 1) openRemoveAll(); else removeLoggers(keys);
        break;
      }
      case 'clear-sel': set({ sel: {} }); break;
      case 'clear-q': set({ q: '' }); var q = document.getElementById('q'); if (q) q.focus(); break;
      case 'close-dialog': closeDialog(); break;
      case 'remove-all': {
        var t2 = toast('All loggers removed', AGENT + ' uses default logging again within about 10 seconds.');
        set(Object.assign({ entries: [], dialog: null, sel: {} }, t2));
        var add = document.getElementById('add-btn') || document.querySelector('[data-action="add"]'); if (add) add.focus();
        break;
      }
      case 'refresh': tick(); break;
      case 'retry':
        set({ mode: 'loading' });
        setTimeout(function () { if (state.mode === 'loading') set({ mode: 'populated', entries: seedEntries() }); }, 1200);
        break;
      case 'dismiss-toast': set({ toast: null }); break;
      case 'undo': set({ entries: state.prev || state.entries, toast: null, sel: {} }); break;
    }
  });

  // A tooltip dismissed with Escape stays hidden until the pointer comes back to the info icon or focus leaves it.
  app.addEventListener('mouseover', function (ev) {
    var tt = ev.target.closest && ev.target.closest('.toggletip');
    if (state.infoSuppressed && tt && !tt.contains(ev.relatedTarget)) { state.infoSuppressed = false; tt.classList.remove('suppressed'); }
  });
  app.addEventListener('focusout', function (ev) {
    if (!ev.target.isConnected) return; // re-rendering replaced the button; focus moves to the new one
    if (state.infoSuppressed && ev.target.id === 'info-btn') { state.infoSuppressed = false; var t = document.querySelector('.toggletip'); if (t) t.classList.remove('suppressed'); }
  });


  app.addEventListener('change', function (ev) {
    var t = ev.target;
    var a = t.getAttribute('data-action');
    if (a === 'toggle-row') {
      var n = Object.assign({}, state.sel), k = t.getAttribute('data-logger');
      if (n[k]) delete n[k]; else n[k] = true;
      set({ sel: n });
    } else if (a === 'toggle-all') {
      var rows = visibleRows(), all = rows.every(function (e) { return state.sel[e.logger]; }), s = {};
      if (!all) rows.forEach(function (e) { s[e.logger] = true; });
      set({ sel: s });
    } else if (t.getAttribute('data-input') === 'proto') {
      setMode(t.value);
    } else if (t.getAttribute('data-input') === 'level' || t.getAttribute('data-input') === 'unit') {
      updateForm(t.getAttribute('data-input'), t.value);
    }
  });

  app.addEventListener('input', function (ev) {
    var k = ev.target.getAttribute('data-input');
    if (k === 'q') set({ q: ev.target.value, sel: {} });
    else if (k === 'logger' || k === 'amount') updateForm(k, ev.target.value);
  });

  function updateForm(key, value) {
    var patch = {}; patch[key] = value;
    var er = Object.assign({}, state.errors);
    if (key === 'logger') er.logger = '';
    if (key === 'amount' || key === 'unit') er.amount = '';
    set({ form: Object.assign({}, state.form, patch), errors: er });
  }

  app.addEventListener('submit', function (ev) { ev.preventDefault(); submitForm(); });

  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') {
      if (state.dialog) { ev.preventDefault(); closeDialog(); }
      else if (state.infoOpen || (document.activeElement && document.activeElement.id === 'info-btn') || document.querySelector('.toggletip:hover')) {
        // Update in place (no re-render) so focus stays on the info icon
        state.infoOpen = false; state.infoSuppressed = true;
        var tt = document.querySelector('.toggletip'), bub = document.getElementById('loggers-info'), ib = document.getElementById('info-btn');
        if (tt) tt.classList.add('suppressed'); if (bub) bub.classList.remove('open'); if (ib) ib.setAttribute('aria-expanded', 'false');
      }
      else if (state.navOpen) set({ navOpen: false });
      return;
    }
    if (ev.key === 'Tab' && state.dialog) { // keep focus inside the dialog
      var dlg = app.querySelector('.dialog');
      var f = Array.prototype.filter.call(dlg.querySelectorAll('button, input, select'), function (x) { return !x.disabled; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
    }
    if ((ev.key === 'ArrowRight' || ev.key === 'ArrowLeft') && ev.target.classList && ev.target.classList.contains('editor-tab')) {
      var tabs = ['properties', 'parameters', 'triggers', 'logging'];
      var i = tabs.indexOf(state.tab) + (ev.key === 'ArrowRight' ? 1 : -1);
      set({ tab: tabs[(i + tabs.length) % tabs.length] });
      document.getElementById('tab-' + state.tab).focus();
    }
  });

  /* Expired entries disappear on their own (the server removes them within ~60s). */
  function tick() {
    var now = Date.now();
    var live = state.entries.filter(function (e) { return e.exp > now; });
    if (live.length !== state.entries.length) state.entries = live;
    if (!state.dialog || live.length !== state.entries.length) render();
  }
  setInterval(function () { if (!state.dialog) tick(); }, 15000);

  render();
})();
