import axios from 'axios'

const state = {
  notes: null,
  note: null
}

const getters = {
  stateNotes: state => state.notes,
  stateNote: state => state.note
}

const actions = {
  async createNote({dispatch}, note) {
    await axios.post('/notes/create', note)
    await dispatch('getNotes')
  },
  async getNotes({commit}) {
    let {data} = await axios.get('/notes')
    commit('setNotes', data)
  },
  async viewNote({commit}, id) {
    let {data} = await axios.get(`notes/${id}`)
    commit('setNote', data)
  },
  async updateNote({}, note) {
    await axios.patch(`/notes/note/${note.id}`, note.form)
  },
  async deleteNote({}, id) {
    await axios.delete(`/notes/note/${id}`)
  }
}

const mutations = {
  setNotes(state, notes) {
    state.notes = notes
  },
  setNote(state, note) {
    state.note = note
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
