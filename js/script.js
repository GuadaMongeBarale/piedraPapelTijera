const where = document.querySelector('#container');

function startGame(){

    const html = `<figure>
    <img src="./image/hpensando.png" alt="homero pensando">
    </figure>
    <button class="title"> ELIGE </button>
    <div>
        <button class="ppt" type="submit" onclick="play1()" ><img src="./image/piedra.png" alt="piedra"/></button>
        <button class="ppt" type="submit" onclick="play2()" ><img src="./image/papel.png" alt="papel"/></button>
        <button class="ppt" type="submit" onclick="play3()" ><img src="./image/tijeras.png" alt="tijeras"/></button>
    </div>
    `;

    where.innerHTML = html;

}

function play1(){
    const homer = Math.ceil(Math.random() *3);
    if(homer === 1){
        const html = `
        <figure>
        <img src="./image/hempate.png" alt="homero">
        </figure>
        <button class="title"> EMPATE </button>
        <article>
            <p class="result">Ambos eligieron Piedra </p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    }else if (homer === 2){
        const html = `
        <figure>
        <img src="./image/hperdiste.png" alt="homero">
        </figure>
        <button class="title"> PERDISTE </button>
        <article>
            <p class="result">Te envolvió el Papel de Homero</p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    } else {
        const html = `
        <figure>
        <img src="./image/hganaste.png" alt="homero">
        </figure>
        <button class="title"> GANASTE </button>
        <article>
            <p class="result">Rompiste las Tijeras de Homero</p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    }
}

function play2(){
    const homer = Math.ceil(Math.random() *3);
    if(homer === 2){
        const html = `
        <figure>
        <img src="./image/hempate.png" alt="homero">
        </figure>
        <button class="title"> EMPATE </button>
        <article>
            <p class="result">Ambos eligieron Papel </p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    }else if (homer === 3){
        const html = `
        <figure>
        <img src="./image/hperdiste.png" alt="homero">
        </figure>
        <button class="title"> PERDISTE </button>
        <article>
            <p class="result">Te cortaron las Tijeras de Homero</p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    } else {
        const html = `
        <figure>
        <img src="./image/hganaste.png" alt="homero">
        </figure>
        <button class="title"> GANASTE </button>
        <article>
            <p class="result">Envolviste la Piedra de Homero</p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    }
}

function play3(){
    const homer = Math.ceil(Math.random() *3);
    if(homer === 3){
        const html = `
        <figure>
        <img src="./image/hempate.png" alt="homero">
        </figure>
        <button class="title"> EMPATE </button>
        <article>
            <p class="result">Ambos eligieron Tijeras </p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    }else if (homer === 1){
        const html = `
        <figure>
        <img src="./image/hperdiste.png" alt="homero">
        </figure>
        <button class="title"> PERDISTE </button>
        <article>
            <p class="result">La Piedra de Homero rompió tus Tijeras</p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    } else {
        const html = `
        <figure>
        <img src="./image/hganaste.png" alt="homero">
        </figure>
        <button class="title"> GANASTE </button>
        <article>
            <p class="result">Cortaste el Papel de Homero</p>
        </article>
        <button class="click" type="submit" onclick="startGame()">JUGAR+</button>`;

        where.innerHTML = html;
    }
}