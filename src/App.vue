<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Hello!</h1>
        <h3>This is your daily planner, please add things to do...</h3>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <ToDoList />
    </v-content>
  </v-app>
</template>

<script>
import ToDoList from "./components/ToDoList";
export default {
  name: "App",
  components: {
    ToDoList,
  },
  data: () => ({}),
};
</script>
