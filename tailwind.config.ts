import plugin from 'tailwindcss/plugin'

import type { Config } from 'tailwindcss'

const config = {
    darkMode: ['class'],
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'color-mix(in srgb, var(--ring) calc(<alpha-value> * 100%), transparent)',
                background: 'color-mix(in srgb, var(--background) calc(<alpha-value> * 100%), transparent)',
                backgroundSecondary:
                    'color-mix(in srgb, var(--background-secondary) calc(<alpha-value> * 100%), transparent)',
                foreground: 'color-mix(in srgb, var(--foreground) calc(<alpha-value> * 100%), transparent)',
                primary: {
                    DEFAULT: 'color-mix(in srgb, var(--primary) calc(<alpha-value> * 100%), transparent)',
                    foreground: 'color-mix(in srgb, var(--primary-foreground) calc(<alpha-value> * 100%), transparent)',
                },
                secondary: {
                    DEFAULT: 'color-mix(in srgb, var(--secondary) calc(<alpha-value> * 100%), transparent)',
                    foreground:
                        'color-mix(in srgb, var(--secondary-foreground) calc(<alpha-value> * 100%), transparent)',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'color-mix(in srgb, var(--muted) calc(<alpha-value> * 100%), transparent)',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            fontFamily: {
                title: ['var(--font-hina-mincho)', 'BIZ UDPMincho', 'serif'],
            },
            fontSize: {
                title: '1.7857142857rem',
                heading: '1.4285714286rem',
                accent: '1.0714285714rem',
                'accent-sm': '0.8571428571rem',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        plugin(({ addBase }) => {
            addBase({
                html: { 'font-size': '14px' }, // 参考： https://design2tailwind.com/blog/change-tailwindcss-base-font-size/
                body: { 'font-family': 'var(--font-biz-udp-mincho)' },
            })
        }),
    ],
} satisfies Config

export default config
