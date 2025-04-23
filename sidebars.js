// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🔍 Inspector del Navegador',
      collapsed: false,
      items: [
        { type: 'doc', id: 'inspector/intro', label: '👋 Introducción' },
        { type: 'doc', id: 'inspector/elements', label: '🧱 Elements' },
        { type: 'doc', id: 'inspector/console', label: '💻 Console' },
        { type: 'doc', id: 'inspector/sources', label: '📁 Sources' },
        { type: 'doc', id: 'inspector/network', label: '🌐 Network' },
        { type: 'doc', id: 'inspector/application', label: '📦 Application' },
        { type: 'doc', id: 'inspector/performance', label: '⚙️ Performance' },
        { type: 'doc', id: 'inspector/memory', label: '🧠 Memory' },
        { type: 'doc', id: 'inspector/security', label: '🔒 Security' },
        { type: 'doc', id: 'inspector/lighthouse', label: '🚨 Lighthouse' },
        { type: 'doc', id: 'inspector/recorder', label: '🎥 Recorder' },
        { type: 'doc', id: 'inspector/experiments', label: '🧪 Experiments' },
        { type: 'doc', id: 'inspector/atajos', label: '⌨️ Atajos' },
        { type: 'doc', id: 'inspector/tips', label: '💡 Tips útiles' },
      ],
    },
  ],
};

