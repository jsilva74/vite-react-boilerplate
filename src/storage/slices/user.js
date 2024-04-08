const initialState = {
  id: null,
  firstName: '',
  lastName: '',
  fullName: '',
  username: '',
  email: '',
  avatar: '',
  isAdmin: false,
  authenticated: false,
  preferences: {
    mode: window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  },
};

const createUserSlice = (set, get) => ({
  user: { ...initialState },
  setUser: (data) => set({ ...get(), user: { ...get().user, ...data } }),
  reset: () => {
    set({ ...get(), user: { ...initialState } });
  },
});

export default createUserSlice;
