import '@fontsource/roboto';

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

import useUserStore from '@/storage/userStore';

function AppThemeProvider({ children }) {
  const { mode } = useUserStore((state) => state.preferences);
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        primary: {
          main: '#1c9c7c',
        },
        secondary: {
          main: '#9DF3C4',
        },
        Ink: {
          Darkest: '#000000',
          Darker: '#222222',
          Dark: '#303437',
          Base: '#404446',
          Light: '#6C7072',
          Lighter: '#72777A',
        },
        Sky: {
          Dark: '#979C9E',
          Base: '#CDCFD0',
          Light: '#E3E5E5',
          Lighter: '#F2F4F5',
          Lightest: '#F7F9FA',
          White: '#FFFFFF',
        },

        Red: {
          Darkest: '#6B0206',
          Base: '#E8282B',
          Light: '#F94739',
          Lighter: '#FF9898',
          Lightest: '#FFE5E5',
        },

        Green: {
          Darkest: '#0A4C0A',
          Base: '#0F8B0F',
          Light: '#1EB01E',
          Lighter: '#7FF77F',
          Lightest: '#E5FFE5',
        },
        background: {
          default: mode === 'dark' ? '#000000' : '#FCFBFA',
          opposite: mode === 'dark' ? '#FCFBFA' : '#000000',
          paper: mode === 'dark' ? '#131313' : '#FCFCFC',
        },
        text: {
          primary: mode === 'dark' ? '#FFFFFF' : '#000000',
          secondary: '#999999',
          disabled: '#C3C1BD',
        },

        grey: {
          50: mode === 'dark' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 5%, 95%)',
          100: mode === 'dark' ? 'hsl(0, 0%, 20%)' : 'hsl(0, 0%, 90%)',
          200: mode === 'dark' ? 'hsl(0, 0%, 30%)' : 'hsl(0, 0%, 80%)',
          300: mode === 'dark' ? 'hsl(0, 0%, 40%)' : 'hsl(0, 0%, 70%)',
          400: mode === 'dark' ? 'hsl(0, 0%, 50%)' : 'hsl(0, 0%, 60%)',
          500: mode === 'dark' ? 'hsl(0, 0%, 60%)' : 'hsl(0, 0%, 50%)',
          600: mode === 'dark' ? 'hsl(0, 0%, 70%)' : 'hsl(0, 0%, 40%)',
          700: mode === 'dark' ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 30%)',
          800: mode === 'dark' ? 'hsl(0, 0%, 90%)' : 'hsl(0, 0%, 20%)',
          900: mode === 'dark' ? 'hsl(0, 5%, 95%)' : 'hsl(0, 0%, 10%)',
        },
        gradient: {
          bronze: 'linear-gradient(180deg, #9C6D3E 0%, #E8C8A9 100%)',
          silver: 'linear-gradient(180deg, #808080 0%, #DFDFDF 100%)',
          gold: 'linear-gradient(180deg, #A3873C 0%, #E3D294 100%)',
        },
      },

      typography: {
        fontFamily: 'Roboto, sans-serif',

        h1: {
          fontSize: '26px',
          fontWeight: '600',
        },
        h2: {
          fontSize: '22px',
          fontWeight: '600',
        },
        h3: {
          fontSize: '20px',
          fontWeight: '600',
        },
        h4: {
          fontSize: '18px',
          fontWeight: '600',
        },
        h5: {
          fontSize: '16px',
          fontWeight: '500',
        },
        CTA1: {
          fontSize: '28px',
          fontWeight: '500',
        },
        CTA2: {
          fontSize: '18px',
          fontWeight: '500',
        },
        CTA3: {
          fontSize: '16px',
          fontWeight: '400',
        },
        Body1: {
          fontFamily: 'Roboto, sans-serif',
          fontSize: '14px',
          fontWeight: '400',
        },
        Body2: {
          fontFamily: 'Roboto, sans-serif',
          fontSize: '13px',
          fontWeight: '400',
        },
        Body3: {
          fontFamily: 'Roboto, sans-serif',
          fontSize: '12px',
          fontWeight: '400',
        },
        Body1Medium: {
          fontFamily: 'Roboto, sans-serif',
          fontSize: '14px',
          fontWeight: '500',
        },
        Body1SemiBold: {
          fontFamily: 'Roboto, sans-serif',
          fontSize: '14px',
          fontWeight: '600',
        },
        body3: {
          fontSize: '12px',
          display: 'block',
        },
        body4: {
          fontSize: '10px',
          display: 'block',
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              // ---CSS BODY--- \\
            },
          },
        },
        MuiLink: {
          styleOverrides: {
            root: {
              cursor: 'pointer',
              textDecoration: 'none',
              lineHeight: '16px',
              transition: 'all 0.1s ease-in-out',
              '&:hover': {
                opacity: 0.8,
              },
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              aspectRatio: '1/1',
            },
          },
        },
      },
    }),
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
