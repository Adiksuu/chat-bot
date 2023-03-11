const disabledKeys = ["c", "C", "x", "J", "u", "I"];
const showAlert = (e: any) => {
  if (window.location.hostname.includes("localhost")) {
    return;
  }
  e.preventDefault();
  return alert("Wybacz, nie możesz sprawdzać kodu źródłowego strony 😞");
};
document.addEventListener("contextmenu", (e) => {
  showAlert(e);
});
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey && disabledKeys.includes(e.key)) || e.key === "F12") {
    showAlert(e);
  }
});
