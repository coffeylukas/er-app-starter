import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import Weather from "./components/Weather";
import NotFound from "./components/NotFound";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Weather}/>
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

export default Root;
