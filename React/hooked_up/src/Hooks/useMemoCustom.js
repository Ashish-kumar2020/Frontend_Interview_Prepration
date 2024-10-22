import { useEffect, useRef } from "react";

const areEqual = (prevDeps, nextDeps) => {
  if (prevDeps === null) return false;
  if (prevDeps.length !== nextDeps.length) return false;
  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== nextDeps[i]) {
      return false;
    }
  }
  return true;
};

const customUseMemoHook = (cb, deps) => {
  // caribale or state -> to store cached value
  const memoiseRef = useRef();

  // changes in deps
  if (!memoiseRef.current || !areEqual(memoiseRef.current.deps, deps)) {
    memoiseRef.current = {
      value: cb(),
      deps,
    };
  }

  // cleanup logic
  useEffect(() => {
    memoiseRef.current = null;
  }, []);

  // return the memoised value
  return memoiseRef.current.value;
};

export default customUseMemoHook;
