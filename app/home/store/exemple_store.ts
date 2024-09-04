import { create } from "zustand";

interface exState {
  data: any;
  setdata: (users: any) => void;
}

export const useExStore = create<exState>()((set) => ({
  data: null,
  setdata: (newNewData: any) => {
    set({ data: newNewData });
  },
}));
