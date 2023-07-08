"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8956],{8956:(m,s,o)=>{o.r(s),o.d(s,{StartPageModule:()=>Z});var c=o(6814),l=o(95),e=o(5548),i=o(4670),t=o(6689),g=o(1555);const u=[{path:"",component:(()=>{class n{constructor(a,d){this.router=a,this.authService=d,this.userName={}}ngOnInit(){this.authService.getUserDetails().subscribe(a=>{console.log(a),a.ok?(this.userName=a.response,console.log(this.userName)):console.error(a.message)},a=>{console.log(a)})}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(i.F0),t.Y36(g.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-start"]],decls:51,vars:1,consts:[["size","12","size-md","4"],["routerLink","./agenda",2,"cursor","pointer"],["routerLink","./patients",2,"cursor","pointer"],["routerLink","./reminders",2,"cursor","pointer"],["routerLink","./scanner",2,"cursor","pointer"]],template:function(a,d){1&a&&(t.TgZ(0,"ion-toolbar")(1,"ion-card-title"),t._uU(2),t.qZA()(),t.TgZ(3,"ion-content")(4,"ion-grid")(5,"ion-row")(6,"ion-col",0)(7,"ion-card")(8,"ion-card-header")(9,"ion-card-title"),t._uU(10,"Citas"),t.qZA()(),t.TgZ(11,"ion-card-content")(12,"a",1),t._uU(13," Agendar Citas "),t.qZA()(),t.TgZ(14,"ion-card-content")(15,"a",1),t._uU(16," Ver Citas "),t.qZA()(),t.TgZ(17,"ion-card-content")(18,"a",1),t._uU(19," Editar Citas "),t.qZA()(),t.TgZ(20,"ion-card-content")(21,"a",1),t._uU(22," Eliminar Citas "),t.qZA()(),t.TgZ(23,"ion-card-content")(24,"a",1),t._uU(25," Buscar Citas "),t.qZA()()()(),t.TgZ(26,"ion-col",0)(27,"ion-card")(28,"ion-card-header")(29,"ion-card-title"),t._uU(30,"Pacientes"),t.qZA()(),t.TgZ(31,"ion-card-content")(32,"a",2),t._uU(33," Content for Pacientes Card "),t.qZA()()()(),t.TgZ(34,"ion-col",0)(35,"ion-card")(36,"ion-card-header")(37,"ion-card-title"),t._uU(38,"Recordatorios"),t.qZA()(),t.TgZ(39,"ion-card-content")(40,"a",3),t._uU(41," Content for Recordatorios Card "),t.qZA()()()()(),t.TgZ(42,"ion-row")(43,"ion-col",0)(44,"ion-card")(45,"ion-card-header")(46,"ion-card-title"),t._uU(47,"QR-Scanner"),t.qZA()(),t.TgZ(48,"ion-card-content")(49,"a",4),t._uU(50," Content for QR-Scanner Card "),t.qZA()()()()()()()),2&a&&(t.xp6(2),t.hij(" \xa1Bienvenido, ",d.userName,"! "))},dependencies:[e.PM,e.FN,e.Zi,e.Dq,e.wI,e.W2,e.jY,e.Nd,e.sr,e.Fo,i.rH]}),n})()},{path:"agenda",loadChildren:()=>o.e(7432).then(o.bind(o,7432)).then(n=>n.AgendaPageModule)},{path:"patients",loadChildren:()=>o.e(792).then(o.bind(o,792)).then(n=>n.PatientsPageModule)},{path:"reminders",loadChildren:()=>o.e(1153).then(o.bind(o,1153)).then(n=>n.RemindersPageModule)},{path:"scanner",loadChildren:()=>o.e(5227).then(o.bind(o,5227)).then(n=>n.ScannerPageModule)},{path:"generar-qr",loadChildren:()=>Promise.all([o.e(8251),o.e(4895)]).then(o.bind(o,4895)).then(n=>n.GenerarQRPageModule)}];let h=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[i.Bz.forChild(u),i.Bz]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,l.u5,e.Pc,h]}),n})()}}]);