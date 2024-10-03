import React from 'react';
class User extends React.Component{
    constructor(props){
        super(props);
        console.log("Hii i am " + this.props.name+ "Cons");
        
    }
    componentDidMount(){
        console.log("Hii i am child componentDidMount" + this.props.name)
    }
    render(){
        const {name, id}= this.props;
        console.log("Hii i am render" + name)
        return (
            <div>
                <div>{id}</div>
                <div>{name}</div>
            </div>
        )
    }
    
}

export default User;