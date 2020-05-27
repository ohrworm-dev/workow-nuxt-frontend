<template>
    <section>
        <div class="pt-4 pb-4 w-full">
            <form v-on:submit.prevent="searchJobs" class="form-jobs">
                <input class="txt-input mr-5" v-model="searchStr" placeholder="Search" id="search" />
                <button class="bg-blue-500 p-2 border rounded hover:bg-blue-700 text-white" type="submit">Search</button>
            </form>
        </div>

        <!-- Apollo watched Graphql query -->
        <ApolloQuery :query="require('@/graphql/queries/JobSearchQry.gql')" :variables="{ search: queryStr }">
            <template slot-scope="{ result: { loading, error, data } }">
                <!-- Loading -->
                <div v-if="loading" class="loading apollo">Loading...</div>

                <!-- Error -->
                <div v-else-if="error" class="error apollo">An error occured</div>

                <!-- Result -->
                <div v-else-if="data && data.job_search && data.job_search.length > 0" class="flex">
                    <div class="job-list p-5">
                        <div
                            class="w-full border border-gray-400 rounded overflow-hidden shadow-lg mt-4 mb-4"
                            v-for="(job, index) in data.job_search"
                            :key="index"
                        >
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">{{ job.position_name }}</div>
                                <p class="text-gray-700 text-base text-left">{{ job.description }}<b>...</b></p>
                            </div>
                            <div class="px-6 py-4">
                                <button
                                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                                    v-on:click="viewJobInfo(job.id)"
                                >
                                    View Job
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="job-info">
                        <ApolloQuery :query="require('@/graphql/queries/JobInfoQry.gql')" :variables="{ id: jobId }">
                            <template slot-scope="{ result: { loading, error, data } }">
                                <!-- Loading -->
                                <div v-if="loading" class="loading apollo">Loading...</div>

                                <!-- Error -->
                                <div v-else-if="error" class="error apollo">An error occured</div>

                                <!-- Result -->
                                <div v-else-if="data && data.jobs_by_pk" class="row">
                                    <div class="job-info-container rounded p-5 m-5 border">
                                        <div class="job-info-title">{{ data.jobs_by_pk.position_name }}</div>
                                        <div class="w-full flex pt-5 pb-5">
                                            <div class="job-info-loc w-1/2 text-left">
                                                {{ data.jobs_by_pk.location }}
                                            </div>
                                            <div class="job-info-url w-1/2 text-right">
                                                <a :href="data.jobs_by_pk.url" target="_blank">Original Post</a>
                                            </div>
                                        </div>
                                        <div class="job-info-desc">
                                            {{ data.jobs_by_pk.description }}
                                        </div>
                                    </div>
                                </div>

                                <div v-else>No job selected</div>
                            </template>
                        </ApolloQuery>
                    </div>
                </div>

                <!-- No result -->
                <div v-else class="no-result apollo">No result :(</div>
            </template>
        </ApolloQuery>
    </section>
</template>
<script>
export default {
    // refer to middleware/jobs.js
    middleware: ['jobs'],
    data() {
        return {
            jobId: this.$route.query.id || '',
            searchStr: this.$route.query.search || '',
            queryStr: this.$route.query.search || ''
        }
    },
    methods: {
        searchJobs() {
            if (this.searchStr !== '') {
                this.$router.push({ path: 'jobs', query: { search: this.searchStr } })
                this.queryStr = this.searchStr
                this.jobId = ''
            }
        },
        viewJobInfo(id) {
            this.jobId = id
            // change the browser url without full page reload to reflect the selected job id (SEO)
            history.pushState(
                {},
                null,
                `${this.$route.path}?search=${encodeURIComponent(this.$route.query.search)}&id=${encodeURIComponent(this.jobId)}`
            )
        }
    }
}
</script>

<style lang="scss" scoped>
.form,
.input,
.apollo,
.message {
    padding: 12px;
}

label {
    display: block;
    margin-bottom: 6px;
}
.input {
    font-family: inherit;
    font-size: inherit;
    border: solid 2px #ccc;
    border-radius: 3px;
    padding: 5px;
}
.error {
    color: red;
}
.job {
    &-card {
        &-container {
            margin: 10px 0;
            word-break: break-word;
        }
        &-headline {
            word-break: break-word;
        }
        &-sub {
            text-align: left;
        }
    }
    &-list,
    &-info {
        height: calc(100vh - 160px);
        @apply block w-1/2 overflow-auto;
        line-height: 1.75rem;
        &-desc {
            text-align: left;
        }
        &-title {
            font-size: 1.5rem;
            font-weight: bold;
        }
        &-url {
            @apply text-blue-400;
        }
    }
}
</style>
