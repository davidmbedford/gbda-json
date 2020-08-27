export const state = ({
  _albums: [],
  num: 1,
  get albums() {
    return this._albums;
  },
  set albums(value) {
    this._albums = value;
  },
  loading: true
})
