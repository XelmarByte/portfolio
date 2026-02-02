/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { Animator } from '@arwes/react-animator';
import { FrameCorners } from '@arwes/react-frames';
import { Text } from '@arwes/react-text';
import { useBleeps } from '@arwes/react-bleeps';

interface SciFiCardProps {
  title: string;
  children: React.ReactNode;
}

export default function SciFiCard({ title, children }: SciFiCardProps) {
  const [active, setActive] = useState(false); // Para controlar el hover
  const bleeps = useBleeps(); // Hook para usar los sonidos

  return (
    // Animator controla la aparición de la tarjeta
    <Animator merge>
      <div
        onMouseEnter={() => {
          setActive(true);
          bleeps.hover?.play(); // ¡Suena al tocar!
        }}
        onMouseLeave={() => setActive(false)}
        css={css`
          position: relative;
          padding: 2rem;
          color: #00f8f8;
          transition: transform 0.2s ease;
          &:hover {
            transform: scale(1.02); /* Pequeño zoom al tocar */
          }
        `}
      >
        {/* El marco futurista */}
        <FrameCorners
  strokeWidth={2}
  cornerLength={20}
  contentLineWidth={1}
  style={{
    stroke: active ? '#ffe81f' : '#00f8f8', 
    transition: 'stroke 0.3s ease' 
  }}
/>

        {/* Contenido protegido por z-index */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-widest border-b border-cyan-900 pb-2">
            {/* Texto con efecto de desencriptado */}
            <Text as="span" manager="decipher">
              {title}
            </Text>
          </h3>
          
          <div className="text-cyan-100/80 font-mono text-sm leading-relaxed">
            {children}
          </div>
        </div>

        {/* Decoración extra: Fondo semitransparente */}
        <div
          css={css`
            position: absolute;
            inset: 0;
            background: ${active ? 'rgba(0, 248, 248, 0.1)' : 'rgba(7, 24, 33, 0.6)'};
            z-index: 0;
            clip-path: polygon(
              20px 0, 100% 0, 100% calc(100% - 20px), 
              calc(100% - 20px) 100%, 0 100%, 0 20px
            );
            transition: background 0.3s ease;
          `}
        />
      </div>
    </Animator>
  );
}