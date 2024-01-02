import Loader from '@/components/Loader';
import Routing from '@/routes/Routing';

import Splash from '../Splash';

const App = () => {
  const showSplash = false; // TODO: implement logic to show/hide splash screen

  return (
    <>
      <Splash open={showSplash} />
      <Loader />
      <Routing show={!showSplash} />
    </>
  );
};

export default App;
