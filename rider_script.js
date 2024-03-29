document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");
    const currentLocationInput = document.getElementById("currentLocation");
    const destinationInput = document.getElementById("destination");
    const mapIframe = document.querySelector(".map-area iframe");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      const currentLocation = currentLocationInput.value.trim();
      const destination = destinationInput.value.trim();
  
      if (currentLocation && destination) {
        // Construct the Google Maps Static API URL with currentLocation and destination
        const googleMapsURL = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(
          currentLocation
        )}&markers=color:red%7Clabel:C%7C${encodeURIComponent(
          currentLocation
        )}&markers=color:red%7Clabel:D%7C${encodeURIComponent(
          destination
        )}&size=600x300&zoom=10`;
  
        // Update the src attribute of the iframe
        mapIframe.setAttribute("src", googleMapsURL);
      }
    });
  });
  
  const showMapBtn = document.getElementById("showMap-btn");
  const closeBtn = document.querySelector(".close");
  const showRides = document.getElementById("searchRide-btn");
  
  showMapBtn.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.height = "100vh";
    closeBtn.style.display = "block";
  
  })
  closeBtn.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.height = "0";
    closeBtn.style.display = "none";
  })

  showRides.addEventListener("click", () => {
    window.location.href = "./driver_list.html";
  })