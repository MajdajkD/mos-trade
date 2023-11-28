window.TooltipInterop = {
  SetTooltips: async function () {
    window.tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    window.tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  }
}

