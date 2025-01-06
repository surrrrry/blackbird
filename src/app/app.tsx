import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';

function MyApp({ Component, pageProps }: { Component: React.ComponentType<any>; pageProps: any }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;