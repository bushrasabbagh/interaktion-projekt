function Details({model}) {

    const currentStation= useModelProp(model, "currentStation");

    const [promise, setPromise] = React.useState();
    React.useEffect(
        () => setPromise(SearchModel.searchTrip({siteId: currentStation})), [currentStation]
    );

    
    const [data, error] = usePromise(promise);
        // const guests = useModelProp(model, "numberOfGuests");
        // // const dishAdded= useModelProp(model, "currentDish")
        // const menu= useModelProp(model, "dishes");
        // const isDishInMenu = menu.find(x => x.id== currentDish);

    return promiseNoData(promise, data, error) ||
        h(DetailsView, {
            station: data
            // dishAdded: dish => {model.addToMenu(dish);addNav()},
           
        }

            /* TODO promise result*/
        );
}