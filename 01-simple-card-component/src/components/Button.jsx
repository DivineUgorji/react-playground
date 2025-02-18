import PropTypes from "prop-types";
function Button({ children, icon, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {icon && <img className="btn-icon" src={icon} alt="icon" />}
      {children}
    </button>
  );
}

// ✅ Define prop types
Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
