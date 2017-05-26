const express = require('express'); // Import express
const app = express();
const PORT = process.env.PORT || 3200;

app.get('/', (req, res) => {
    res.sendfile('./views/index.html');
});

app.get('/:timestamp', (req, res) => {
    const timestamp = req.params.timestamp;
    res.json(getTimestamp(timestamp));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}` );
});

function getTimestamp(timestamp){
    let result = {
        unix: null,
        natural: null
    }

    let date;

    if(!isNaN(parseInt(timestamp))){
        date = new Date(parseInt(timestamp * 1000));
    }else{
        date = new Date(timestamp);
    }

    if(!isNaN(date.getTime())){
        
        result.unix = date.getTime() / 1000;
        result.natural = getNaturalDate(date)
        
    }
    
    return result;
}

function getNaturalDate(date){
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Obtober', 'November', 'December'];
 
	return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}