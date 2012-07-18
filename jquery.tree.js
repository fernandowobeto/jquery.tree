jQuery.fn.arvore = function(o){
  var d = {checkbox:true,imagens:true}
  var c = $.extend(d,o);
  $(this).addClass('jquery-tree').bind('expandir',function(){
    $(this).find('ul').show('slow');
  }).bind('retrair',function(){
    $(this).find('ul').hide('slow');
  }).find('li a').click(function(){
    var s = $(this).next();
    if(s.css('display')=='block'){
      s.hide('slow');
    }else{
      s.show('slow');
    }
  });
  if(c.checkbox){
    $(this).find('li').each(function(){
      var li = $(this);
      var check = $('<input>').attr('type','checkbox').addClass('check-tree').click(function(){
        var status = $(this).is(':checked')?true:false;
        li.find('ul :checkbox.check-tree').attr('checked',status);
      });
      li.prepend(check);
    });
  }
  if(c.imagens){
    $(this).find('li').each(function(){
      var filhos = $(this).find('ul').length;
      if(filhos){
        $(this).addClass('pasta');
      }else{
        $(this).addClass('arquivo');
      }
    });
  }
  return $(this);
}