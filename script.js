function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const profileImage = document.querySelector('#profile > img');

  if (html.classList.contains('light')) {
    profileImage.setAttribute('src', './assets/avatar.png');
    profileImage.setAttribute(
      'alt',
      'Foto de perfil de Leonardo Noro, sorrindo e usando moletom vermelho'
    );
  } else {
    profileImage.setAttribute('src', './assets/avatar-light.png');
    profileImage.setAttribute(
      'alt',
      'Foto de perfil de Leonardo Noro, sorrindo e usando moletom azul'
    );
  }
}
