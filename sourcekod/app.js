const detailsNav = [() => (window.location.hash = "details"), "details"]


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

            <div className="search debug"><Details model={model} /></div>

        </div>


    );