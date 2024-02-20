window.addEventListener('scroll',function(){
    let scrollTopPosition=document.documentElement.scrollTop||document.body.scrollTop;

    console.log(scrollTopPosition);

    let totalHeightOfPage=document.documentElement.scrollHeight- document.documentElement.clientHeight;

    console.log(totalHeightOfPage);

    let scrollProgress=Math.floor((scrollTopPosition/totalHeightOfPage)*100);

    console.log(scrollProgress);

    let progressBar=document.getElementById("progressBar");
    progressBar.style.width=scrollProgress+"%";
});