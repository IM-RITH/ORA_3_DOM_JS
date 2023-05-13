// Add Info Item
function addInfoItem() {
    const infoItem = document.createElement('div');
    infoItem.classList.add('field');
    //const nameInput = document.createElement('input');  // create element
    //nameInput.type = 'text';
    //nameInput.placeholder = '';
    const valueInput = document.createElement('input');
    valueInput.classList.add('form');
    valueInput.type = 'text';
    valueInput.placeholder = '';
    
    // valueInput.addEventListener("click", function() {
    //   valueInput.contentEditable = 'true';
    // });
    // valueInput.addEventListener('keydown', function(event) {
    //   if (event.key === 'Enter') {
    //     event.preventDefault();
    //     valueInput.contentEditable = 'false';
    //   }
    //   });

    const label = document.createElement('strong');
    label.classList.add('label_class');
    label.innerHTML = "Item info name: ";
    label.addEventListener("dblclick", function() {
      const newLabel = prompt('Nhập tên item info mới');
      if( newLabel != null)
      label.innerHTML = newLabel;
    });
    
    const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.classList.add('delete-btn');  // create class for style
      deleteBtn.addEventListener('click', function () {
      const confirmDelete = confirm('Bạn có muốn xóa không?');
      if (confirmDelete) {
          infoItem.remove();
      }
      });
    infoItem.appendChild(label);
    // infoItem.appendChild(nameInput);
    infoItem.appendChild(valueInput);
    infoItem.appendChild(deleteBtn);
    document.getElementById('information-panel').appendChild(infoItem);
    document.getElementById('information-panel').style.textAlign = 'center';
    document.getElementById('information-panel').style.width = 'auto';
    document.getElementById('information-panel').style.lineHeight = '2rem';
  }
  
  // Add Group Item
  function addGroupItem() {
    const groupItem = document.createElement('div');
    groupItem.classList.add('group_item1');   // create class for style
    groupItem.classList.add('group-item');
    
    const label = document.createElement('strong');  // inline block
    label.classList.add('label_class1');
    label.innerHTML = "group_item_20200845";
    label.addEventListener("dblclick", function() {
      const newLabel = prompt("Nhập tên group item mới");
      if( newLabel != null)
      label.innerHTML = newLabel;
    })
    groupItem.appendChild(label);
    

    // delete group item
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn'); // create class for style
    deleteBtn.addEventListener('click', function() {
      const Student_name = prompt('Nhập họ và tên của bạn');
      const student_mssv = prompt('Nhập mã số sinh viên của bạn');
      const confirmDelete = confirm(`Bạn có muốn xóa thông tin của ${Student_name} ${student_mssv} không?`);
      if (confirmDelete) {
        groupItem.remove();
      }
    });
    // add info
    const addFieldBtn = document.createElement('button');
    addFieldBtn.innerText = 'Add Info';
    addFieldBtn.classList.add('add-info');
    addFieldBtn.addEventListener('click', function() {
      const field = createField();
      groupItem.appendChild(field);
    });

    const addGroupBtn = document.createElement('button');
    addGroupBtn.innerText = 'Add Group';
    addGroupBtn.classList.add('add-group');
    addGroupBtn.addEventListener('click', function() {
      const group = addGroupItem();
      groupItem.appendChild(group);
    })
    
    groupItem.appendChild(label);
    groupItem.appendChild(deleteBtn);
    groupItem.appendChild(addFieldBtn);
    groupItem.appendChild(addGroupBtn);
    document.getElementById('information-panel').appendChild(groupItem);
    document.getElementById('information-panel').style.textAlign = 'center';
    document.getElementById('information-panel').style.width = 'auto';
    document.getElementById('information-panel').style.lineHeight = '2rem';
    
     
  }
  
  // Create a new field within the group item
  function createField() {
    const field = document.createElement('div');
    field.classList.add('field');
    
    // nameInput.type = 'text';
    // nameInput.placeholder = '';
    // nameInput.addEventListener('dblclick', function() {
      // nameInput.contentEditable = 'true';
      // });
      // nameInput.addEventListener('dblclick', function(event) {
        //   if (event.key === 'Enter') {
          //     event.preventDefault();
          //     nameInput.contentEditable = 'false';
          //   }
          // });
          
          const valueInput = document.createElement('input');
          valueInput.classList.add('form');
          valueInput.type = 'text';
          valueInput.placeholder = '';
          // valueInput.addEventListener('dblclick', function() {
          //   valueInput.contentEditable = 'true';
          // });
          // valueInput.addEventListener('dblclick', function(event) {
          //   if (event.key === 'Enter') {
          //     event.preventDefault();
          //     valueInput.contentEditable = 'false';
          //   }
          // });
          const label = document.createElement('strong');
          label.innerHTML = "Item info name: ";
          label.addEventListener("dblclick", function() {
            const newLabel = prompt('Nhập tên item info mới');
            if( newLabel != null)
            label.innerHTML = newLabel;
          })
          
      // delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', function () {
      const confirmDelete = confirm('Bạn có muốn xóa không?');
      if (confirmDelete) {
          field.remove();
      }
      });
      field.appendChild(label);
      //field.appendChild(nameInput);
      field.appendChild(valueInput);
      field.appendChild(deleteBtn);
      

      return field;
      }

      // Event listeners for buttons
      document.getElementById('add-info-item').addEventListener('click', addInfoItem);
      document.getElementById('add-group-item').addEventListener('click', addGroupItem);

      // Export to pdf file
      $("body").on("click", "#pdf_btn", function () {
        html2canvas($('#information-panel')[0], {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500
                    }]
                };
                pdfMake.createPdf(docDefinition).download("thông_tin_cá_nhân.pdf");
            }
        });
    });