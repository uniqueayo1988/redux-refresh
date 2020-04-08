import React from 'react'
import { connect } from 'react-redux';

const SongDetail = ({selectedSong}) => {
  if (!selectedSong) {
    return <div>Please select a song</div>
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>{selectedSong.title}</p>
      <p>{selectedSong.duration}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
}

export default connect(
  mapStateToProps
)(SongDetail);
