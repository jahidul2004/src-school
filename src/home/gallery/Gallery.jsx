const Gallery = () => {
    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-center my-5 md:my-8 py-5 mx-2 md:mx-4 rounded-lg bg-gradient-to-r from-[#027afb]">
                ফটো গ্যালারি
            </h1>

            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img
                        src="https://i.ibb.co.com/DYd16TV/5680e4eb-33ea-48b7-85a1-a2c75c66651f.jpg"
                        alt=""
                        className="object-cover w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
                    />
                    <img
                        alt=""
                        className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co.com/BCL8yTm/school2.jpg"
                    />
                    <img
                        alt=""
                        className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co.com/ZBfZjr7/school1.jpg"
                    />
                    <img
                        alt=""
                        className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co.com/q5FTsWz/c2acb51d-317b-4956-9b66-40d60f60ff4b.jpg"
                    />
                    <img
                        alt=""
                        className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co.com/SxtJdzT/school.jpg"
                    />
                    <img
                        alt=""
                        className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co.com/SxtJdzT/school.jpg"
                    />
                    <img
                        alt=""
                        className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co.com/q5FTsWz/c2acb51d-317b-4956-9b66-40d60f60ff4b.jpg"
                    />
                    <img
                        alt=""
                        className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co.com/DYd16TV/5680e4eb-33ea-48b7-85a1-a2c75c66651f.jpg"
                    />
                    <img
                        alt=""
                        className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src="https://i.ibb.co.com/SxtJdzT/school.jpg"
                    />
                    <img
                        src="https://i.ibb.co.com/DYd16TV/5680e4eb-33ea-48b7-85a1-a2c75c66651f.jpg"
                        alt=""
                        className="object-cover w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
                    />
                </div>
            </section>
        </div>
    );
};

export default Gallery;
