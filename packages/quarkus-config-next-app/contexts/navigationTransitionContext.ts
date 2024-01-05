import { TransitionStartFunction, createContext } from "react";

const DEFAULT_VALUE: [boolean, TransitionStartFunction] = [false, () => {}];

const NavigationTransitionContext = createContext(DEFAULT_VALUE);

export default NavigationTransitionContext;
