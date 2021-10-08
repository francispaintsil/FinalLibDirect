import Library from "./Library/Library";
import Login from "./Login";
import { Switch, Route  } from "react-router-dom";

import React from 'react'
import { AnimatePresence } from "framer-motion";

const Labyrinth = () => {
    return (
        <AnimatePresence>
            <Switch>
            <Route path = '/' exact>
                <Login/>                
            </Route>
            <Route path = '/library'>
                <Library/>
            </Route>
        </Switch>
        </AnimatePresence>
        
    )
}

export default Labyrinth;