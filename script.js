function abrirDialog(src) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  modalImg.src = src;
  modal.showModal();
}

function fecharDialog() {
  document.getElementById('modal').close();
}




