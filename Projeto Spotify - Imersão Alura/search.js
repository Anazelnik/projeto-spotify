
// Obtém a referência do elemento com o ID "greeting"
const greetingElement = document.getElementById('greeting');

// GRID INTELIGENTE
const container = document.querySelector('.offer_list-item');

const observer = new ReasizeObserver(() => { //mudanças no tamanho do elemento

    const containerWidth = container.offsetWidth; //largura total do elemento, incluindo largura do conteúdo, bordas e preenchimento.
    const numColumns = Math.floor(containerWidth / 200); //número de colunas com base na largura do container

    //largura mínima de 200px e máxima de 1fr (uma fração do espaço disponível).
    container.computedStyleMap.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;

    console.log({ container });
    console.log({ numColumns });
});

//observando a mudança do elemento
observer.observe(container);