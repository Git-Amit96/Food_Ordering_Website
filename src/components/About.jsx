import { Component } from 'react';
import User from './User';
// Example of class Based Components
class About extends Component {
constructor({props}){
  super(props);
  console.log("Hii i am parent cons");
}

componentDidMount(){
  console.log("Hii i am parent ComponentDidMount");
}

  render() {
    console.log("Hi i am parent render")
    return (

      <div>
        <h2>I am about</h2>
        <User name={"Amit"} id={1} />
        <User name={"Pooja"} id={2} />
        <User name={"Ankit"} id={3} />
      </div>
    )
  }
}

// const About = () => {
//   return (
//     <div>
//       <h2>I am about</h2>
//       <User name={"Amit"} id={1}/>
//       <User name={"Pooja"} id={2}/>
//       <User name={"Ankit"} id={3}/>
//     </div>
//   );
// };

export default About;