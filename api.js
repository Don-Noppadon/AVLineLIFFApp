var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic Q1JNOlBhc3N3MHJkQDk5");

var raw = JSON.stringify({
  "MemberClub": "PHARMAX",
  "MobilePhoneNo": "0938249542",
  "FirstName": "รัชนิภา",
  "LastName": "เฉลิมกิจ",
  "ConsentDate": "2021-06-17",
  "APIType": "UPDATE"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://ICARE_API_SERVER:7068/API_TEST_ENV/ODataV4/Company('ICARE%20HEALTH%20CO.%2CLTD.')/Tyche_API_Register_Member", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));