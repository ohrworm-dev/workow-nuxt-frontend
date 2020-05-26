<template>
    <section>
        <!-- Apollo watched Graphql query -->
        <ApolloQuery :query="require('@/graphql/queries/JobSearchQry.gql')" :variables="{ search }">
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
                        <ApolloQuery :query="require('@/graphql/queries/JobInfoQry.gql')" :variables="{ id }">
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
