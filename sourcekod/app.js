const App = ({model}) => 
    (
         <div className="flexParent">
            <div className="search debug"><Search model={model} /></div>
            <div className="search debug"><Details model={model} /></div>
            
        </div>
    );