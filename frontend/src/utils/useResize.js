import { useEffect } from "react";

export default function useResize(func, denpendencies) {
  useEffect(() => {
    func();
    if (window) {
      window.addEventListener("resize", func);
    }
    // return () => {
    //   window.removeEventListener("resize", func);
    // };
  }, denpendencies);
}
