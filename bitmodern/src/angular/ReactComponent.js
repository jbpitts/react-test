import React from 'react';
import AngularComponent from '../angular/AngularComponent';

const ReactComponent = () => {
    return (
        <div>
            React App!
            <AngularComponent fooBar={3} baz='baz' />
        </div>
    );
};

export default ReactComponent;