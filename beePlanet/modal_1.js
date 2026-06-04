const modal1 = document.getElementById("modal1");

const contentM1 = modal1.firstElementChild; 
const loads = contentM1.querySelector("#loads"); 

const nameBlock = ["X", "Y", "Z"];

const blocksData = nameBlock.map(name => ({
    name: name,
    load: Array.from({ length: 24 }, (_, i) => ({ nr: i + 1 }))
}));

loads.innerHTML = '';

nameBlock.forEach(name => {
    const blockData = blocksData.find(b => b.name === name);

    if (blockData) {
        let blockHTML = `
            <div id="${name}_block" class="block-container">
                <h3 class="block-title">${name}</h3>
                <div class="items-grid">`;

        blockData.load.forEach(item => {
            if (item.nr % 2 === 0) {
                blockHTML += `<div class="load-item"><input type="checkbox" id="${name}_${item.nr}" name="${name}_${item.nr}" value="${name}_${item.nr}" checked />
    <label for="${name}_${item.nr}">${name}${item.nr}</label></div>`
            } else {
                blockHTML += `<div class="load-item"><input type="checkbox" id="${name}_${item.nr}" name="${name}_${item.nr}" value="${name}_${item.nr}" />
    <label for="${name}_${item.nr}">${name}${item.nr}</label></div>`
            }
        });

        blockHTML += `</div></div>`;
        loads.insertAdjacentHTML('beforeend', blockHTML);
    }
});

