     
 
    function find(newId , idList){
        let t = true;
        idList.forEach(item => {
         if(item == newId){
             t = false
         }
        })
        return t;
 
     }
     document.addEventListener('DOMContentLoaded', function() {
       
 
         let newData = []
         let submit = document.getElementById('submit');
         let idList = []
         submit.disabled =true;
        
 
          newData = document.querySelectorAll('.newData');
          newData.forEach(inp => {
          inp.onkeyup = () => {
             if(newData[0].value.length > 0 && newData[1].value.length > 0 && newData[2].value.length > 0){
                 submit.disabled=false;
             }else {
                 submit.disabled=true;
             }
         }
     })
         const table = document.querySelector('table'); 
      document.querySelector('form').onsubmit = () => {
         if(document.getElementById('id').value !== "" && find(document.getElementById('id').value, idList)){
 
         let btn = document.createElement('button');
         btn.className = 'btn btn-outline-success remove';
         btn.innerHTML = 'remove';
         btn.addEventListener('click' , function(){
              this.parentNode.remove();
         })
         let tRow = document.createElement('tr');
         newData.forEach(data => {
         let td = document.createElement('td');
         td.innerHTML= data.value;
         
         tRow.append(td , btn)
         table.append(tRow);
       idList.push(document.getElementById('id').value);
       
       data.value = '';
        })
     }else {
         document.getElementById('demo').innerHTML = 'You already have used this id!';
     }
      submit.disabled =true
      return false;
      
 
      }
     
     
     })
     
     