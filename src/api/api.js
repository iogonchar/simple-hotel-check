export const getHotels = (location, checkInDate, checkOutDate) => {
  return fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}&limit=10`, {
    method: 'GET',
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}
