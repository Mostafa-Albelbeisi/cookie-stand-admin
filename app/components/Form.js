import React from 'react';
import { useState } from 'react';

export default function Form() {

    const [Location, setLocation] = useState("")
    const [Minimum, setMinimum] = useState("")
    const [Maximum, setMaximum] = useState("")
    const [sale, setSale] = useState("")

    const [resultState, setResult] = useState([])

    const locationHandleChange = (e) => {
        setLocation(e.target.value);
    }

    const minimumHandleChange = (e) => {
        setMinimum(e.target.value);
    }

    const maximumHandleChange = (e) => {
        setMaximum(e.target.value);
    }

    const saleHandleChange = (e) => {
        setSale(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const info = {
            "location": Location,
            "minimum": Minimum,
            "maximum": Maximum,
            "sale": sale,

        }
        setResult([...resultState, info])

    }





    return (
        <>
            <div className=''>
                <form onSubmit={onSubmitHandler} className="">

                    <section className="max-w-md mx-auto bg-[#C69749] rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
                        <section className="relative">
                            <section>
                                <label className='ml-7 font-medium'>Location</label>
                                <input
                                    onInput={locationHandleChange}
                                    autoComplete='off'
                                    id="location"
                                    name="location"
                                    type='text'
                                    placeholder="Location"
                                    className=" m-6 py-2 px-3 border rounded-lg w-96 text-left"
                                />
                            </section>

                            <section className='mx-auto'>
                                <label className='m-16 px-3 py-2 w-64 font-medium'>Minimum customer</label>
                                <input
                                    onInput={minimumHandleChange}
                                    autoComplete="off"
                                    id='minimum'
                                    name='minimum'
                                    type='number'
                                    placeholder="Minimum customer per hour"
                                    className="m-6 rounded-lg border px-3 py-2 shadow-sm w-64 "
                                />
                                <label className='m-16 px-3 py-2 w-64 font-medium'>Maximum customer</label>
                                <input
                                    onInput={maximumHandleChange}
                                    autoComplete="off"
                                    id='maximum'
                                    name='maximum'
                                    type='number'
                                    placeholder="Maximum customer per hour"
                                    className="m-6 rounded-lg border px-3 py-2 shadow-sm w-64"
                                />


                                <label className='m-16 px-3 py-2 w-64 font-medium'>Maximum customer</label>
                                <input
                                    onInput={saleHandleChange}
                                    autoComplete="off"
                                    id='sale'
                                    name='sale'
                                    type='text'
                                    placeholder="Average cookie per sale"
                                    className="m-6 rounded-lg border px-3 py-2  w-64"
                                />


                            </section>
                            <section className='text-center py-2'>

                                <button className="bg-[#815B5B] hover:bg-[#9F8772] w-16 border border-[#F0EBCE] h-8 rounded-lg text-white text-center">Create</button>

                            </section>
                        </section>
                    </section>
                </form>

                <section>
                    {resultState.map((data) => {
                        return (
                            <div className='max-w-md mx-auto md:max-w-2xl'>
                                <p className='text-center my-10 border border-xl rounded-2xl bg-[#FFD372] font-medium'>{JSON.stringify(data)}</p>
                            </div>
                        )
                    }
                    )}

                </section>

            </div>
        </>
    )
}