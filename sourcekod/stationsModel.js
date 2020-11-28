class StationModel {
    constructor(guests = 2, dishes= [], currentDish= null) {
        this.currentStation;
      this.numberOfGuests = guests;
      this.subscribers = [];
      this.dishes = dishes;
      this.currentDish = currentDish;
    }
  
    setCurrentStation(siteId){
        this.currentStation= siteId;
        this.notifyObservers();
    }
  
  
    removeObserver(obs) {
      this.subscribers = this.subscribers.filter(() => obs);
    }
  
    setNumberOfGuests(x) {
      if (x <= 0) throw "Number of dinner guests cannot be zero or negative";
      this.numberOfGuests = x;
      this.notifyObservers();
    }
    getNumberOfGuests() {
      return this.numberOfGuests;
    }
  
    addToMenu(dish) {
      const isFound = this.dishes.find(
        (existedDish) => {
          if(existedDish.id == dish.id)
          throw Error("dish already exists");
      });
      
      this.dishes = [dish, ...this.dishes];
      this.notifyObservers();
    }
  
    getMenu() {
      return [...this.dishes];
    }
  
    removeFromMenu(dish){
      this.dishes = this.dishes.filter(existedDish => existedDish.id !== dish.id)
      this.notifyObservers();
  
    }
  
    setCurrentDish(id){
      this.currentDish = id;
      this.notifyObservers();
    }
  
    getcurrentDish(){
      return this.currentDish;
    }
  
    addObserver(callback) {
      this.subscribers = this.subscribers.concat(callback);
    }
  
    notifyObservers() {
      try {
        this.subscribers.forEach((callback) => {
          callback();
        });
      } catch (err) {
        console.error("Error ", err, callback);
      }
    }
  }
  