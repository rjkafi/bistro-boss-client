const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-4">
            <h5 className="text-orange-600 text-xl mb-3">---- {subHeading} -----</h5>
            <h3 className="text-black text-3xl
            border-y-2 py-4 font-bold">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
