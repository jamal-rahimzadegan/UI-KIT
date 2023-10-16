type VariantModes = 'filled' | 'gradient' | 'outlined' | 'transparent'

type Variation = {
  [V in VariantModes]: {
    background: string
    color: string
    border: string
  }
}

const theme = {
  colors: {
    text: 'white',
    bg: 'lime',
    border: 'black',
  },
}

const VARIANTS: Variation = {
  filled: {
    background: theme.colors.bg,
    color: theme.colors.text,
    border: 'none',
  },
  outlined: {
    background: 'transparent',
    color: theme.colors.text,
    border: '2px solid ' + theme.colors.border,
  },
  gradient: {
    background: `linear-gradient(300deg, ${theme.colors.bg} 70%,red 100%)`,
    color: theme.colors.text,
    border: 'none',
  },
  transparent: {
    background: 'transparent',
    color: theme.colors.text,
    border: 'none',
  },
}

export { VARIANTS }
export type { Variation, VariantModes }
