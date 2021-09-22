const geocoder = async (address) => {
    const url = `https://open.mapquestapi.com/geocoding/v1/address?key=XmH7XJX2qYjG2EjEQTfK6Aq6stjKaUsF&location=${address}`;
    const response = await fetch(url);
    if (response.status != 200) {
        throw new Error("Something went wrong with fecthing the GPS coordinates");
    }
    const data = await response.json();
    const lat = data.results[0].locations[0].latLng.lat;
    const lng = data.results[0].locations[0].latLng.lng;
    return `${lat},${lng}`;
}

export {geocoder};
console.log("test");
console.log(geocoder('fayetteville, wv'));

//Currently working on fixing this function because it returns a promise and not the value of lat lng
