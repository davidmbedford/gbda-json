export const state = ({
  _albums: [],
  num: 2,
  get albums() {
    return this._albums;
  },
  set albums(value) {
    this._albums = value;
  },
  loading: true
})
