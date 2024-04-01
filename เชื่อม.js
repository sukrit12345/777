// นำเข้าฟังก์ชันที่ต้องการจาก SDK ที่จำเป็น
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-storage.js";
// เพิ่ม SDKs อื่นๆ ตามต้องการ



const firebaseConfig = {
  apiKey: "AIzaSyDpOIZmY6S8oGZWjtEF3tUKe67OSF6Ykd8",
    authDomain: "data-a125e.firebaseapp.com",
    projectId: "data-a125e",
    storageBucket: "data-a125e.appspot.com",
    messagingSenderId: "637184255233",
    appId: "1:637184255233:web:4e6a59a2f35093c0f2e700",
    measurementId: "G-GT3MBS89H1"
};

// กำหนดค่าให้ Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const table = document.getElementById("table");

async function getAdminData(db) {
  // ดึงข้อมูลลูกหนี้จาก Firestore
  const querySnapshot = await getDocs(collection(db, 'admin'));
  return querySnapshot.docs.map(doc => doc.data());
}

function showData(admin) {
  // เพิ่มแถวในตาราง
  const row = table.insertRow(-1);
  // เพิ่มเซลล์สำหรับชื่อของลูกหนี้
  const nameCell = row.insertCell(0);
  // ใส่ข้อมูลชื่อลูกหนี้ลงในเซลล์
  nameCell.innerHTML = admin.name;
}

async function displayAdminData() {
  const adminData = await getAdminData(db);
  adminData.forEach(admin => {
    showData(admin);
  });
}

displayAdminData();
