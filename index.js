const firebaseConfig = {
  apiKey: "AIzaSyBJ_WTHzG-Qb1i5lK437f0ky_jpdVrOkro",
  authDomain: "hawai-adda-8aeee.firebaseapp.com",
  databaseURL: "https://hawai-adda-8aeee-default-rtdb.firebaseio.com",
  projectId: "hawai-adda-8aeee",
  storageBucket: "hawai-adda-8aeee.appspot.com",
  messagingSenderId: "139659175020",
  appId: "1:139659175020:web:ed768f267059e49284e449",
  measurementId: "G-G0MWGBZX64"
};
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
const refrence = database.ref('LIGHT-ON-OFF');

refrence.on('value', (snapshot) => {
 const data=snapshot.val()
 alert("user is changed database value="+data.key1);
});


function change(){

  const newData = {
  key1: '1',
}
refrence.set(newData, (error) => {
  if (error) {
    console.error('Data could not be saved.', error);
  } else {
    console.log('Data saved successfully.');
  }
});
}

function side(){
    alert("Do You Went To Trun OFF LED")
  const newData={
    key1:'0'
  }
  refrence.set(newData, (error) => {
  if (error) {
    console.error('Data could not be saved.', error);
  } else {
    console.log('Data saved successfully.');
  }
});

};


// let data=fetch('https://led-light-on-off-218e2-default-rtdb.firebaseio.com/');
// data.then((value)=>{
//   console.log(value)
// },(error)=>{
//   console.log(error)
// })
   