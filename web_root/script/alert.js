window.addEventListener("load", function () {
  //main - contactSubmit
  $(".contact_btn").click(function () {
    Swal.fire({
      width: 350,
      title: "문의를 접수했어요!",
      text: "빠른 시일 내에 답변드릴게요",
      imageUrl: "../images/common/daso_alert.png",
      imageWidth: 250,
      imageHeight: 230,
      imageAlt: "Custom image",
      confirmButtonText: "확인",
      showConfirmButton: false,
      timer: 2000,
    });
  });
});
