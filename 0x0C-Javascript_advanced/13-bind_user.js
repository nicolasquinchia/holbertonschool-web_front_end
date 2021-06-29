let user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Ialva',
    location: 'Telaviv',
    occupation: 'Engineer',
  };

  /**
   *  Binding + Closure
   * @param {*} welcomeString String to show as gretting
   */
  function logWelcomeUser(welcomeString) {
    console.log(
      `${welcomeString}, ${user.firstName}. Your occupation is: ${user.occupation}`
    );
  }

let bindLogWelcomeUser = logWelcomeUser.bind(user);

logWelcomeUser('Welcome');
