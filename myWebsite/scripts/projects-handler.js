var projectsDiv=document.getElementById("projects");
    for(let i=0 ; i < projects.length;i++){
    var currentproj=projects[i];

 // div   
    var projectdiv = document.createElement("div");
    var divstyle= document.createAttribute("style");
    divstyle.value="display: inline-block; width:300px; margin:10px;";
    projectdiv.setAttributeNode(divstyle);
 // h3 Title 
    var title = document.createElement("h3");
   var titleNode = document.createTextNode(currentproj.title);
   var titlestyle= document.createAttribute("style");
    divstyle.value="color: rgb(132, 113, 139); display: inline-block;";
   title.appendChild(titleNode);
   title.setAttributeNode(titlestyle);


 //img  image
 var image = document.createElement("img");
 var source = document.createAttribute("src");
 source.value = "./images/"+ currentproj.img;
 image.setAttributeNode(source);
 var imgstyle= document.createAttribute("style");
 imgstyle.value ="width: 180px; height: 100px; ";
 image.setAttributeNode(imgstyle);

 // p  description
 var p = document.createElement("p");
 var pNode = document.createTextNode(currentproj.description);
 p.appendChild(pNode);

//add to div 
projectdiv.appendChild(title);
projectdiv.appendChild(image);
projectdiv.appendChild(p);
//add to projectsDiv
projectsDiv.appendChild(projectdiv);




}