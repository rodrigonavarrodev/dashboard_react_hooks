export const prepareEvents = ( events = [] ) => {
    
    return events.map(
        (e) => ({
            firstname: e.firstname,
            lastname: e.lastname,
            email: e.email
        })
    )
}