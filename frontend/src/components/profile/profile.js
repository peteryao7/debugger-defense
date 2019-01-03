import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
    }
    
    render() {

    }
}

export default Profile;