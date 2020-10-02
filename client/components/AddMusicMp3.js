// import { map } from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLiveBeatsPerMin } from '../getLiveBeatsPerMin';
import {getBeatsPerMin} from '../getMP3BeatsPerMin'

export class addMusicMp3 extends Component {
  constructor() {
    super()

    this.getBPM = this.getBPM.bind(this)
    this.getLiveBPM = this.getLiveBPM.bind(this)
  }

  getBPM() {
    this.props.getBeats()
  }

  getLiveBPM() {
    this.props.getLiveBeats()
  }

  render() {
    console.log(this.props.BPM)
    return (
      <div>
        <h1>Do You Know BTS?</h1>
        <label>
          <h3>Music File:</h3>
          <input
            id='musicFile'
            type='file'
            accept='.mp3, .m4a'
            onChange={(event)=> this.getBPM(event)}
          >
          </input>
        </label>
        <audio
          id='liveListen'
          type='button'
          onClick={() => this.getLiveBPM()}
        >
        </audio>
        <h3>BPM:
          {
            this.props.BPM > 0 ? this.props.BPM: ''
          }
          </h3>
      </div>
    )
  }
}

const mapState = (state) => ({
  BPM: state.BPM
})

const mapDispatch = (dispatch) => ({
  getBeats: () => dispatch(getBeatsPerMin()),
  getLiveBeats: ()=> dispatch(getLiveBeatsPerMin())
})

export default connect(mapState, mapDispatch)(addMusicMp3)