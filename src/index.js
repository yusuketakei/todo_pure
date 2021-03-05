import "./styles.css";

const onClickAdd = () => {
  //テストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncompleteList(inputText);
};

//未完了リストに指定のテキストを持つToDoを追加
const addIncompleteList = (label) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = label;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //未完了リストからdivを削除
    deleteFromIncompleteList(div);

    //完了リストに対象labelのTODOを生成
    addCompleteList(label);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //未完了リストからdivを削除
    deleteFromIncompleteList(div);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(div);
};

//完了リストに指定のテキストを持つToDoを追加
const addCompleteList = (label) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = label;

  //button(戻す)タグ生成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    //完了からDivを削除
    deleteFromCompleteList(div);

    //未完了のToDOを作成
    addIncompleteList(label);
  });
  div.appendChild(li);
  div.appendChild(backButton);

  document.getElementById("complete-list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//完了リストから指定の要素を削除
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
