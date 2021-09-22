const container = document.querySelector('.weather');
const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    container.innerHTML = "<p>Loading gps...</p>";
    const url = `https://open.mapquestapi.com/geocoding/v1/address?key=XmH7XJX2qYjG2EjEQTfK6Aq6stjKaUsF&location=${form.address.value}`;
    const response = await fetch(url);
    if (response.status != 200) {
        throw new Error("Something went wrong with fecthing the GPS coordinates");
    }
    const data = await response.json();
    const lat = data.results[0].locations[0].latLng.lat;
    const lng = data.results[0].locations[0].latLng.lng;
    console.log(`${lat},${lng}`);
});