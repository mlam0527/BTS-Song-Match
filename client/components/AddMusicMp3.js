// import { map } from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getBeatsPerMin} from '../getBeatsPerMin'

export class addMusicMp3 extends Component {
  constructor() {
    super()

    this.getBPM = this.getBPM.bind(this)
    this.showBPM = this.showBPM.bind(this)
  }

  getBPM() {
    // this.props.getBeats()
    getBeatsPerMin()
    // console.log('home', getBeatsPerMin())
  }

  showBPM() {
    console.log('showBPM')
  }

  render() {
    console.log(this.props.BPM)
    return (
      <div>
        <h1>Do You Know BTS?</h1>
        <form>
          <label>
            <h3>Music File:</h3>
            <input
              id='musicFile'
              type='file'
              accept='.mp3'
              onChange={(event)=> this.getBPM(event)}
            >
            </input>
          </label>
        </form>
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

export default connect(mapState)(addMusicMp3)