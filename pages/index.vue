<template>
    <section>
        <!-- Cute tiny form -->
        <form v-on:submit.prevent="searchJobs" class="form-search">
            <div class="form-head">Search Jobs</div>
            <div class="inline-flex">
                <input class="txt-input mr-5" v-model="searchStr" placeholder="Search" id="search" size="sm" />
                <button class="bg-blue-500 p-2 border rounded hover:bg-blue-700 text-white" variant="primary" size="sm" type="submit">
                    Search
                </button>
            </div>
        </form>
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
.form {
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
