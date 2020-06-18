import React from 'react';

import {
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasErrored: false,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer
                        imageUrl={'https://i.imgur.com/A040Lxr.png'}
                    />
                    <ErrorImageText>This Page is Lost in Space</ErrorImageText>
                </ErrorImageOverlay>
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
