$(document).ready(function() {
     $('.button-collapse').sideNav();
     $('.scrollspy').scrollSpy();
     $(".left-col-article").css("height", $(".left-col-article").parent().height());
     $(".right-col-article").css("height", $(".right-col-article").parent().height());
     $("#nav-side-single").stick_in_parent({
          offset_top:80
     });
     $("#nav-side-ad").stick_in_parent({
      offset_top:500
     });
     $("#nav-side-article").stick_in_parent({
          offset_top:80
     });
     $("#social-icons-horizontal").stick_in_parent({
          offset_top:$(window).height() -70,
          spacer: false,
     });
     hljs.initHighlightingOnLoad();

    //  if(!window.localStorage.getItem("notified-site-change")){
    //     generateNotificationTab("Giraffe Academy is rebranding!", 
    //     "Hey! It's GOUP, founder of Giraffe Academy. I've decided to rebrand this site along with my YouTube channel into a more personal brand centered around myself as a developer and teacher. Be sure to keep checking back for more updates!")
    //  }
     
});

function generateNotificationTab(heading, message){

    const notification = document.createElement("div");
    notification.style = "display: flex; width: 100%; padding: 10px; text-align: center; padding-left: 5%; padding-right: 5%; color: white; flex-direction: column; align-items: center; justify-content: center; background-color: #64b5f6; position: fixed; bottom: 0px;"
    notification.id = "notification-alert"
    const notificationHeader = document.createElement("p");
    notificationHeader.style = "font-size: 20px; margin: 0px;"
    notificationHeader.innerText = heading;
    const notificationText = document.createElement("p");
    notificationText.style="margin: 0px; font-size: 17"
    notificationText.innerText = message;

    const xButton = document.createElement("div");
    xButton.style = "cursor: pointer; display: flex; align-items: center; justify-content: center; background-color: #37474f; position: absolute; top: 5px; right: 10px; width: 17px; height: 17px;"
    xButton.addEventListener("click", (event)=>{
        document.querySelector("#notification-alert").remove();
    });
    const x = document.createElement("p");
    x.innerText = "x";
    xButton.appendChild(x);
    notification.appendChild(xButton)

    notification.appendChild(notificationHeader);
    notification.appendChild(notificationText);
    document.body.appendChild(notification);
    window.localStorage.setItem("notified-site-change", true)
    console.log(window.localStorage)
}