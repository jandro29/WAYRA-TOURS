'use client';

import React from "react"

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí irían los datos del formulario a procesar
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-card rounded-lg p-8 border border-border">
      <div className="flex items-center gap-3 mb-6">
        <Mail className="text-primary" size={28} />
        <h2 className="text-2xl font-bold text-foreground">Planifica tu aventura con Wayra Tours</h2>
      </div>

      <p className="text-muted-foreground mb-6">
        Contáctanos para reservar tu lugar en nuestro circuito turístico Full Day. Incluye transporte, guía especializado y entradas a todos los atractivos. Grupo mínimo de 10 personas. Precio: S/ 120.00 por persona.
      </p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="text-green-800 font-semibold">¡Gracias por tu mensaje! Nos pondremos en contacto pronto.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="+51 9XX XXX XXX"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Cuéntanos qué te gustaría visitar y tus intereses..."
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all duration-200"
          >
            <Send size={20} />
            Enviar Consulta
          </button>
        </form>
      )}
    </div>
  );
}
