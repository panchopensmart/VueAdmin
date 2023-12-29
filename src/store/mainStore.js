import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create((set) => ({
    buttonClicked: false,
    setButtonClicked: (value) => set(() => ({ buttonClicked: value })),
}));

export default useStore;