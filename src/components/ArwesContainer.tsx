import React, { type ReactNode } from 'react';
import { AnimatorGeneralProvider } from '@arwes/react-animator';
import { BleepsProvider, type BleepsProviderSettings } from '@arwes/react-bleeps';

// Configuración de Sonidos (Usaremos los oficiales de Arwes como prueba)
const bleepsSettings: BleepsProviderSettings = {
  master: { volume: 0.6 },
  bleeps: {
    // Sonido de "click"
    click: {
      sources: [{ src: 'https://arwes.dev/assets/sounds/click.mp3', type: 'audio/mpeg' }]
    },
    // Sonido de "escaneo" o aparición
    intro: {
      sources: [{ src: 'https://arwes.dev/assets/sounds/intro.mp3', type: 'audio/mpeg' }]
    },
    // Sonido de "hover" (tipo error informático o lectura)
    hover: {
      sources: [{ src: 'https://arwes.dev/assets/sounds/type.mp3', type: 'audio/mpeg' }],
      loop: false
    }
  }
};

const animatorsSettings = {
  // Duración de las animaciones (en segundos)
  duration: { enter: 0.4, exit: 0.4, stagger: 0.1 }
};

export default function ArwesContainer({ children }: { children: ReactNode }) {
  return (
    <AnimatorGeneralProvider animator={animatorsSettings}>
      <BleepsProvider {...bleepsSettings}>
        {children}
      </BleepsProvider>
    </AnimatorGeneralProvider>
  );
}