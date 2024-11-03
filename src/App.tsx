// APP.tsx
import React, { useState } from 'react';
import './index.css';



interface FormData {
  name: string;
  email: string;
  bootcamp: string;
}

const BootcampSignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    bootcamp: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Lógica para enviar datos a Firebase o Supabase
      console.log('Datos del formulario:', formData);
      alert('Inscripción realizada exitosamente. ¡Gracias por inscribirte!');
    } catch (error) {
      console.error('Error en la inscripción:', error);
    }
  };

  return (
    <div className="form-container">
      {/* Imagen en la parte superior */}
      <img src="/bootcamp-logo.png" alt="Logo del Bootcamp" />
      
      <h2>Inscripción a Bootcamp</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label>Correo electrónico:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Selecciona un Bootcamp:</label>
        <select
          name="bootcamp"
          value={formData.bootcamp}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione uno</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>

        <button type="submit">Inscribirse</button>
      </form>
    </div>
  );
};

export default BootcampSignupForm;
