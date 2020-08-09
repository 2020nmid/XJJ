const btn = document.getElementById('add');
const text = document.getElementById('content');
const isDoing = document.getElementById('isDoing');
const clearBtn = document.getElementById('clear');
const haveDoneBtn = document.getElementById('haveDoneBtn');
const deleteBtn = document.getElementById('deleteBtn');
const haveDoneLi = document.getElementById('haveDone');
let Arr = [];

//点击添加按钮，就把内容push到Arr任务数组，完成后更新页面
btn.onclick = ()=>{
    if(text.value === ``){
        alert(`请输入内容！`)
        return false;
    }
    else{
        let isDone = false;
        let value = text.value;
        let obj = {
            isDone,
            value,
        }
        Arr.push(obj);
        text.value = '';
    }
    updateStorage();
    updateIndex();
}

window.onload = ()=>{
    updateIndex();
}

//监听本地缓存localStorage状态
let updateStorage = () => {
    localStorage.clear();
    for(let i = 0 ; i < Arr.length ; i++){
        localStorage.setItem(i+'',JSON.stringify(Arr[i]))
        console.log(Arr);
        console.log(JSON.parse(localStorage.getItem(localStorage.key(i+''))))
    }
}

let updateIndex = () =>{
        let items = [];
        let isDoingLen = isDoing.children.length;
        let haveDoneLiLen = haveDoneLi.children.length;
        if(isDoingLen === 0 && haveDoneLiLen === 0){
            disabled = true;
         }
         else{
                 for(let j = 0 ; j < isDoingLen ; j++){
                    isDoing.removeChild(isDoing.children[0]);
                }
                for(let x = 0 ; x < haveDoneLiLen ; x++){
                    haveDoneLi.removeChild(haveDoneLi.children[0]);
                }
            }

        for(let i = 0 ; i < localStorage.length ; i++){
            items.push(JSON.parse(localStorage.getItem(localStorage.key(i+''))))
        }
        for(let i = 0 ; i <items.length ; i++){
            let li =document.createElement('li');
                li.innerHTML = items[i].value +'<input type="button" value="已完成" class="haveDoneBtn" onclick = "haveDone(this)" id='+i+'>\
                <input type="button" value="X" class="deleteBtn"  onclick = "deleteItem(this)" id='+i+'>';
            if(items[i].isDone === false){
                isDoing.appendChild(li);
            }
            else{
                haveDoneLi.appendChild(li);
            }

        }
    
}
//清空本地缓存
clearBtn.onclick = () =>{
    localStorage.clear();
    Arr=[];
    updateStorage();
    updateIndex();
}

//删除事件
let deleteItem = (e) =>{
    Arr.splice(e.id,1);
    updateStorage();
    updateIndex();
}

//已完成
let haveDone=(e)=>{
Arr[e.id].isDone = true;
updateStorage();
updateIndex();
}