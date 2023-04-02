d3.json('merged_df.csv').then(function(data){
    console.log(data);
    // Get the latitude and longitude values from the first row of your DataFrame
    var lat = data[0]['latitude'];
    var lon = data[0]['longitude'];
    
    var map = L.map('map').setView([lat,lon], 10); 

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    for (let i=0; i<data.length; i++){
        let currentPark=data[i];
        lat=currentPark['latitude']; 
        lng=currentPark['longitude'];
        if ((lat!==null) & (lng!==null)){
            L.marker([lat, lng]).addTo(map);
        };
    }
}) 
.catch(function(error) {
    console.log(error);
});
