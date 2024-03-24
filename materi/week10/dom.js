// let contoh = document.getElementsByClassName("tes");
// let  contoh1 = document.getElementById("judul");
// let contoh2 = document.querySelectorAll(".tes")
// let contoh3 =  document.querySelector(".tes")

// console.log(contoh3)
// console.log(contoh1)

// contoh[0].style.backgroundColor = "red";
// contoh[2].style.color = "blue";

//membuat dan menambahkan elemen
let judul = document.createElement('h1')
let desk = document.createElement("p")

//mengisi nilai dari elemen yang dibuat
judul.textContent = "INI ISI JUDUL";

desk.textContent = "ini isi deskripsi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magni, ipsa quo aliquam quod perferendis animi autem itaque porro. Unde aliquam accusantium inventore tenetur doloremque sit, repudiandae laboriosam. Incidunt tempora rerum amet minima, excepturi, aperiam provident harum eveniet iusto temporibus optio est error unde a fugiat vel libero dicta eum!"

//memanggil elemen tersebut
// document.body.append(judul)

document.body.append(desk)

//menghapus elemen yang ditampilkan
desk.remove()

//kasi masuk elemen ke class : "badan"
document.querySelectorAll(".badan")[0].append(judul)