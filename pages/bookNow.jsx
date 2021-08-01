import React from 'react'
import Form from '../components/BookNow/form'
import FormDetails from '../components/BookNow/formDetails'

const BookNow = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    <div className="" style={{backgroundColor:'#f9ea8f'}}>
                        <FormDetails />
                    </div>
                    <div className="">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookNow
