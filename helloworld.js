console.log("Hello world");

//if-else
let x = 9;
if (x % 2 == 0) {
    console.log(x + " chia het cho 2");
} else console.log(x + " khong chia het cho 2");


//switch-case
let name = "Hang";
switch(name){
    case "Linh" : console.log("Linh xau xi"); break;
    case "Nga" : console.log("Nga xinh dep"); break;
    default: console.log(name + " binh thuong");
}

//for
for(let i =1; i<=10; i++){
    console.log(i);
}

let array = ["Nga","Linh","Trang","Tham","Hang","Nhung"];
array.forEach(element => {
    console.log(element);
});

//function
function TinhTuoi(namsinh, nam) {
    if (nam < namsinh) {
        console.log("Ban khong co tuoi");
    } else {
        let tuoi = nam - namsinh;
        console.log(tuoi + " tuoi");
        return tuoi;
    }
}

TinhTuoi(1999, 1998);
TinhTuoi(1999, 1999);
TinhTuoi(1999, 2025);