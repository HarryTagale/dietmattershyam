function closeChatScreen () {

    let result = window.confirm("Are you sure you want to close");
    if (result) {
      document.getElementById("chatBoxPopup").style.display = "none";
      document.getElementById("chatTogglerImg").style.display = "block";
    }
  }

  function chatTogglerClick () {
    document.getElementById("chatBoxPopup").style.display = "block";
    document.getElementById("chatTogglerImg").style.display = "none";
    let iframe = document.getElementById("chatScreen");
    if (!iframe.dataset.loaded) {
      iframe.src = iframe.dataset.src;
      //iframe.dataset.loaded = true;
    }

    $(document).ready(function () {
      $('#chatScreen').on('load', function () {
          $('#loader').hide();
      });
    });
  }