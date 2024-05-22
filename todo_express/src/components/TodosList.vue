<template>
    <main class="todos_list">
        <h1>Ваши задачи</h1>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <p><strong>Задача: </strong> {{ todo.title }}</p>
                <p><strong>Описание: </strong> {{ todo.body }}</p>
                <p><strong>Состояние: </strong> {{ todo.done }}</p>
            </li>
        </ul>
    </main>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { ref } from 'vue';
    
    const todos = ref(null);

    onMounted(() => {
        fetch('http://localhost:3000/users')
            .then((response) => response.json())
                .then((result) => {
                    todos.value = result
                    console.log(todos.value)
                })
    })
</script>

<style>
    .todos_list {
        max-width: 1000px;
        margin: 0 auto;
    }
</style>