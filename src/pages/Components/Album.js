import React from 'react';
import PropTypes from 'prop-types';
import Header from 'prop-types';
import getMusics from '../../services/musicsAPI';
import MusicCard from './MusicCard';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      album: {},
      songs: [],
    };

    this.findMusics = this.findMusics.bind(this);
  }

  componentDidMount() {
    this.findMusics();
  }

  findMusics() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    
  }
}