<template>
    <section>
        <!-- Cute tiny form -->
        <v-form v-on:submit.prevent="searchJobs">
            <h1>Search a job</h1>
            <div>
                <input v-model="searchStr" placeholder="Search" class="input" id="search" />
                <v-btn type="submit">Search</v-btn>
            </div>
        </v-form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            searchStr: ''
        }
    },
    methods: {
        searchJobs() {
            if (this.searchStr !== '') {
                this.$router.push({ path: 'jobs', query: { search: this.searchStr } })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.v-form {
    > h1 {
        margin-bottom: 30px;
    }
    > .v-btn {
        height: 52px;
    }
    width: 50%;
    margin: 200px auto auto auto;
}
section {
    display: flex;
}
.input {
    font-family: inherit;
    font-size: inherit;
    border: solid 2px #ccc;
    border-radius: 3px;
    padding: 5px;
}
</style>
