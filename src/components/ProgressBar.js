import React from 'react';

let user_info = [
    {'kilometres': '9', 'calories': '1000', 'minutes': '40'}
];

class ProgressBar extends React.Component {
    render() {
        let info;
        let obj_quantity = parseInt(this.props.quantity);

        switch (this.props.type) {
            case 'minutes':
                info = parseInt(user_info[0].minutes);
                break;
            case 'kilometres':
                info = parseInt(user_info[0].kilometres);
                break;
            case 'calories':
                info = parseInt(user_info[0].calories);
                break;
            default:
        }

        let spanStyle = {
            'background': 'url("./img/' + this.props.type + '.svg") center / contain no-repeat'
        };

        let progress = {
            'height': '100%',
            'width': info * 100 / obj_quantity + '%'
        };

        let message = '';
        let class_success = '';

        if (info <= obj_quantity) {
            message = 'Plus que ' + (obj_quantity - info) + ' ' + this.props.type;
            class_success = 'message';
        } else {
            message = 'Bravo !';
            class_success = 'success message';
        }

        return [
            <div className={'single-goal'}>
                <div className={'info-goal'}>
                    <span className={'icon'} style={spanStyle}></span>
                    <div className={"bar blur"}>
                        <div className={"progress"} style={progress}></div>
                    </div>
                </div>
                <div className={class_success}>{message}</div>
            </div>
        ];
    }
}

export default ProgressBar