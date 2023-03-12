const getName = (vd) => {
    const x = document.getElementById(vd).value;
    return x;
};
const getItemName = (y) => {
    const g = localStorage.getItem(y);
    let d;
    if (g) {
        d = g;
    }
    return d;
};
const deleteName = () => {
    localStorage.removeItem('name');
};
const addName = () => {
    let d = getItemName('name');
    const vs = getName("name-field");
    d = vs;
    localStorage.setItem('name', d);
};
const addMessage = () => {
  let d = getItemName("message");
  const vs = getName("messageDelete");
  d = vs;
  localStorage.setItem("message", d);
};
const deleteMessage = () => {
    localStorage.removeItem('message');
};
const clearAll = () => {
    localStorage.clear();
};