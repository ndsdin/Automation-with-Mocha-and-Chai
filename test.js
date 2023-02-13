// const url = require("supertest")("http://barru.pythonanywhere.com");
// const validasi = require("chai").expect;

// describe("POST /login", function () { //test scenario
//   // test case pertama
//   it("Verify Success Login with valid email and password", async function () {  //test case
//     const response = await url //manggil url
//       .post("/login") //manggil endpoint
//       .send({ email: "jago@gmail.com", password: "jagoqa" }); //body

//     // validasi(response.body.status).to.eql('SUCCESS_LOGIN');
//     validasi(response.body.message).to.eql('Anda Berhasil Login');
//   });

//   // test case kedua
//   it("Verify Failed Login with invalid email and valid password", async function () {  //test case
//     const response = await url //manggil url
//       .post("/login") //manggil endpoint
//       .send({ email: "jago", password: "jagoqa" }); //body

//     validasi(response.body.status).to.eql('FAILED_LOGIN');
//     validasi(response.body.message).to.eql('Cek kembali email anda');
//   });
  
//   // test case ketiga
//   it("Failed login with empty email", async function () {  //test case
//     const response = await url //manggil url
//       .post("/login") //manggil endpoint
//       .send({ email: "", password: "1234" }); //body

//     validasi(response.body.status).to.eql('FAILED_LOGIN');
//     validasi(response.body.message).to.eql('Cek kembali email anda');
//   });

// test case ke empat
// it("Failed login with password invalid", async function () {  //test case
//   const response = await url //manggil url
//     .post("/login") //manggil endpoint
//     .send({ email: "tes@gmail.com", password: "tes1234" }); //body

//   validasi(response.body.status).to.eql('FAILED_LOGIN');
//   validasi(response.body.message).to.eql('Email atau Password Anda Salah');
// });
// });

