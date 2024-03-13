import DataContext from '@/provider/DataContext';
import { useContext } from 'react';

const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context)
    throw new Error('useDataContext must be used within a DataProvider');
  return context;
};

export default useDataContext;
