import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const initialState = {
  token: null,
  id: null,
  firstName: '',
  lastName: '',
  fullName: '',
  username: '',
  email: '',
  isAdmin: false,
  preferences: {
    mode: window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  },
};

const useUserStore = create(
  persist(
    (set, get) => ({
      ...initialState,
      setUser: (data) => set({ ...get(), ...data }),
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
