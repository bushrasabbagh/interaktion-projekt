class StationModel {
    constructor(guests = 2, trips= [], currentDish= null) {
        this.currentStation;
      this.numberOfGuests = guests;
      this.subscribers = [];
      this.trips = trips;
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
  
    addToList(trip) {
      const isFound = this.trips.find(
        (existedTrip) => {
          if(existedTrip.Name == trip.Name)
          throw Error("place already exists");
      });
      
      this.trips = [trip, ...this.trips];
      this.notifyObservers();
    }
  
    getList() {
      return [...this.trips];
    }
  
    removeFromList(trip){
      this.trips = this.trips.filter(existedTrip => existedTrip.Name !== trip.Name)
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
  