import React from 'react';
import './search.css';
import axios from 'axios';
import Card from '../../components/card';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
            data: {},
            cards: []
        };
    }

    inputTextChange = (event) => {
        this.setState({
            inputText: event.target.value,
        });
    }
    setWeather = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputText}&APPID=6d8d9229e695042934db5ce8998e3afa`)
        .then((response) => {
            this.setState(state => ({
                cards: [
                  ...state.cards,
                  response.data,
                ],
                data: response.data,
              }));
        });
    }

    del = (id) => {
        let clone = [...this.state.cards];
        console.log(clone);
        console.log(id);
    };

    render() {
        return(
            <div className={'search'}>
                <input type='text'onChange={this.inputTextChange} value={this.state.inputText}/>
                <div className={'go'} onClick={this.setWeather}>Go</div>
                {this.state.cards.map((data, index) => 
                    <Card data={data} del={this.del} key={index} id={index}/>
                )}
            </div>
        )
    }
}