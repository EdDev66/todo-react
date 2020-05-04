import React from 'react';
import styles from './Prioirty.module.css';
import { FaRegStar, FaStar } from 'react-icons/fa';
import * as actionTypes from '../../../store/actions/actions';
import { connect } from 'react-redux';

let star1 = <FaRegStar />
let star2 = <FaRegStar />
let star3 = <FaRegStar />


const priority = props => {

    if(props.priority === 'low'){
        star1 = <FaStar />
        star2 = <FaRegStar />;
        star3 = <FaRegStar />
    } else if (props.priority === 'medium'){
        star1 = <FaStar />;
        star2 = <FaStar />;
        star3 = <FaRegStar />
    } else {
        star1 = <FaStar />;
        star2 = <FaStar />;
        star3 = <FaStar />;
    }
    
     return (
         <div className={styles.Container}>
        <h4>Priority level</h4>
        <div className={styles.StarWrap}>
            <span onClick={() => props.onChangePriority('low')}>{star1}</span>
            <span onClick={() => props.onChangePriority('medium')}>{star2}</span>
            <span onClick={() => props.onChangePriority('high')}>{star3}</span>
        </div>
    </div>
 )
};

const mapStateToProps = state => {
    return {
        priority: state.currentTask.priority
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangePriority: (val) => dispatch({type: actionTypes.CHANGE_PRIORITY, rating: val})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(priority);