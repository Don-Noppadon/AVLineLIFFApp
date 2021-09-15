// Import stylesheets
import './style.css';

import liff from '@line/liff';

const body = document.getElementById('body');
const userId = document.getElementById('userId');
const pictureUrl = document.getElementById('pictureUrl');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');
const accessToken = document.getElementById('accessToken');

const btnShare = document.getElementById('btnShare');
const btnRegister = document.getElementById('btnRegister');
const btnLogIn = document.getElementById('btnLogIn');
const btnLogOut = document.getElementById('btnLogOut');
const btnApi = document.getElementById('btnApi');

const fuserId = document.getElementById('fuserId');
const fdisplayName = document.getElementById('fdisplayName');

async function main() {
  liff.ready.then(() => {
    if (liff.getOS() === 'android') {
      body.style.backgroundColor = '#888888';
    }
    if (liff.isInClient()) {
      getUserProfile();
      document.getElementById('btnLogIn').style.display = 'none';
      document.getElementById('btnLogOut').style.display = 'block';
      document.getElementById('btnShare').style.display = 'block';
      document.getElementById('btnApi').style.display = 'block';
    } else {
      if (liff.isLoggedIn()) {
        getUserProfile();
        document.getElementById('btnLogIn').style.display = 'none';
        document.getElementById('btnLogOut').style.display = 'block';
        document.getElementById('btnShare').style.display = 'block';
        document.getElementById('btnApi').style.display = 'block';
      } else {
        document.getElementById('btnLogIn').style.display = 'block';
        document.getElementById('btnLogOut').style.display = 'none';
        document.getElementById('btnShare').style.display = 'none';
        document.getElementById('btnApi').style.display = 'block';
      }
    }
  });

  await liff.init({ liffId: '1655050259-lnja5368' });
}
main();

async function getUserProfile() {
  const profile = await liff.getProfile();
  pictureUrl.src = profile.pictureUrl;
  userId.innerHTML = '<b>User ID: </b>' + profile.userId;
  displayName.innerHTML = '<b>Display Name: </b>' + profile.displayName;
  statusMessage.innerHTML = '<b>Status : </b>' + profile.statusMessage;
  email.innerHTML = '<b>E-mail : </b>' + liff.getDecodedIDToken().email;
  accessToken.innerHTML = '<b>Access Token ID : </b>' + liff.getAccessToken();
  fuserId.innerHTML = '<input value=' + profile.userId + '>';
  fdisplayName.innerHTML = '<input value=' + profile.displayName + '>';
}

async function shareMsg() {
  const result = await liff.shareTargetPicker([
    {
      type: 'text',
      text: 'This msg was shared by LIFF'
    }
  ]);

  if (result) {
    alert('Message was shared!');
  } else {
    alert('Shared Target Picker was Cancelled by user');
  }

  liff.closeWindow();
}

btnShare.onclick = () => {
  shareMsg();
};

btnLogIn.onclick = () => {
  logIn();
};

btnLogOut.onclick = () => {
  logOut();
};

btnApi.onclick = () => {
  GetDataFromBC();
};
//btnApi.onclick = userAction();

function logOut() {
  liff.logout();
  window.location.reload();
}
function logIn() {
  liff.login({ redirectUri: window.location.href });
}
/*
function SaveValue() {
  var data = JSON.stringify({
    memberAccountNo: 'API000009',
    memberName: 'อรทัย11',
    memberSurName: 'บุญรักษา',
    dateOfBirth: '24/05/1993',
    sex: 'F',
    citizenID: '1234545454678',
    mobileNo: '0976565432',
    emailAddress: '',
    address1: '22/33 อ.เมือง',
    city: 'เขตป้อมปราบศัตรูพ่าย',
    county: 'กรุงเทพฯ',
    postCode: '10100',
    regionCode: 'TH',
    consent1: 'TRUE',
    dateConsent1: '',
    consent2: 'TRUE',
    dateConsent2: '',
    consent3: 'TRUE',
    dateConsent3: '',
    consent4: 'TRUE',
    dateConsent4: '',
    apistoreRegister: 'Siam Square 1 ( ในร้าน Eve and boy )',
    createorupdate: 'CREATE'
  });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function() {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open(
    'POST',
    "http://crbdns.trueddns.com:17412/BC170/ODataV4/Company('CRONUS%2520-%2520LSVIP')/API_CreateUpdateMem_P"
  );
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Authorization', 'Basic dXNlcjAxOkxzMTIzNDU2');

  xhr.send(data);

  alert(data);
}
*/
function SaveValue() {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Basic dXNlcjAxOkxzMTIzNDU2');

  var raw = JSON.stringify({
    memberAccountNo: 'API000008',
    memberName: 'อรทัย1',
    memberSurName: 'บุญรักษา',
    dateOfBirth: '24/05/1993',
    sex: 'F',
    citizenID: '1234545454678',
    mobileNo: '0976565432',
    emailAddress: '',
    address1: '22/33 อ.เมือง',
    city: 'เขตป้อมปราบศัตรูพ่าย',
    county: 'กรุงเทพฯ',
    postCode: '10100',
    regionCode: 'TH',
    consent1: 'TRUE',
    dateConsent1: '',
    consent2: 'TRUE',
    dateConsent2: '',
    consent3: 'TRUE',
    dateConsent3: '',
    consent4: 'TRUE',
    dateConsent4: '',
    apistoreRegister: 'Siam Square 1 ( ในร้าน Eve and boy )',
    createorupdate: 'CREATE'
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(
    "http://crbdns.trueddns.com:17412/BC170/ODataV4/Company('CRONUS%20-%20LSVIP')/API_CreateUpdateMem_P",
    requestOptions
  )
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  alert(fetch);
}

function CreateData() {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Basic dXNlcjAxOkxzMTIzNDU2');

  var raw = JSON.stringify({
    EntryNo: 2,
    Description: 'test'
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  //var response;
  //response = '55';

  fetch(
    "http://crbdns.trueddns.com:17412/BC170/ODataV4/Company('CRONUS%20-%20LSVIP')/APILineEntry",
    requestOptions
  )
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(err => console.log(err));

  //alert(response);
}

async function CreateData1() {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'text/plain');
  myHeaders.append('Authorization', 'Basic dXNlcjAxOkxzMTIzNDU2');

  var raw = JSON.stringify({
    EntryNo: 2,
    Description: 'test'
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  alert(raw);
  //alert(5);
  let response = await fetch(
    "http://crbdns.trueddns.com:17412/BC170/ODataV4/Company('CRONUS%20-%20LSVIP')/APILineEntry",
    requestOptions
  );

  console.log(response.status); // 200
  console.log(response.statusText); // OK

  alert(7);
  //alert(response);
}

function GetData3() {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Basic V0VCQUFVOlBhc3N3b3JkMTIzNA==');

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(
    "http://203.151.155.12:7078/BC160_HQ/ODataV4/Company('DEV%20AAU')/API_GetMemInfo_G?$filter=memberAccountNo eq '000000'",
    requestOptions
  )
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function GetData() {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Basic dXNlcjAxOkxzMTIzNDU2');

  var raw = JSON.stringify({
    EntryNo: '2',
    Description: 'อรทัย2'
  });

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  //fetch('https://jsonplaceholder.typicode.com/users')
  fetch(
    "http://203.151.155.12:7078/BC160_HQ/ODataV4/Company('DEV%20AAU')/API_GetMemInfo_G"
  )
    /*
  fetch(
    "http://crbdns.trueddns.com:17412/BC170/ODataV4/Company('CRONUS%20-%20LSVIP')/APILineEntry",
    requestOptions
  )
  */
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  //alert(response.text());
}
function GetDataFromBC() {
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
  ).then(response => response.text());
  //.then(result => console.log(result))
  //.catch(error => console.log('error', error));
}

//btnRegister.onclick = () => {
//  var x = document.getElementById("./register.html").href;
//};

// Write Javascript code!
//const appDiv = document.getElementById("app");
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
