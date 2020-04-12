import PropTypes from 'prop-types';
import React from 'react';


export const Container = ({ fluid, children }) => <div className={`container${fluid ? `-fluid` : ``}`}>{children}</div>;
Container.propTypes = {
    children: PropTypes.node,
    fluid: PropTypes.string
};

export const Row = ({ fluid, children }) => <div className={`row${fluid ? `-fluid` : ``}`}>{children}</div>;
Row.propTypes = {
    children: PropTypes.node,
    fluid: PropTypes.string
};

export const Col = ({ size, children }) =>
    <div
        className={size
            .split(` `)
            .map(s => `col-${ s}`)
            .join(` `)}
    >
        {children}
    </div>;
Col.propTypes = {
    children: PropTypes.node,
    fluid: PropTypes.string,
    size: PropTypes.string
};

