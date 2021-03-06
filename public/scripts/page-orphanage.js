const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//Creat map
const map = L.map('mapid', options).setView([lat,lng], 15)

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//Create and add marker
L
.marker([lat,lng], { icon })
.addTo(map)


/* image gallery */
function selectImage(event) {
    const button = event.currentTarget

    // Remove .active class
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove(".active")
    }

    // Select clicked image
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // Update image container
    imageContainer.src = image.src

    // Add .active class to button
    button.classList.add('active')
}