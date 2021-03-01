class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    let stringArray = string.split(' ');
    let newArray = [];

    newArray.push(this.capitalize(stringArray[0]));

    for(let i = 1; i < stringArray.length; i++) {
      switch(stringArray[i]){
          case 'the':
          case 'a':
          case 'an':
          case 'but':
          case 'of':
          case 'and':
          case 'for':
          case 'at':
          case 'by':
          case 'from':
            newArray.push(stringArray[i]);
            break;
          default:
            newArray.push(this.capitalize(stringArray[i]));
            break;
      }
    }

    return newArray.join(' ');
  }
}