<template>
    <section>
        <!-- Cute tiny form -->
        <v-form v-on:submit="searchJobs">
            <h1>Search a job</h1>
            <div>
                <input v-model="search" placeholder="Search" class="input" id="search" />
                <v-btn type="submit">Search</v-btn>
            </div>
        </v-form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        searchJobs() {
            alert('hello')
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
}

.error {
    color: red;
}
.job {
    &-card-container {
        margin: 10px 0;
    }
    &-card-sub {
        text-align: left;
    }
    &-list,
    &-info {
        padding: 0 40px;
        overflow: auto;
        height: calc(100vh - 200px);
    }
    &-info-desc {
        text-align: left;
    }
    &-info-title {
        font-size: 1.5rem;
        font-weight: bold;
    }
}
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
</style>
