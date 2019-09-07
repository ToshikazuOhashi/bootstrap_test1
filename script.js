$(function() {
   $('#btn_new_mem').on('click',function(){ 
   	   $('#n_mem').css({'display':'block'});
   	   $('#n_post').css({'display':'none'}); 
   	   $('#main').css({'display':'none'}); 
   	   $('#coment').css({'display':'none'}); 
   	   $('#sarch').css({'display':'none'}); 
   	});
   $('#btn_new_post').on('click',function(){ 
   	   $('#n_mem').css({'display':'none'});
   	   $('#n_post').css({'display':'block'});
   	   $('#main').css({'display':'none'}); 
   	   $('#coment').css({'display':'none'});
   	   $('#sarch').css({'display':'none'}); 
   	});
$('#btn_new_posted').on('click',function(){ 
   	   $('#n_mem').css({'display':'none'});
   	   $('#n_post').css({'display':'none'}); 
   	   $('#main').css({'display':'none'}); 
   	   $('#coment').css({'display':'none'}); 
   	   $('#sarch').css({'display':'none'}); 
   	});
$('#btn_sarch').on('click',function(){ 
   	   $('#n_mem').css({'display':'none'});
   	   $('#n_post').css({'display':'none'});
  	   $('#main').css({'display':'none'}); 
   	   $('#coment').css({'display':'none'}); 
   	   $('#sarch').css({'display':'block'}); 
   	});
$('#btn_coment').on('click',function(){ 
   	   $('#n_mem').css({'display':'none'});
   	   $('#n_post').css({'display':'none'});
  	   $('#main').css({'display':'block'}); 
   	   $('#coment').css({'display':'block'});
   	   $('#sarch').css({'display':'none'}); 
   	});

  });
  
  