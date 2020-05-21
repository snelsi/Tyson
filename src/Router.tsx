import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "App";
import { examples } from "examples";

interface RouterProps {}

export const Router: React.FC<RouterProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/1">
          <App code={examples[0]} />
        </Route>
        <Route path="/2">
          <App code={examples[1]} />
        </Route>
        <Route path="/3">
          <App code={examples[2]} />
        </Route>
        <Route path="/4">
          <App code={examples[3]} />
        </Route>
        <Route path="/5">
          <App code={examples[4]} />
        </Route>
        <Route path="/6">
          <App code={examples[5]} />
        </Route>
        <Route path="/7">
          <App code={examples[6]} />
        </Route>
        <Route path="/8">
          <App code={examples[7]} />
        </Route>
        <Route path="/9">
          <App code={examples[8]} />
        </Route>
        <Route path="/10">
          <App code={examples[9]} />
        </Route>

        <Route path="*">
          <App code={examples[0]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
