import React from 'react';
import CatchBus from '../components/CatchBus';
import { Router } from '@reach/router';
import Confirm from '../components/Confirm';

export default function Main(){

    return (
        <div>
            <div>
                <p>Hola, this is a page</p>
            </div>
            <CatchBus />
            <Router>
                <Confirm path="/letsgo" />
            </Router>
        </div>
    )
}