
// AOS
AOS.init();

AOS.init({
  disable: false,
  disable: function () {
    var desktop = 1025;
    return window.innerWidth < desktop;
  },

});
