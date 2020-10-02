const MusicTempo = require("music-tempo");

const runDispatch = (beat) => {
  setBPM(beat)
}

const BPM = "BPM";

const setBPM = (tempo) => ({
  type: BPM,
  tempo
}) 


export const getBeatsPerMin = function () {
  const fileInput = document.getElementById('musicFile').files[0]
  const audioMusic = new (AudioContext || webkitAudioContext);
  const reader = new FileReader()
  console.log('inside first func')
  reader.onload = event => {
    audioMusic.decodeAudioData(event.target.result, getMusicTempo)
  }
  console.log('turn to arrayBuffer')
  reader.readAsArrayBuffer(fileInput)
}

export const getMusicTempo = (buffer) => {
  const audioData = buffer.getChannelData(0); //channelOne
  console.log(audioData)
  if (buffer.numberOfChannels === 2) {
    const channelTwo = buffer.getChannelData(1);
    audioData.map((dataPCM, index) => {
      return (channelTwo[index] + dataPCM) / 2;
    })
  } else {
    return audioData
  }
  const data = new MusicTempo(audioData)
  // return showBPM(data.tempo)
  runDispatch(data.tempo)
  console.log(data.tempo)
  // runDispatch(data.tempo)
  console.log('after runDispatch')
}

const initialState = {
  BPM: 0
}

export default function reducerBPM (state = initialState, action) {
  switch (action.type) {
    case BPM:
      console.log('hi')
      // return { ...state, BPM: action.tempo }
    default: 
      return state
  }
}

