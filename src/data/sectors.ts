import type { Sector } from '../types/sector'

export const sectors: Sector[] = [
  {
    id: 'eletronica',
    name: 'Eletrônica',
    summary:
      'Concentra a fase 2 do projeto, da definição teórica da aviônica até a integração com outros setores.',
    owner: 'Setor de Eletrônica',
    accent: '#9ad38e',
    softAccent: 'rgba(154, 211, 142, 0.16)',
    glow: 'rgba(154, 211, 142, 0.28)',
  },
  {
    id: 'eea',
    name: 'E&A',
    summary: 'Estrutura e Aerodinâmica: Responsável pelo projeto teórico, manufatura e montagem estrutural.',
    owner: 'Setor de E&A',
    accent: '#8ca7ff',
    softAccent: 'rgba(140, 167, 255, 0.16)',
    glow: 'rgba(140, 167, 255, 0.28)',
  },
  {
    id: 'propulsao',
    name: 'Propulsão',
    summary: 'Responsável pelo desenvolvimento do motor, propelente e testes de queima.',
    owner: 'Setor de Propulsão',
    accent: '#ff9c73',
    softAccent: 'rgba(255, 156, 115, 0.16)',
    glow: 'rgba(255, 156, 115, 0.28)',
  },
  {
    id: 'recuperacao',
    name: 'Recuperação',
    summary: 'Responsável pelos sistemas de paraquedas, ejeção e segurança pós-voo.',
    owner: 'Setor de Recuperação',
    accent: '#c29aff',
    softAccent: 'rgba(194, 154, 255, 0.16)',
    glow: 'rgba(194, 154, 255, 0.28)',
  },
  {
    id: 'sat',
    name: 'SAT',
    summary: 'Sistemas e Satélite: Responsável pela carga útil, computador de bordo e telemetria avançada.',
    owner: 'Setor de SAT',
    accent: '#79d3ff',
    softAccent: 'rgba(121, 211, 255, 0.16)',
    glow: 'rgba(121, 211, 255, 0.28)',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    summary: 'Responsável pela identidade visual, design e comunicação do projeto.',
    owner: 'Setor de Marketing',
    accent: '#f4c66c',
    softAccent: 'rgba(244, 198, 108, 0.16)',
    glow: 'rgba(244, 198, 108, 0.28)',
  },
]
