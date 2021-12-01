import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from '../components/Homepage'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Homepage} />
            </Switch>
        </BrowserRouter>
    )
}
export default App;