import './main.style.scss';

import { CssBaseline } from '@mui/material';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/components/App';
import { DataProvider } from '@/data-context/DataContextProvider';
import AppThemeProvider from '@/theme/AppThemeProvider';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      enabled: true,
      staleTime: 0,
    },
  },
});
const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
  key: `${import.meta.env.VITE_STORE}-cache`,
});
persistQueryClient({
  queryClient,
  persister: localStoragePersister,
});
if (!import.meta.env.DEV) {
  localStoragePersister.removeClient();
  queryClient.invalidateQueries();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <AppThemeProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <CssBaseline />
            <App />
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AppThemeProvider>
    </DataProvider>
  </React.StrictMode>,
);
