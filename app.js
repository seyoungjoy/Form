var valueList = document.getElementById('valueList');
var text = '<span> you have selected : </span>';
var listArray = [];

var checkboxes = document.querySelectorAll('.checkbox');

for(var checkbox of checkboxes){
    checkbox.addEventListener('click', function(e){
        //이벤트 리스너에서는 this를 e.target으로 받아버리는 것 같다.
        //checkbox의 checked 옵션이 선택이 되면 true, 선택 해제시 false
        if(this.checked === true){
            listArray.push(this.value);
            valueList.innerHTML = text+listArray.join('/');
        } else{
            console.log(this);
            console.log(this.value);
            listArray = listArray.filter(e => e !== this.value);
            valueList.innerHTML = text+listArray.join('/');
        }
        console.log(listArray);
    })
}

