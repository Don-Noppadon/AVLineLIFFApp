function getUserProfileforUserData() {
    liff.getProfile().then(profile => {
        document.getElementById("displayName").innerHTML = profile.displayName; //get user line name
        document.getElementById("email").value = liff.getDecodedIDToken().email; //get line email
    }).catch(err => console.error(err));
}

function getUserProfileforIndex() {
    liff.getProfile().then(profile => {
        document.getElementById("pictureUrl").src = profile.pictureUrl; //get user line picture
        document.getElementById("displayName").innerHTML = profile.displayName; //get user line name
        document.getElementById("getDecodedIDToken").innerHTML = liff.getDecodedIDToken().email; //get user line email
    }).catch(err => console.error(err));
}

function displayIsInClientInfo() {
    if (!liff.isInClient()) { //ถ้าไม่ได้ด้วย LINE จะแสดงปุ่ม logOut
        document.getElementById("button-logOut").innerHTML += '<button id="btnlogOut" onclick="logOut()">Log Out</button>';
    }

}


liff.init({ liffId: "1655050259-lnja5368" }, () => {
    if (liff.isLoggedIn()) {
        getUserProfileforIndex()
        getUserProfileforUserData()
        displayIsInClientInfo()
    } else {
        liff.login();

    }
}, err => console.error(err.code, error.message));


function logOut() {
    liff.logout()
    window.location.reload()
}

//Storing data:
myObj = { "card": "01", "account": "a01", "contact": "c01", "id": "id01", "scheme": "s01", "name": "สุขใจ มีสุข", "bdate": "1 มีนาคม 2000", "address": "162 ต.บ้านสวน", "phone": "0845649155", "sex": "ชาย", "district": "เมือง", "province": "ชลบุรี", "postcode": "20000" };
myJSON = JSON.stringify(myObj); //เก็บข้อความ JSON ในสตริง
localStorage.setItem("JSONdata", myJSON); //เก็บข้อมูลลงใน Local Storage

//Retrieving data:
text = localStorage.getItem("JSONdata") //;เรียกใช้ข้อมูล key ของ Local Storage
obj = JSON.parse(text); //เปลี่ยนสตริงของข้อความ JSON เป็นวัตถุ JavaScript 
document.getElementById("name").innerHTML = obj.name;
document.getElementById("phone").innerHTML = obj.phone;
document.getElementById("bdate").innerHTML = obj.bdate;
document.getElementById("card").innerHTML = obj.card;
document.getElementById("account").innerHTML = obj.account;
document.getElementById("contact").innerHTML = obj.contact;
document.getElementById("id").innerHTML = obj.id;
document.getElementById("scheme").innerHTML = obj.scheme;
document.getElementById("sex").innerHTML = obj.sex;


document.getElementById("name").value = obj.name;
document.getElementById("phone").value = obj.phone;
document.getElementById("address").value = obj.address;
document.getElementById("province").value = obj.province;
document.getElementById("postcode").value = obj.postcode;
document.getElementById("district").value = obj.district;



myObj_consent = {
    "consent1": "พิจารณาได้จากรูปแบบการดำเนินการ และวัตถุประสงค์การใช้ เก็บรวบรวมหรือเปิดเผยข้อมูลนั้น\
  ซึ่งในแต่ละชุดข้อมูลก็มีรายละเอียดที่แตกต่างกัน ทั้งนี้ โดยหลักการตามกฎหมาย PDPA\
  ระบุว่าให้ใช้ฐานความยินยอม (Consent) เป็นฐานหลักในการประมวลผลข้อมูล\
  เนื่องจากเปิดโอกาสให้เจ้าของข้อมูลส่วนบุคคลสามารถเลือกจัดการข้อมูลของตนเองได้เต็มที่ในทางปฏิบัติแล้วผู้ควบคุมข้อมูลส่วนบุคคลอาจไม่สามารถใช้ฐานความยินยอม (Consent)กับการขอใช้หรือเก็บรวบรวมกับข้อมูลทุกประเภทได้ซึ่งองค์กร\
  แต่ละประเภทย่อมมีความจำเป็นในการอ้างอิงฐานตามกฎหมายแตกต่างกันไปตามลักษณะของธุรกรรมที่เกี่ยวข้องกับข้อมูลส่วนบุคคล\
  โดยกฎหมาย PDPA\
  ยังมีวิธีการประมวลผลตามฐานกฎหมายอื่นที่สามารถปรับใช้ตามบริบทและวัตถุประสงค์ ได้แก่ ฐานสัญญา (Contract),\
  ฐานหน้าที่ตามกฎหมาย (Legal Obligation), ฐานประโยชน์สำคัญต่อชีวิต (Vital Intertest),\
  ฐานภารกิจของรัฐ (Public Task), ฐานประโยชน์อันชอบธรรม (Legitimate Interest), ฐานจดหมายเหตุ วิจัย\
  สถิติ(Scientific or Research) หากวัตถุประสงค์การใช้เก็บรวบรวมหรือเปิดเผยข้อมูลเข้าตามฐานการประมวลผล 5 ฐานนี้ ผู้ควบคุมข้อมูลส่วนบุคคลก็ไม่ต้องขอความยินยอม \
  (Consent) จากเจ้าของข้อมูลอีก \
  ฐานการประมวลผลข้อมูลตามกฎหมาย (Lawful Basis) ของข้อมูลส่วนบุคคลทั่วไปที่ไม่ต้องขอความยินยอม (consent) มีดังนี้ \
  ฐานสัญญา (Contract) จะใช้ได้กับข้อมูลส่วนบุคคลทั่วไปเท่านั้น\
    ฐานนี้เป็นการปฏิบัติตามสัญญาระหว่างผู้ควบคุมข้อมูลกับเจ้าของข้อมูลส่วนบุคคล\
    สัญญาตามฐานนี้จะทำเป็นลายลักษณ์อักษรหรือไม่เป็นลายลักษณ์อักษรก็ได้ ตัวอย่างเช่น\
    สัญญาเปิดบัญชีธนาคารและการให้บริการกับลูกค้าของธนาคาร\
    การสมัครสมาชิกฟิตเนสและการให้บริการด้านการออกกำลังกายกับสมาชิกฟิตเนส\
    การปฏิบัติตามสัญญาซื้อขายโดยเว็บไซต์ E-commerce เก็บรวบรวมที่อยู่จัดส่งของผู้ซื้อให้กับร้านค้าเพื่อส่งสินค้า\
  ฐานหน้าที่ตามกฎหมาย (Legal Obligation) เป็นสิ่งที่ผู้ควบคุมข้อมูลส่วนบุคคลต้องปฏิบัติตามกฎหมาย\
    เนื่องจากเป็นเรื่องที่กฎหมายกำหนดไว้ชัดเจนว่าต้องปฏิบัติตาม\
    เช่น การให้สิทธิลูกจ้างลาป่วยหรือลาพักผ่อนตามกฎหมายแรงงาน\
    การให้ข้อมูลกับหน่วยงานหรือพนักงานเจ้าหน้าที่ของรัฐซึ่งมีอำนาจตามกฎหมาย\
    การการที่ธนาคารขอสำเนาบัตรประชาชนเพื่อพิสูจน์ตัวตนของผู้ใช้บริการตามกฎหมายว่าด้วยการป้องกันและปราบปรามการฟอกเงิน\
  ฐานประโยชน์สำคัญต่อชีวิต (Vital Interest)\
    โดยจะสามารถใช้ฐานนี้ในการประมวลผลข้อมูลสุขภาพที่เป็นข้อมูลอ่อนไหว (Censitive data)\
    เพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย สุขภาพ\
    ซึ่งจะใช้ฐานนี้ได้เฉพาะในกรณีที่เจ้าของข้อมูลอยู่ในสภาวะที่ไม่สามารถให้ความยินยอมได้ ตัวอย่างเช่น\
    แพทย์ขอใช้ประวัติการรักษาของเจ้าของข้อมูลจากโรงพยาบาลเพื่อทำการรักษาเจ้าของข้อมูลซึ่งเป็นผู้ป่วย\
    สาธารณสุขจังหวัดขอเก็บข้อมูลการติดเชื้อของประชาชนในพื้นที่เพื่อเฝ้าระวังป้องกันโรคระบาด\
  ฐานภารกิจของรัฐ (Public Task) เป็นการใช้อำนาจรัฐเพื่อปฏิบัติหน้าที่ตามที่ได้รับมอบหมาย\
    ผู้ควบคุมข้อมูลส่วนบุคคลในฐานนี้มักเป็นพนักงานเจ้าหน้าที่ของรัฐหรือหน่วยงานเอกชนที่มีอำนาจตามที่กำหนดไว้ในกฎหมาย\
    เช่น ตำรวจมีอำนาจในการปรับ จับกุมหรือขอข้อมูลที่เกี่ยวข้องกับคดีตามกฎหมายอาญา\
    โรงเรียนสอนขับรถยนต์ที่กรมการขนส่งทางบกได้ให้อำนาจให้บริการสอบใบอนุญาตขับขี่รถยนต์\
 ฐานประโยชน์อันชอบธรรม (Legitimate Interest)\
    เป็นการดำเนินการที่จำเป็นเพื่อประโยชน์อันชอบด้วยกฎหมายของผู้ควบคุมข้อมูลส่วนบุคคลหรือบุคคลภายนอก\
    แต่การดำเนินการนั้นจะต้องไม่ละเมิดสิทธิขั้นพื้นฐานของเจ้าของข้อมูลส่วนบุคคล\
    และเจ้าของข้อมูลก็คาดหมายได้ว่าจะมีการดำเนินการนี้ ตัวอย่างเช่น การประเมินการขึ้นเงินเดือนพนักงาน\
    การรวบรวมสถิติโดยไม่ใช้ข้อมูลที่บ่งชี้ตัวตนของเจ้าของข้อมูล\
    การบันทึกภาพกล้องวงจรปิดในสถานที่สาธารณะ\
  ฐานจดหมายเหตุ วิจัย สถิติ (Scientific or Research)\
    การปฏิบัติตามฐานนี้อาจต้องอ้างอิงฐานตามกฎหมายอื่นประกอบด้วยว่าจะขอจัดเก็บข้อมูลเพื่อจัดทำเอกสารประวัติศาสตร์ \
    จดหมายเหตุ วิจัย สถิติ ตามวัตถุประสงค์หลักใด เช่น ขอเก็บตามฐานภารกิจของรัฐ (Public Task)\
    ฐานการปฏิบัติตามกฎหมาย (Legal Obligation) หรืออาจต้องอาศัยการตัดสินใจตามฐานความยินยอม (Consent)\
    กับเจ้าของข้อมูล",
    "consent2": " สำหรับการใช้ข้อมูลส่วนบุคคลที่อ่อนไหว เช่น ลายนิ้วมือ ประวัติการรักษา เทคโนโลยีจดจำใบหน้า (Facial Recognition)\
     จะต้องใช้ตามวัตถุประสงค์ที่แจ้งไว้แต่แรกและต้องขอ consent ทุกครั้ง\
     โดยการขอใช้หรือเก็บรวบรวมข้อมูลจะต้องมีความได้สัดส่วนและจำเป็น กล่าวคือ การใช้ข้อมูลส่วนบุคคลที่อ่อนไหว\
     จะใช้ได้ต่อเมื่อไม่สามารถใช้ข้อมูลส่วนบุคคลทั่วไปทดแทนได้ ตัวอย่างเช่น\
     การเก็บข้อมูลลายนิ้วมือของสมาชิกฟิตเนสเพื่อใช้ยืนยันตัวตนสมาชิก\
     อาจเกินความจำเป็นเนื่องจาก ทางฟิตเนสสามารถใช้บัตรสมาชิกในการสแกนเข้าออกฟิตเนสแทนได้\
     กฎหมาย PDPA ได้ให้ข้อยกเว้นที่ไม่ต้องขอความยินยอม (Consent) ในบางกรณีได้ ตัวอย่างเช่น\
 เมื่อมีเหตุจำเป็นเร่งด่วนเพื่อป้องกันหรือระงับอันตรายต่อชีวิต (Vital interest) ตัวอย่างเช่น\
       เมื่อเจ้าของข้อมูลเกิดเหตุฉุกเฉินไม่รู้สึกตัว เจ้าหน้าที่กู้ชีพสามารถขอข้อมูลสุขภาพกับบุคคลใกล้ชิดได้ \
       หรือโรงพยาบาลสามารถให้ประวัติการรักษากับอีกโรงพยาบาลหนึ่งเพื่อช่วยเหลือผู้ป่วยที่ประสบอุบัติเหตุที่หมดสติได้\
     การดำเนินกิจกรรมโดยชอบด้วยกฎหมายที่มีการคุ้มครองที่เหมาะสมของมูลนิธิ สมาคม หรือองค์กรที่ไม่แสวงหากำไร\
       ที่มีวัตถุประสงค์เกี่ยวกับการเมือง ศาสนา ปรัชญา หรือสหภาพแรงงาน\
    ข้อมูลที่เปิดเผยต่อสาธารณะด้วยความยินยอมโดยชัดแจ้งของเจ้าของข้อมูลส่วนบุคคล\
     การก่อตั้งสิทธิเรียกร้องตามกฎหมาย การปฏิบัติตามหรือการใช้สิทธิเรียกร้องตามกฎหมาย\
       หรือการยกขึ้นต่อสู้สิทธิเรียกร้องตามกฎหมาย\
     เพื่อประโยชน์สาธารณะ เช่น การขอข้อมูลสุขภาพและ timeline จากกลุ่มบุคคลเสี่ยงต่อโรคติดต่อหรือโรคระบาด\
       เพื่อป้องกันการติดต่อหรือแพร่เข้ามาในราชอาณาจักร\
     การคุ้มครองแรงงาน การประกันสังคม หลักประกันสุขภาพแห่งชาติ\
     สวัสดิการเกี่ยวกับการรักษาพยาบาลของผู้มีสิทธิตามกฎหมาย การคุ้มครองผู้ประสบภัยจากรถ เช่น ฝ่าย HR\
       ใช้ใบรับรองแพทย์ของเจ้าของข้อมูลเพื่อเป็นหลักฐานในการเบิกจ่ายค่ารักษาพยาบาลกับประกันสังคม",
    "consent3": "พิจารณาได้จากรูปแบบการดำเนินการ และวัตถุประสงค์การใช้ เก็บรวบรวมหรือเปิดเผยข้อมูลนั้น\
        ซึ่งในแต่ละชุดข้อมูลก็มีรายละเอียดที่แตกต่างกัน ทั้งนี้ โดยหลักการตามกฎหมาย PDPA\
        ระบุว่าให้ใช้ฐานความยินยอม (Consent) เป็นฐานหลักในการประมวลผลข้อมูล\
        เนื่องจากเปิดโอกาสให้เจ้าของข้อมูลส่วนบุคคลสามารถเลือกจัดการข้อมูลของตนเองได้เต็มที่ในทางปฏิบัติแล้วผู้ควบคุมข้อมูลส่วนบุคคลอาจไม่สามารถใช้ฐานความยินยอม (Consent)กับการขอใช้หรือเก็บรวบรวมกับข้อมูลทุกประเภทได้ซึ่งองค์กร\
        แต่ละประเภทย่อมมีความจำเป็นในการอ้างอิงฐานตามกฎหมายแตกต่างกันไปตามลักษณะของธุรกรรมที่เกี่ยวข้องกับข้อมูลส่วนบุคคล\
        โดยกฎหมาย PDPA\
        ยังมีวิธีการประมวลผลตามฐานกฎหมายอื่นที่สามารถปรับใช้ตามบริบทและวัตถุประสงค์ ได้แก่ ฐานสัญญา (Contract),\
        ฐานหน้าที่ตามกฎหมาย (Legal Obligation), ฐานประโยชน์สำคัญต่อชีวิต (Vital Intertest),\
        ฐานภารกิจของรัฐ (Public Task), ฐานประโยชน์อันชอบธรรม (Legitimate Interest), ฐานจดหมายเหตุ วิจัย\
        สถิติ(Scientific or Research) หากวัตถุประสงค์การใช้เก็บรวบรวมหรือเปิดเผยข้อมูลเข้าตามฐานการประมวลผล 5 ฐานนี้ ผู้ควบคุมข้อมูลส่วนบุคคลก็ไม่ต้องขอความยินยอม \
        (Consent) จากเจ้าของข้อมูลอีก \
        ฐานการประมวลผลข้อมูลตามกฎหมาย (Lawful Basis) ของข้อมูลส่วนบุคคลทั่วไปที่ไม่ต้องขอความยินยอม (consent) มีดังนี้ \
        ฐานสัญญา (Contract) จะใช้ได้กับข้อมูลส่วนบุคคลทั่วไปเท่านั้น\
          ฐานนี้เป็นการปฏิบัติตามสัญญาระหว่างผู้ควบคุมข้อมูลกับเจ้าของข้อมูลส่วนบุคคล\
          สัญญาตามฐานนี้จะทำเป็นลายลักษณ์อักษรหรือไม่เป็นลายลักษณ์อักษรก็ได้ ตัวอย่างเช่น\
          สัญญาเปิดบัญชีธนาคารและการให้บริการกับลูกค้าของธนาคาร\
          การสมัครสมาชิกฟิตเนสและการให้บริการด้านการออกกำลังกายกับสมาชิกฟิตเนส\
          การปฏิบัติตามสัญญาซื้อขายโดยเว็บไซต์ E-commerce เก็บรวบรวมที่อยู่จัดส่งของผู้ซื้อให้กับร้านค้าเพื่อส่งสินค้า\
        ฐานหน้าที่ตามกฎหมาย (Legal Obligation) เป็นสิ่งที่ผู้ควบคุมข้อมูลส่วนบุคคลต้องปฏิบัติตามกฎหมาย\
          เนื่องจากเป็นเรื่องที่กฎหมายกำหนดไว้ชัดเจนว่าต้องปฏิบัติตาม\
          เช่น การให้สิทธิลูกจ้างลาป่วยหรือลาพักผ่อนตามกฎหมายแรงงาน\
          การให้ข้อมูลกับหน่วยงานหรือพนักงานเจ้าหน้าที่ของรัฐซึ่งมีอำนาจตามกฎหมาย\
          การการที่ธนาคารขอสำเนาบัตรประชาชนเพื่อพิสูจน์ตัวตนของผู้ใช้บริการตามกฎหมายว่าด้วยการป้องกันและปราบปรามการฟอกเงิน\
        ฐานประโยชน์สำคัญต่อชีวิต (Vital Interest)\
          โดยจะสามารถใช้ฐานนี้ในการประมวลผลข้อมูลสุขภาพที่เป็นข้อมูลอ่อนไหว (Censitive data)\
          เพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย สุขภาพ\
          ซึ่งจะใช้ฐานนี้ได้เฉพาะในกรณีที่เจ้าของข้อมูลอยู่ในสภาวะที่ไม่สามารถให้ความยินยอมได้ ตัวอย่างเช่น\
          แพทย์ขอใช้ประวัติการรักษาของเจ้าของข้อมูลจากโรงพยาบาลเพื่อทำการรักษาเจ้าของข้อมูลซึ่งเป็นผู้ป่วย\
          สาธารณสุขจังหวัดขอเก็บข้อมูลการติดเชื้อของประชาชนในพื้นที่เพื่อเฝ้าระวังป้องกันโรคระบาด\
        ฐานภารกิจของรัฐ (Public Task) เป็นการใช้อำนาจรัฐเพื่อปฏิบัติหน้าที่ตามที่ได้รับมอบหมาย\
          ผู้ควบคุมข้อมูลส่วนบุคคลในฐานนี้มักเป็นพนักงานเจ้าหน้าที่ของรัฐหรือหน่วยงานเอกชนที่มีอำนาจตามที่กำหนดไว้ในกฎหมาย\
          เช่น ตำรวจมีอำนาจในการปรับ จับกุมหรือขอข้อมูลที่เกี่ยวข้องกับคดีตามกฎหมายอาญา\
          โรงเรียนสอนขับรถยนต์ที่กรมการขนส่งทางบกได้ให้อำนาจให้บริการสอบใบอนุญาตขับขี่รถยนต์\
       ฐานประโยชน์อันชอบธรรม (Legitimate Interest)\
          เป็นการดำเนินการที่จำเป็นเพื่อประโยชน์อันชอบด้วยกฎหมายของผู้ควบคุมข้อมูลส่วนบุคคลหรือบุคคลภายนอก\
          แต่การดำเนินการนั้นจะต้องไม่ละเมิดสิทธิขั้นพื้นฐานของเจ้าของข้อมูลส่วนบุคคล\
          และเจ้าของข้อมูลก็คาดหมายได้ว่าจะมีการดำเนินการนี้ ตัวอย่างเช่น การประเมินการขึ้นเงินเดือนพนักงาน\
          การรวบรวมสถิติโดยไม่ใช้ข้อมูลที่บ่งชี้ตัวตนของเจ้าของข้อมูล\
          การบันทึกภาพกล้องวงจรปิดในสถานที่สาธารณะ\
        ฐานจดหมายเหตุ วิจัย สถิติ (Scientific or Research)\
          การปฏิบัติตามฐานนี้อาจต้องอ้างอิงฐานตามกฎหมายอื่นประกอบด้วยว่าจะขอจัดเก็บข้อมูลเพื่อจัดทำเอกสารประวัติศาสตร์ \
          จดหมายเหตุ วิจัย สถิติ ตามวัตถุประสงค์หลักใด เช่น ขอเก็บตามฐานภารกิจของรัฐ (Public Task)\
          ฐานการปฏิบัติตามกฎหมาย (Legal Obligation) หรืออาจต้องอาศัยการตัดสินใจตามฐานความยินยอม (Consent)\
          กับเจ้าของข้อมูล"
};

myJSON_consent = JSON.stringify(myObj_consent); //เก็บข้อความ JSON ในสตริง
localStorage.setItem("JSONdata_consent", myJSON_consent); //เก็บข้อมูลลงใน Local Storage

//Retrieving data:
text_consent = localStorage.getItem("JSONdata_consent") //;เรียกใช้ข้อมูล key ของ Local Storage
obj_consent = JSON.parse(text_consent); //เปลี่ยนสตริงของข้อความ JSON เป็นวัตถุ JavaScript

document.getElementById("consent1").innerHTML = obj_consent.consent1;
document.getElementById("consent2").innerHTML = obj_consent.consent2;
document.getElementById("consent3").innerHTML = obj_consent.consent3;


function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    console.log(value);

}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);



//   check_accept_consen1
function check_1() {
    document.getElementById("myCheck_1").checked = true;
}
//   check_not_accept_consen1
function uncheck_1() {
    document.getElementById("myCheck_1").checked = false;
}
//   check_accept_consen2
function check_2() {
    document.getElementById("myCheck_2").checked = true;
}
//   check_not_accept_consen2
function uncheck_2() {
    document.getElementById("myCheck_2").checked = false;
}
//   check_accept_consen3
function check_3() {
    document.getElementById("myCheck_3").checked = true;
}
//   check_not_accept_consen3
function uncheck_3() {
    document.getElementById("myCheck_3").checked = false;
}
// Get the button that opens the modal
var btn = document.querySelectorAll("a.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function(e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}