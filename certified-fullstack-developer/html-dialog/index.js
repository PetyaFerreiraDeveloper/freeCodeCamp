function controlDialog() {
  const dialog = document.querySelector(".myDialog")
  const showButton = document.querySelector(".showDialog")
  const closeButton = document.querySelector(".closeDialog")

  showButton.addEventListener("click", () => dialog.showModal())
  closeButton.addEventListener("click", () => dialog.close())

  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect()
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      dialog.close()
    }
  })
}

document.addEventListener("DOMContentLoaded", controlDialog)
