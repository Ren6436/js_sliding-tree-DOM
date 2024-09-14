document.querySelectorAll("li").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent,e.firstChild.replaceWith(t),t.nextElementSibling&&t.addEventListener("click",function(){t.nextElementSibling.style.display="none"!==t.nextElementSibling.style.display?"none":""})});
//# sourceMappingURL=index.7207d142.js.map
