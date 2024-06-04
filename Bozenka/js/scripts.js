function setBackgroundImage() {
    /*  
    Sets background image on startup.
   */
    const backgroundImages = [
      '001.jpg',
      '002.jpg',
      '004.png',
      '005.jpeg',
      '006.jpg',
      '007.jpg',
      '010.jpg',
      '011.jpg',
      '012.png',
      '013.png'
      // Add more background image filenames as needed
    ];
  
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const randomImage = backgroundImages[randomIndex];
    document.body.style.backgroundImage = `url('background/${randomImage}')`;
  }

 