import React from 'react';
import { useState } from 'react';
import ReportTable from './ReportTable'


export default function Form() {


    const [userInput, setUserInput] = useState({
        Location: "",
        Max: 0,
        Min: 0,
        Average: 0,
      });
    
      const [resultState, setResultState] = useState([]);
    
      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInput((prev) => {
          return { ...prev, [name]: value };
        });
      };
    
      const onSubmitHandler = (e) => {
        e.preventDefault();
    
        setResultState([...resultState, userInput]);
      };





    return (
        <>
            <div className=''>
                <form onSubmit={onSubmitHandler} className="">

                    <section className="max-w-md mx-auto bg-[#C69749] rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
                        <section className="relative">
                            <section>
                                <label className='ml-7 font-medium'>Location</label>
                                <input
                                    onInput={handleChange}
                                    autoComplete='off'
                                    id="location"
                                    name="Location"
                                    type='text'
                                    placeholder="Location"
                                    className=" m-6 py-2 px-3 border rounded-lg w-96 text-left"
                                />
                            </section>

                            <section className='mx-auto'>
                                <label className='m-10 px-3 py-2 w-64 font-medium'>Minimum customer</label>
                                <input
                                    onInput={handleChange}
                                    autoComplete="off"
                                    id='minimum'
                                    name='minimum'
                                    type='number'
                                    placeholder="Minimum customer per hour"
                                    className="rounded-lg border px-3 py-2 shadow-sm w-64 "
                                />
                                <label className='m-10 px-3 py-2 w-64 font-medium'>Maximum customer</label>
                                <input
                                    onInput={handleChange}
                                    autoComplete="off"
                                    id='maximum'
                                    name='maximum'
                                    type='number'
                                    placeholder="Maximum customer per hour"
                                    className="rounded-lg border px-3 py-2 shadow-sm w-64"
                                />


                                <label className='m-10 px-3 py-2 w-64 font-medium'>Average cookie per sale</label>
                                <input
                                    onInput={handleChange}
                                    autoComplete="off"
                                    id='sale'
                                    name='sale'
                                    type='text'
                                    placeholder="Average cookie per sale"
                                    className="rounded-lg border px-3 py-2  w-64"
                                />


                            </section>
                            
                            <section className='text-center py-2'>

                                <button className="bg-[#815B5B] hover:bg-[#9F8772] w-16 border border-[#F0EBCE] h-8 rounded-lg text-white text-center">Create</button>

                            </section>
                        </section>
                    </section>
                </form>

                {/* <section>
                    {resultState.length > 0 &&
                    resultState.map((data) => {
                        return (
                            <div className='max-w-md mx-auto md:max-w-2xl'>
                                <p className='text-center my-10 border border-xl rounded-2xl bg-[#FFD372] font-medium'>{JSON.stringify(data)}</p>
                            </div>
                        )
                    }
                    )}

                </section> */}
                <section className="w-full text-center shadow-lg shadow-black-50 text-xl bg-[#FFD372] text-[#EFE2B2] mt-16 py-10">
                    {resultState.length > 0 && <ReportTable
                        report={resultState}
                    />}
                    {resultState.length == 0 && <h2 className='text-black font-medium'>No Cookie Stands Available</h2>}

                </section>
            </div>
        </>
    )
}