//https://www.youtube.com/watch?v=IXDO5pKA9pY


function Sprite(filename,left,top){
    this._node = document.createElement("img");
    this._node.src = filename;
    this._node.style.position = "absolute";
    document.body.appendChild(this._node);
}
