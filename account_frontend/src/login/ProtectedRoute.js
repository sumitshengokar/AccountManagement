import React, { Component } from "react";
import { render } from "react-dom";
import { Route, Redirect, useHistory } from 'react-router-dom';

function ProtectedRoute({ isAuth: isAuth, component: component, ...rest}) {
    return (
        <Route
        {...rest}
        render={(props) => {
            if (isAuth) {
                return <Component />;
            } else {
                return (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                );
            }
        }}
        />
    );
    
}

export default ProtectedRoute;