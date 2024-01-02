const initialState = { token: null, expiresAt: null };

const createAuthSlice = (set, get) => ({
  auth: { ...initialState },
  setAuth: (data) => set({ ...get(), auth: { ...get().auth, ...data } }),
  resetAuth: () => set({ ...get(), auth: { ...initialState } }),
});

export default createAuthSlice;
