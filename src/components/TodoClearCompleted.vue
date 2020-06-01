<template>
    <button v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
</template>
<script>
export default {
    name: 'todo-clear-completd',
    props: {
        showClearCompletedButton: {
            type: Boolean,
            required: TextTrackCue
        }
    },
    methods: {
        clearCompleted(){
            eventBus.$emit('clearCompletedTodo');
        }
    }
}
</script>