

function distance(lon1, lat1, lon2, lat2) {

  const R = 6371; // Radius of the earth in km
  console.log(`longitude 1: ${lon1}`)
  console.log(`latitude 1: ${lat1}`)
  console.log(`longitude 2: ${lon2}`)
  console.log(`latitude2: ${lat2}`)
  console.log(lat1)
  console.log(lon2)
  console.log(lat2)
  const dLat = toRad(lat2-lat1)
  var dLon = toRad(lon2-lon1); 
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const d = R * c; // Distance in km
  return d;
}
function toRad(Value) {
  /** Converts numeric degrees to radians */
  return Value * Math.PI / 180;
}
export default distance

