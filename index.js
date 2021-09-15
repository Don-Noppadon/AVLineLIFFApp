const request = require('request-promise')

// Verifying Access Token and Channel ID
const json = await request.get({
    url: `https://api.line.me/oauth2/v2.1/verify?access_token=${accessToken}`,
    json: true
})
if (json.client_id !== CHANNEL_ID) {
    return 401
}


// Getting User Profile by Access Token
const profile = await request.get({
    url: "https://api.line.me/v2/profile",
    headers: { Authorization: `Bearer ${accessToken}` },
    json: true
})


// Revoke Access Token
await request.post({
    url: "https://api.line.me/oauth2/v2.1/revoke",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    form: {
        access_token: `${accessToken}`,
        client_id: CHANNEL_ID,
        client_secret: CHANNEL_SECRET
    }
})

const btnAPI = document.getElementById('btnAPI1');

btnAPI.onclick = () => {
    SendDataToNav();
};

function SendDataToNav() {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', 'Basic dXNlcjAxOkxzMTIzNDU2');

    var raw = JSON.stringify({
        EntryNo: 3,
        Description: 'อรทัย3'
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(
            "http://crbdns.trueddns.com:17412/BC170/ODataV4/Company('CRONUS%20-%20LSVIP')/APILineEntry",
            requestOptions
        ).then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}