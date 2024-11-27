import { Controller } from "@hotwired/stimulus"
import React from 'react';
import App from '../react/App';
import { createRoot } from 'react-dom/client';

// Connects to data-controller="react"
export default class extends Controller {
  static targets = ['root'];
  connect() {
    console.log("Hello, Stimulus!");
    const app = document.getElementById('app');

    const root = createRoot(app);
    root.render(<App />);
  }
}
