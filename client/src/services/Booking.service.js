import axios from 'axios'

class BookingService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/booking`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    saveBooking(bookingData) {
        return this.api.post('/saveBook', bookingData)
    }

    delete(booking_id, bookingData) {
        return this.api.post(`/delete/${booking_id}`, bookingData)
    }

    propertyBooking(property_id, bookingData) {
        return this.api.get(`/${property_id}`, bookingData)
    }
}



const bookingService = new BookingService()

export default bookingService