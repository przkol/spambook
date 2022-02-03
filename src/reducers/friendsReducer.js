const friendsReducer = (state = { usersList: [], usersListLoadedFlag: false }, action) => {
    switch (action.type) {
        case ('SET_FRIENDLIST'):
            const usersList = action.userInfo

            return {
                usersList: usersList.map((user) => {
                    const birthDate = new Date(user?.dob?.date)
                    return {
                        ...user,
                        dob: {
                            ...user.dob,
                            date: birthDate.toLocaleDateString()
                        }
                    }
                }),
                usersListLoadedFlag: true
            }
        default:
            return state
    }

}
export default friendsReducer