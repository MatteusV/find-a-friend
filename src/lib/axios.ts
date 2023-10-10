import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://friendly-robot-g6jjvrw9p5r296vr-8080.app.github.dev/',
  // baseURL: 'http://localhost:8080/',
})
