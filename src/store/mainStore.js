import create from 'zustand';

const useStore = create((set) => ({
    buttonClicked: false,
    setButtonClicked: (value) => set(() => ({ buttonClicked: value })),
}));

export default useStore;