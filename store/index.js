export const state = () => ({
    results: []
})

export const mutations = {
    SET_RESULTS(state, results){
        state.results = results
    }
}
export const actions = {
    async searchFDA(context, date){
        const formatedDates = date
        console.log(formatedDates)
        try {
            const data = await this.$axios.$get('https://api.fda.gov/drug/label.json',{
                params: {
                    count: 'openfda.route.exact',
                    search: `effective_time:[${formatedDates[0]} TO ${formatedDates[1]}]`,
                }
            })

            context.commit('SET_RESULTS', data.results)

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
}