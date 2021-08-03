import React from 'react'
import {Link} from 'react-router-dom'
import ProgressBar from "./ProgressBar";

let goals = [
    {'quantity': '30', 'type': 'minutes', 'frequency': 'Par semaines'},
    {'quantity': '10', 'type': 'kilometres', 'frequency': 'Par mois'},
    {'quantity': '8000', 'type': 'calories', 'frequency': 'Par semaines'},
];

class Goals extends React.Component {
    render() {
        if (goals.length > 0) {
            return goals.map((goal, i) => {
                return [
                    <ProgressBar key={goal} quantity={goal.quantity} type={goal.type} frequency={goal.frequency}/>]
            })
        } else {
            return <Link to='/objectifs'>Motive toi en te créant des objectifs !</Link>;
        }
    }
}


export default Goals