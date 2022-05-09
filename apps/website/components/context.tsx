import React, { FC, useCallback, useMemo } from "react";

export interface State {
  displayMobileMenu: boolean;
}

const initialState = {
  displayMobileMenu: false,
};

type Action =
  | {
      type: "OPEN_MOBILE_MENU";
    }
  | {
      type: "CLOSE_MOBILE_MENU";
    };

export const UIContext = React.createContext<State | any>(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_MOBILE_MENU": {
      return {
        ...state,
        displayMobileMenu: true,
      };
    }
    case "CLOSE_MOBILE_MENU": {
      return {
        ...state,
        displayMobileMenu: false,
      };
    }
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openMobileMenu = useCallback(
    () => dispatch({ type: "OPEN_MOBILE_MENU" }),
    [dispatch]
  );
  const closeMobileMenu = useCallback(
    () => dispatch({ type: "CLOSE_MOBILE_MENU" }),
    [dispatch]
  );
  const toggleMobileMenu = useCallback(
    () =>
      state.displayMobileMenu
        ? dispatch({ type: "CLOSE_MOBILE_MENU" })
        : dispatch({ type: "OPEN_MOBILE_MENU" }),
    [dispatch, state.displayMobileMenu]
  );
  const closeSidebarIfPresent = useCallback(
    () => state.displayMobileMenu && dispatch({ type: "CLOSE_MOBILE_MENU" }),
    [dispatch, state.displayMobileMenu]
  );

  const value = useMemo(
    () => ({
      ...state,
      openMobileMenu,
      closeMobileMenu,
      toggleMobileMenu,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext: FC<{ children: React.FC }> = ({ children }) => (
  <UIProvider>{children}</UIProvider>
);
