import { Component } from "react";

export class Button extends Component {
    render(){
        return(
            <>
            <button className="Button" type="button" onClick={()=>{this.props.next()}}>Load more</button>
            </>
        )
    }
}
