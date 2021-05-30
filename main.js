(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{q:()=>l,o:()=>i});const t=()=>{let e=document.createElement("div");e.setAttribute("id","buttonProjectContainer"),leftBar.appendChild(e);let t=document.createElement("button");t.setAttribute("id","addProjectButton"),t.innerHTML="+",e.appendChild(t)},n=()=>{if(null==document.getElementById("buttonTaskContainer")){let e=document.createElement("div");e.setAttribute("id","buttonTaskContainer"),projectList.appendChild(e);let t=document.createElement("button");t.setAttribute("id","addTaskButton"),t.innerHTML="+",e.appendChild(t)}},d=()=>{let e=document.getElementsByTagName("h2")[0].textContent,a=document.getElementsByClassName("tasks"),o=document.getElementsByTagName("ul")[0];for(;a[0];)a[0].parentNode.removeChild(a[0]);for(let t=0;t<i.length;t++)if(i[t].project==e){let e=document.createElement("li");e.classList.add("tasks"),o.appendChild(e);let n=document.createElement("Div");n.classList.add("row1Div"),e.appendChild(n);let a=document.createElement("p");a.classList.add("listLeft"),a.innerHTML=i[t].title,n.appendChild(a);let l=document.createElement("p");l.classList.add("deleteButtonTasks"),l.innerHTML="Delete Task",n.appendChild(l);let r=document.createElement("Div");r.classList.add("row2Div"),e.appendChild(r);let c=document.createElement("p");c.classList.add("listLeftPRow2"),c.innerHTML=i[t].priority,r.appendChild(c);let s=document.createElement("p");s.classList.add("listRightPRow2"),s.innerHTML=i[t].dueDate,r.appendChild(s);let m=document.createElement("Div");m.classList.add("row3Div"),e.appendChild(m);let u=document.createElement("p");u.classList.add("listLeftPRow3"),u.innerHTML=i[t].description,m.appendChild(u),l.addEventListener("click",(()=>{i.splice(t,1),d()}))}let l=document.getElementById("addProjectButton");n(),0==l&&t()},a=()=>{let e=document.getElementById("buttonTaskContainer"),t=document.getElementById("addTaskButton"),o="";return t.addEventListener("click",(()=>{null!=document.getElementById("buttonTaskContainer")&&e.parentNode.removeChild(e),(()=>{const e=document.getElementById("projectList");if(null==document.getElementById("taskInputs")){const t=document.createElement("div");t.setAttribute("id","taskInputs"),e.appendChild(t);const n=document.getElementById("taskInputs"),d=document.createElement("div");d.classList.add("taskInputDiv"),n.appendChild(d);const a=document.createElement("input");a.classList.add("taskInput"),a.setAttribute("id","projectTitle"),a.setAttribute("type","text"),a.setAttribute("placeholder","Project Title"),d.appendChild(a);const o=document.createElement("div");o.classList.add("taskInputDiv"),n.appendChild(o);const l=document.createElement("input");l.classList.add("taskInput"),l.setAttribute("id","dueDate"),l.setAttribute("type","date"),l.setAttribute("placeholder","Due Date"),o.appendChild(l);const i=document.createElement("div");i.classList.add("taskInputDiv"),n.appendChild(i);const r=document.createElement("select");r.setAttribute("id","projectPriority"),i.appendChild(r);const c=document.createElement("option");c.setAttribute("value","High Priority"),c.innerHTML="High Priority",r.appendChild(c);const s=document.createElement("option");s.setAttribute("value","Medium Priority"),s.innerHTML="Medium Priority",r.appendChild(s);const m=document.createElement("option");m.setAttribute("value","Low Priority"),m.innerHTML="Low Priority",r.appendChild(m);const u=document.createElement("div");u.classList.add("taskInputDiv"),n.appendChild(u);const p=document.createElement("input");p.classList.add("taskInput"),p.setAttribute("id","projectDescription"),p.setAttribute("type","text"),p.setAttribute("placeholder","Project Description"),u.appendChild(p);const E=document.createElement("div");E.setAttribute("id","buttonDivTask"),n.appendChild(E);const h=document.createElement("button");h.setAttribute("id","acceptButtonTask"),h.innerHTML="Acept",E.appendChild(h);const C=document.createElement("button");C.setAttribute("id","cancelButtonTask"),C.innerHTML="Cancel",E.appendChild(C)}})(),document.getElementById("acceptButtonTask").addEventListener("click",(()=>{let e=document.createElement("p");e.classList.add("warningMessage"),e.setAttribute("id","warningMessage1"),document.getElementsByClassName("taskInputDiv")[0].appendChild(e);let t=document.createElement("p");t.classList.add("warningMessage"),t.setAttribute("id","warningMessage2"),document.getElementsByClassName("taskInputDiv")[1].appendChild(t);let n=document.createElement("p");n.classList.add("warningMessage"),n.setAttribute("id","warningMessage3"),document.getElementsByClassName("taskInputDiv")[2].appendChild(n);let l=document.getElementById("warningMessage1"),r=document.getElementById("warningMessage2"),c=document.getElementById("warningMessage3");if(""!=document.getElementById("projectTitle").value){if(""==document.getElementById("dueDate").value)return"You cant leave the title empty"==l.textContent&&l.parentNode.removeChild(l),void(r.innerHTML="You cant leave the Date empty");if(""==document.getElementById("projectDescription").value)return"You cant leave the title empty"==l.textContent&&l.parentNode.removeChild(l),(r.textContent="You cant leave the Date empty")&&r.parentNode.removeChild(r),void(c.innerHTML="You cant leave the Description empty");{(()=>{let e=document.getElementById("projectTitle").value,t=document.getElementById("dueDate").value,n=document.getElementById("projectPriority").value,d=document.getElementById("projectDescription").value,a=document.getElementsByTagName("h2")[0].textContent;o=((e,t,n,d,a)=>({title:e,description:d,dueDate:t,priority:n,project:a}))(e,n,t,d,a),i.push(o),localStorage.setItem("taskStorage",JSON.stringify(i))})(),d();let e=document.getElementById("taskInputs"),t=document.getElementById("buttonDivTask");e.parentNode.removeChild(e),t.parentNode.removeChild(t),a()}}else l.innerHTML="You cant leave the title empty"}));let t=document.getElementById("cancelButtonTask"),l=document.getElementById("taskInputs"),r=document.getElementById("buttonDivTask");t.addEventListener("click",(()=>{null!=document.getElementById("taskInputs")&&l.parentNode.removeChild(l),r.parentNode.removeChild(r),n(),a()}))})),i},o=()=>{let e=document.getElementById("buttonProjectContainer");document.getElementById("addProjectButton").addEventListener("click",(()=>{e&&e.parentNode.removeChild(e),(()=>{const e=document.getElementById("byNameDiv"),t=document.createElement("div");t.setAttribute("id","projectInputDiv"),e.appendChild(t);const n=document.createElement("input");n.setAttribute("id","projectInput"),t.appendChild(n);const d=document.createElement("div");d.setAttribute("id","buttonDivProject"),e.appendChild(d);const a=document.createElement("button");a.setAttribute("id","acceptButtonProject"),a.innerHTML="Acept",d.appendChild(a);const o=document.createElement("button");o.setAttribute("id","cancelButtonProject"),o.innerHTML="Cancel",d.appendChild(o)})();let n=document.getElementById("acceptButtonProject"),r=document.getElementById("projectInput"),c=document.getElementById("byNameDiv"),s=document.getElementById("projectInputDiv"),m=document.createElement("p");m.classList.add("warningMessage"),s.appendChild(m),n.addEventListener("click",(()=>{if(""!=r.value)if(-1==l.findIndex((e=>e==r.value))){s.parentNode.removeChild(s),r.parentNode.removeChild(r),p.parentNode.removeChild(p),m.parentNode.removeChild(m),l.push(r.value),localStorage.setItem("projects",JSON.stringify(l)),t(),o();let e=document.getElementsByClassName("projectsLeftBar"),n=document.getElementsByClassName("deleteButton"),u=document.getElementsByClassName("clearProjectsLeftBarDiv");for(;e[0];)e[0].parentNode.removeChild(e[0]);for(;n[0];)n[0].parentNode.removeChild(n[0]);for(;u[0];)u[0].parentNode.removeChild(u[0]);l=l.sort((function(e,t){return e<t?-1:t<e?1:0}));let E=()=>{for(let t=0;t<l.length;t++){let o=document.createElement("div");o.classList.add("projectsLeftBarDiv"),c.appendChild(o);let r=document.createElement("p");r.classList.add("projectsLeftBar"),r.innerHTML=l[t],o.appendChild(r);let s=document.createElement("button");s.innerHTML="X",s.classList.add("deleteButton"),c.appendChild(s),s.addEventListener("click",(()=>{for(let e=i.length-1;e>-1;e--)i[e].project==l[t]&&i.splice(e,1);if(l.splice(t,1),e[t].parentNode.removeChild(e[t]),n[t].parentNode.removeChild(n[t]),""!=document.getElementsByTagName("h2")[0].textContent){document.getElementsByTagName("h2")[0].innerHTML="";let e=document.getElementById("buttonTaskContainer");e.parentNode.removeChild(e)}let d=document.getElementsByClassName("clearProjectsLeftBarDiv");for(;e[0];)e[0].parentNode.removeChild(e[0]);for(;n[0];)n[0].parentNode.removeChild(n[0]);for(;d[0];)d[0].parentNode.removeChild(d[0]);let a=document.getElementsByClassName("tasks");for(;a[0];)a[0].parentNode.removeChild(a[0]);E()})),r.addEventListener("click",(()=>{let e=document.getElementsByClassName("tasks");for(;e[0];)e[0].parentNode.removeChild(e[0]);if(document.getElementsByTagName("h2")[0].innerHTML=l[t],d(),a(),null!=document.getElementById("taskInputs")){let e=document.getElementById("taskInputs");e.parentNode.removeChild(e)}}))}};E()}else m.innerHTML="You already have a project with that name";else m.innerHTML="You cant leave this field empty"}));let u=document.getElementById("cancelButtonProject"),p=document.getElementById("buttonDivProject");u.addEventListener("click",(()=>{s.parentNode.removeChild(s),r.parentNode.removeChild(r),p.parentNode.removeChild(p),m.parentNode.removeChild(m),t(),o()}))}))};(()=>{const e=document.getElementById("content"),t=document.createElement("h1");t.innerHTML="To Do List",e.appendChild(t);const n=document.createElement("div");n.setAttribute("id","main"),e.appendChild(n);const d=document.createElement("div");d.setAttribute("id","leftBar"),n.appendChild(d);const a=document.createElement("div");a.setAttribute("id","byNameDiv"),d.appendChild(a);const o=document.createElement("p");o.setAttribute("id","projectByName"),o.innerHTML="Project by Name",a.appendChild(o);const l=document.createElement("div");l.setAttribute("id","projectList"),n.appendChild(l);const i=document.createElement("div");i.setAttribute("id","h2Container"),l.appendChild(i);const r=document.createElement("ul");r.setAttribute("id","projectUL"),l.appendChild(r)})();let l=[];!function e(){if(null!=localStorage.getItem("projects")){l=JSON.parse(localStorage.getItem("projects")),console.log(l);let t=document.getElementsByClassName("projectsLeftBar"),n=document.getElementsByClassName("deleteButton");for(let o=0;o<l.length;o++){let r=document.createElement("div");r.classList.add("projectsLeftBarDiv"),byNameDiv.appendChild(r);let c=document.createElement("p");c.classList.add("projectsLeftBar"),c.innerHTML=l[o],r.appendChild(c);let s=document.createElement("button");s.innerHTML="X",s.classList.add("deleteButton"),byNameDiv.appendChild(s),s.addEventListener("click",(()=>{for(let e=i.length-1;e>-1;e--)i[e].project==l[o]&&i.splice(e,1);if(l.splice(o,1),localStorage.setItem("projects",JSON.stringify(l)),t[o].parentNode.removeChild(t[o]),n[o].parentNode.removeChild(n[o]),""!=document.getElementsByTagName("h2")[0].textContent){document.getElementsByTagName("h2")[0].innerHTML="";let e=document.getElementById("buttonTaskContainer");e.parentNode.removeChild(e)}let d=document.getElementsByClassName("clearProjectsLeftBarDiv");for(;t[0];)t[0].parentNode.removeChild(t[0]);for(;n[0];)n[0].parentNode.removeChild(n[0]);for(;d[0];)d[0].parentNode.removeChild(d[0]);let a=document.getElementsByClassName("tasks");for(;a[0];)a[0].parentNode.removeChild(a[0]);e()})),c.addEventListener("click",(()=>{let e=document.getElementsByClassName("tasks");for(;e[0];)e[0].parentNode.removeChild(e[0]);if(document.getElementsByTagName("h2")[0].innerHTML=l[o],d(),a(),null!=document.getElementById("taskInputs")){let e=document.getElementById("taskInputs");e.parentNode.removeChild(e)}}))}}}();let i=[];null!=localStorage.getItem("taskStorage")&&(i=JSON.parse(localStorage.getItem("taskStorage"))),t(),o();const r=document.getElementById("h2Container"),c=document.createElement("h2");r.appendChild(c),null!=c.value&&(n(),a())})();