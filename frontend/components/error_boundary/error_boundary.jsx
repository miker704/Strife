// This is an error boundary screen and must be written in class based component
// as per instruction and current specs stated by React itself.
import React from 'react';
class ErrorBoundary extends React.Component{
    state = {hasError: false, error: null};
    static getDerivedStateFromError(error){
        return {
            hasError:true,
            error,
        }
    }
    render(){
        if(this.state.hasError){
            return this.props.fallback;
        }
        return this.props.children;
    }
}
export default ErrorBoundary;