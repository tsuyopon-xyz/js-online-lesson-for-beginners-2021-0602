// Todoリストのデータ格納先
const todos = [];
let nextId = 1;

const todoInput = document.getElementById('todo-input');
const todoCreateButton = document.getElementById('todo-create-button');
const todoItemsContainer = document.getElementById('todo-items-container');

todoCreateButton.addEventListener('click', () => {
  const title = todoInput.value;
  if (!title) {
    alert('何も入力されてません');
    return;
  }

  const todo = createTodo(title);
  todos.push(todo);
  todoInput.value = '';

  // ulにtodo情報を追加する
  displayTodos();
});

const createTodo = (title) => {
  // 「変数名」「引数名」がプロパティ名と一緒だったら、以下のtitleのように「: 値」の部分を省略できる
  const todo = {
    id: nextId,
    title,
  };
  nextId++;

  return todo;
};

const displayTodos = () => {
  // 古いものを全部削除
  while (todoItemsContainer.children.length > 0) {
    const firstChild = todoItemsContainer.children[0];
    todoItemsContainer.removeChild(firstChild);
  }

  // 追加処理
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    appendTodoToListContaier(todo);
  }
};

const appendTodoToListContaier = (todo) => {
  const listItem = document.createElement('li');
  listItem.textContent = todo.title + '(id:' + todo.id + ')';
  todoItemsContainer.appendChild(listItem);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    const targetId = todo.id;
    const targetIndex = todos.findIndex((_todo) => _todo.id === targetId);
    todos.splice(targetIndex, 1);
    displayTodos();
  });
};
