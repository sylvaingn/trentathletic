import React from 'react';

let user_info = [
    {'kilometres': '9', 'calories': '1000', 'minutes': '40'}
];

class ProgressBar extends React.Component {
    render() {
        let info;

        switch (this.props.type) {
            case 'minutes':
                info = user_info[0].minutes;
                break;
            case 'kilometres':
                info = user_info[0].kilometres;
                break;
            case 'calories':
                info = user_info[0].calories;
                break;
            default:
        }

        let spanStyle = {
            'background': 'url("./img/' + this.props.type + '.svg") center / contain no-repeat'
        };
        // pour 9 km parcourus sur 10
        let progress = {
            'height': '100%',
            'width': info * 100 / this.props.quantity + '%'
        };
        return [<div className={'single-goal'}>
            <span className={'icon'} style={spanStyle}>
            </span>
            <div className="bar blur">
                <div className="progress" style={progress}></div>
            </div>
        </div>];
    }
}

export default ProgressBar