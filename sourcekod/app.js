const detailsNav = [() => (window.location.hash = "details"), ""]
const backToSearchNav = [() => (window.location.hash = "search"), ""]

function defRoute() {
    if (
        !["#search", "#details"].find(
            (Route) => Route == window.location.hash
        )
    )
        window.location.hash = "#search";
}
window.addEventListener("hashchange", defRoute());
const App = ({ model }) =>
    (
        <div className="flexParent">
            <Show class="search" hash="#search">
                <Search model={model} nav={detailsNav} />
            </Show>

            <Show class="details" hash="#details">
                
                    <Details model={model} back={backToSearchNav} />
                    
            </Show>
        </div>


    );