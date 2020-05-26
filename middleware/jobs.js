export default function({ query, redirect }) {
    // Redirect to homepage if jobs page contains no query parameters
    if (!query.search || query.search === '') {
        return redirect('/')
    }
}
