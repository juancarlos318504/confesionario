(this["webpackJsonpreconocimiento-de-voz-demo"]=this["webpackJsonpreconocimiento-de-voz-demo"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/image001.54586fc3.png"},22:function(e,t,a){e.exports=a.p+"static/media/micro2.4e75923f.webp"},30:function(e,t,a){e.exports=a.p+"static/media/Bienvenida.7ef623b5.mp4"},31:function(e,t,a){e.exports=a.p+"static/media/micro.ac5ef2e5.png"},32:function(e,t,a){e.exports=a.p+"static/media/scene.f34afdf9.glb"},36:function(e,t,a){e.exports=a(78)},41:function(e,t,a){},42:function(e,t,a){},64:function(e,t,a){e.exports=a.p+"static/media/RespuestaFeliz.97b6cb7a.mp3"},65:function(e,t,a){e.exports=a.p+"static/media/RespuestaTriste.b7eca92f.mp4"},66:function(e,t,a){e.exports=a.p+"static/media/RespuestaSalud.d6ccd02a.mp4"},67:function(e,t,a){e.exports=a.p+"static/media/RespuestaEmpleo.f16c7cc6.mp4"},70:function(e,t,a){e.exports=a.p+"static/media/agradecimiento.3b3d3484.png"},71:function(e,t,a){e.exports=a.p+"static/media/felicidad.e1cb388a.png"},72:function(e,t,a){e.exports=a.p+"static/media/tristeza.6e0ac0d5.png"},73:function(e,t,a){e.exports=a.p+"static/media/rabia.93fe00c7.png"},74:function(e,t,a){e.exports=a.p+"static/media/confusion.42458e17.png"},75:function(e,t,a){e.exports=a.p+"static/media/frustracion.1f39b192.png"},76:function(e,t,a){e.exports=a.p+"static/media/salud.c53012e4.png"},77:function(e,t,a){e.exports=a.p+"static/media/empleo.afadaa94.png"},78:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(34),s=a.n(o),c=(a(41),a(4)),l=a(5),r=a(8),m=a(7),u=(a(42),a(43),a(44),a(14)),d=a(2),p=a(1),h=a(23),f=a.n(h),g=(a(20),a(12)),b=a.n(g),y=function(){function e(t,a,n){Object(c.a)(this,e),this._artyom=t,this._playAudio=a,this._stopAssistant=n,this.playArtyom=this.playArtyom.bind(this),this.stopArtyom=this.stopArtyom.bind(this)}return Object(l.a)(e,[{key:"playArtyom",value:function(){var e=this;this._playAudio(!1,""),this._artyom.initialize({lang:"es-ES",debug:!0,continuous:!0,soundex:!0,listen:!0,mode:"quick"}).then((function(){console.log(e._artyom.getAvailableCommands())})).catch((function(e){console.error("Oops, ha ocurrido un error!",e)}))}},{key:"stopArtyom",value:function(){this._stopAssistant()}},{key:"loadCommands",value:function(){var e=this,t=this._artyom,n=this;return t.addCommands([{indexes:["Hola","buenos d\xedas","Buenas tardes"],action:function(){e._playAudio(a(30))}},{indexes:["feliz","contento","Alegre"],action:function(){e._playAudio(a(64))}},{indexes:["triste"],action:function(){e._playAudio(a(65))}},{indexes:["salud"],action:function(){e._playAudio(a(66))}},{indexes:["empleo"],action:function(){e._playAudio(a(67))}},{indexes:["adios","hasta luego","chao"],action:function(){t.say("Hasta luego, \xa1regresa pronto!",{onEnd:function(){n.stopArtyom()}})}}])}}]),e}(),v=(new b.a,function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(e,a){var i;return Object(c.a)(this,n),(i=t.call(this,e,a)).state={artyomActive:!1,textareaValue:"",artyomIsReading:!1,textState:"Presiona sobre el bot\xf3n iniciar nuestra conversaci\xf3n",begin:!0,isplayingVideo:!1},i}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{style:{position:"absolute"}},i.a.createElement("a-scene",null,i.a.createElement("a-entity",{light:"color: #ffffff; type: ambient; intensity: 2","data-aframe-default-light":"","aframe-injected":"",position:""}),i.a.createElement("a-assets",null,i.a.createElement("img",{id:"Logo-alcaldia",src:a(21)}),i.a.createElement("img",{id:"Micro",src:a(31)}),i.a.createElement("a-asset-item",{id:"cityModel",src:a(32)}),i.a.createElement("video",{id:"videoPanel",src:this.state.videopath})),i.a.createElement("a-entity",{geometry:"primitive: plane; width: 4; height: 4",position:"0 .772 -3",rotation:"-90 0 0",material:"color: #7BC8A4"}),i.a.createElement("a-image",{src:"#Logo-alcaldia",position:"-2.181 1.831 -3.871",rotation:"0 30 0",width:"2.5",height:"1"}),i.a.createElement("a-entity",{"video-controls":"src:#videoPanel"}),i.a.createElement("a-gltf-model",{src:"#cityModel",position:"0.363 0.9 -1.817",scale:"0.01 0.01 0.01",rotation:"0 63.306 0"})))}}]),n}(i.a.Component)),E=new b.a;var x=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(e,a){var i;return Object(c.a)(this,n),(i=t.call(this,e,a)).UserDictation=E.newDictation({continuous:!0,onResult:function(e){console.log(e),""!=e&&(document.getElementById("usuario").value=e)},onStart:function(){console.log("Dictation started by the user")},onEnd:function(){console.log("Se ha desactivado el reconocimiento de voz, por favor escriba su nombre")}}),i.StartAssistant=i.StartAssistant.bind(Object(p.a)(i)),i.StopAssistant=i.StopAssistant.bind(Object(p.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(p.a)(i)),i.handleChangeInput=i.handleChangeInput.bind(Object(p.a)(i)),i.state={User:"",isDictating:!1},i}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.StopAssistant(),console.log(this.state.User),localStorage.setItem("name",document.getElementById("usuario").value),this.props.history.push("/emocion")}},{key:"handleChangeInput",value:function(e){var t=e.target.value;this.setState({User:t}),console.log(this.state.User)}},{key:"StopAssistant",value:function(){this.UserDictation.stop();E.fatality().then((function(){})).catch((function(e){console.error("Oops, ha ocurrido un error!",e)}))}},{key:"StartAssistant",value:function(){this.state.isDictating?(this.UserDictation.stop(),this.setState({isDictating:!1})):(this.UserDictation.start(),this.setState({isDictating:!0}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"container h-100 text-center ",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",zIndex:10}},i.a.createElement("h1",{style:{fontSize:"4vw"},className:"font-weight-bold"},"Hola, te doy la bienvenida al Confesionario Digital, me alegra tu visita"),i.a.createElement("div",{style:{zIndex:10}},i.a.createElement("p",{className:"bg-primary badge "},"\xbfMe ayudas a recordarte?"),i.a.createElement("form",{action:"/instrucciones",onSubmit:this.handleSubmit},i.a.createElement("div",{className:"form-group jd-flex flex-column "},i.a.createElement("label",{htmlFor:"usuario",className:"font-weight-bold bg-primary badge"},"Usuario:"),i.a.createElement("div",{className:"row jd-flex justify-content-center"},i.a.createElement("div",{className:"input-group col-sm-6 text-align:center"},i.a.createElement("input",{type:"text",className:"form-control text-center",id:"usuario",placeholder:"Digita tu nombre o pronuncialo",name:"usuario",onChange:this.handleChangeInput,required:!0}),i.a.createElement("span",{className:"input-group-btn"},i.a.createElement("button",{className:"btn btn-danger",type:"button",onClick:this.StartAssistant},i.a.createElement("img",{src:a(22),height:"20",alt:"USA flag"})))))),i.a.createElement("button",{type:"submit",className:"btn btn-primary mb-5"},"  Guardar y Continuar  "))),i.a.createElement(v,null))}}]),n}(i.a.Component),N=Object(d.f)(x),S=a(17),A=a.n(S),j=new b.a,w=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(e,a){var i;return Object(c.a)(this,n),(i=t.call(this,e,a)).StartAssistant=i.StartAssistant.bind(Object(p.a)(i)),i.StopAssistant=i.StopAssistant.bind(Object(p.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(p.a)(i)),i.handleChangeInput=i.handleChangeInput.bind(Object(p.a)(i)),i.state={Emotion:"",isDictating:!1},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){j.addCommands([{indexes:["agradecimiento","felicidad","tristeza","rabia","confusion","frustracion"],action:function(e){0==e&&(document.getElementById("agradecimiento").checked=!0),1==e&&(document.getElementById("felicidad").checked=!0),2==e&&(document.getElementById("tristeza").checked=!0),3==e&&(document.getElementById("rabia").checked=!0),4==e&&(document.getElementById("confusion").checked=!0),5==e&&(document.getElementById("frustracion").checked=!0)}}])}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.StopAssistant();var t=A()("input[name='optradio']:checked").val();localStorage.setItem("emotion",t),console.log(t),this.props.history.push("/confirmacion")}},{key:"handleChangeInput",value:function(e){var t=e.target.value;this.setState({Emotion:t}),console.log(this.state.Emotion)}},{key:"StopAssistant",value:function(){var e=this;j.fatality().then((function(){e.setState({isDictating:!1})})).catch((function(e){console.error("Oops, ha ocurrido un error!",e)}))}},{key:"StartAssistant",value:function(){if(this.state.isDictating)this.StopAssistant();else{var e=this;j.initialize({lang:"es-ES",debug:!0,continuous:!0,soundex:!0,listen:!0,mode:"quick"}).then((function(){e.setState({isDictating:!0})})).catch((function(e){console.error("Oops, ha ocurrido un error!",e)}))}}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"container vh-100",style:{display:"flex",flexDirection:"column",justifyContent:"space-around",zIndex:10}},i.a.createElement("h1",{style:{fontSize:"4vw"},className:"font-weight-bold"}," Me gustar\xeda saber que sentimiento te trae a hablar conmigo el d\xeda de hoy"),i.a.createElement("form",{action:"/instrucciones",onSubmit:this.handleSubmit,style:{zIndex:100}},i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"custom-control custom-radio image-checkbox col-md-4"},i.a.createElement("input",{type:"radio",className:"custom-control-input",id:"agradecimiento",value:"agradecimiento",name:"optradio",required:!0}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"agradecimiento",style:{width:"5em"}},i.a.createElement("img",{src:a(70),alt:"#",className:"img-fluid"}),i.a.createElement("p",{className:"font-weight-bold font-italic badge bg-success text-white"},"Agradecimiento")))),i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"custom-control custom-radio image-checkbox col-md-4"},i.a.createElement("input",{type:"radio",className:"custom-control-input",id:"felicidad",value:"felicidad",name:"optradio",required:!0}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"felicidad",style:{width:"5em"}},i.a.createElement("img",{src:a(71),alt:"#",className:"img-fluid"}),i.a.createElement("p",{className:"font-weight-bold font-italic badge bg-success text-white"},"Felicidad"))))),i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"custom-control custom-radio image-checkbox col-md-4"},i.a.createElement("input",{type:"radio",className:"custom-control-input",id:"tristeza",value:"tristeza",name:"optradio",required:!0}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"tristeza",style:{width:"5em"}},i.a.createElement("img",{src:a(72),alt:"#",className:"img-fluid"}),i.a.createElement("p",{className:"font-weight-bold font-italic badge bg-success text-white"},"Tristeza")))),i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"custom-control custom-radio image-checkbox col-md-4"},i.a.createElement("input",{type:"radio",className:"custom-control-input",id:"rabia",value:"rabia",name:"optradio",required:!0}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"rabia",style:{width:"5em"}},i.a.createElement("img",{src:a(73),alt:"#",className:"img-fluid"}),i.a.createElement("p",{className:"font-weight-bold font-italic badge bg-success text-white"},"Rabia"))))),i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"custom-control custom-radio image-checkbox col-md-4"},i.a.createElement("input",{type:"radio",className:"custom-control-input",id:"confusion",value:"confusi\xf3n",name:"optradio",required:!0}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"confusion",style:{width:"5em"}},i.a.createElement("img",{src:a(74),alt:"#",className:"img-fluid"}),i.a.createElement("p",{className:"font-weight-bold font-italic badge bg-success text-white"},"Confusi\xf3n")))),i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"custom-control custom-radio image-checkbox col-md-4"},i.a.createElement("input",{type:"radio",className:"custom-control-input",id:"frustracion",value:"frustraci\xf3n",name:"optradio",required:!0}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"frustracion",style:{width:"5em"}},i.a.createElement("img",{src:a(75),alt:"#",className:"img-fluid"}),i.a.createElement("p",{className:"font-weight-bold font-italic badge bg-success text-white"},"Frustraci\xf3n"))))),i.a.createElement("div",{style:{zIndex:10}},i.a.createElement("div",{className:"form-group jd-flex flex-column "},i.a.createElement("div",{className:"row jd-flex justify-content-center"},i.a.createElement("div",{className:"input-group col-sm-6 text-align:center flex-column"},i.a.createElement("span",{className:"input-group-btn"},i.a.createElement("label",{htmlFor:"usuario",className:"font-weight-bold bg-primary badge"},"Puedes presionar sobre el bot\xf3n rojo y pronunciar la emoci\xf3n")),i.a.createElement("span",{className:"input-group-btn"},i.a.createElement("button",{className:"btn btn-danger",type:"button",onClick:this.StartAssistant},i.a.createElement("img",{src:a(22),height:"20",alt:"USA flag"}))),i.a.createElement("button",{type:"submit",className:"btn btn-primary mt-3"},"  Guardar y Continuar  "))))))),i.a.createElement(v,null))}}]),n}(i.a.Component),k=Object(d.f)(w),O=(new b.a,function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(e,n){var i;return Object(c.a)(this,a),(i=t.call(this,e,n)).texto="hola",i.Continue=i.Continue.bind(Object(p.a)(i)),i.state={User:"",isDictating:!1},i}return Object(l.a)(a,[{key:"componentWillMount",value:function(){"tristeza"!=localStorage.getItem("emotion")&&"rabia"!=localStorage.getItem("emotion")&&"confusi\xf3n"!=localStorage.getItem("emotion")&&"frustraci\xf3n"!=localStorage.getItem("emotion")||(this.texto=", lamento que sientas "+localStorage.getItem("emotion")),"agradecimiento"!=localStorage.getItem("emotion")&&"felicidad"!=localStorage.getItem("emotion")||(this.texto=", me alegra que sientas "+localStorage.getItem("emotion"))}},{key:"Continue",value:function(e){e?this.props.history.push("/seleccion"):this.props.history.push("/hola")}},{key:"render",value:function(){return i.a.createElement("div",{className:"container h-100 text-center ",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",zIndex:10}},i.a.createElement("h1",{style:{fontSize:"4vw"},className:"font-weight-bold"},localStorage.getItem("name")+this.texto,i.a.createElement("small",{id:"ayudacedula",className:"form-text text-muted"},"Espero que despu\xe9s de nuestra conversaci\xf3n te sientas a\xfan mejor.")),i.a.createElement("div",{style:{zIndex:10}},i.a.createElement("p",{className:"bg-primary badge "},"\xbfQuieres contarme sobre qu\xe9 tema espec\xedfico quieres hablar?"),i.a.createElement("form",null,i.a.createElement("div",{className:"form-group jd-flex flex-column "},i.a.createElement("div",{className:"row jd-flex justify-content-center"},i.a.createElement(u.b,{className:"btn btn-success mb-5 col-sm-3",to:{pathname:"/seleccion"},style:{textDecoration:"none"}},"Si"),i.a.createElement("div",{className:"col-sm-1"}),i.a.createElement(u.b,{className:"btn btn-danger mb-5 col-sm-3",to:{pathname:"/"},style:{textDecoration:"none"}},"No, me quiero ir"))))),i.a.createElement(v,null))}}]),a}(i.a.Component)),I=Object(d.f)(O),C=new b.a,D=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(e,i){var o;return Object(c.a)(this,n),(o=t.call(this,e,i)).startAssistant=o.startAssistant.bind(Object(p.a)(o)),o.stopAssistant=o.stopAssistant.bind(Object(p.a)(o)),o.speakText=o.speakText.bind(Object(p.a)(o)),o.handleTextareaChange=o.handleTextareaChange.bind(Object(p.a)(o)),o.buttonStart=o.buttonStart.bind(Object(p.a)(o)),o.playAudio=o.playAudio.bind(Object(p.a)(o)),o.pauseAssistant=o.pauseAssistant.bind(Object(p.a)(o)),o.playAssistant=o.playAssistant.bind(Object(p.a)(o)),o.state={artyomActive:!1,textareaValue:"",artyomIsReading:!1,textState:"Presiona sobre el bot\xf3n iniciar nuestra conversaci\xf3n",begin:!0,isplayingVideo:!1,videopath:a(30)},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;new y(C,this.playAudio,this.stopAssistant).loadCommands(),document.getElementById("videoPanel").addEventListener("ended",(function(t){console.log("Video finalizadoooo"),e.playAssistant()})),document.getElementById("videoPanel").addEventListener("playing",(function(t){console.log("Video iniciado"),e.pauseAssistant()}))}},{key:"buttonStart",value:function(){this.state.artyomActive?this.stopAssistant():(this.startAssistant(),document.getElementById("videoPanel").play())}},{key:"startAssistant",value:function(){this.setState({artyomActive:!0,textState:"...",begin:!1,isplayingVideo:!0})}},{key:"stopAssistant",value:function(){var e=this;C.fatality().then((function(){console.log("Jarvis has been succesfully stopped"),e.setState({artyomActive:!1,textState:"Presiona sobre el bot\xf3n para iniciar nuestra conversaci\xf3n",begin:!0})})).catch((function(t){console.error("Oops, ha ocurrido un error!",t),e.setState({artyomActive:!1})}))}},{key:"pauseAssistant",value:function(){C.fatality().then((function(){})).catch((function(e){console.error("Oops, ha ocurrido un error!",e)}))}},{key:"playAssistant",value:function(){var e=this;C.initialize({lang:"es-ES",debug:!0,continuous:!0,soundex:!0,listen:!0,mode:"quick"}).then((function(){e.setState({isplayingVideo:!1,textState:"Te escucho"})})).catch((function(e){console.error("Oops, ha ocurrido un error!",e)}))}},{key:"speakText",value:function(){var e=this;e.setState({artyomIsReading:!0}),C.say(e.state.textareaValue,{onEnd:function(){e.setState({artyomIsReading:!1})}})}},{key:"playAudio",value:function(e){this.setState({artyomActive:!0,isplayingVideo:!0,videopath:e,textState:"...",begin:!1}),document.getElementById("videoPanel").play()}},{key:"handleTextareaChange",value:function(e){this.setState({textareaValue:e.target.value})}},{key:"render",value:function(){var e,t=this;return this.state.artyomActive?this.state.isplayingVideo?(e=i.a.createElement("div",{className:"containerAnimated"},i.a.createElement(f.a,{url:this.state.videopath,controls:!0,playing:!0,onStart:function(){return t.playAssistant()},onEnded:function(){return t.playAssistant()}})),e=i.a.createElement("a-video",{src:"#videoPanel",width:"3.2",height:"1.8",position:"1.252 2.402 -3.1",rotation:"0 -21 180"})):(e=i.a.createElement("div",{className:"containerAnimated"},i.a.createElement("div",{className:"circle",style:{animationDelay:"0s"}}),i.a.createElement("div",{className:"circle",style:{animationDelay:"1s"}}),i.a.createElement("div",{className:"circle",style:{animationDelay:"2s"}}),i.a.createElement("div",{className:"circle",style:{animationDelay:"3s"}})),e=i.a.createElement("a-image",{src:"#Micro",position:"1.252 2.5 -3.1",rotation:"0 -6.761 0",width:"1",height:"1"})):(e=i.a.createElement("div",{className:"containerAnimated"},i.a.createElement("img",{src:a(21),style:{width:"100%"}})),e=""),i.a.createElement("div",null,i.a.createElement("a-scene",null,i.a.createElement("a-entity",{light:"color: #ffffff; type: ambient; intensity: 2","data-aframe-default-light":"","aframe-injected":"",position:""}),i.a.createElement("a-assets",null,i.a.createElement("img",{id:"Logo-alcaldia",src:a(21)}),i.a.createElement("img",{id:"Micro",src:a(31)}),i.a.createElement("a-asset-item",{id:"cityModel",src:a(32)}),i.a.createElement("video",{id:"videoPanel",src:this.state.videopath})),i.a.createElement("a-entity",{geometry:"primitive: plane; width: 4; height: 4",position:"0 .772 -3",rotation:"-90 0 0",material:"color: #7BC8A4"}),i.a.createElement("a-image",{src:"#Logo-alcaldia",position:"-2.181 1.831 -3.871",rotation:"0 30 0",width:"2.5",height:"1"}),e,i.a.createElement("a-entity",{"video-controls":"src:#videoPanel"}),i.a.createElement("a-gltf-model",{src:"#cityModel",position:"0.363 0.9 -1.817",scale:"0.01 0.01 0.01",rotation:"0 63.306 0"})),i.a.createElement("div",{className:"containerHTML"},i.a.createElement("h1",{style:{padding:"0 50px"}},"Bienvenido al Confesionario Virtual"),i.a.createElement("div",{style:{width:"100%",zIndex:10}},i.a.createElement("input",{style:{backgroundColor:this.state.artyomActive?"#f44336":"#008CBA",zIndex:1},type:"button",className:"button",value:this.state.artyomActive?"Terminar":"Inicia a hablar",disabled:!1,onClick:this.buttonStart}),i.a.createElement("p",null,this.state.textState))))}}]),n}(i.a.Component),z=new b.a,q=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(e,a){var i;return Object(c.a)(this,n),(i=t.call(this,e,a)).StartAssistant=i.StartAssistant.bind(Object(p.a)(i)),i.StopAssistant=i.StopAssistant.bind(Object(p.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(p.a)(i)),i.handleChangeInput=i.handleChangeInput.bind(Object(p.a)(i)),i.state={Emotion:"",isDictating:!1},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){z.addCommands([{indexes:["salud","empleo"],action:function(e){0==e&&(document.getElementById("salud").checked=!0),1==e&&(document.getElementById("empleo").checked=!0)}}])}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.StopAssistant();var t=A()("input[name='optradio']:checked").val();localStorage.setItem("theme",t),console.log(t),this.props.history.push("/conversacion")}},{key:"handleChangeInput",value:function(e){var t=e.target.value;this.setState({Emotion:t}),console.log(this.state.Emotion)}},{key:"StopAssistant",value:function(){var e=this;z.fatality().then((function(){e.setState({isDictating:!1})})).catch((function(e){console.error("Oops, ha ocurrido un error!",e)}))}},{key:"StartAssistant",value:function(){if(this.state.isDictating)this.StopAssistant();else{var e=this;z.initialize({lang:"es-ES",debug:!0,continuous:!0,soundex:!0,listen:!0,mode:"quick"}).then((function(){e.setState({isDictating:!0})})).catch((function(e){console.error("Oops, ha ocurrido un error!",e)}))}}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"container vh-100",style:{display:"flex",flexDirection:"column",justifyContent:"space-around",zIndex:10}},i.a.createElement("h1",{style:{fontSize:"4vw"},className:"font-weight-bold"}," \xbfDe cu\xe1l de estos temas te gustar\xeda que convers\xe1ramos?"),i.a.createElement("form",{action:"/instrucciones",onSubmit:this.handleSubmit,style:{zIndex:100}},i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"custom-control custom-radio image-checkbox col-md-4"},i.a.createElement("input",{type:"radio",className:"custom-control-input",id:"salud",value:"salud",name:"optradio",required:!0}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"salud",style:{width:"5em"}},i.a.createElement("img",{src:a(76),alt:"#",className:"img-fluid"}),i.a.createElement("p",{className:"font-weight-bold font-italic badge bg-success text-white"},"Salud")))),i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"custom-control custom-radio image-checkbox col-md-4"},i.a.createElement("input",{type:"radio",className:"custom-control-input",id:"empleo",value:"empleo",name:"optradio",required:!0}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"empleo",style:{width:"5em"}},i.a.createElement("img",{src:a(77),alt:"#",className:"img-fluid"}),i.a.createElement("p",{className:"font-weight-bold font-italic badge bg-success text-white"},"Empleo"))))),i.a.createElement("div",{style:{zIndex:10}},i.a.createElement("div",{className:"form-group jd-flex flex-column "},i.a.createElement("div",{className:"row jd-flex justify-content-center"},i.a.createElement("div",{className:"input-group col-sm-6 text-align:center flex-column"},i.a.createElement("span",{className:"input-group-btn"},i.a.createElement("label",{htmlFor:"usuario",className:"font-weight-bold bg-primary badge"},"Puedes presionar sobre el bot\xf3n rojo y pronunciar el tema del que quieres hablar")),i.a.createElement("span",{className:"input-group-btn"},i.a.createElement("button",{className:"btn btn-danger",type:"button",onClick:this.StartAssistant},i.a.createElement("img",{src:a(22),height:"20",alt:"USA flag"}))),i.a.createElement("button",{type:"submit",className:"btn btn-primary mt-3"},"  Guardar y Continuar  "))))))),i.a.createElement(v,null))}}]),n}(i.a.Component),B=Object(d.f)(q),M=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(e,n){var i;return Object(c.a)(this,a),(i=t.call(this,e,n)).state={},i}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App disable-select"},i.a.createElement(u.a,null,i.a.createElement(d.c,null,i.a.createElement(d.a,{exact:!0,path:"/",component:N}),i.a.createElement(d.a,{exact:!0,path:"/emocion",component:k}),i.a.createElement(d.a,{exact:!0,path:"/confirmacion",component:I}),i.a.createElement(d.a,{exact:!0,path:"/seleccion",component:B}),i.a.createElement(d.a,{exact:!0,path:"/conversacion",component:D}))))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.68e5801d.chunk.js.map