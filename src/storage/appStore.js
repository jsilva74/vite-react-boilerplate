import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import createAuthSlice from '@/storage/slices/auth';
import createUserSlice from '@/storage/slices/user';
import { STORE_KEY } from '@/utils/constants';

const useAppStore = create(
  persist(
    (set, get) => ({
      ...createAuthSlice(set, get),
      ...createUserSlice(set, get),
    }),
    {
      name: `${STORE_KEY}`,
      storage: createJSONStorage(() => sessionStorage),
      version: 0,
    },
  ),
);

export default useAppStore;
