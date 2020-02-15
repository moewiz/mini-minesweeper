import { bindActionCreators } from "redux";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useMemo } from "react";

// Ref: https://react-redux.js.org/api/hooks#recipe-useactions

export function useActions(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(() => {
    if (Array.isArray(actions)) {
      return actions.map(a => bindActionCreators(a, dispatch));
    }
    return bindActionCreators(actions, dispatch);
  }, [actions, dispatch]);
}

export function useShallowEqualSelector(selector) {
  return useSelector(selector, shallowEqual);
}
