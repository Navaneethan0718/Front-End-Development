import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="p-6 border-b">
        <h1>My React Single Page App</h1>
      </header>

      <main>
        <section className="p-8">
          <h2>Hero Section</h2>
          <p>Welcome to the application.</p>
        </section>

        <section className="p-8">
          <h2>Features</h2>
          <ul>
            <li>Fast</li>
            <li>Responsive</li>
            <li>Reusable Components</li>
          </ul>
        </section>

        <section className="p-8">
          <h2>Contact</h2>
          <p>contact@example.com</p>
        </section>
      </main>

      <footer className="p-6 border-t">
        © 2026
      </footer>
    </div>
  );
}
