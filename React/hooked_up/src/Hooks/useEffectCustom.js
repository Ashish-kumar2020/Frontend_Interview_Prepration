import { useRef } from "react";

const customUseEffect = (effect, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef(true);

  // First Render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = effect();
    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }

  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  if (depsChanged) {
    const cleanup = effect();
    if (cleanup && typeof cleanup === "function" && deps) {
      cleanup();
    }
  }
  prevDeps.current = deps || [];
};

export default customUseEffect;
