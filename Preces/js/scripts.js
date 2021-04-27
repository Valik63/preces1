function add() {

    var name = document.getElementById('nosaukums').value;
    var value = document.getElementById('cena').value;

    var node = document.createElement("LI");
    var textnode = document.createTextNode("Prece ar nosaukumu " + name + " un cenu " + value);

    node.appendChild(textnode);
    document.getElementById("Preču lapa").appendChild(node);
}