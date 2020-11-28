const DetailsView = ({station}) => (
    station.Metros.map((mtr) => (
    <div>

          <div class="details">
          <div class= "dishName">
            {mtr.Destination}
            {mtr.DisplayTime}
          </div>
          <div class="detailsPrice">
            {/* {station.Buses}  */}
            <div>
               {/* {station.Trains} */}
            </div>
            <div>
                {/* {station.Tram} */}
            </div>
            <div>
                {/* {station.Ships} */}
            </div>
          </div>
        </div>
       
      </div>)));