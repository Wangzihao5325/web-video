import React from 'react';
import { useEffect } from 'react';
import Actions from '../store/actions/index';
const InitialComponent = (props: any) => {
    useEffect(() => {
        setTimeout(Actions.initial.done, 3000);
    }, []);

    return (
        <div>initialing!</div>
    );
}

export default InitialComponent;