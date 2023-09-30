<script>
  // @ts-nocheck

  import { getCurrentDateTime } from "./lib/date";

  let loadData = localStorage.getItem("todoData");
  let todo = loadData === null ? [] : JSON.parse(loadData);
  let newTodo;
  $: localStorage.setItem("todoData", JSON.stringify(todo));
  function addTodo() {
    if(newTodo){
          todo = [
      ...todo,
      {
        id: todo.length + 1,
        details: newTodo,
        status: false,
        createdAt: getCurrentDateTime(),
      },
    ];
    newTodo = "";
    }
  }
  function deleteTodo(id) {
    todo = todo.filter((i) => i.id != id);
  }
  function toggle(id) {
    let index = todo.find((t) => t.id === id);
    index.status = !index.status;
    todo = todo;
  }
</script>

<div class="wrap">
  <div class="logo-div">
    <h1>Todo List</h1>
    <img src="./todo.png" alt="Todo Logo" height="40px" class="logo" />
  </div>
  <div class="container">
    <input
      type="text"
      bind:value={newTodo}
      on:keydown={(event) => {
        if (event.key === "Enter" || event.keyCode === 13) {
          event.preventDefault();
          addTodo();
        }
      }}
    />
    <button on:click={addTodo} class="add-button">Add Todo</button>
  </div>

  <div class="todoList">
    {#each todo as td}
      <div class="todo">
        <button class="toggle" on:click={toggle(td.id)}
          >{td.status ? "✅" : "⬜"}</button
        >
        <div class="details">
          {#if td.status}
            <del>
              {td.details}
            </del>
          {:else}
            {td.details}
          {/if}
        </div>
        <button on:click={deleteTodo(td.id)} class="delete-button"
          ><img src="./delete.svg" alt="delete-button" /></button
        ><i>{td.createdAt}</i>
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    gap: 10px;
    /* justify-content: center; */
  }
  input {
    background-color: transparent;
    padding: 5px;
    color: white;
    font-size: large;
    border: 2px solid skyblue;
  }
  input:focus {
    outline: none;
  }
  .todo {
    display: flex;
    gap: 1rem;

    align-items: center;
    /* background-color: aqua; */
  }
  .details {
    font-size: x-large;
  }
  .wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .delete-button {
    background-color: transparent;
    height: 30px;
    padding: 0;
    border: none;
    cursor: pointer;
  }
  .delete-button img {
    height: 30px;
    padding: 0;
    margin: 0;
  }
  .todoList {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
  }
  .toggle {
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    font-size: x-large;
  }
  .delete-button:hover {
    outline: 1px solid red;
  }

  .logo-div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .add-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  /* Hover style for the button */
  .add-button:hover {
    background-color: #0056b3; /* Darker shade of the primary color */
  }
</style>
