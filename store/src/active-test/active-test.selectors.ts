import { AppState } from "../store";

export default {
    selectActiveTest: (state: AppState) => state.theory.activeTest
};
