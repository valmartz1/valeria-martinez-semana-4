class ToDoList extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        /* Add the same CSS as before */
      </style>
      <div id="todo-list">
        <h1>To-Do List</h1>
        <input type="text" id="new-task" placeholder="Add new task" />
        <button id="add-task">Add</button>
        <ul id="task-list"></ul>
      </div>
    `;

    const content = template.content.cloneNode(true);
    shadow.appendChild(content);

    const newTaskInput = shadow.getElementById("new-task");
    const addTaskButton = shadow.getElementById("add-task");
    const taskList = shadow.getElementById("task-list");

    addTaskButton.addEventListener("click", () => {
      const taskText = newTaskInput.value.trim();
      if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        newTaskInput.value = "";
      }
    });
  }
}
