import React from 'react';
import '../styles/Store.css'
import {Card} from '../components/card'
import {Empty} from '../components/empty'
import {items} from '../items'

export default class Store extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        this.setState({items: items})
    }

    render(){
        return (
            <div className="grid items-grid grid-container--fill">
                {this.state.items.length ? this.state.items.map((item, index)=>(
                    <Card key={item.id} item={item} addToCart={()=>alert(`product with id ${item.id} has been added to cart`)}/>
                )): <Empty/>}
            </div>
        )
    }
}