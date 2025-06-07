const Button = ({ children, href, primary, secondary, className }) => {
    const baseClasses = "px-8 py-3 rounded-md font-medium transition-colors";

    let buttonClasses = baseClasses;

    if (primary) {
        buttonClasses += " bg-orange-600 hover:bg-orange-700 text-white";
    } else if (secondary) {
        buttonClasses += " border border-white text-white hover:bg-white hover:text-gray-900";
    }

    if (className) {
        buttonClasses += " " + className;
    }

    return (
        <a href={href} className={buttonClasses}>
            {children}
        </a>
    );
};

export default Button;