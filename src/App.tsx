import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

import Toast from './components/Shared/Toast/Toast';
import { router } from './routes';
import { GlobalStyle } from './styles/GlobalStyle';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      suspense: true,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <Toast />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
