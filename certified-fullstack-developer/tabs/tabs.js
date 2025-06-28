const playWIthTabs = () => {
  const buttonsContainer = document.querySelector(".tabs-container")

  const tabs = buttonsContainer.querySelectorAll(".tab-button")

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const selectedTab = e.target
      selectedTab.setAttribute("aria-selected", "true")
      selectedSection = document.getElementById(
        selectedTab.getAttribute("aria-controls")
      )
      selectedSection.classList.remove("hidden")

      tabs.forEach((t) => {
        if (t !== selectedTab) {
          t.setAttribute("aria-selected", "false")
          const section = document.getElementById(
            t.getAttribute("aria-controls")
          )
          section.classList.add("hidden")
        }
      })
    })
  })
}

document.addEventListener("DOMContentLoaded", playWIthTabs)
