import { createSlice, configureStore } from '@reduxjs/toolkit'

const workLife = createSlice({
  name: 'Work/Life infor',
  initialState: {
    mvpValue: 0,
    probationValue: 0,
    competencyValue: 0,
    realityValue: 0,
    anomalyValue: 0,
  },
  reducers: {
    setMVP: (state, action) => {
      state.mvpValue = action.payload.value;
    },
    setProbation: (state, action) => {
      state.probationValue = action.payload.value;
    },
    setCompetency: (state, action) => {
      state.competencyValue = action.payload.value;
    },
    setReality: (state, action) => {
      state.realityValue = action.payload.value;
    },
    setAnomaly: (state, action) => {
      state.anomalyValue = action.payload.value;
    },
  }
})

export const { setMVP, setProbation, setCompetency, setReality, setAnomaly } = workLife.actions

export default workLife.reducer;