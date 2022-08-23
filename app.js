var tagcontent = document.querySelector('.content')
var taginput = document.querySelector('input')
var tagbutton = document.querySelector('.button')
// việc 1
var tags = ['nodejs','php','javascript']
var tag = 0
function addtags(){
    tagcontent.innerHTML = ''
    for(var i=0;i<tags.length;i++){
        var tag = tags[i]
        tagcontent.innerHTML = tagcontent.innerHTML + ` <li>${tag} <i class="fa-solid fa-circle-xmark" onclick='removetag(${i})' ></i> </li>`
    }
    tagcontent.appendChild(taginput)
    taginput.focus()
}
//việc 2 : nhận sự kiện onmousedown và nút enter để thêm giá trị vào mảng , 
taginput.onkeydown = function(events){
    if(events.code === 'Enter'){
       tags.push(taginput.value)
       taginput.value = ''
       addtags()
       taginput.focus()
    }
}
// việc 3 : khi onclick chọc vô mảng tags để xóa vị trí đã truyền vào tham số
function removetag(index){
    tags.splice(index,1) // sau khi xóa xong chạy lại hàm addtags
   addtags()
}
// việc 4 : nút button khi onclick vào thì mảng tags rỗng
tagbutton.addEventListener('click',function(){
    tags =[]
    addtags()
})
addtags()
