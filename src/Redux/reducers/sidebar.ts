import { createSlice } from "@reduxjs/toolkit";

type sideBarState = {
    openSideBar: boolean
}

const initialState: sideBarState = {
    openSideBar: false
}


const sideBarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        sideBarVisible: (state) => {
            state.openSideBar = !state.openSideBar
        }
    }
})

export const { sideBarVisible } = sideBarSlice.actions;
export default sideBarSlice.reducer