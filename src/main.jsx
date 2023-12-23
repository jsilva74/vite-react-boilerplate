import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataProvider } from '@/data-context/DataContextProvider';
import AppThemeProvider from '@/theme/AppThemeProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from '@/components/App';
import './main.style.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, refetchOnWindowFocus: false, enabled: false },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <AppThemeProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AppThemeProvider>
    </DataProvider>
  </React.StrictMode>,
);
