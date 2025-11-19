function URLsite_1() {
let url = document.getElementById('urlsite').value.trim();


    if (!url.startsWith('http://')) {
        url = 'http://' + url;}


let nomsite = url;
if (url.includes('www.')) {
nomsite = url.split('www.')[1];
if (nomsite.includes('/')) {
nomsite = nomsite.split('/')[0];
}
}


document.getElementById('resultat').innerHTML =
`<a href="${url}" target="_blank">${nomsite}</a>`;
}
