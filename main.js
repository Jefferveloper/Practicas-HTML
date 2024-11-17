function contacto(){
  debugger;
  let nom="";
  let eda=0;
  let mensaje=""
  let obs = ""
  nom= document.getElementById("nombre").value
  obs= document.getElementById("obs")
  console.log(obs)
  eda= document.getElementById("edad").value
  eda = parseInt(eda)
  mensaje=`${nom} tienes ${eda} años y tu mensaje ha sido enviado`
  obs.innerHTML=mensaje
}
function tablas(){
  let resp="",tab="",ini="",fin="",r=0,msg=""
  tab = document.getElementById("tabla").value
  ini = document.getElementById("inicio").value
  fin = document.getElementById("final").value
  resp= document.getElementById("obs")
  tab=parseInt(tab)
  ini=parseInt(ini)
  fin=parseInt(fin)
  while (ini <= fin){
    r = ini*tab

    msg = msg + `${ini}*${tab}=${r}`+"\n"
    ini=ini+1
  }
  resp.innerHTML=msg
}
