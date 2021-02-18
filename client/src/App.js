import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import { useWeb3 } from '@openzeppelin/network/react';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const infuraProjectId = '3c3e47b42c5749f7abd077faaa924e7f';

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  const web3Context = useWeb3(
    `wss://rinkeby.infura.io/ws/v3/${infuraProjectId}`
  );
  const { networkId, networkName, providerName } = web3Context;

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded');
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </Switch>
      )}
    />
  );
};

export default App;
