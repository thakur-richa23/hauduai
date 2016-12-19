
angular.module('starter', ['ionic', 'starter.controllers','chart.js','filters'])
  
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
  //localStorage.setItem("status_noti",'answer');
  //alert(status_noti);
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
       StatusBar.styleDefault();
    }

  }); 
  	document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    //alert(jsonData.additionalData.idd);
    if(jsonData.additionalData.foo == 'community')
    {
       // window.localStorage.setItem("status_noti",'answer');
       // window.localStorage.setItem("status_noti_sub",'answer_community');
        //alert('ghfhfh');
        //alert(window.localStorage.getItem("status_noti"));
        //alert(window.localStorage.getItem("status_noti_sub"));
        //location.href="#/app/questions_to_community";
        var id = jsonData.additionalData.idd;
        location.href="#/answer/"+ id;
    }
    else if(jsonData.additionalData.foo == 'waiting_community')
    {
        //window.localStorage.setItem("status_noti",'question');
        location.href="#/app/askforcomm";
    }
    else if(jsonData.additionalData.foo == 'waiting_specialist')
    {
       // window.localStorage.setItem("status_noti",'question');
        location.href="#/app/askforexp";
    }
    else
    {
      //localStorage.setItem("status_noti",'answer');
      //localStorage.setItem("status_noti_sub",'answer_expert');
      //location.href="#/app/questions_to_expert";
      var id = jsonData.additionalData.idd;
        location.href="#/expans/"+ id;
    }
    //alert('didReceiveRemoteNotificationCallBack: ' + (jsonData.additionalData.foo));
    

  };
  window.plugins.OneSignal.init("f854fb03-6bda-4bfb-9d9a-cf334445e412",
                                 {googleProjectNumber: "557106925496"},
                                 notificationOpenedCallback);
                                 
   window.plugins.OneSignal.getIds(function(ids) {
    did = ids.userId;
    window.localStorage.setItem("did",ids.userId);
});
  // Show an alert box if a notification comes in when the user is in your app.
  window.plugins.OneSignal.enableInAppAlertNotification(true);
}, false);
})

/*.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // The App ID (from apps.ionic.io) for the server
    app_id: 'f854fb03-6bda-4bfb-9d9a-cf334445e412',
    // The public API key all services will use for this app
    api_key: 'AIzaSyBxwZfmHDtquQOtLqZfPAk9wQmFH5t7UTk',
    // Set the app to use development pushes
    dev_push: true
  });
}])*/

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

 .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

 .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.menu', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/menu.html'
      }
    }
  })

  .state('app.profileedit', {
    url: '/profileedit',
    views: {
      'menuContent': {
        templateUrl: 'templates/profileedit.html'
      }
    }
  })
  .state('app.new', {
    url: '/new',
    views: {
      'menuContent': {
        templateUrl: 'templates/new.html'
      }
    }
  })
  .state('app.recentans', {
    url: '/recentans',
    views: {
      'menuContent': {
        templateUrl: 'templates/recentlyanswered.html'
      }
    }
  })

  .state('app.stu_recents', {
    url: '/stu_recents',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_recents.html'
      }
    }
  })

  .state('app.feedback_rating', {
    url: '/feedback_rating',
    views: {
      'menuContent': {
        templateUrl: 'templates/feedback_rating.html',
        //controller: 'rateCtrl'
      }
    }
  })

  .state('app.mostresponse', {
    url: '/mostresponse',
    views: {
      'menuContent': {
        templateUrl: 'templates/mostresponse.html'
      }
    }
  })

.state('app.stu_mostresponse', {
    url: '/stu_mostresponse',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_mostresponse.html'
      }
    }
  })

  .state('app.noans', {
    url: '/noans',
    views: {
      'menuContent': {
        templateUrl: 'templates/noans.html'
      }
    }
  })

.state('app.stu_noans', {
    url: '/stu_noans',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_noans.html'
      }
    }
  })

  .state('app.questioncomm', {
    url: '/questioncomm/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/questioncomm.html'
      }
    }
  })

  .state('app.stu_quecom', {
    url: '/stu_quecom/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_quecom.html'
      }
    }
  })

  .state('app.que_mostresponse', {
    url: '/que_mostresponse/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/que_mostresponse.html'
      }
    }
  })

  .state('app.stu_que_most', {
    url: '/stu_que_most/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_que_most.html'
      }
    }
  })

  .state('app.que_noanswer', {
    url: '/que_noanswer/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/que_noanswer.html'
      }
    }
  })

  .state('app.stu_que_noans', {
    url: '/stu_que_noans/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_que_noans.html'
      }
    }
  })

  .state('app.que_recasked', {
    url: '/que_recasked/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/que_recasked.html'
      }
    }
  })

 
  
   .state('app.forgotpass', {
    url: '/forgotpass',
    views: {
      'menuContent': {
        templateUrl: 'templates/forgotpass.html'
      }
    }
  }) 
  
  .state('app.anscomm', {
    url: '/anscomm/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/anscomm.html'
      }
    }
  })

  .state('app.stu_anscomm', {
    url: '/stu_anscomm/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_anscomm.html'
      }
    }
  })
  .state('app.events', {
    url: '/events',
	views: {
      'menuContent': {
        templateUrl: 'templates/Events.html',
		controller:'eventsCtrl'
      }
    },
	controller:'eventsCtrl'
  })
  /////////To Community////////
  .state('answer', {
    url: '/answer/:id',
   
        templateUrl: 'templates/que_ans.html',
        
        
     
  })

  .state('stu_queans', {
    url: '/stu_queans/:id',
   
        templateUrl: 'templates/stu_queans.html',
        
        
     
  })
  /////BY Community////
  
  
  /////////To Community///////////
   .state('cmanswer', {
    url: '/cmanswer/:id',
    
        templateUrl: 'templates/communityanswer.html'
   
  })
  ////////To Expert//////

.state('stu_cmanswer', {
    url: '/stu_cmanswer/:id',
    
        templateUrl: 'templates/stu_cmanswer.html'
   
  })

  
  .state('toexpanswer', {
    url: '/toexpanswer/:id',
    
        templateUrl: 'templates/toexpertanswers.html'
   
  })

  .state('stu_toexpanswer', {
    url: '/stu_toexpanswer/:id',
    
        templateUrl: 'templates/stu_toexpanswer.html'
   
  })
  
  ///////////////From Expert////////////////
  
  .state('expans', {
    url: '/expans/:id',
    
        templateUrl: 'templates/expertanswer.html'
   
  }) 

.state('stu_expertanswer', {
    url: '/stu_expertanswer/:id',
    
        templateUrl: 'templates/stu_expertanswer.html'
   
  }) 

  .state('abuse', {
    url: '/abuse/:id',
    
        templateUrl: 'templates/abuse.html'
   
  })

  .state('qwaitlecabuse', {
    url: '/qwaitlecabuse/:id',
    
        templateUrl: 'templates/qwaitlecabuse.html'
   
  })

  .state('abuse_stu', {
    url: '/abuse_stu/:id',
    
        templateUrl: 'templates/abuse_stu.html'
   
  })

  .state('qwaitstudntabuse', {
    url: '/qwaitstudntabuse/:id',
    
        templateUrl: 'templates/qwaitstudntabuse.html'
   
  })

  .state('fromprovideexpans', {
    url: '/fromprovideexpans/:id',
    
        templateUrl: 'templates/fromprovideexpans.html'
   
  })
  .state('fromcommprovide', {
    url: '/fromcommprovide/:id',
    
        templateUrl: 'templates/fromprovidecomm.html'
   
  }) 
  
  /////From Comm///////
  .state('fromanswer', {
    url: '/fromanswer/:id',
    
        templateUrl: 'templates/toexpertanswers.html'
   
  })
  
  .state('app.question', {
    url: '/questions',
    views: {
      'menuContent': {
        templateUrl: 'templates/question.html'
      }
    },
	controller:'AllquestionsCtrl'
  })
  .state('app.askforexp', {
    url: '/askforexp',
    views: {
      'menuContent': {
        templateUrl: 'templates/askforexp.html'
      }
    },
	controller:'askingforexCtrl'
  })

  .state('app.quiz', {
    url: '/quiz',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz.html'
      }
    },
  })
  
  .state('app.referanexpert', {
    url: '/referanexpert',
    views: {
      'menuContent': {
        templateUrl: 'templates/referanexpert.html'
      }
    },
  })

  .state('app.invitefrnd', {
    url: '/invitefrnd',
    views: {
      'menuContent': {
        templateUrl: 'templates/invitefrnd.html'
      }
    },
  })
  .state('app.askforcomm', {
    url: '/askforcomm',
    views: {
      'menuContent': {
        templateUrl: 'templates/askforcomm.html'
      }
    },
	controller:'askingforcommunCtrl'
  })
  
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    },
	controller:'proCtrl'
  })
  
  .state('app.backrecent', {
    url: '/backrecent/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/backrecent.html'
      }
    },
	//controller:'ansCtrl'
  })
.state('app.stu_backrecent', {
    url: '/stu_backrecent/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_backrecent.html'
      }
    },
	//controller:'ansCtrl'
  })

  .state('app.backres', {
    url: '/backres/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/backres.html'
      }
    },
	controller:'anserCtrl'
  })

  .state('app.stu_backres', {
    url: '/stu_backres/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_backres.html'
      }
    },
	
  })
  
  .state('register', {
      url: '/register',
    
          templateUrl: 'templates/register.html',
        
    })

	.state('registerspecial', {
      url: '/registerspecial',
    
          templateUrl: 'templates/registerspec.html',
        
    })
  

  .state('app.browse', {
      url: '/browse',
       //resolve:{
		  //"check":function($state){
			  	//var name=localStorage.getItem("signed");
				
			  //if(!name){
				 // $state.go("playlists");
			 // }
		  //}
	 // },
	  views:{
			  
			  'menuContent': {
				templateUrl: 'templates/browse.html'
			 
			}
    }
    })

	.state('app.news', {
      url: '/news',
      
        views: {
      'menuContent': {
        templateUrl: 'templates/news.html'
      }
    }
    })

	.state('app.faqs', {
      url: '/faqs',
      
        views: {
      'menuContent': {
        templateUrl: 'templates/faqs.html'
      }
    }
    })
	
	.state('app.contactus', {
      url: '/contactus',
      
        views: {
      'menuContent': {
        templateUrl: 'templates/contactus.html'
      }
    }
    })

	.state('app.pollsresult', {
		  url: '/pollsresult/:id',
		  
		views: {
		  'menuContent': {
			templateUrl: 'templates/polls_results.html'
		  }
		},
		controller:'pollsresultsCtrl'
    })
	
	.state('app.ask_specialist', {
		  url: '/ask_specialist',
		  
		views: {
		  'menuContent': {
			templateUrl: 'templates/ask_specialist.html'
		  }
		},
		
    })
	
	.state('app.ask_community', {
		  url: '/ask_community',
		  
		views: {
		  'menuContent': {
			templateUrl: 'templates/ask_community.html'
		  }
		},
		
    })
	
	.state('app.pieresult', {
      url: '/pieresult/:id',
      
        views: {
      'menuContent': {
        templateUrl: 'templates/piechart.html'
      }
    },
	controller:'resultpieCtrl'
	
    })
	.state('app.questions_to_expert', {
      url: '/questions_to_expert',
      
        views: {
      'menuContent': {
        templateUrl: 'templates/que_to_expert.html'
      }
    },
	controller:'resultpieCtrl'
	
    })
	.state('app.questions_to_community', {
      url: '/questions_to_community',
      
        views: {
      'menuContent': {
        templateUrl: 'templates/que_to_community.html'
      }
    },
	controller:'resultpieCtrl'
	
    })
	
	.state('app.communityans', {
    url: '/communityans',
    views: {
      'menuContent': {
        templateUrl: 'templates/communityans.html'
      }
    },
	controller:'resultpieCtrl'
  })
  
  .state('app.expquestion', {
    url: '/expquestion',
    views: {
      'menuContent': {
        templateUrl: 'templates/expquestion.html'
      }
    },
	controller:'resultpieCtrl'
  })
  
    .state('playlists', {
      url: '/playlists',
       resolve:{
		  "check":function($state){
			  	var name=localStorage.getItem("signed");
			  if(name){
				 
				  location.href="#/app/browse";
			  }
		  }
	  },
          templateUrl: 'templates/playlists.html',
        
    })
	
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })


  // for student app

  .state('app.stu_register', {
    url: '/stu_register',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_register.html'
        
      }
    }
  })

  .state('app.stu_home', {
    url: '/stu_home',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_home.html'
        
      }
    }
  })

  .state('app.stu_plylist', {
    url: '/stu_plylist',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_plylist.html'
        
      }
    }
  })

  .state('student_register', {
      url: '/student_register',
    
          templateUrl: 'templates/student_register.html',
        
    })

    .state('lecturer_register', {
      url: '/lecturer_register',
    
          templateUrl: 'templates/lecturer_register.html',
        
    })

    .state('app.stu_browse', {
      url: '/stu_browse',
	  views:{
			  'menuContent': {
				templateUrl: 'templates/stu_browse.html'
			 
			}
    }
    })

    .state('app.stu_ask_community', {
		  url: '/stu_ask_community',
		  
		views: {
		  'menuContent': {
			templateUrl: 'templates/stu_ask_community.html'
		  }
		}
		
    })

    .state('app.lecturer_ask', {
		  url: '/lecturer_ask',
		  
		views: {
		  'menuContent': {
			templateUrl: 'templates/lecturer_ask.html'
		  }
		}
		
    })

    .state('app.stu_profile', {
    url: '/stu_profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_profile.html'
      }
    }
    })

    .state('app.stu_recasked', {
    url: '/stu_recasked',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_recasked.html'
      }
    }
    })

    .state('stu_provideans', {
    url: '/stu_provideans/:id',
    
        templateUrl: 'templates/stu_provideans.html'
   
  }) 

  .state('app.stu_contact', {
      url: '/stu_contact',
      
        views: {
      'menuContent': {
        templateUrl: 'templates/stu_contact.html'
      }
    }
    })

.state('app.student_new', {
    url: '/student_new',
    views: {
      'menuContent': {
        templateUrl: 'templates/student_new.html',
        //controller: 'rateCtrl'
      }
    }
  })

  .state('app.stu_recasked)', {
    url: '/stu_recasked/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/stu_recasked.html'
      }
    }
  })
  .state('lec_provideans', {
    url: '/lec_provideans/:id',
    
        templateUrl: 'templates/lec_provideans.html'
   
  }) 
.state('quiz_lecprovide', {
    url: '/quiz_lecprovide/:id',
    
        templateUrl: 'templates/quiz_lecprovide.html'
   
  })
  .state('commentans', {
    url: '/commentans/:id/:fid',
    
        templateUrl: 'templates/commentans.html'
   
  })

  $urlRouterProvider.otherwise('/app/stu_home');
});
