import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import Graph from './Graph';

const Review = ({review, patient}) => {
    const reviews = review.map(rev => (
        <div className="card">
            <img className="card-img-top" src={rev.avatar} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{rev.text}</p>
                    <p class="post-date">posted on 
                     {' '}<Moment format='DD/MM/YYYY'>{rev.date}</Moment>
                    </p>
                    <em>{rev.name}</em>
                </div>
        </div>
    ));
};

Review.propTypes = {
    patient: PropTypes.array.isRequired,
}

export default connect(null)(Review);
