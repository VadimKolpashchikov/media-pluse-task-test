const blocksConsole = document.querySelector('.blocks-console');
const btn = document.querySelector('.btn');

const addRecordToConsole = (text) => {
  let record  = document.createElement('p');
  record.innerHTML = text;
  blocksConsole.appendChild(record);
  blocksConsole.scrollTop = blocksConsole.scrollHeight;
}

btn.addEventListener('click', () => {
  const blocksWrapper = document.querySelector('.blocks-wrapper');
  const blocksWrapperClone = blocksWrapper.cloneNode(true);
  const blocks = blocksWrapper.querySelectorAll('.block-wrapper');
  btn.innerHTML = "in progress";
  btn.setAttribute('disabled', 'disabled');
  addRecordToConsole("--- PROGRESS START ---");

  blocks.forEach((block, idx) => {
    setTimeout(() => {
      addRecordToConsole(`Cell ${idx + 1} Animation START`);
      block.classList.add('block-wrapper_rotate');

      block.addEventListener('transitionend', () => {
        addRecordToConsole(`Cell ${idx + 1} Animation END`);
        if(idx === (blocks.length -1)) {
          addRecordToConsole("--- PROGRESS END ---");
          alert("Success");
          btn.removeAttribute('disabled');
          btn.innerHTML = "start";
          blocksWrapper.replaceWith(blocksWrapperClone);
        }
      })
    },100  * idx)
  })
})