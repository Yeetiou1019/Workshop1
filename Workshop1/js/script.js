$(document).ready(function () {

    var bookDataFromLocalStorage = [];
    var bookCategoryList = [
        { text: "資料庫", value: "database", src: "image/database.jpg" },
        { text: "網際網路", value: "internet", src: "image/internet.jpg" },
        { text: "應用系統整合", value: "system", src: "image/system.jpg" },
        { text: "家庭保健", value: "home", src: "image/home.jpg" },
        { text: "語言", value: "language", src: "image/language.jpg" }
    ];
    $(".BookCategory").kendoDropDownList(); //轉換為KendoUI 下拉式選單
    $(".BookCategory").kendoDropDownList({  //建立相關屬性
        dataTextField: "text",
        dataValueField: "value",
        dataSource: bookCategoryList,
        //index: 0,
        //change: onChange
    });
    $(".BookName").kendoMaskedTextBox();
    $(".BookAuthor").kendoMaskedTextBox();
    $(".BoughtDatepicker").kendoDatePicker({
        format:"yyyy/MM/dd",
        dateInput : true,
        culture:"zh-TW",
    });
    $(".DeliveredDatepicker").kendoDatePicker({
        format:"yyyy/MM/dd",
        dateInput : true,
        culture:"zh-TW",
    });
    $(".BookPrice").kendoNumericTextBox({
        min:0, //禁止輸入負數
        format:kendo.toString("##,#"),//三位一撇
        
    });
    $(".BookAmount").kendoNumericTextBox({
        min:0, //禁止輸入負數
        format:kendo.toString("##,#"),//三位一撇
    });

    $(".window").kendoWindow({
        width:"600px",
        height:"400px",
        title:"新增書籍",
        actions:[
            "Pin",
            "Minimuze",
            "Maximize",
            "Close"
        ],
        
    }).data("kendoWindow").center().open();

    $(".AddBook").kendoButton();
    $(".AddBook").click(function(){
        $(".window").data("kendoWindow").open();
    })

  


});
// 載入書籍資料
function loadBookData() {
    bookDataFromLocalStorage = JSON.parse(localStorage.getItem('bookData'));
    if (bookDataFromLocalStorage == null) {
        bookDataFromLocalStorage = bookData;
        localStorage.setItem('bookData', JSON.stringify(bookDataFromLocalStorage));
    }
}
$(function () {
    loadBookData();
});