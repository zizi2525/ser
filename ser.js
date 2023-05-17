// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8084;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({

    originBlacklist: [],
   
   
    origin :"https://comedyshow.to",
   
    setHeaders: {
        'origin': 'https://comedyshow.to',
        "Referer": "https://comedyshow.to/",
        "Host": "comedyshow.to",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0",
    },
    httpProxyOptions: {
        xfwd: false
    }
   
 
   
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
