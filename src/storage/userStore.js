import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const initialState = {
  token: null,
  user: {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    isAdmin: false,
  },
  mode: window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',
};

const useUserStore = create(
  persist(
    (set, get) => ({
      ...initialState,
      setToken: (data) => set({ token: data }),
      setUser: (data) => set({ user: { ...get().user, ...data } }),
      setMode: (data) => set({ mode: data }),
      reset: () => {
        set(initialState);
      },
    }),
    {
      name: `${import.meta.env.VITE_STORE}-${import.meta.env.VITE_STORE_USER}`,
      storage: createJSONStorage(() => sessionStorage),
      version: 0,
    },
  ),
);

export default useUserStore;
