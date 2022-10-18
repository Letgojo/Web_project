import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyDQBGoIRY4u2Lo_YlWRafoaigdTEd3idmY",
    authDomain: "sodium-primer-364306.firebaseapp.com",
    databaseURL: "https://sodium-primer-364306-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sodium-primer-364306",
    storageBucket: "sodium-primer-364306.appspot.com",
    messagingSenderId: "268199684704",
    appId: "1:268199684704:web:db336b40fb1b8941993105",
    measurementId: "G-CF41VLMJLC"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };