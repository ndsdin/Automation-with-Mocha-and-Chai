const url = require("supertest")("https://apix.sandbox-111094.com/v2");
const validasi = require("chai").expect;

describe("POST /register-check", function () { //test scenario
     // test case pertama
  it("Pengguna telah terdaftar dan aktif", async function () {  //test case
     const response = await url //manggil url
       .post("/register-check") //manggil endpoint
       .set({ Apikey: "J56Xyln9qSUkG6sQjKsgUvwwQ1gZXjUt"})
       .send({ nik: "3215135906980003", action: "check_nik" }); //body
 
       //console.log(response)

      //validasi(JSON.parse(response.body).status).to.eql('OK');
     validasi(response.body.status).to.eql('OK');
     validasi(response.body.code).to.eql('USER_EXISTS_VERIFIED');
     validasi(response.body.message).to.eql('Pengguna telah terdaftar dan Aktif.');
   });

    // test case kedua
  it("Pengguna belum terdaftar", async function () {  //test case
    const response = await url //manggil url
      .post("/register-check") //manggil endpoint
      .set({ Apikey: "J56Xyln9qSUkG6sQjKsgUvwwQ1gZXjUt"})
      .send({ nik: "3215135906980004", action: "check_nik" }); //body

      //console.log(response)

     // validasi(JSON.parse(response.body).status).to.eql('OK');
    validasi(response.body.status).to.eql('OK');
    validasi(response.body.code).to.eql('USER_DO_NOT_EXISTS');
    validasi(response.body.message).to.eql('Pengguna belum terdaftar.');
  });

  //test case ketiga
  it("Pengguna sudah terdaftar tapi belum verifikasi email", async function () {  //test case
    const response = await url //manggil url
      .post("/register-check") //manggil endpoint
      .set({ Apikey: "J56Xyln9qSUkG6sQjKsgUvwwQ1gZXjUt"})
      .send({ nik: "masih dicari", action: "check_nik" }); //body

      //console.log(response)

     // validasi(JSON.parse(response.body).status).to.eql('OK');
    validasi(response.body.status).to.eql('OK');
    validasi(response.body.code).to.eql('USER_EXISTS_UNVERIFIED');
    validasi(response.body.message).to.eql('Pengguna sudah terdaftar tapi belum verifikasi email.');
  });
  
    //test case keempat
    it("Pengguna sudah terdaftar tapi sertifikat sudah kadaluarsa", async function () {  //test case
      const response = await url //manggil url
        .post("/register-check") //manggil endpoint
        .set({ Apikey: "J56Xyln9qSUkG6sQjKsgUvwwQ1gZXjUt"})
        .send({ nik: "3578174310980008", action: "check_nik" }); //body
  
        //console.log(response)
  
       // validasi(JSON.parse(response.body).status).to.eql('OK');
      validasi(response.body.status).to.eql('OK');
      validasi(response.body.code).to.eql('USER_EXISTS_CERTIFICATE_EXPIRED');
      validasi(response.body.message).to.eql('Pengguna sudah terdaftar tapi sertifikat sudah kadaluwarsa.');
    });

    // test case ke lima
    it("NIK dan Email Pengguna Tidak Sesuai", async function () {  //test case
      const response = await url //manggil url
        .post("/register-check") //manggil endpoint
        .set({ Apikey: "J56Xyln9qSUkG6sQjKsgUvwwQ1gZXjUt"})
        .send({ nik: "3215135906980003", email: "dinda.saha21@gmail.com", action: "resend_email" }); //body
  
        //console.log(response)
  
       // validasi(JSON.parse(response.body).status).to.eql('OK');
      validasi(response.body.status).to.eql('OK');
      validasi(response.body.code).to.eql('NIK_EMAIL_UNMATCH');
      validasi(response.body.message).to.eql('NIK dan Email pengguna tidak sesuai.');
    });

    // test case ke enam
    it("NIK dan Email Pengguna Sesuai", async function () {  //test case
      const response = await url //manggil url
        .post("/register-check") //manggil endpoint
        .set({ Apikey: "J56Xyln9qSUkG6sQjKsgUvwwQ1gZXjUt"})
        .send({ nik: "3215135906980003", email: "dinda.saharaa21@gmail.com", action: "resend_email" }); //body
  
        //console.log(response)
  
       // validasi(JSON.parse(response.body).status).to.eql('OK');
      validasi(response.body.status).to.eql('OK');
      validasi(response.body.code).to.eql('NIK_EMAIL_MATCHED');
      validasi(response.body.message).to.eql('NIK dan Email pengguna sesuai.');
    });
 });


  describe("POST /register-consumer-link", function () { //test scenario
   //test case pertama
  it("Respons Sukses", async function () {  //test case
     const response = await url //manggil url
       .post("/register-consumer-link") //manggil endpoint
       .set({ Apikey: "J56Xyln9qSUkG6sQjKsgUvwwQ1gZXjUt"})
       .send({ email: "ndsdin21@gmail.com" }); //body
 
        //console.log(response)

      // validasi(JSON.parse(response.body).status).to.eql('OK');
    validasi(response.body.status).to.eql('OK');
   });

    // test case kedua
    it("value email tidak sesuai", async function () {
      const response = await url
      .post("/register-consumer-link")
      .set({ apikey: "J56Xyln9qSUkG6sQjKsgUvwwQ1gZXjUt", Accept: "application/json"})
      .send({ email: "ndsdin21@@gmail.com" }); 

      validasi(response.body.status).to.eql('ERROR');
  });

  //test case ketiga
  it("email sudah terdaftar", async function () {  //test case
    const response = await url //manggil url
      .post("/register-consumer-link") //manggil endpoint
      .set({ Apikey: "J56Xyln9qSUkG6sQjKsgUvwwQ1gZXjUt"})
      .send({ email: "dwiariani.nadia56@gmail.com" }); //body

      // console.log(response)

     // validasi(JSON.parse(response.body).status).to.eql('OK');
    validasi(response.body.status).to.eql('ERROR');
    validasi(response.body.code).to.eql('EMAIL_EXISTS');
    validasi(response.body.message).to.eql('Email sudah terdaftar');
  });
  describe("POST /sign/bulk", function () { //test scenario
    //test case pertama
   it("Respons Sukses", async function () {  //test case
      const response = await url //manggil url
        .post("/sign/bulk") //manggil endpoint
        .set({ Apikey: "J56Xyln9qSUkG6sQjKsgUvwwQ1gZXjUt", Accept: "application/json"})
        .send({ document_id: ["97b0064d-9f32-4431-8124-cfb6bf2c4425"] }); //body
  
         //console.log(response)
 
       // validasi(JSON.parse(response.body).status).to.eql('OK');
      
     validasi(response.body.status).to.eql('OK');
    });
});
 });