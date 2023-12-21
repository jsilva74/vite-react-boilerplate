import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from '../../routes/Routing';
import Loader from '../Loader';
import useUI from '../../data-context/useUI';

const App = () => {
  const { showLoader } = useUI();

  return (
    <BrowserRouter>
      <CssBaseline />
      <Loader open={showLoader} />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
