const $btnSignIn = document.querySelector('.sign-in-btn'),
      $btnSignup = document.querySelector('.sign-up-btn'),
      $signUp = document.querySelector('.sign-up'),
      $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target == $btnSignup) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});