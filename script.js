document.getElementById("add-btn").addEventListener("click", function () {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const taskList = document.getElementById("task-list");
  
      const taskItem = document.createElement("li");
      taskItem.className = "task";
  
      const taskContent = document.createElement("span");
      taskContent.textContent = taskText;
  
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "✔";
      completeBtn.className = "complete-btn";
      completeBtn.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
      });
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "✖";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", function () {
        taskList.removeChild(taskItem);
      });
  
      taskItem.appendChild(taskContent);
      taskItem.appendChild(completeBtn);
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
  
      taskInput.value = "";
    }
  });
  