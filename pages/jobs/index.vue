<template>
    <section>
        <div class="search-container">
            <v-form v-on:submit.prevent="searchJobs">
                <input v-model="searchStr" placeholder="Search" class="input" id="search" />
                <v-btn type="submit">Search</v-btn>
            </v-form>
        </div>

        <!-- Apollo watched Graphql query -->
        <ApolloQuery :query="require('@/graphql/queries/JobSearchQry.gql')" :variables="{ search: queryStr }">
            <template slot-scope="{ result: { loading, error, data } }">
                <!-- Loading -->
                <div v-if="loading" class="loading apollo">Loading...</div>

                <!-- Error -->
                <div v-else-if="error" class="error apollo">An error occured</div>

                <!-- Result -->
                <div v-else-if="data && data.job_search && data.job_search.length > 0" class="row">
                    <div class="job-list col-md-6">
                        <div class="job-card-container" v-for="(job, index) in data.job_search" :key="index">
                            <v-card>
                                <v-card-title class="job-card-headline">{{ job.position_name }}</v-card-title>

                                <v-card-subtitle class="job-card-sub">{{ job.description }}...</v-card-subtitle>

                                <v-card-actions>
                                    <v-btn click text v-on:click="viewJobInfo(job.id)">View Job</v-btn>
                                </v-card-actions>
                            </v-card>
                        </div>
                    </div>
                    <div class="job-info col-md-6">
                        <ApolloQuery :query="require('@/graphql/queries/JobInfoQry.gql')" :variables="{ id: jobId }">
                            <template slot-scope="{ result: { loading, error, data } }">
                                <!-- Loading -->
                                <div v-if="loading" class="loading apollo">Loading...</div>

                                <!-- Error -->
                                <div v-else-if="error" class="error apollo">An error occured</div>

                                <!-- Result -->
                                <div v-else-if="data && data.jobs_by_pk" class="row">
                                    <div class="job-info-container">
                                        <div class="job-info-title">{{ data.jobs_by_pk.position_name }}</div>
                                        <div class="row">
                                            <div class="job-info-loc col-md-6">
                                                {{ data.jobs_by_pk.location }}
                                            </div>
                                            <div class="job-info-url col-md-6">
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
    data() {
        return {
            jobId: this.$route.query.id || '',
            searchStr: this.$route.query.search || '',
            queryStr: this.$route.query.search || ''
        }
    },
    methods: {
        searchJobs() {
            this.queryStr = this.searchStr
        },
        viewJobInfo(id) {
            this.jobId = id
            // change the browser url to reflect the selected job id (SEO)
            history.pushState(
                {},
                null,
                `${this.$route.path}?search=${encodeURIComponent(this.$route.query.search)}&id=${encodeURIComponent(this.jobId)}`
            )
        }
    },
    mounted() {
        console.log('mounted')
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
.search-container {
    padding: 15px 0;
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
        padding: 0 40px;
        overflow: auto;
        height: calc(100vh - 160px);
        &-desc {
            text-align: left;
        }
        &-title {
            font-size: 1.5rem;
            font-weight: bold;
        }
    }
}
</style>
