const Icon = ({ icon } : {icon:any}) => {
    return (
    <div className="icon group-hover:bg-transparent group-hover:text-white">
            {icon}
        </div>
    );
};

export default Icon;