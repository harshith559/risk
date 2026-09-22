
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

const placeName = document.querySelector("#placeName");
const riskBadge = document.querySelector("#riskBadge");
const scoreValue = document.querySelector("#scoreValue");
const reasonText = document.querySelector("#reasonText");
const toast = document.querySelector("#toast");

markers.forEach((marker) => {
  marker.addEventListener("click", () => {
    markers.forEach((item) => {
      item.classList.remove("active");
    });

    marker.classList.add("active");

    placeName.textContent = marker.dataset.place;
    riskBadge.textContent = marker.dataset.risk;
    scoreValue.textContent = marker.dataset.score;
    reasonText.textContent = marker.dataset.reason;

    if (marker.dataset.risk === "Critical") {
      riskBadge.style.background = "#ff754e";
      riskBadge.style.color = "#41160e";
    } else if (marker.dataset.risk === "Moderate") {
      riskBadge.style.background = "#ffc94e";
      riskBadge.style.color = "#10382d";
    } else {
      riskBadge.style.background = "#5dc78a";
      riskBadge.style.color = "#10382d";
    }
  });
});

const alertButton = document.querySelector("#alertBtn");

if (alertButton) {
  alertButton.addEventListener("click", () => {
    toast.textContent =
      "Alert queued for " + placeName.textContent + " community channels";

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  });
}

const refreshButton = document.querySelector("#refreshBtn");

if (refreshButton) {
  refreshButton.addEventListener("click", () => {
    refreshButton.textContent = "✓ Data refreshed";

    setTimeout(() => {
      refreshButton.textContent = "↻ Refresh data";
    }, 1800);
  });
}