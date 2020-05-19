import React from 'react'

class HasError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>Something went wrong with Noteful. Our bad! : (</h2>
            )
        }
        return this.props.children
    }
}

export default HasError