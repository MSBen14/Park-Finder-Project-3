
d3.csv('merged_df.csv').then(function(data){
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
    
        

    //Functions
    function buildParkData(sample) {
        let panel = d3.select('#sample-metadata')
        panel.html('')
        d3.csv('parks_df.csv').then(function (data) {
            let metadata = data.filter(obj => obj['Park Name'] == sample)[0];
            console.log(data.filter(obj => obj['Park Name'] == sample));
            for (item in metadata) {
                panel.append('h6').text(`${item}: ${metadata[item]}`)
            }     
        }
        )  
    }

    function buildAlertData(sample) {
        let alertPanel = d3.select('#sample-alertdata')
        alertPanel.html('')
        d3.csv('alerts_df.csv').then(function (data) {
            let metadata = data.filter(obj => obj['Park Name'] == sample);
            console.log(metadata[0]);
            for (let i = 0; i < metadata.length; i++){
                for (item in metadata[i]) {
                    if (item == 'Alert') {
                        alertPanel.append('h6').text(`${item}: ${metadata[i][item]}`)
                    }
                    else if (item == 'Description'){
                        alertPanel.append('h6').text(`${item}: ${metadata[i][item]}`)
                    }
                    else if (item == 'Date'){
                        alertPanel.append('h6').text(`${item}: ${metadata[i][item]}`)
                    }
            }
            
                
            }     
        }
        )  
    }

function init(){
    let select = d3.select('#selDataset')
    d3.csv('merged_df.csv').then(function (data) {
        //get only one of each park in dropdown
        let parkNames = [];
        for (let i = 0; i < data.length; i++) {
            let currentPark = data[i];
            let currentParkName = currentPark['fullName'];
            const elementExists = parkNames.includes(currentParkName);
            if (!elementExists) {

                parkNames.push(currentParkName);
                
                }
        } 
        //console.log(parkNames);   
         for (let i = 0; i < parkNames.length; i++) {
             select.append('option').text(parkNames[i]).property('value', parkNames[i])
         }
    }
    
    )
    buildParkData('Grand Canyon National Park');
    buildAlertData('Grand Canyon National Park')
}

function optionChanged(sample) {
    buildParkData(sample);
    buildAlertData(sample);  
}
init();

