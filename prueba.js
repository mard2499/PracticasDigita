function agregarHttp(url) {
    return "http://"+url;
}

function procesar(url){
    let z=[]
    for (let a=0; a<url.length; a++ ){
        let d= agregarHttp(url[a]);
        z[a]=d;
    }
    return z;
}

console.log(procesar(["www.google.com","www.yahoo.com"]))