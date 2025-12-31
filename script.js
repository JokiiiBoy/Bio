// Year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",e=>{
    const id = link.getAttribute("href");
    if(id==="#" || !document.querySelector(id)) return;
    e.preventDefault();
    document.querySelector(id).scrollIntoView({
      behavior:"smooth",
      block:"start"
    });
  });
});

// Copy Discord (with fallback)
function copyText(text){
  if(navigator.clipboard && window.isSecureContext){
    return navigator.clipboard.writeText(text);
  }
  const t=document.createElement("textarea");
  t.value=text;
  t.style.position="fixed";
  t.style.left="-9999px";
  document.body.appendChild(t);
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
  return Promise.resolve();
}

const copyBtn=document.getElementById("copyDiscord");
const copyState=document.getElementById("copyState");

copyBtn.addEventListener("click",async()=>{
  try{
    await copyText("jokiiiiboy");
    copyState.textContent="Copied!";
    setTimeout(()=>copyState.textContent="Copy",1200);
  }catch{
    copyState.textContent="Blocked";
  }
});

// Toggle sections + active highlight
document.querySelectorAll(".tbtn").forEach(btn=>{
  const id = btn.dataset.toggle;
  const section = document.getElementById(id);

  btn.addEventListener("click",()=>{
    section.classList.toggle("hidden");
    btn.classList.toggle(
      "active",
      !section.classList.contains("hidden")
    );
  });
});
