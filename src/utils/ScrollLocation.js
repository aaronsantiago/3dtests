import create from 'zustand'

const useScrollLocation = create(set => ({
  scrollIndex: 0,
  setScroll: (i) => set(state => ({ scrollIndex: i })),
}))

export default useScrollLocation;