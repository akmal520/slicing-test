import React from 'react';

const Testimonial = () => {
    return (
        <section className='container mx-auto py-20'>
            <div>
                <h1 className='text-center text-4xl text-primary font-medium font-rubik mb-7 capitalize'>What Political Figure Say</h1>
                <p className='text-secondary text-base font-normal font-rubik px-72 leading-8 text-center'>These are the stories of political figure who have joined us with great pleasure when using this crazy feature.</p>
            </div>

            <div className='mt-20 testi overflow-x-auto'>
                <div className='grid grid-cols-3 gap-36'>
                    <div className='card w-[400px] h-[230px] rounded-xl p-7 border hover:border-[#2161D5] hover:shadow-md transition'>
                        <div className='flex items-center gap-4 mb-4'>
                            <img src="/images/politic-1.png" alt="..." className='w-[50px] h-[50px] object-cover rounded-full' />
                            <div>
                                <h1 className='text-primary text-lg font-medium font-rubik capitalize'>Airlangga hartanto</h1>
                                <p className='text-secondary text-sm font-normal font-rubik'>Menteri Koordinator dan Perekonomian RI</p>
                            </div>
                        </div>
                        <p className='text-primary text-base font-normal font-rubik leading-7'>
                            Saya minta kepada segenap pengurus DPD, provinsi, kabupten dan kota, untuk kita harus memiliki roadmap 2024. Di tahun melakukan penggalangan opini masyarakat
                        </p>
                    </div>

                    <div className='card w-[400px] h-[230px] rounded-xl p-7 border hover:border-[#2161D5] hover:shadow-md transition'>
                        <div className='flex items-center gap-4 mb-4'>
                            <img src="/images/politic-2.png" alt="..." className='w-[50px] h-[50px] object-cover rounded-full' />
                            <div>
                                <h1 className='text-primary text-lg font-medium font-rubik capitalize'>Jokowi Dodo</h1>
                                <p className='text-secondary text-sm font-normal font-rubik'>Presiden RI</p>
                            </div>
                        </div>
                        <p className='text-primary text-base font-normal font-rubik leading-7'>
                            Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan
                        </p>
                    </div>

                    <div className='card w-[400px] h-[230px] rounded-xl p-7 border hover:border-[#2161D5] hover:shadow-md transition'>
                        <div className='flex items-center gap-4 mb-4'>
                            <img src="/images/politic-3.png" alt="..." className='w-[50px] h-[50px] object-cover rounded-full' />
                            <div>
                                <h1 className='text-primary text-lg font-medium font-rubik capitalize'>Puan Maharani</h1>
                                <p className='text-secondary text-sm font-normal font-rubik'>Ketua DPR dan Fraksi PDI Perjuangan</p>
                            </div>
                        </div>
                        <p className='text-primary text-base font-normal font-rubik leading-7'>
                            Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan masyarakat ketikaproses demokratisasi berlangsung.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;