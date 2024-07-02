import React, { useState, useRef } from 'react';
import { Brain, Database, Zap, Rocket, ScrollText } from 'lucide-react';

const SkyNetCard = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const contentRefs = useRef([]);

  const sections = [
    {
      name: 'SkyNet 90',
      icon: Brain,
      color: 'bg-green-500',
      description: 'Comportamiento - 24 HH - MES 1',
      details: 'Análisis de procesos y requerimientos de SMI. Desarrollo e implementación del asistente base. Capacitación inicial del equipo en el uso del asistente IA.',
      entregables: [
        'Documento de análisis de requerimientos',
        'Prompt de sistema personalizado para el asistente IA',
        'Manual básico de usuario para el equipo SMI',
        'Informe de implementación y recomendaciones para próximas etapas'
      ]
    },
    {
      name: 'SkyNet 180',
      icon: Database,
      color: 'bg-orange-500',
      description: 'Conocimiento - 24 HH - MES 2',
      details: 'Análisis y procesamiento de documentos clave (equiv. 200 páginas). Preparación y conexión de la base de conocimientos. Capacitación avanzada en gestión de información.',
      alcances: [
        'Recopilación y procesamiento de documentos relevantes (equivalente a 200 páginas)',
        'Alimentación del asistente con conocimiento específico de SMI',
        'Capacitación en el proceso de actualización de conocimientos'
      ]
    },
    {
      name: 'SkyNet 360',
      icon: Zap,
      color: 'bg-blue-500',
      description: 'Super Poderes - 24 HH - MES 3',
      details: 'Desarrollo de capacidades avanzadas como programación, análisis crítico y generación de documentos. Implementación de integraciones y flujos de trabajo automatizados.',
      alcances: [
        'Desarrollo de funciones personalizadas basadas en prompts probados',
        'Implementación de casos de uso avanzados:',
        ['Generación de minutas de reunión', 'Análisis crítico de trabajos', 'Transformación de TDr a propuestas', 'Asistencia en programación básica', 'Gestión avanzada de documentos', 'Estandarización de estructuras de informes']
      ]
    },
  ];

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const renderList = (items, isNested = false) => (
    <ul className={`list-disc ${isNested ? 'ml-6' : 'ml-4'} mt-2`}>
      {items.map((item, index) => (
        <li key={index}>
          {Array.isArray(item) ? renderList(item, true) : item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto font-sans">
      <h2 className="text-2xl font-bold mb-4 text-center">SkyNet: Asistente IA para SMI</h2>
      
      <div className="space-y-4 mb-6">
        {sections.map((section, index) => (
          <div 
            key={section.name}
            className={`${section.color} p-4 rounded-lg transition-all duration-300 cursor-pointer`}
          >
            <div 
              className="flex items-center justify-between"
              onClick={() => toggleSection(index)}
            >
              <div className="flex items-center">
                <section.icon className="mr-2" size={24} />
                <span className="font-semibold">{section.name}</span>
              </div>
              <span className="text-sm">{section.description}</span>
            </div>
            <div
              ref={el => contentRefs.current[index] = el}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: expandedSection === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px' }}
            >
              <p className="mt-3 text-sm">{section.details}</p>
              {section.entregables && (
                <>
                  <h4 className="font-semibold mt-2">Entregables:</h4>
                  {renderList(section.entregables)}
                </>
              )}
              {section.alcances && (
                <>
                  <h4 className="font-semibold mt-2">Alcances:</h4>
                  {renderList(section.alcances)}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-600 pt-4 mb-4">
        <h3 className="font-semibold mb-2 flex items-center">
          <Rocket className="mr-2" size={20} />
          I+D en IA
        </h3>
        <p className="text-sm">8 HH mensuales - Seguimiento continuo desde MES 4. Mejora continua y adaptación del asistente a nuevas necesidades de SMI.</p>
      </div>

      <div className="border-t border-gray-600 pt-4 mb-4">
        <h3 className="font-semibold mb-2 flex items-center">
          <ScrollText className="mr-2" size={20} />
          Productos Satélites
        </h3>
        <p className="text-sm">Desarrollos ocasionales según necesidades específicas de SMI. Pueden incluir módulos especializados o integraciones con sistemas existentes.</p>
      </div>

      <div className="text-center mt-4">
        <span className="text-yellow-400">Solución Única y Personalizada para SMI Ingeniería</span>
      </div>
    </div>
  );
};

export default SkyNetCard;