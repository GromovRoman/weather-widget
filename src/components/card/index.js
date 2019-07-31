import React from 'react';
import './card.css';

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state={

        }
    }

    render() {
        return(
            <div className={'card'}>
                <div onClick={() => this.props.del(this.props.id)} className={'del'}>X</div>
                <div className={'cardTitle'}>
                    City: {this.props.data.name}
                </div>
                <div className={'cardTemp'}>
                    Temp: {this.props.data.main.temp}
                </div>
            </div>
        )
    }
}