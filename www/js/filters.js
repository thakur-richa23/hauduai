angular.module('filters', []).filter('htmlToPlaintext', function() {
    return function(text) {
      return String(text).replace(/<[^>]+>/gm, '');
			
    }
  })
	.filter('removeHTMLTags', function() {
  return function(text) {
	  var d  =  String(text).replace(/&nbsp;/gm, '');
		var e = String(d).replace(/&#39;/gm, "'");
	return String(e).replace(/&quot;/gm, "");

  }
})

	
  .filter('ciel', function() {
  return function(input) {
    return Math.floor(input);
  };
})

  .filter('imageempty', function() {
  return function(input) {
	  if(input==""){
		  return "uploads/logo/1829faa27007ab66fdca8caed1be2542.png";
		  
	  }else{
		  return input;
	  }
//    return Math.floor(input);
  };
})

.filter('dateago', function() {
  return function(input) {
	    var oneDay = 24*60*60*1000;
	    var date =new Date(input);
	    var day =date.getDate();
		var month=date.getMonth();
        var year=date.getFullYear();
		var firstDate = new Date(year,month,day);
		var now=new Date();
		var secondDate=now;
		var secondDate=secondDate.getTime();
		var firstDate=firstDate.getTime();
		var diffDays = Math.floor(Math.abs((firstDate - secondDate)/(oneDay)));

		if(diffDays > "365"){
			return Math.floor(diffDays/"365")+" Year Ago";
		}

		if(diffDays < 365){
			if(diffDays < 30){
				 if(diffDays==0){
					 return " Today";
				 }else{
						return Math.floor(diffDays)+" Days Ago";
				 }
			}else{	
			 return Math.floor(diffDays/"30")+" Months Ago";
			}
		}

     
  };
});

