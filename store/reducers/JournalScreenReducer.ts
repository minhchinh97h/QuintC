import { JournalScreenState } from "../../types/states/JournalScreenState"
import { ReduxAction } from "types/ReduxAction"

const types = {

}

const initialState: JournalScreenState = {}

const reducer = (state = initialState, action: ReduxAction) => {
    const {type, payload} = action

    switch(type) {
        default:
            return state
    }
}

export default reducer