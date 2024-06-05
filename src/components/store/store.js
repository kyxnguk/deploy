import { create } from "zustand";

const useStore = create((set) => ({
  // count 초기값 선언
  count: 0,
  // count 1씩 증강 (set 활용)
  increase: () => set((state) => ({ count: state.count + 1 })),
  // count 1씩 감소 (set 활용)
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
