function Show({hash, children}){  
    const [, setRoute]= React.useState(window.location.hash);
   const handleHash = () => setRoute(window.location.hash);

    React.useEffect(()=> {
      window.addEventListener("hashchange", 
    handleHash)
    return () => window.removeEventListener("hashchange", handleHash);}
, []); 
    return hash===window.location.hash? children : false;
 }