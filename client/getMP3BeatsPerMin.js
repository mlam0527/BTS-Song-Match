const MusicTempo = require("music-tempo");

const BPM = "BPM";

const setBPM = (tempo) => ({
  type: BPM,
  tempo
}) 

export const getBeatsPerMin = () => async dispatch => {
  const fileInput = document.getElementById('musicFile').files[0]
  const audioMusic = new (AudioContext || webkitAudioContext);
  const reader = new FileReader()
  console.log('inside first func')
  reader.onload = async event => {
    const answer = await audioMusic.decodeAudioData(event.target.result).then(getMusicTempo)
    dispatch(setBPM(answer))
  }
  console.log('turn to arrayBuffer')
  reader.readAsArrayBuffer(fileInput)
}

export const getMusicTempo = (buffer) => {
  const audioData = buffer.getChannelData(0); //channelOne
  // console.log(audioData)
  if (buffer.numberOfChannels === 2) {
    const channelTwo = buffer.getChannelData(1);
    audioData.map((dataPCM, index) => {
      return (channelTwo[index] + dataPCM) / 2;
    })
  } else {
    return audioData
  }
  const p = { expiryTime : 15 };
  const data = new MusicTempo(audioData, p)
  return data.tempo
}

const initialState = {
  BPM: 0
}

export default function reducerBPM (state = 0, action) {
  switch (action.type) {
    case BPM:
      return action.tempo
    default: 
      return state
  }
}

