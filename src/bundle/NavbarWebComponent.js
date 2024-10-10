import React from 'react';
import ReactDOM from 'react-dom/client';
import NavbarReact from '../components/Public/Navbar/NavbarReact';

class NavbarWebComponent extends HTMLElement {
  constructor() {
    super();
    this.root = null;
  }

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const viewModel = JSON.parse(this.getAttribute('view-model') || '{}');
    const authContext = JSON.parse(this.getAttribute('auth-context') || '{}');

    this.root = ReactDOM.createRoot(mountPoint);
    this.root.render(
      React.createElement(NavbarReact, { viewModel: viewModel, authContext: authContext })
    );
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }
}

customElements.define('navbar-component', NavbarWebComponent);

export { NavbarWebComponent, NavbarReact };