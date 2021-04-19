
    var modal = document.getElementById('teachMod');
    var devMod = document.getElementById('devMod');
    var anlMod = document.getElementById('analMod');
    var advMod = document.getElementById('advMod');
        
    var modalBtn = document.getElementById('teachModB');
    var devModBtn = document.getElementById('devModB');
    var anlBtn = document.getElementById('analModB');
    var advBtn = document.getElementById('adventModB');
        
    var closeBtn = document.getElementsByClassName('closeBtn')[0];
    var closeDevBtn = document.getElementsByClassName('closeDev')[0];
    var closeAnlBtn = document.getElementsByClassName('closeAna')[0];
    var closeAdvBtn = document.getElementsByClassName('closeAdv')[0];
    
    modalBtn.addEventListener('click', openteachModal);  
    devModBtn.addEventListener('click',opendevModal);
    anlBtn.addEventListener('click',openAnlMod);
    advBtn.addEventListener('click',openAdvMod);
    
        
    closeBtn.addEventListener('click', closeModal);
    closeDevBtn.addEventListener('click',closedevMod);
    closeAnlBtn.addEventListener('click',closeAnlMod);
    closeAdvBtn.addEventListener('click',closeAdvMod);
    
    modal.addEventListener('click',openteachModal);
    devMod.addEventListener('click',opendevModal);
    anlMod.addEventListener('click',openAnlMod);
    advMod.addEventListener('click',openAdvMod);
    //outside click
    window.addEventListener('click',clickoutside);
    
    function openteachModal()
        {
            modal.style.display='block';
        }
     
      function opendevModal()
        {
            devMod.style.display='block';
        }
     function openAnlMod()
        {
            anlMod.style.display='block';
        }   
    function openAdvMod()
        {
            advMod.style.display='block';
        }        
        
    function closeModal()
        {
            modal.style.display='none';
        }
  function closedevMod()
        {
            devMod.style.display='none';
        }
    function closeAnlMod()
        {
            anlMod.style.display='none';
        }
    function closeAdvMod()
        {
            advMod.style.display='none';
        }
        
    function clickoutside(e)
        {
            if(e.target == modal)
            {
                modal.style.display='none';
            }
            else if(e.target== devMod)
            {
                devMod.style.display='none';
            }
            else if (e.target == anlMod)
            {
                anlMod.style.display='none';    
            }
            else if(e.target==advMod)
            {
                advMod.style.display='none';
            }
        }
