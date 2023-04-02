$(function () {
    let toDoContainer = $(".todo-container");
    let addBox = toDoContainer.find(".add-box");
    let listBox = toDoContainer.find(".list-box");
    let inputAdd = addBox.find(".input-add")
    let buttonAdd = addBox.find(".button-add")
    

    listBox.find(".item .custome-check").click(function () {
        let $this = $(this);
        $this.closest(".item").toggleClass("active")
    });
    buttonAdd.click(function () {
        let value = inputAdd.val();
        listBox.prepend("<div>helo</div");
    });
    inputAdd.keyup(function (event) {
        if (event.which == 13) {
            listBox.prepend("<div>helo</div");
        }
    })

});