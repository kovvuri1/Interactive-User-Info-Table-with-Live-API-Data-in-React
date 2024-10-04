import React from "react";
export default class Tab extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            thead:[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(x=>x.json()).then(x=>{

            this.setState({data:x});
            this.setState({thead:Object.keys(x[0])})
        }
        ).catch(console.log("Apiis not Working Properly")
        )
        // console.log(api);
    }
    render(){

        console.log(this.state.data);
        
        return(
            <>
            <div>
                <table style={{border:"2px solid gray"}}>
                    <thead>
                    <tr style={{border:"2px solid gray"}}>
                    {this.state.thead.slice(0,6).map((x,y)=>{return(<th key={y}>{x}</th>)})}
                    </tr>
                    </thead>
                    <tbody>
                {this.state.data.map(x=>{
                    return(
                        <tr key={x.id}>                                                                                  
                        <td>{x.id}</td>
                        <td>{x.username}</td>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                        <td>{x.address.city}</td>
                        <td >{x.phone}</td>
                        </tr>
                    )
                })}
                </tbody>
                </table> 
            </div></>
        )
    }
}

