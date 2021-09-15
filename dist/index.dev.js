"use strict";

require("style.css");

var _liff = _interopRequireDefault(require("@line/liff"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import stylesheets
var body = document.getElementById('body');
var userId = document.getElementById('userId');
var pictureUrl = document.getElementById('pictureUrl');
var displayName = document.getElementById('displayName');
var statusMessage = document.getElementById('statusMessage');
var accessToken = document.getElementById('accessToken');
var btnShare = document.getElementById('btnShare');
var btnRegister = document.getElementById('btnRegister');
var btnLogIn = document.getElementById('btnLogIn');
var btnLogOut = document.getElementById('btnLogOut');
var btnApi = document.getElementById('btnApi');
var fuserId = document.getElementById('fuserId');
var fdisplayName = document.getElementById('fdisplayName');

function main() {
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _liff["default"].ready.then(function () {
            if (_liff["default"].getOS() === 'android') {
              body.style.backgroundColor = '#888888';
            }

            if (_liff["default"].isInClient()) {
              getUserProfile();
              document.getElementById('btnLogIn').style.display = 'none';
              document.getElementById('btnLogOut').style.display = 'block';
              document.getElementById('btnShare').style.display = 'block';
              document.getElementById('btnApi').style.display = 'block';
            } else {
              if (_liff["default"].isLoggedIn()) {
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

          _context.next = 3;
          return regeneratorRuntime.awrap(_liff["default"].init({
            liffId: '1655050259-lnja5368'
          }));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

main();

function getUserProfile() {
  var profile;
  return regeneratorRuntime.async(function getUserProfile$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_liff["default"].getProfile());

        case 2:
          profile = _context2.sent;
          pictureUrl.src = profile.pictureUrl;
          userId.innerHTML = '<b>User ID: </b>' + profile.userId;
          displayName.innerHTML = '<b>Display Name: </b>' + profile.displayName;
          statusMessage.innerHTML = '<b>Status : </b>' + profile.statusMessage;
          email.innerHTML = '<b>E-mail : </b>' + _liff["default"].getDecodedIDToken().email;
          accessToken.innerHTML = '<b>Access Token ID : </b>' + _liff["default"].getAccessToken();
          fuserId.innerHTML = '<input value=' + profile.userId + '>';
          fdisplayName.innerHTML = '<input value=' + profile.displayName + '>';

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function shareMsg() {
  var result;
  return regeneratorRuntime.async(function shareMsg$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_liff["default"].shareTargetPicker([{
            type: 'text',
            text: 'This msg was shared by LIFF'
          }]));

        case 2:
          result = _context3.sent;

          if (result) {
            alert('Message was shared!');
          } else {
            alert('Shared Target Picker was Cancelled by user');
          }

          _liff["default"].closeWindow();

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}

btnShare.onclick = function () {
  shareMsg();
};

btnLogIn.onclick = function () {
  logIn();
};

btnLogOut.onclick = function () {
  logOut();
};

btnApi.onclick = function () {
  GetDataFromBC();
}; //btnApi.onclick = userAction();


function logOut() {
  _liff["default"].logout();

  window.location.reload();
}

function logIn() {
  _liff["default"].login({
    redirectUri: window.location.href
  });
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
  fetch("http://crbdns.trueddns.com:17412/BC170/ODataV4/Company('CRONUS%20-%20LSVIP')/API_CreateUpdateMem_P", requestOptions).then(function (response) {
    return response.text();
  }).then(function (result) {
    return console.log(result);
  })["catch"](function (error) {
    return console.log('error', error);
  });
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
  }; //var response;
  //response = '55';

  fetch("http://crbdns.trueddns.com:17412/BC170/ODataV4/Company('CRONUS%20-%20LSVIP')/APILineEntry", requestOptions).then(function (response) {
    return response.text();
  }).then(function (result) {
    return console.log(result);
  })["catch"](function (err) {
    return console.log(err);
  }); //alert(response);
}

function CreateData1() {
  var myHeaders, raw, requestOptions, response;
  return regeneratorRuntime.async(function CreateData1$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          myHeaders = new Headers();
          myHeaders.append('Content-Type', 'text/plain');
          myHeaders.append('Authorization', 'Basic dXNlcjAxOkxzMTIzNDU2');
          raw = JSON.stringify({
            EntryNo: 2,
            Description: 'test'
          });
          requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          alert(raw); //alert(5);

          _context4.next = 8;
          return regeneratorRuntime.awrap(fetch("http://crbdns.trueddns.com:17412/BC170/ODataV4/Company('CRONUS%20-%20LSVIP')/APILineEntry", requestOptions));

        case 8:
          response = _context4.sent;
          console.log(response.status); // 200

          console.log(response.statusText); // OK

          alert(7); //alert(response);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function GetData3() {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Basic V0VCQUFVOlBhc3N3b3JkMTIzNA==');
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  fetch("http://203.151.155.12:7078/BC160_HQ/ODataV4/Company('DEV%20AAU')/API_GetMemInfo_G?$filter=memberAccountNo eq '000000'", requestOptions).then(function (response) {
    return response.text();
  }).then(function (result) {
    return console.log(result);
  })["catch"](function (error) {
    return console.log('error', error);
  });
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
  }; //fetch('https://jsonplaceholder.typicode.com/users')

  fetch("http://203.151.155.12:7078/BC160_HQ/ODataV4/Company('DEV%20AAU')/API_GetMemInfo_G")
  /*
  fetch(
  "http://crbdns.trueddns.com:17412/BC170/ODataV4/Company('CRONUS%20-%20LSVIP')/APILineEntry",
  requestOptions
  )
  */
  .then(function (response) {
    return response.text();
  }).then(function (result) {
    return console.log(result);
  })["catch"](function (error) {
    return console.log('error', error);
  }); //alert(response.text());
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
  fetch("http://crbdns.trueddns.com:17412/BC170/ODataV4/Company('CRONUS%20-%20LSVIP')/APILineEntry", requestOptions).then(function (response) {
    return response.text();
  }); //.then(result => console.log(result))
  //.catch(error => console.log('error', error));
} //btnRegister.onclick = () => {
//  var x = document.getElementById("./register.html").href;
//};
// Write Javascript code!
//const appDiv = document.getElementById("app");
//appDiv.innerHTML = `<h1>JS Starter</h1>`;